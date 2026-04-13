"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/data/portfolio";

export default function Projects() {
  const [activeProjectTab, setActiveProjectTab] = useState<"All" | "Web" | "App">("All");
  const filteredProjects = PROJECTS_DATA.filter(p => activeProjectTab === "All" || p.category === activeProjectTab);

  return (
    <motion.section 
      id="projects" 
      className="py-24 border-b border-border scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex justify-between items-start mb-12 flex-wrap gap-8 flex-col md:flex-row">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] mb-4 uppercase">My projects</h2>
            <p className="text-muted text-[1.1rem] max-w-[500px]">
              Selected projects demonstrating practical solutions and well-architected digital experiences.
            </p>
          </div>
          <div className="flex bg-card-bg border border-border rounded-full p-1">
            {["All", "Web", "App"].map((tab) => (
              <button
                key={tab}
                className={`px-8 py-2.5 rounded-full border-none font-medium text-[0.95rem] transition-all cursor-pointer ${activeProjectTab === tab ? "bg-accent text-white" : "bg-transparent text-muted hover:text-foreground"}`}
                onClick={() => setActiveProjectTab(tab as any)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-card-bg border border-card-border rounded-xl flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl group">
              <img src={project.img} alt={project.title} className="w-full h-[260px] object-cover bg-border" />
              <div className="p-6 flex flex-col gap-4 grow">
                <div className="flex justify-between items-center">
                  <span className="text-accent text-[0.8rem] font-bold uppercase tracking-[0.05em]">{project.category}</span>
                  <div className="flex gap-2">
                    <a href={project.link} className="w-9 h-9 rounded-full bg-[#18181b] border border-border/20 flex items-center justify-center text-muted transition-all cursor-pointer hover:text-white hover:bg-border/40" title="Live Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <a href={project.github} className="w-9 h-9 rounded-full bg-[#18181b] border border-border/20 flex items-center justify-center text-muted transition-all cursor-pointer hover:text-white hover:bg-border/40" title="GitHub Source">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mt-2 mb-1 uppercase">{project.title}</h3>
                <p className="text-muted text-[0.95rem] mb-4">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-[#18181b] text-muted rounded-full text-[0.8rem] font-medium border border-border/10">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
