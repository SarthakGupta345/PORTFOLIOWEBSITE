'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import LightRays from './LightRays';
import { useTheme } from 'next-themes';
import DotField from './DotField';
import FluidBackground from './Fluids/FluidBackground';
import LetterGlitch from './LetterGlitch';

export function SideNav({ config }: any) {
  const pathname = usePathname();
  const items = config?.sidebarNav || [];
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const path = usePathname();

  return items.length ? (
    <div className="relative w-full h-full py-6 pl-8 pr-4 overflow-auto no-scrollbar lg:py-10">

      {/* BACKGROUND LAYER: SideRays pinned to the sidebar background boundary */}
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
        path == '/' && <FluidBackground />
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
      {
        path == '/skills-tools' && <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-70 dark:opacity-40">
          <LightRays
            // Light direction
            raysOrigin="top-left"

            // Softer colors
            raysColor={isDark ? "#8B5CF6" : "#E5E7EB"}

            // Very slow movement
            raysSpeed={0.25}

            // Less intense rays
            lightSpread={0.55}
            rayLength={3.2}

            // Almost static
            followMouse={true}
            mouseInfluence={0.01}

            // Minimal texture
            noiseAmount={0.008}
            distortion={0.03}

            className="w-full h-full"

            pulsating={false}

            // Smooth fade
            fadeDistance={2.4}

            // Lower color intensity
            saturation={0.35}
          />
        </div>
      }


      {/* FOREGROUND NAVIGATION CONTENT LAYER */}
      <div className="relative z-10 flex flex-col gap-6">
        {items.map((item: any, index: any) => (
          <div key={index} className="flex flex-col gap-1">
            <h4 className="rounded-md px-2 py-1 text-sm font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              {item.title}{' '}
              {item.label && (
                <span className="ml-2 rounded-md bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs font-normal leading-none text-neutral-900 dark:text-neutral-300 border border-neutral-200/40 dark:border-neutral-700/40">
                  {item.label}
                </span>
              )}
            </h4>
            {item?.items?.length && (
              <DocsNavItems items={item.items} pathname={pathname} />
            )}
          </div>
        ))}
      </div>

    </div>
  ) : null;
}

function DocsNavItems({
  items,
  pathname,
}: {
  items: any;
  pathname: string | null;
}) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
      {items.map((item: any, index: any) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'group relative flex h-8 w-full items-center rounded-lg px-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-150',
              item.disabled && 'cursor-not-allowed opacity-60',
              pathname === item.href
                ? 'bg-neutral-100 dark:bg-neutral-800 font-medium text-neutral-950 dark:text-neutral-50 shadow-sm'
                : 'font-normal'
            )}
            target={item.external ? '_blank' : ''}
            rel={item.external ? 'noreferrer' : ''}
          >
            <span className="relative z-10">{item.title}</span>
            {item.label && (
              <span className="ml-2 rounded-md bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 text-xs leading-none text-neutral-900 dark:text-neutral-400">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              'flex w-full cursor-not-allowed items-center rounded-md p-2 text-neutral-400 dark:text-neutral-600 hover:underline',
              item.disabled && 'cursor-not-allowed opacity-60'
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null;
}