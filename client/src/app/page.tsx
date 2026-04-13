"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SKILLS_DATA = {
  "Front End": [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg", level: "Advanced", dot: "#3b82f6" }
  ],
  "Back End": [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", level: "Expert", dot: "#22c55e" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", level: "Advanced", dot: "#3b82f6" },
    { name: "Nest.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", level: "Advanced", dot: "#3b82f6" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", level: "Advanced", dot: "#3b82f6" }
  ],
  "A.I": [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", level: "Advanced", dot: "#3b82f6" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", level: "Intermediate", dot: "#eab308" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", level: "Intermediate", dot: "#eab308" }
  ]
};

const PROJECTS_DATA = [
  {
    title: "Ever Teams",
    category: "Web",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    description: "Ever Teams is an all-in-one work and project management platform that helps teams manage tasks, track time and productivity.",
    link: "#",
    github: "#",
    techStack: ["React", "Nest.js", "GraphQL"]
  },
  {
    title: "AdminAtete",
    category: "Web",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Company document archiving application that allows businesses to digitize, organize, and securely store their important documents for easy access and management.",
    link: "#",
    github: "#",
    techStack: ["React JS", "Express JS", "PostgreSQL", "Sequelize"]
  },
  {
    title: "Focus",
    category: "App",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    description: "App mobile for quotes.",
    link: "#",
    github: "#",
    techStack: ["React Native", "Next.js", "Nest.js", "PostgreSQL", "TypeORM", "Turbo"]
  },
  {
    title: "HIÜRD",
    category: "App",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    description: "HIÜRD is a local service marketplace that helps people hire and get hired for everyday tasks. Built on trust, local connections, and secure payments.",
    link: "#",
    github: "#",
    techStack: ["React Native", "Nest.js", "Stripe", "TypeORM", "Mobile"]
  }
];

const EXPERIENCE_DATA = [
  {
    role: "Full Stack Engineer",
    company: "Ever Technologies",
    date: "Aug 2023 - Present",
    remote: "Remote",
    description: "Worked as a Full-stack Developer (Nest.js, Next.js, React Native) on Ever Teams (Open Work and Project Management Platform) and Ever Gauzy (Open Business Management Platform - ERP/CRM/HRM/ATS/PM). Also involved in various client projects."
  },
  {
    role: "Full Stack Engineer",
    company: "AdminAtete",
    date: "Jan 2023 - Jul 2023",
    remote: "Remote",
    description: "Developed as a Full-stack Developer (Express.js, Next.js) for AdminAtete, a tech startup offering digital solutions for business services, including a document archiving application."
  },
  {
    role: "Frontend Developer",
    company: "CRES Startup",
    date: "Jun 2022 - Dec 2022",
    remote: "Remote",
    description: "Worked as a Full-stack Web Developer (Nest.js, Next.js) for a start-up and research center focused on creating web applications and artificial intelligence solutions for business management and data collection."
  },
  {
    role: "Backend Developer",
    company: "Attendacy GDA (KADEA)",
    date: "Feb 2022 - May 2022",
    remote: "On-site",
    description: "Worked as a Full-stack Developer (Express.js, React.js) for Attendacy GDA, an application to manage student attendance within a coding academy."
  },
  {
    role: "Frontend Developer",
    company: "One Stop Center",
    date: "Sep 2021 - Feb 2022",
    remote: "Remote",
    description: "Worked as a Frontend Developer (Angular) on a web application that manages parcel-related information and shares it across multiple company agencies."
  },
  {
    role: "Frontend Web Developer",
    company: "Buku My Class",
    date: "Dec 2018 - Sep 2021",
    remote: "Remote",
    description: "Worked as a Full Stack Developer (Frontend and Backend) and Frontend Developer (React.js) for Buku, an application enabling secondary school students to access class notes from anywhere."
  }
];

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

