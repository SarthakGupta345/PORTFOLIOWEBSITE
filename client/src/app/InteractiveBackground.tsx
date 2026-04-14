"use client";
import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "./ThemeProvider";

// ── Blob class ──
interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseX: number;
  baseY: number;
}

const BLOB_COLORS_LIGHT = [
  "rgba(168, 85, 247, 0.08)",   // purple
  "rgba(139, 92, 246, 0.07)",   // violet
  "rgba(217, 70, 239, 0.06)",   // fuchsia
  "rgba(99, 102, 241, 0.06)",   // indigo
  "rgba(236, 72, 153, 0.05)",   // pink
  "rgba(168, 85, 247, 0.07)",   // purple again
  "rgba(79, 70, 229, 0.05)",    // deep indigo
  "rgba(192, 132, 252, 0.06)",  // light purple
];

function createBlobs(w: number, h: number): Blob[] {
  const blobs: Blob[] = [];
  const count = 8;
  for (let i = 0; i < count; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    blobs.push({
      x,
      y,
      baseX: x,
      baseY: y,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 180 + Math.random() * 220,
      color: BLOB_COLORS_LIGHT[i % BLOB_COLORS_LIGHT.length],
    });
  }
  return blobs;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const { theme } = useTheme();

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const mouse = mouseRef.current;

    ctx.clearRect(0, 0, w, h);

    const blobs = blobsRef.current;
    for (const blob of blobs) {
      // ── Slow drifting (oil-in-water) ──
      blob.x += blob.vx;
      blob.y += blob.vy;

      // Gentle pull back towards base position (so they don't wander off screen)
      const dxBase = blob.baseX - blob.x;
      const dyBase = blob.baseY - blob.y;
      blob.vx += dxBase * 0.00008;
      blob.vy += dyBase * 0.00008;

      // Damping — keeps the motion slow and smooth
      blob.vx *= 0.998;
      blob.vy *= 0.998;

      // ── Cursor repulsion ──
      const dxMouse = blob.x - mouse.x;
      const dyMouse = blob.y - mouse.y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      const repelRadius = blob.radius + 120;

      if (distMouse < repelRadius && distMouse > 0) {
        const force = (1 - distMouse / repelRadius) * 0.6;
        blob.vx += (dxMouse / distMouse) * force;
        blob.vy += (dyMouse / distMouse) * force;
      }

      // ── Soft bounce off edges ──
      if (blob.x < -blob.radius) blob.vx += 0.1;
      if (blob.x > w + blob.radius) blob.vx -= 0.1;
      if (blob.y < -blob.radius) blob.vy += 0.1;
      if (blob.y > h + blob.radius) blob.vy -= 0.1;

      // ── Draw blob ──
      const gradient = ctx.createRadialGradient(
        blob.x, blob.y, 0,
        blob.x, blob.y, blob.radius
      );
      gradient.addColorStop(0, blob.color);
      gradient.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  // ── Setup canvas & start animation ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      // Reinitialize blobs on resize
      blobsRef.current = createBlobs(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    // Track mouse (combine scroll offset for full-page coords)
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY,
      };
    };
    const handleScroll = () => {
      // Update y on scroll too so blobs react while scrolling
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      {/* Canvas for light theme oil-in-water blobs */}
      <canvas
        ref={canvasRef}
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
        style={{ position: "fixed", top: 0, left: 0 }}
      />

      {/* Dark theme – subtle cursor spotlight (keep existing) */}
      {theme === "dark" && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(500px circle at ${mouseRef.current.x}px ${mouseRef.current.y}px, rgba(168, 85, 247, 0.04), transparent 80%)`,
          }}
        />
      )}
    </div>
  );
}
