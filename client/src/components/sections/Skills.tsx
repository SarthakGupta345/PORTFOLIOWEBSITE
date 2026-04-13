"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS_DATA } from "@/data/portfolio";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"Front End" | "Back End" | "A.I">("Front End");

  return (
    <motion.section 
      id="skills" 
      className="py-24 border-b border-border scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] mb-12 text-center uppercase">Skills</h2>

        <div className="flex justify-center mb-12">
          <div className="flex bg-card-bg border border-border rounded-full p-1">
            {Object.keys(SKILLS_DATA).map((tab) => (
              <button
                key={tab}
                className={`px-8 py-2.5 rounded-full border-none font-medium text-[0.95rem] transition-all cursor-pointer ${activeTab === tab ? "bg-accent text-white" : "bg-transparent text-muted hover:text-foreground"}`}
                onClick={() => setActiveTab(tab as any)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS_DATA[activeTab].map((skill, index) => (
            <div key={index} className="bg-card-bg border border-card-border rounded-xl px-6 py-10 flex flex-col items-center justify-center transition-all hover:-translate-y-1 hover:shadow-xl">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className={`w-16 h-16 object-contain mb-6 ${skill.name === 'Express.js' || skill.name === 'Next.js' ? 'filter dark:invert' : ''}`} 
              />
              <h4 className="text-[1.1rem] font-semibold mb-3 text-foreground">{skill.name}</h4>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.dot }}></span>
                <span className="text-[0.85rem] text-muted font-medium">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
