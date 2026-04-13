"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-24 border-b border-border scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-2 uppercase">CHANDAN GUPTA</h3>
            <p className="text-muted text-[1.1rem] mb-6">Competitive Coder / Developer</p>
          </div>
          <div>
            <p className="text-muted text-[1.1rem] mb-4">
              I'm a Fullstack Developer with years of experience building scalable applications. Expert in React, Next.js, and Nest.js, I specialize in creating scalable digital solutions that bridge the gap between frontend and backend excellence.
            </p>
            <p className="text-muted text-[1.1rem] mb-4">
              My background in competitive programming has sharpened my ability to write extremely optimized algorithms and solve complex problems with efficient code.
            </p>
            <p className="text-muted text-[1.1rem]">
              Dedicated to delivering high-impact solutions that drive growth and enhance user experience. Based in India, working globally.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
