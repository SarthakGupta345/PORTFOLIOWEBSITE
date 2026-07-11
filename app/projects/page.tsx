"use client";

import Pager from '@/components/pager';
import Link from 'next/link';
import { ArrowUpRight, Github, Plus, Sparkles } from 'lucide-react';
import { projectOverviews } from '@/constants/projectOverview';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { useState } from 'react';

const ProjectsPage = () => {

  return (
    <div className="px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14 relative w-full min-h-screen font-sans antialiased">

      {/* FOREGROUND VIEW CONTENT LAYER */}
      <div className="relative z-10 w-full space-y-12">

        {/* Editorial Header Section */}
        <PageHeader>
          <PageHeaderHeading>Projects</PageHeaderHeading>
          <PageHeaderHeading className="mt-2 text-muted-foreground text-xl font-medium">
            A lot of ideas, but some are still under Private repos.
          </PageHeaderHeading>
        </PageHeader>

        {/* Stacked Project Items Grid Layout */}
        <div className="space-y-20 mb-16 mt-10">
          {projectOverviews.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Pagination component alignment */}
        <Pager
          prevHref="/about"
          nextHref="/skills-tools"
          prevTitle="About"
          nextTitle="Skills & Tools"
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: (typeof projectOverviews)[number] }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full max-w-6xl border-b border-neutral-200 dark:border-neutral-800 pb-12 mx-auto p-1 text-neutral-900 dark:text-neutral-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        

        {/* LEFT COLUMN: Media Showcase Frame */}
        <div className="lg:col-span-7 w-full group relative">
          {/* Active Perimeter Laser Lines */}
          <div className="absolute inset-0 rounded-2xl border border-transparent pointer-events-none z-30 transition-all duration-500 overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent -translate-x-full group-hover:animate-[project-line-top_1.5s_ease-in-out_infinite]" />
            <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-red-500 to-transparent -translate-y-full group-hover:animate-[project-line-right_1.5s_ease-in-out_0.35s_infinite]" />
            <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-red-500 to-transparent translate-x-full group-hover:animate-[project-line-bottom_1.5s_ease-in-out_0.7s_infinite]" />
            <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-red-500 to-transparent translate-y-full group-hover:animate-[project-line-left_1.5s_ease-in-out_1.05s_infinite]" />
          </div>

          {/* Card Canvas Container Wrapper */}
          <Link
            href={project.detailsLink || "#"}
            className="block w-full aspect-[13/10] bg-gradient-to-tr from-rose-100 via-orange-50 to-red-100 dark:from-red-950/40 dark:via-neutral-900 dark:to-rose-950/30 rounded-2xl p-6 border border-neutral-200/60 dark:border-neutral-800 shadow-sm flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 dark:from-white/5 to-transparent pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 relative z-10 max-w-md leading-tight">
              {project.slug}
            </h3>

            {/* Browser Mockup Panel Container */}
            <div className="w-full h-[85%] bg-white dark:bg-neutral-950 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden transform translate-y-2 group-hover:translate-y-1 transition-transform duration-300">
              {/* Simulated Operating System Header Bar */}
              <div className="h-7 bg-neutral-50 dark:bg-neutral-900 px-3 flex items-center gap-1.5 shrink-0 border-b border-neutral-200 dark:border-neutral-800">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <div className="h-3.5 w-40 bg-neutral-200 dark:bg-neutral-800 rounded-md mx-auto opacity-60 text-[9px] flex items-center justify-center text-neutral-400 font-mono">
                  localhost:3000
                </div>
              </div>

              {/* Main Image viewport area */}
              <div className="flex-1 bg-neutral-50 dark:bg-neutral-900/60 relative p-4 flex items-center justify-center">
                {project.image && !imgError ? (
                  <img
                    src={project.image}
                    alt={`${project.title} dashboard preview`}
                    loading="lazy"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top rounded-md border border-neutral-200 dark:border-neutral-800"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md p-4 bg-white dark:bg-neutral-950">
                    <div className="w-11 h-11 rounded-full bg-rose-50 dark:bg-rose-950/40 flex items-center justify-center text-rose-500 mb-2">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">{project.title} Console</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>

        {/* RIGHT COLUMN: Interactive Description Panels */}
        <div className="lg:col-span-5 flex flex-col justify-center py-1">
          <div className="flex items-center justify-between gap-3 mb-3">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              {project.title}
            </h2>
            <div className='flex items-center gap-2'>
              {project.links?.live && (
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-2.5 py-1 rounded-md transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <div className='size-1.5 rounded-full bg-red-600 animate-pulse'></div>
                  Live
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              )}

              {project.links?.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-2.5 py-1 rounded-md transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Github className="h-3 w-3 dark:fill-white fill-black" />
                  Code
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-4 font-normal">
            {project.tagline}
          </p>

          {/* Features List Bullet Map Layer */}
          {project.features && project.features.length > 0 && (
            <ul className="space-y-3.5 mb-6">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm">
                  <span className="shrink-0 mt-0.5 text-red-500 dark:text-red-400">
                    <Plus className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack Badges Map */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors duration-150"
                >
                  {tech.icon && (
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      loading="lazy"
                      className="h-3.5 w-3.5 object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  )}
                  {tech.name}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;