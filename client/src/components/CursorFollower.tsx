"use client";
import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Slow, lazy spring so the glow trails behind the cursor
  const glowSpring = { damping: 30, stiffness: 50 };
  const glowX = useSpring(mouseX, glowSpring);
  const glowY = useSpring(mouseY, glowSpring);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[1] opacity-0 md:opacity-100"
      style={{
        x: glowX,
        y: glowY,
        translateX: "-50%",
        translateY: "-50%",
        width: 350,
        height: 350,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(168,85,247,0.12) 35%, transparent 70%)",
        filter: "blur(20px)",
      }}
    />
  );
}
