"use client";

import { Icons } from '@/components/icons';
import LightRays from '@/components/LightRays';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { useTheme } from 'next-themes';

const mySkillsCategories = [
  {
    category: "Languages",
    skills: [
      { title: "JavaScript", icon: "javascript" },
      { title: "TypeScript", icon: "typescript" },
      { title: "Python", icon: "python" },
      { title: "HTML", icon: "html" },
      { title: "CSS", icon: "css" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { title: "ReactJS", icon: "react" },
      { title: "NextJS", icon: "nextjs" },
      { title: "NodeJS", icon: "nodejs" },
      { title: "ExpressJS", icon: "express" },
      { title: "Tailwind CSS", icon: "tailwind" },
      { title: "shadcn/ui", icon: "shadcn" },
      { title: "Material UI", icon: "MaterialUIIcon" },
      { title: "Framer Motion", icon: "FramerMotionIcon" },
      { title: "Redux", icon: "ReduxIcon" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { title: "MongoDB", icon: "mongodb" },
      { title: "Supabase", icon: "SupabaseIcon" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { title: "Git", icon: "git" },
      { title: "GitHub", icon: "gitHub" },
      { title: "Docker", icon: "docker" },
      { title: "Vercel", icon: "vercel" },
      { title: "Postman", icon: "postman" },
      { title: "npm", icon: "npm" },
    ],
  },
];

const SkillsToolsPage = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative w-full min-h-screen px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14">


      {/* FOREGROUND VIEW CONTENT LAYER */}
      <div className="relative z-10 w-full flex flex-col justify-between min-h-[calc(100vh-8rem)]">
        <div>
          <PageHeader>
            <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
            <PageHeaderHeading className="mt-2 text-muted-foreground">
              Learned by coding all night and debugging all day!
            </PageHeaderHeading>
            <PageHeaderDescription>
              As a full-stack Software Engineer, I specialize in building scalable
              web applications using modern technologies such as Next.js, React, and
              Tailwind CSS. I'm also expanding my expertise into DevOps and cloud
              practices to create efficient, maintainable, robust web solutions.
            </PageHeaderDescription>
          </PageHeader>

          {/* Categorized Skills Pill Component Sections */}
          <div className="w-full mx-auto space-y-8 my-10">
            {mySkillsCategories.map((group) => (
              <div key={group.category} className="space-y-3.5">
                <h3 className="text-base font-semibold tracking-tight text-neutral-800 dark:text-neutral-200">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2.5 items-center">
                  {group.skills.map((item) => {
                    const IconComponent = Icons[item.icon as keyof typeof Icons];
                    return (
                      <Badge
                        key={item.title}
                        className="
                                                    inline-flex items-center shadow-none
                                                    px-4 py-2 text-sm font-medium rounded-xl border
                                                    bg-white border-neutral-200 text-neutral-800 hover:bg-neutral-50/80
                                                    dark:bg-neutral-900/60 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800/80
                                                    transition-all duration-200 hover:scale-[1.02]
                                                "
                      >
                        {IconComponent && (
                          <span className="inline-flex shrink-0 mr-2">
                            {IconComponent({ className: 'size-4' })}
                          </span>
                        )}
                        {item.title}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Pager
          prevHref="/projects"
          nextHref="/experience"
          prevTitle="Projects"
          nextTitle="Experience"
        />
      </div>

    </div>
  );
};

export default SkillsToolsPage;