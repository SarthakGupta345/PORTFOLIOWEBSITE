"use client";
import { motion } from "framer-motion";
import { EXPERIENCE_DATA } from "@/data/portfolio";

export default function Experience() {
  return (
    <motion.section 
      id="experience" 
      className="py-24 border-b border-border scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] mb-4 text-center text-foreground uppercase">Professional Experience</h2>
        <p className="text-muted text-[1.1rem] mb-16 text-center">My journey through the tech industry.</p>

        <div className="relative max-w-[900px] mx-auto">
          {/* Main vertical line */}
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"></div>

          {EXPERIENCE_DATA.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex w-full mb-12 items-center`}
              >
                {/* Connect node */}
                <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-[14px] h-[14px] rounded-full bg-background border-2 border-accent shadow-[0_0_10px_rgba(168,85,247,0.8)] z-10"></div>
                
                {/* Timeline Card */}
                <div className={`w-[calc(100%-40px)] md:w-[45%] bg-[#120d1f] p-8 rounded-2xl border border-border/10 transition-all hover:border-accent/40 ml-auto ${isEven ? 'md:ml-0 md:mr-auto' : ''}`}>
                  <span className="inline-block px-3 py-1 bg-[#1a1429] text-accent font-semibold text-[0.8rem] rounded-full mb-4">
                    {exp.date}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase">{exp.role}</h3>
                  <h4 className="text-[1.05rem] font-medium text-muted mb-1">{exp.company}</h4>
                  <span className="text-[0.85rem] text-muted block mb-4">{exp.remote}</span>
                  <p className="text-muted text-[1rem] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
