"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { FiMusic } from "react-icons/fi";

import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";
import { ModeSwitcher } from "./mode-switcher";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { CommandMenu } from "./command-menu";
import { Icons } from "./icons";
import DotField from "./DotField";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import LetterGlitch from "./LetterGlitch";
import LightRays from "./LightRays";
import FluidBackground from "./Fluids/FluidBackground";

export function SiteHeader() {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(new Date());
  const audioRef = useRef<HTMLAudioElement>(null);
  const path = usePathname();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  // Format time as HH:MM:SS
  const formattedTime = time.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      {
        path == '/education' && <div className="absolute inset-0 z-0 pointer-events-none">
          <DotField
            dotRadius={isDark ? 1.2 : 1.8}
            dotSpacing={22}
            sparkle={isDark} // Sparkle active in dark mode only
            waveAmplitude={isDark ? 4 : 4}

            // ─── DYNAMIC THEME INTERACTION CONFIGS ───
            // Forces interaction and bulge to completely turn off (0) in light mode
            bulgeStrength={isDark ? 25 : 0}
            cursorRadius={isDark ? 300 : 0}
            glowRadius={isDark ? 150 : 0}
            cursorForce={isDark ? 0.03 : 0}

            bulgeOnly
            gradientFrom="#A855F7"
            gradientTo={isDark ? "#120F17" : "#FFFFFF"}
            glowColor={isDark ? "#120F17" : "#FFFFFF"}
            className="w-full h-full opacity-60 dark:opacity-70"
          />
        </div>
      }



      {
        path == '/skills-tools' && <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-70 dark:opacity-40">
          <LightRays
            // Changed to top-left so the sunlight realistically streams across diagonally
            raysOrigin="top-left"

            // Dynamic color: Premium deep neon purple for dark mode, ultra-soft warm morning sun yellow for light mode
            raysColor={isDark ? "#A855F7" : "grey"}

            // Slower speed makes the light drift peacefully like natural daylight
            raysSpeed={0.5}

            // Increased spread and length so the light feathers completely into the workspace borders
            lightSpread={0.9}
            rayLength={4.5}

            // Keeps mouse following extremely gentle so it doesn't distract the user reading your text
            followMouse={true}
            mouseInfluence={0.03}

            // Subtle noise gives the beams a gorgeous, dust-mote atmospheric texture
            noiseAmount={0.02}
            distortion={0.08}

            className="w-full h-full"
            pulsating={false}

            // Extends the fade distance so the beams elegantly evaporate into your dark/light theme fold
            fadeDistance={1.8}
            saturation={0.8}
          />
        </div>
      }

{
  path=='/about' && <FluidBackground/>
}

      {
        path == '/skills-tools' && <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-70 dark:opacity-40">
          <LightRays
            // Changed to top-left so the sunlight realistically streams across diagonally
            raysOrigin="top-right"

            // Dynamic color: Premium deep neon purple for dark mode, ultra-soft warm morning sun yellow for light mode
            raysColor={isDark ? "#A855F7" : "grey"}

            // Slower speed makes the light drift peacefully like natural daylight
            raysSpeed={0.5}

            // Increased spread and length so the light feathers completely into the workspace borders
            lightSpread={0.9}
            rayLength={4.5}

            // Keeps mouse following extremely gentle so it doesn't distract the user reading your text
            followMouse={true}
            mouseInfluence={0.03}

            // Subtle noise gives the beams a gorgeous, dust-mote atmospheric texture
            noiseAmount={0.02}
            distortion={0.08}

            className="w-full h-full"
            pulsating={false}

            // Extends the fade distance so the beams elegantly evaporate into your dark/light theme fold
            fadeDistance={1.8}
            saturation={0.8}
          />
        </div>
      }

      {
        path == '/dsa' && isDark && <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-15 dark:opacity-10">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
          />
        </div>
      }
      <div className="container-wrapper">
        <div className="container flex h-13 items-center">
          {/* Logo/Name - Left */}
          <MainNav />

          {/* Mobile Nav */}
          <MobileNav toggleMusic={toggleMusic} playing={playing} />

          {/* Desktop Nav - Right */}
          <div className="ml-auto flex items-center gap-2 md:gap-3">
            {/* Command Menu - Hidden on mobile */}
            <div className="hidden md:block">
              <CommandMenu />
            </div>

            {/* Live Clock */}
            <div className="hidden items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-3 py-1.5 backdrop-blur-sm lg:flex">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <span className="text-xs font-medium tabular-nums tracking-tight text-foreground">
                {formattedTime}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1">
              {/* Music Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                onClick={toggleMusic}
                title={playing ? "Pause Music" : "Play Music"}
              >
                <FiMusic
                  className={`h-[18px] w-[18px] transition-colors ${playing ? "text-pink-500" : "text-muted-foreground"
                    }`}
                />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                asChild
              >
                <div>
                  <ModeSwitcher className="h-[18px] w-[18px]" />
                </div>
              </Button>

              {/* GitHub */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full transition-all hover:scale-105 hover:bg-muted"
                asChild
              >
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.gitHub className="h-[18px] w-[18px]" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Persistent Audio */}
      <audio ref={audioRef} src="/music/theme.mp3" loop preload="auto" />
    </header>
  );
}