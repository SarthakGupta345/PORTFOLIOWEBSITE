"use client";

import DotField from '@/components/DotField';
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';
import { useTheme } from "next-themes";

const EducationPage = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative w-full min-h-screen px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14">

      {/* BACKGROUND LAYER: Isolated absolute container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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

      {/* FOREGROUND CONTENT LAYER: Stacked cleanly on top */}
      <div className="relative z-10 w-full flex flex-col justify-between min-h-screen">
        <div>
          <PageHeaderHeading>Education</PageHeaderHeading>

          <PageHeaderHeading className="mt-2 text-muted-foreground">
            I learned the theory in the classroom, but the real learning happens in the code editor.
          </PageHeaderHeading>

          <PageHeaderDescription>
            I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at MANIT. My academic journey has provided a strong foundation in computer science, data structures and algorithms, operating systems, database management systems, computer networks, and software engineering.
          </PageHeaderDescription>

          <PageHeaderDescription>
            Beyond academics, I enjoy building full-stack applications and exploring modern technologies such as React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, and cloud-based development. Every project helps me transform theoretical concepts into practical, real-world solutions.
          </PageHeaderDescription>


          {/* Timeline Container */}
          <div className="w-full mt-10 mb-12">
            <TimelineViewer data={education} />
          </div>
        </div>

        {/* Pagination Controls anchored at the bottom boundary */}
        <Pager
          prevHref="/experience"
          nextHref="/contact"
          prevTitle="Experience"
          nextTitle="Contact"
        />
      </div>

    </div>
  );
};

export default EducationPage;