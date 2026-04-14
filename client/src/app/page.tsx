"use client";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import CompetitiveProgramming from "@/components/sections/CompetitiveProgramming";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <CompetitiveProgramming />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
