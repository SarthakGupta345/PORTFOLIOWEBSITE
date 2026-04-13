"use client";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      {/* Crystal/Geometric Mesh for Light Theme */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${theme === 'light' ? 'opacity-30' : 'opacity-0'}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating Crystal Shards (Abstract) */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.04), transparent 80%)`
        }}
      />
      {/* Spotlight for light theme - slightly different color/intensity */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.02), transparent 80%)`
        }}
      />
    </div>
  );
}
