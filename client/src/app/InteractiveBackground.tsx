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
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.04), transparent 80%)`
        }}
      />
    </div>
  );
}
