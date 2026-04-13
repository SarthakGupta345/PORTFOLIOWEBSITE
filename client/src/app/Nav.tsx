"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="nav">
      <div className="container nav-container" style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#home" className="logo" style={{ flexGrow: 1 }}>CK.</a>
        
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem' }}>
            <span style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem', border: '1px solid var(--border)', borderRadius: '100px', cursor: 'pointer' }}>
              🇬🇧 English
            </span>
            
            <button 
              onClick={toggleTheme} 
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--foreground)' }}
              title="Toggle Theme"
            >
              {theme === 'light' ? '☾' : '☼'}
            </button>
            
            <a href="#contact" className="btn btn-primary" style={{ background: '#a855f7', color: '#fff', borderColor: '#a855f7', borderRadius: '100px', padding: '0.5rem 1.5rem', fontWeight: 600 }}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
