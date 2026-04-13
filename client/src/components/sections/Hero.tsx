"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function TypewriterEffect() {
  const fullText = "Full stack coder | Frontend | Backend | AI | Competitive Programmer";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (displayText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 60); // Typing speed
    }
    return () => clearTimeout(timer);
  }, [displayText]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-accent text-[1.25rem] mb-8 font-medium inline-flex items-center min-h-[2rem] flex-wrap justify-center"
    >
      <span>{displayText || "\u00A0"}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="w-[2px] h-[1.2em] bg-accent ml-1 inline-block"
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="py-24 scroll-mt-20 min-h-screen flex flex-col justify-center items-center text-center pt-[140px] md:pt-[180px] relative overflow-hidden bg-gradient-to-b from-transparent to-background/50 border-b border-border">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute top-1/3 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#a855f7]/15 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgoJPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iNCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjAxIi8+Cgk8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmZmZmIi8+Cjwvc3ZnPg==')]" />

      <div className="max-w-[1100px] mx-auto px-6 flex flex-col items-center relative z-10 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent border border-accent/20 bg-accent/5 backdrop-blur-sm rounded-full px-5 py-2 text-[0.85rem] font-medium mb-10 flex items-center gap-2.5"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          Available for Freelance & Contract
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[clamp(3.5rem,8vw,6.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 bg-gradient-to-br from-foreground via-foreground to-muted bg-clip-text text-transparent uppercase"
        >
          CHANDAN GUPTA
        </motion.h1>

        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-bold tracking-[-0.03em] mb-10 bg-gradient-to-r from-accent via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent"
        >
          Competitive Coder
        </motion.h2>

        <TypewriterEffect />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted text-[1.15rem] leading-relaxed max-w-[700px] mb-12"
        >
          I design high-performance systems and write extremely optimized algorithms designed to align technical precision with business growth. Building scalable backend logic and seamless frontend experiences.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4 flex-wrap justify-center mb-16"
        >
           <a href="#" className="bg-accent text-white border border-accent rounded-full px-8 py-3.5 font-semibold text-[1rem] hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            Resume <span className="text-[1.2rem] ml-1">↓</span>
          </a>
          <a href="#projects" className="bg-[#120d1f]/50 backdrop-blur-md text-foreground border border-border/20 rounded-full px-8 py-3.5 font-semibold text-[1rem] hover:bg-white/5 transition-all flex items-center gap-2">
            View My Work <span className="text-[1.2rem] ml-1">↗</span>
          </a>
        </motion.div>
        
         <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center mb-20"
        >
           <a href="#" className="w-12 h-12 rounded-full bg-[#120d1f]/50 backdrop-blur-md border border-border/20 flex items-center justify-center text-muted transition-all cursor-pointer hover:text-white hover:border-accent/50 hover:bg-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
           </a>
           <a href="#" className="w-12 h-12 rounded-full bg-[#120d1f]/50 backdrop-blur-md border border-border/20 flex items-center justify-center text-muted transition-all cursor-pointer hover:text-white hover:border-accent/50 hover:bg-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
           </a>
           <a href="mailto:ckarungu921@gmail.com" className="w-12 h-12 rounded-full bg-[#120d1f]/50 backdrop-blur-md border border-border/20 flex items-center justify-center text-muted transition-all cursor-pointer hover:text-white hover:border-accent/50 hover:bg-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
           </a>
        </motion.div>

        {/* Social Proof / Stats Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#120d1f]/30 backdrop-blur-md border border-border/10 rounded-[2rem] shadow-2xl relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none" />
           <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-extrabold text-white mb-2 tracking-tight">5+</span>
              <span className="text-muted text-sm font-semibold uppercase tracking-wider">Years Exp.</span>
           </div>
           <div className="flex flex-col items-center justify-center text-center border-l-0 md:border-l border-border/10">
              <span className="text-4xl font-extrabold text-white mb-2 tracking-tight">50+</span>
              <span className="text-muted text-sm font-semibold uppercase tracking-wider">Projects</span>
           </div>
           <div className="flex flex-col items-center justify-center text-center border-l-0 md:border-l border-border/10">
              <span className="text-4xl font-extrabold text-white mb-2 tracking-tight">2000+</span>
              <span className="text-muted text-sm font-semibold uppercase tracking-wider">CF Rating</span>
           </div>
           <div className="flex flex-col items-center justify-center text-center border-l-0 md:border-l border-border/10">
              <span className="text-4xl font-extrabold text-white mb-2 tracking-tight">100%</span>
              <span className="text-muted text-sm font-semibold uppercase tracking-wider">Delivery</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
