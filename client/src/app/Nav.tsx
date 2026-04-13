"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full py-6 bg-nav-bg backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center">
        <a href="#home" className="text-2xl font-extrabold tracking-tighter grow text-foreground transition-all hover:text-muted">CK.</a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-[0.9rem] font-medium text-muted hover:text-foreground transition-all">Home</a>
          <a href="#about" className="text-[0.9rem] font-medium text-muted hover:text-foreground transition-all">About</a>
          <a href="#skills" className="text-[0.9rem] font-medium text-muted hover:text-foreground transition-all">Skills</a>
          <a href="#projects" className="text-[0.9rem] font-medium text-muted hover:text-foreground transition-all">Projects</a>
          <a href="#experience" className="text-[0.9rem] font-medium text-muted hover:text-foreground transition-all">Experience</a>
          
          <div className="flex items-center gap-4 ml-4">
            <span className="text-[0.85rem] px-3 py-1.5 border border-border rounded-full cursor-pointer">
              🇬🇧 English
            </span>
            
            <button 
              onClick={toggleTheme} 
              className="bg-transparent border-none cursor-pointer text-[1.2rem] text-foreground"
              title="Toggle Theme"
            >
              {theme === 'light' ? '☾' : '☼'}
            </button>
            
            <a href="#contact" className="inline-block px-6 py-2 rounded-full font-semibold text-[0.95rem] border border-accent bg-accent text-white hover:bg-opacity-90 transition-all">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
