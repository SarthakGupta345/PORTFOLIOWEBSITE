"use client";
import { useEffect, useRef, useCallback } from "react";

interface SplashCursorProps {
  SIM_RESOLUTION?: number;
  DYE_RESOLUTION?: number;
  CAPTURE_RESOLUTION?: number;
  DENSITY_DISSIPATION?: number;
  VELOCITY_DISSIPATION?: number;
  PRESSURE?: number;
  PRESSURE_ITERATIONS?: number;
  CURL?: number;
  SPLAT_RADIUS?: number;
  SPLAT_FORCE?: number;
  SHADING?: boolean;
  COLOR_UPDATE_SPEED?: number;
  BACK_COLOR?: { r: number; g: number; b: number };
  TRANSPARENT?: boolean;
}

export default function SplashCursor({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1024,
  CAPTURE_RESOLUTION = 512,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = { r: 0.98, g: 0.98, b: 1.0 },
  TRANSPARENT = true,
}: SplashCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initFluid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const params = {
      SIM_RESOLUTION,
      DYE_RESOLUTION,
      CAPTURE_RESOLUTION,
      DENSITY_DISSIPATION,
      VELOCITY_DISSIPATION,
      PRESSURE,
      PRESSURE_ITERATIONS,
      CURL,
      SPLAT_RADIUS,
      SPLAT_FORCE,
      SHADING,
      COLOR_UPDATE_SPEED,
      BACK_COLOR,
      TRANSPARENT,
    };

    const pointers: {
      id: number;
      texcoordX: number;
      texcoordY: number;
      prevTexcoordX: number;
      prevTexcoordY: number;
      deltaX: number;
      deltaY: number;
      down: boolean;
      moved: boolean;
      color: { r: number; g: number; b: number };
    }[] = [];

    const mainPointer = {
      id: -1,
      texcoordX: 0,
      texcoordY: 0,
      prevTexcoordX: 0,
      prevTexcoordY: 0,
      deltaX: 0,
      deltaY: 0,
      down: false,
      moved: false,
      color: { r: 0.5, g: 0.2, b: 0.8 },
    };
    pointers.push(mainPointer);

    const gl = canvas.getContext("webgl2", { alpha: true, premultipliedAlpha: false }) ||
      canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const ext = {
      formatRGBA: { internalFormat: (gl as any).RGBA, format: (gl as any).RGBA },
      formatRG: { internalFormat: (gl as any).RGBA, format: (gl as any).RGBA },
      formatR: { internalFormat: (gl as any).RGBA, format: (gl as any).RGBA },
      halfFloatTexType: (gl as any).FLOAT,
      supportLinearFiltering: false,
    };

    // Check for WebGL2
    const isWebGL2 = !!(gl as WebGL2RenderingContext).texStorage2D;

    if (isWebGL2) {
      const gl2 = gl as WebGL2RenderingContext;
      const extColorBufferFloat = gl2.getExtension("EXT_color_buffer_float");
      const linearFiltering = gl2.getExtension("OES_texture_float_linear");
      ext.supportLinearFiltering = !!linearFiltering;

      if (extColorBufferFloat) {
        ext.formatRGBA = { internalFormat: gl2.RGBA16F, format: gl2.RGBA };
        ext.formatRG = { internalFormat: gl2.RG16F, format: gl2.RG };
        ext.formatR = { internalFormat: gl2.R16F, format: gl2.RED };
        ext.halfFloatTexType = gl2.HALF_FLOAT;
      } else {
        ext.formatRGBA = { internalFormat: gl2.RGBA, format: gl2.RGBA };
        ext.formatRG = { internalFormat: gl2.RGBA, format: gl2.RGBA };
        ext.formatR = { internalFormat: gl2.RGBA, format: gl2.RGBA };
        ext.halfFloatTexType = gl2.FLOAT;
      }
    } else {
      const halfFloat = (gl as WebGLRenderingContext).getExtension("OES_texture_half_float");
      const linearFiltering = (gl as WebGLRenderingContext).getExtension("OES_texture_half_float_linear");
      ext.supportLinearFiltering = !!linearFiltering;
      if (halfFloat) {
        ext.halfFloatTexType = halfFloat.HALF_FLOAT_OES;
      }
    }

    const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

    function compileShader(type: number, source: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(shader));
      }
      return shader;
    }

    function createProgram(vertSource: string, fragSource: string) {
      const program = gl!.createProgram()!;
      const vert = compileShader(gl!.VERTEX_SHADER, vertSource);
      const frag = compileShader(gl!.FRAGMENT_SHADER, fragSource);
      gl!.attachShader(program, vert);
      gl!.attachShader(program, frag);
      gl!.linkProgram(program);
      if (!gl!.getProgramParameter(program, gl!.LINK_STATUS)) {
        console.error(gl!.getProgramInfoLog(program));
      }
      return program;
    }

    function getUniforms(program: WebGLProgram) {
      const uniforms: Record<string, WebGLUniformLocation> = {};
      const count = gl!.getProgramParameter(program, gl!.ACTIVE_UNIFORMS);
      for (let i = 0; i < count; i++) {
        const info = gl!.getActiveUniform(program, i)!;
        uniforms[info.name] = gl!.getUniformLocation(program, info.name)!;
      }
      return uniforms;
    }

    class GLProgram {
      program: WebGLProgram;
      uniforms: Record<string, WebGLUniformLocation>;
      constructor(vs: string, fs: string) {
        this.program = createProgram(vs, fs);
        this.uniforms = getUniforms(this.program);
      }
      bind() { gl!.useProgram(this.program); }
    }

    const baseVertexShader = `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const splatShader = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
      }
    `;

    const advectionShader = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;
      void main () {
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
      }
    `;

    const divergenceShader = `
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `;

    const curlShader = `
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `;

    const vorticityShader = `
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;
      void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `;

    const pressureShader = `
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `;

    const gradientSubtractShader = `
      precision highp float;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `;

    const displayShader = params.SHADING
      ? `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
      }
    `
      : `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
      }
    `;

    const clearShader = `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;
      void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `;

    const splatProg = new GLProgram(baseVertexShader, splatShader);
    const advectionProg = new GLProgram(baseVertexShader, advectionShader);
    const divergenceProg = new GLProgram(baseVertexShader, divergenceShader);
    const curlProg = new GLProgram(baseVertexShader, curlShader);
    const vorticityProg = new GLProgram(baseVertexShader, vorticityShader);
    const pressureProg = new GLProgram(baseVertexShader, pressureShader);
    const gradSubProg = new GLProgram(baseVertexShader, gradientSubtractShader);
    const displayProg = new GLProgram(baseVertexShader, displayShader);
    const clearProg = new GLProgram(baseVertexShader, clearShader);

    // Fullscreen quad
    const blit = (() => {
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
      const indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(0);
      return (target: { fbo: WebGLFramebuffer; width: number; height: number } | null) => {
        if (target) {
          gl.viewport(0, 0, target.width, target.height);
          gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        } else {
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      };
    })();

    function createFBO(w: number, h: number, internalFormat: number, format: number, type: number, filter: number) {
      gl!.activeTexture(gl!.TEXTURE0);
      const texture = gl!.createTexture()!;
      gl!.bindTexture(gl!.TEXTURE_2D, texture);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, filter);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, filter);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
      gl!.texImage2D(gl!.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
      const fbo = gl!.createFramebuffer()!;
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, fbo);
      gl!.framebufferTexture2D(gl!.FRAMEBUFFER, gl!.COLOR_ATTACHMENT0, gl!.TEXTURE_2D, texture, 0);
      gl!.viewport(0, 0, w, h);
      gl!.clear(gl!.COLOR_BUFFER_BIT);
      const texelSizeX = 1.0 / w;
      const texelSizeY = 1.0 / h;
      return { texture, fbo, width: w, height: h, texelSizeX, texelSizeY, attach(id: number) { gl!.activeTexture(gl!.TEXTURE0 + id); gl!.bindTexture(gl!.TEXTURE_2D, texture); return id; } };
    }

    function createDoubleFBO(w: number, h: number, internalFormat: number, format: number, type: number, filter: number) {
      let fbo1 = createFBO(w, h, internalFormat, format, type, filter);
      let fbo2 = createFBO(w, h, internalFormat, format, type, filter);
      return {
        width: w, height: h,
        texelSizeX: fbo1.texelSizeX, texelSizeY: fbo1.texelSizeY,
        get read() { return fbo1; },
        set read(v) { fbo1 = v; },
        get write() { return fbo2; },
        set write(v) { fbo2 = v; },
        swap() { const t = fbo1; fbo1 = fbo2; fbo2 = t; },
      };
    }

    function getResolution(resolution: number) {
      let aspectRatio = gl!.drawingBufferWidth / gl!.drawingBufferHeight;
      if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
      const min = Math.round(resolution);
      const max = Math.round(resolution * aspectRatio);
      return gl!.drawingBufferWidth > gl!.drawingBufferHeight ? { width: max, height: min } : { width: min, height: max };
    }

    const simRes = getResolution(params.SIM_RESOLUTION);
    const dyeRes = getResolution(params.DYE_RESOLUTION);

    const simType = ext.halfFloatTexType;
    let velocity = createDoubleFBO(simRes.width, simRes.height, ext.formatRG.internalFormat, ext.formatRG.format, simType, filtering);
    let dye = createDoubleFBO(dyeRes.width, dyeRes.height, ext.formatRGBA.internalFormat, ext.formatRGBA.format, simType, filtering);
    let divergenceFBO = createFBO(simRes.width, simRes.height, ext.formatR.internalFormat, ext.formatR.format, simType, gl.NEAREST);
    let curlFBO = createFBO(simRes.width, simRes.height, ext.formatR.internalFormat, ext.formatR.format, simType, gl.NEAREST);
    let pressureFBO = createDoubleFBO(simRes.width, simRes.height, ext.formatR.internalFormat, ext.formatR.format, simType, gl.NEAREST);

    function splatPointer(pointer: typeof mainPointer) {
      const dx = pointer.deltaX * params.SPLAT_FORCE;
      const dy = pointer.deltaY * params.SPLAT_FORCE;
      splatProg.bind();
      gl!.uniform1i(splatProg.uniforms.uTarget, velocity.read.attach(0));
      gl!.uniform1f(splatProg.uniforms.aspectRatio, canvas!.width / canvas!.height);
      gl!.uniform2f(splatProg.uniforms.point, pointer.texcoordX, pointer.texcoordY);
      gl!.uniform3f(splatProg.uniforms.color, dx, dy, 0.0);
      gl!.uniform1f(splatProg.uniforms.radius, correctRadius(params.SPLAT_RADIUS / 100.0));
      blit(velocity.write);
      velocity.swap();

      gl!.uniform1i(splatProg.uniforms.uTarget, dye.read.attach(0));
      gl!.uniform3f(splatProg.uniforms.color, pointer.color.r, pointer.color.g, pointer.color.b);
      blit(dye.write);
      dye.swap();
    }

    function correctRadius(radius: number) {
      const aspectRatio = canvas!.width / canvas!.height;
      if (aspectRatio > 1) radius *= aspectRatio;
      return radius;
    }

    function step(dt: number) {
      gl!.disable(gl!.BLEND);

      // Curl
      curlProg.bind();
      gl!.uniform2f(curlProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(curlProg.uniforms.uVelocity, velocity.read.attach(0));
      blit(curlFBO);

      // Vorticity
      vorticityProg.bind();
      gl!.uniform2f(vorticityProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(vorticityProg.uniforms.uVelocity, velocity.read.attach(0));
      gl!.uniform1i(vorticityProg.uniforms.uCurl, curlFBO.attach(1));
      gl!.uniform1f(vorticityProg.uniforms.curl, params.CURL);
      gl!.uniform1f(vorticityProg.uniforms.dt, dt);
      blit(velocity.write);
      velocity.swap();

      // Divergence
      divergenceProg.bind();
      gl!.uniform2f(divergenceProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(divergenceProg.uniforms.uVelocity, velocity.read.attach(0));
      blit(divergenceFBO);

      // Clear pressure
      clearProg.bind();
      gl!.uniform1i(clearProg.uniforms.uTexture, pressureFBO.read.attach(0));
      gl!.uniform1f(clearProg.uniforms.value, params.PRESSURE);
      blit(pressureFBO.write);
      pressureFBO.swap();

      // Pressure solve
      pressureProg.bind();
      gl!.uniform2f(pressureProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(pressureProg.uniforms.uDivergence, divergenceFBO.attach(0));
      for (let i = 0; i < params.PRESSURE_ITERATIONS; i++) {
        gl!.uniform1i(pressureProg.uniforms.uPressure, pressureFBO.read.attach(1));
        blit(pressureFBO.write);
        pressureFBO.swap();
      }

      // Gradient subtract
      gradSubProg.bind();
      gl!.uniform2f(gradSubProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(gradSubProg.uniforms.uPressure, pressureFBO.read.attach(0));
      gl!.uniform1i(gradSubProg.uniforms.uVelocity, velocity.read.attach(1));
      blit(velocity.write);
      velocity.swap();

      // Advection velocity
      advectionProg.bind();
      gl!.uniform2f(advectionProg.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform2f(advectionProg.uniforms.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
      gl!.uniform1i(advectionProg.uniforms.uVelocity, velocity.read.attach(0));
      gl!.uniform1i(advectionProg.uniforms.uSource, velocity.read.attach(0));
      gl!.uniform1f(advectionProg.uniforms.dt, dt);
      gl!.uniform1f(advectionProg.uniforms.dissipation, params.VELOCITY_DISSIPATION);
      blit(velocity.write);
      velocity.swap();

      // Advection dye
      gl!.uniform2f(advectionProg.uniforms.dyeTexelSize, dye.texelSizeX, dye.texelSizeY);
      gl!.uniform1i(advectionProg.uniforms.uVelocity, velocity.read.attach(0));
      gl!.uniform1i(advectionProg.uniforms.uSource, dye.read.attach(1));
      gl!.uniform1f(advectionProg.uniforms.dissipation, params.DENSITY_DISSIPATION);
      blit(dye.write);
      dye.swap();
    }

    function render() {
      gl!.enable(gl!.BLEND);
      gl!.blendFunc(gl!.ONE, gl!.ONE_MINUS_SRC_ALPHA);
      displayProg.bind();
      gl!.uniform1i(displayProg.uniforms.uTexture, dye.read.attach(0));
      blit(null);
    }

    function HSVtoRGB(h: number, s: number, v: number) {
      const i = Math.floor(h * 6);
      const f = h * 6 - i;
      const p = v * (1 - s);
      const q = v * (1 - f * s);
      const t = v * (1 - (1 - f) * s);
      let r: number, g: number, b: number;
      switch (i % 6) {
        case 0: r = v; g = t; b = p; break;
        case 1: r = q; g = v; b = p; break;
        case 2: r = p; g = v; b = t; break;
        case 3: r = p; g = q; b = v; break;
        case 4: r = t; g = p; b = v; break;
        default: r = v; g = p; b = q; break;
      }
      return { r, g, b };
    }

    function generateColor() {
      const c = HSVtoRGB(Math.random(), 0.6, 0.8);
      // Softer pastel tones for light theme
      return { r: c.r * 0.6, g: c.g * 0.6, b: c.b * 0.6 };
    }

    function updatePointerMoveData(pointer: typeof mainPointer, posX: number, posY: number) {
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.texcoordX = posX / canvas!.width;
      pointer.texcoordY = 1.0 - posY / canvas!.height;
      pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
      pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
      pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
    }

    function correctDeltaX(delta: number) {
      const aspectRatio = canvas!.width / canvas!.height;
      if (aspectRatio < 1) delta *= aspectRatio;
      return delta;
    }

    function correctDeltaY(delta: number) {
      const aspectRatio = canvas!.width / canvas!.height;
      if (aspectRatio > 1) delta /= aspectRatio;
      return delta;
    }

    // Event listeners
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      const posX = e.clientX - rect.left;
      const posY = e.clientY - rect.top;
      updatePointerMoveData(pointers[0], posX, posY);
      pointers[0].moved = true;
      pointers[0].color = generateColor();
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const rect = canvas!.getBoundingClientRect();
      const posX = touch.clientX - rect.left;
      const posY = touch.clientY - rect.top;
      updatePointerMoveData(pointers[0], posX, posY);
      pointers[0].moved = true;
      pointers[0].color = generateColor();
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });

    // Resize
    const onResize = () => {
      canvas!.width = canvas!.clientWidth;
      canvas!.height = canvas!.clientHeight;
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let lastUpdateTime = Date.now();
    let animId = 0;

    function update() {
      const now = Date.now();
      let dt = (now - lastUpdateTime) / 1000;
      dt = Math.min(dt, 0.016667);
      lastUpdateTime = now;

      // Apply pointer splats
      for (const p of pointers) {
        if (p.moved) {
          p.moved = false;
          splatPointer(p);
        }
      }

      step(dt);
      render();
      animId = requestAnimationFrame(update);
    }

    update();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      canvas!.removeEventListener("mousemove", onMouseMove);
      canvas!.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
    };
  }, [SIM_RESOLUTION, DYE_RESOLUTION, CAPTURE_RESOLUTION, DENSITY_DISSIPATION, VELOCITY_DISSIPATION, PRESSURE, PRESSURE_ITERATIONS, CURL, SPLAT_RADIUS, SPLAT_FORCE, SHADING, COLOR_UPDATE_SPEED, BACK_COLOR, TRANSPARENT]);

  useEffect(() => {
    const cleanup = initFluid();
    return cleanup;
  }, [initFluid]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
