"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full py-5 bg-nav-bg backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        {/* Logo — far left */}
        <a href="#home" className="text-2xl font-extrabold tracking-tighter text-foreground transition-all hover:text-accent">
          CK.
        </a>

        {/* Nav links — center */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#home" className="text-[0.9rem] font-medium text-muted hover:text-foreground transition-all">Home</a>
          <a href="#about" className="text-[0.9rem] font-medium text-muted hover:text-foreground transition-all">About</a>
          <a href="#skills" className="text-[0.9rem] font-medium text-muted hover:text-foreground transition-all">Skills</a>
          <a href="#projects" className="text-[0.9rem] font-medium text-muted hover:text-foreground transition-all">Projects</a>
          <a href="#experience" className="text-[0.9rem] font-medium text-muted hover:text-foreground transition-all">Experience</a>
        </div>

        {/* Right — theme toggle, language, CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[0.85rem] px-3 py-1.5 border border-border rounded-full cursor-pointer text-muted hover:text-foreground transition-all">
            🇬🇧 EN
          </span>

          <button 
            onClick={toggleTheme} 
            className="bg-transparent border-none cursor-pointer text-[1.2rem] text-foreground hover:text-accent transition-all"
            title="Toggle Theme"
          >
            {theme === 'light' ? '☾' : '☼'}
          </button>

          <a href="#contact" className="inline-block ml-2 px-6 py-2 rounded-full font-semibold text-[0.9rem] border border-accent bg-accent text-white hover:opacity-90 transition-all">
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