export default function Home() {
  const [activeTab, setActiveTab] = useState<"Front End" | "Back End" | "A.I">("Front End");
  const [activeProjectTab, setActiveProjectTab] = useState<"All" | "Web" | "App">("All");

  const filteredProjects = PROJECTS_DATA.filter(p => activeProjectTab === "All" || p.category === activeProjectTab);

  return (
    <main>
      {/* Hero Section */}
      {/* Hero Section */}
      <section id="home" className="py-24 scroll-mt-20 min-h-screen flex flex-col justify-center items-center text-center pt-[140px] md:pt-[180px] relative overflow-hidden bg-gradient-to-b from-transparent to-background/50 border-b border-border">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />
        <div className="absolute top-1/3 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#c084fc]/15 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />
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
            className="text-[clamp(3.5rem,8vw,6.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 bg-gradient-to-br from-foreground via-foreground to-muted bg-clip-text text-transparent"
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

      {/* About Section */}
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
              <h3 className="text-2xl font-semibold mb-2">Cedric Karungu</h3>
              <p className="text-muted text-[1.1rem] mb-6">Fullstack Developer/Project Manager</p>
            </div>
            <div>
              <p className="text-muted text-[1.1rem] mb-4">
                I'm a Fullstack Developer with 5+ years of experience building ERP, CRM, and AI-powered applications. Expert in React, Next.js, and Nest.js, I specialize in creating scalable digital solutions that bridge the gap between frontend and backend excellence.
              </p>
              <p className="text-muted text-[1.1rem] mb-4">
                As a Project Manager at Ever Technologies, I lead the development of business management platforms. My background with CRES and AdminAtete has sharpened my ability to align technical implementation with strategic business objectives across various industries.
              </p>
              <p className="text-muted text-[1.1rem]">
                Based in IT Management with a Fullstack specialization from Goma Digital Academy, I am a multilingual collaborator fluent in French, English, and Swahili. I am dedicated to delivering high-impact solutions that drive growth and enhance user experience.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-24 border-b border-border scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] mb-12 text-center">Skills</h2>
          
          <div className="flex justify-center mb-12">
            <div className="flex bg-card-bg border border-border rounded-full p-1">
              <button 
                className={`px-8 py-2.5 rounded-full border-none font-medium text-[0.95rem] transition-all cursor-pointer ${activeTab === "Front End" ? "bg-accent text-white" : "bg-transparent text-muted hover:text-foreground"}`}
                onClick={() => setActiveTab("Front End")}
              >
                Front End
              </button>
              <button 
                className={`px-8 py-2.5 rounded-full border-none font-medium text-[0.95rem] transition-all cursor-pointer ${activeTab === "Back End" ? "bg-accent text-white" : "bg-transparent text-muted hover:text-foreground"}`}
                onClick={() => setActiveTab("Back End")}
              >
                Back End
              </button>
              <button 
                className={`px-8 py-2.5 rounded-full border-none font-medium text-[0.95rem] transition-all cursor-pointer ${activeTab === "A.I" ? "bg-accent text-white" : "bg-transparent text-muted hover:text-foreground"}`}
                onClick={() => setActiveTab("A.I")}
              >
                A.I
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {SKILLS_DATA[activeTab].map((skill, index) => (
              <div key={index} className="bg-card-bg border border-card-border rounded-xl px-6 py-10 flex flex-col items-center justify-center transition-all hover:-translate-y-1 hover:shadow-xl">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className={`w-16 h-16 object-contain mb-6 ${skill.name === 'Express.js' || skill.name === 'Next.js' ? 'filter dark:invert' : ''}`}
                />
                <h4 className="text-[1.1rem] font-semibold mb-3 text-foreground">{skill.name}</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.dot }}></span>
                  <span className="text-[0.85rem] text-muted font-medium">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-24 border-b border-border scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex justify-between items-start mb-12 flex-wrap gap-8 flex-col md:flex-row">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] mb-4">My projects</h2>
              <p className="text-muted text-[1.1rem] max-w-[500px]">
                Selected projects demonstrating practical solutions and well-architected digital experiences.
              </p>
            </div>
            <div className="flex bg-card-bg border border-border rounded-full p-1">
              <button 
                className={`px-8 py-2.5 rounded-full border-none font-medium text-[0.95rem] transition-all cursor-pointer ${activeProjectTab === "All" ? "bg-accent text-white" : "bg-transparent text-muted hover:text-foreground"}`}
                onClick={() => setActiveProjectTab("All")}
              >
                All
              </button>
              <button 
                className={`px-8 py-2.5 rounded-full border-none font-medium text-[0.95rem] transition-all cursor-pointer ${activeProjectTab === "Web" ? "bg-accent text-white" : "bg-transparent text-muted hover:text-foreground"}`}
                onClick={() => setActiveProjectTab("Web")}
              >
                Web
              </button>
              <button 
                className={`px-8 py-2.5 rounded-full border-none font-medium text-[0.95rem] transition-all cursor-pointer ${activeProjectTab === "App" ? "bg-accent text-white" : "bg-transparent text-muted hover:text-foreground"}`}
                onClick={() => setActiveProjectTab("App")}
              >
                App
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-card-bg border border-card-border rounded-xl flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl group">
                <img src={project.img} alt={project.title} className="w-full h-[260px] object-cover bg-border" />
                <div className="p-6 flex flex-col gap-4 grow">
                  <div className="flex justify-between items-center">
                    <span className="text-accent text-[0.8rem] font-bold uppercase tracking-[0.05em]">{project.category}</span>
                    <div className="flex gap-2">
                       <a href={project.link} className="w-9 h-9 rounded-full bg-[#18181b] border border-border/20 flex items-center justify-center text-muted transition-all cursor-pointer hover:text-white hover:bg-border/40" title="Live Demo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                      <a href={project.github} className="w-9 h-9 rounded-full bg-[#18181b] border border-border/20 flex items-center justify-center text-muted transition-all cursor-pointer hover:text-white hover:bg-border/40" title="GitHub Source">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mt-2 mb-1">{project.title}</h3>
                  <p className="text-muted text-[0.95rem] mb-4">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#18181b] text-muted rounded-full text-[0.8rem] font-medium border border-border/10">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-24 border-b border-border scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] mb-4 text-center text-foreground">Professional Experience</h2>
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
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
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

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-24 scroll-mt-20 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16 flex flex-col items-center">
            {/* Ambient glow behind heading */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[100px] pointer-events-none -z-10" />
            
            <span className="px-4 py-1.5 rounded-full bg-[#1a1429] border border-accent/20 text-accent font-medium text-sm mb-6 inline-block">
              Get In Touch
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-[-0.02em] mb-4 text-foreground">Get In Touch</h2>
            <p className="text-muted text-[1.1rem]">Let's work together on your next project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 mb-24">
            {/* Left Column: Contact info cards */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#120d1f] border border-border/10 p-6 rounded-2xl flex flex-col gap-1 transition-all hover:border-accent/40">
                <div className="w-10 h-10 rounded-lg bg-[#1a1429] border border-accent/20 flex items-center justify-center text-accent mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </div>
                <h4 className="text-muted text-sm font-medium mb-0.5">Email</h4>
                <a href="mailto:ckarungu921@gmail.com" className="text-foreground font-semibold text-sm hover:text-accent transition-colors">ckarungu921@gmail.com</a>
              </div>

              <div className="bg-[#120d1f] border border-border/10 p-6 rounded-2xl flex flex-col gap-1 transition-all hover:border-accent/40">
                <div className="w-10 h-10 rounded-lg bg-[#1a1429] border border-accent/20 flex items-center justify-center text-accent mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <h4 className="text-muted text-sm font-medium mb-0.5">Phone</h4>
                <p className="text-foreground font-semibold text-sm">+243 970 509 466</p>
              </div>

              <div className="bg-[#120d1f] border border-border/10 p-6 rounded-2xl flex flex-col gap-1 transition-all hover:border-accent/40">
                <div className="w-10 h-10 rounded-lg bg-[#1a1429] border border-accent/20 flex items-center justify-center text-accent mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h4 className="text-muted text-sm font-medium mb-0.5">Availability</h4>
                <p className="text-foreground font-semibold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  Open to projects
                </p>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="bg-[#120d1f] border border-border/10 p-8 rounded-2xl h-full flex flex-col">
              <form className="flex flex-col gap-6 grow justify-between" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-muted text-xs font-medium uppercase tracking-wider">Name</label>
                    <input type="text" placeholder="Your Name" className="bg-[#090614] border border-border/10 rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-muted text-xs font-medium uppercase tracking-wider">Email</label>
                    <input type="email" placeholder="your@email.com" className="bg-[#090614] border border-border/10 rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-muted text-xs font-medium uppercase tracking-wider">Subject</label>
                  <input type="text" placeholder="Message Subject" className="bg-[#090614] border border-border/10 rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors w-full" />
                </div>
                <div className="flex flex-col gap-2 grow">
                  <label className="text-muted text-xs font-medium uppercase tracking-wider">Message</label>
                  <textarea placeholder="Your message here..." className="bg-[#090614] border border-border/10 rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors w-full resize-none grow min-h-[140px]"></textarea>
                </div>
                <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-2">
                  Send Message 
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </button>
              </form>
            </div>
          </div>

          </div>
      </motion.section>

      {/* Full Width Footer Area */}
      <footer className="w-full bg-[#090614] border-t border-border/10 pt-20 pb-8 mt-12 bg-gradient-to-b from-transparent to-[#04020a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_2fr] gap-12 mb-16">
            
            {/* Column 1 */}
            <div className="flex flex-col pr-6">
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">CK<span className="text-accent">.</span></h3>
              <p className="text-muted text-[0.95rem] leading-relaxed mb-8 max-w-[320px]">
                I build scalable full-stack systems with clean architecture, solid backend logic, and production-ready user experiences. Focused on code quality, maintainability, and real-world performance.
              </p>
              <div className="flex flex-col gap-3">
                <a href="mailto:ckarungu921@gmail.com" className="flex items-center gap-3 text-muted hover:text-white transition-colors text-[0.95rem] w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  ckarungu921@gmail.com
                </a>
                <p className="flex items-center gap-3 text-muted text-[0.95rem]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Kigali, Rwanda
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-muted hover:text-accent transition-colors text-[0.95rem]">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Featured Work</h4>
              <ul className="flex flex-col gap-3">
                {['AdminAtete', 'CRES Startup', 'KADEA Academy', 'Ever Technologies Projects', 'Buku My Class'].map(work => (
                  <li key={work}>
                    <a href="#" className="text-muted hover:text-white transition-colors text-[0.95rem]">{work}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col">
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-10">
                {['PostgreSQL', 'JavaScript', 'Web Application', 'RESTful API', 'Git', 'GitHub', 'Database', 'ExpressJS', 'TypeScript', 'Node.js', 'React Native', 'React', 'Redux', 'HTML5', 'CSS 3'].map(tech => (
                  <span key={tech} className="px-2.5 py-1 bg-[#1a1429]/50 border border-border/10 text-muted rounded text-[0.75rem] font-medium hover:border-accent/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              
              <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="#" className="text-muted hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="mailto:ckarungu921@gmail.com" className="text-muted hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </a>
              </div>
            </div>
            
          </div>

          {/* Sub Footer Area */}
          <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 relative">
             <p className="text-muted text-sm shrink-0">© 2026 Cédric Karungu. All rights reserved.</p>
             <p className="text-muted text-sm flex flex-wrap justify-center gap-2 md:gap-4 lg:pr-12 items-center">
                <span>Fullstack Software Engineer</span>
                <span className="hidden md:inline text-accent">•</span>
                <span>Open to Remote Opportunities</span>
             </p>
             
             {/* Scroll to Top Button */}
             <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="absolute right-0 top-6 md:-top-4 w-10 h-10 bg-accent hover:bg-accent/80 text-white rounded-full flex items-center justify-center transition-all shadow-[0_0_15px_rgba(168,85,247,0.5)] cursor-pointer hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
              </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
