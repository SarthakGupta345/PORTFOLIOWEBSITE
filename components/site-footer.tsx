"use client"
export const dynamic = "auto";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DotField from "./DotField";
import { useTheme } from "next-themes";
import LetterGlitch from "./LetterGlitch";
import LightRays from "./LightRays";

export function SiteFooter() {
  const path = usePathname();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <footer className="relative py-2 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
        path === '/skills-tools' && (
          // Lowered global opacities (opacity-30 / dark:opacity-15) so it functions beautifully as a subtle footer accent
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-30 dark:opacity-15">
            <LightRays
              // Securely anchored to shoot upward smoothly from the bottom center boundary
              raysOrigin="bottom-center"

              // Using soft semantic tones instead of solid heavy grey to make transitions clean
              raysColor={isDark ? "#8B5CF6" : "#E2E8F0"}

              // Ultra-slow speed turns it into a peaceful breathing ambient background aura
              raysSpeed={0.3}

              // Pushed layout limits up to maximums to make sure light blends seamlessly edge-to-edge
              lightSpread={1.0}
              rayLength={5.0}

              // Extremely low tracking calculation keeps mouse interactions ultra-soft
              followMouse={true}
              mouseInfluence={0.02}

              // Micro atmospheric grain
              noiseAmount={0.01}
              distortion={0.05}

              className="w-full h-full"
              pulsating={false}

              // Expanded fade distance means the rays feather completely before reaching the center of your page
              fadeDistance={2.5}
              saturation={0.5}
            />
          </div>
        )
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

        <div className="container flex flex-col items-center justify-center py-4 space-y-2">
          <div className="max-w-3xl text-xs leading-relaxed text-center sm:text-sm text-balance text-muted-foreground">
            <span className="block sm:inline">©2026</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">
              Built with{" "}
              <span className="font-medium text-foreground">Next.js</span>,{" "}
              <span className="font-medium text-foreground">shadcn/ui</span> and{" "}
              <span className="font-medium text-foreground">Tailwind CSS</span>
            </span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">
              and  Deployed with{" "}
              <span className="font-medium text-foreground">Vercel</span>
            </span>
          </div>
          <div className="text-xs text-center sm:text-sm text-muted-foreground">
            Developed by
            {" "}
            <Link
              href={siteConfig.links.githubProfile}
              target="_blank"
              rel="noreferrer"
              className="font-medium transition-colors text-primary hover:text-primary/80"
            >
              Chandan Gupta
            </Link>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}