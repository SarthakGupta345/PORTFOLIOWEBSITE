"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TimelineViewerData } from '@/types/TimelineViewer.types';

const TimelineViewer = ({ data }: { data: TimelineViewerData[] }) => {
  const containerRef = useRef<HTMLOListElement>(null);

  // Tracks the scroll progress of the timeline element within the screen viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] // Animates when timeline is in the middle of screen
  });

  // Maps scroll progress to a percentage height for the active foreground track indicator
  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Maps scroll progress to track the cursor point location position directly
  const yPositionTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <ol
      ref={containerRef}
      className="relative mb-10 border-neutral-200 dark:border-neutral-800 border-s-[2px] ml-3"
    >
      {/* ACTIVE TRACK HIGHLIGHT: Fills down with a color on scroll */}
      <motion.div
        style={{ height: heightTransform }}
        className="absolute top-0 left-0 -translate-x-[2px] w-[2px] bg-gradient-to-b from-blue-500 to-indigo-500 origin-top z-10"
      />

      {/* FLOATING SCROLL CURSOR WITH GLOW EFFECT */}
      <motion.div
        style={{ top: yPositionTransform }}
        className="absolute left-0 -translate-x-1/2 -ml-[1px] w-3 h-3 z-20"
      >
        {/* The Radial Glow Aura Layer */}
        <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500/60 dark:bg-blue-400/50 blur-[6px] scale-[2.5] animate-pulse pointer-events-none" />

        {/* The Core Solid Cursor Point */}
        <div className="absolute inset-0 w-full h-full rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-neutral-900 shadow-md" />
      </motion.div>

      {data.map((item, index) => {
        return (
          <li className="mb-12 ms-8 relative group" key={index}>

            {/* Stationary Milestone Node Circle */}
            <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 dark:bg-neutral-800 rounded-full -start-[35px] top-0.5 ring-4 ring-white dark:ring-neutral-900 z-10 transition-colors duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40">
              <svg
                className="w-2.5 h-2.5 text-neutral-500 dark:text-neutral-400 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>

            {/* Title Block */}
            <h3 className="flex items-center mb-1.5 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              {item.title}
              {item.latest && (
                <span className="bg-blue-100/70 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-md dark:bg-blue-950/50 dark:text-blue-400 ms-3 border border-blue-200/30 dark:border-blue-900/40">
                  Latest
                </span>
              )}
            </h3>

            {/* Date Badge */}
            <time className="block mb-3 text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              {item.date}
            </time>

            {/* Description Paragraph */}
            <p className="text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-2xl">
              {item.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
};

export default TimelineViewer;