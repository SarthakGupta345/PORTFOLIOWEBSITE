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
    github: "#"
  },
  {
    title: "Ever Gauzy Platform",
    category: "Web",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Open business management platform combining ERP, CRM, HRM, and projects in one system.",
    link: "#",
    github: "#"
  },
  {
    title: "Acho System",
    category: "Web",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    description: "A secure and sustainable payment and investment solution for all civil servants.",
    link: "#",
    github: "#"
  },
  {
    title: "HIÜRD",
    category: "App",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    description: "A local service marketplace that helps people hire and get hired for everyday tasks.",
    link: "#",
    github: "#"
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
      <section id="home" className="py-24 border-b border-border scroll-mt-20 min-h-screen flex flex-col justify-center items-center text-center pt-[100px]">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent border border-accent/20 rounded-full px-5 py-1.5 text-[0.85rem] font-semibold mb-10 inline-block"
          >
            Available for Freelance & Contract
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(3rem,8vw,6rem)] font-bold leading-none tracking-[-0.05em] mb-0"
          >
            CHANDAN GUPTA
          </motion.h1>

          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-[clamp(3rem,8vw,6rem)] leading-none font-extrabold tracking-[-0.05em] mb-8 bg-gradient-to-r from-accent to-[#c084fc] bg-clip-text text-transparent"
          >
            Competitive Coder
          </motion.h2>

          <TypewriterEffect />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted text-[1.15rem] max-w-[650px] mb-12"
          >
            I design high-performance systems and write extremely optimized algorithms designed to align technical precision with business growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4 flex-wrap justify-center mb-16"
          >
             <a href="#" className="bg-accent text-white border border-accent rounded-full px-8 py-3 font-semibold text-[0.95rem] hover:bg-opacity-90 transition-all flex items-center gap-2">
              Resume <span className="text-[1.2rem]">↓</span>
            </a>
            <a href="#projects" className="bg-transparent text-foreground border border-border rounded-full px-8 py-3 font-semibold text-[0.95rem] hover:bg-border transition-all flex items-center gap-2">
              View My Work <span className="text-[1.2rem]">❐</span>
            </a>
          </motion.div>
          
           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <a href="#" className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted transition-all cursor-pointer hover:text-foreground hover:bg-border text-[1.2rem] no-underline">⌨</a>
            <a href="#" className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted transition-all cursor-pointer hover:text-foreground hover:bg-border text-[1.2rem] no-underline">in</a>
            <a href="#" className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted transition-all cursor-pointer hover:text-foreground hover:bg-border text-[1.2rem] no-underline">✉</a>
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
                <img src={project.img} alt={project.title} className="w-full h-[240px] object-cover bg-border" />
                <div className="p-6 flex flex-col gap-4 grow">
                  <div className="flex justify-between items-center">
                    <span className="text-accent text-[0.8rem] font-bold uppercase tracking-[0.05em]">{project.category}</span>
                    <div className="flex gap-2">
                      <a href={project.link} className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted transition-all cursor-pointer hover:text-foreground hover:bg-border no-underline" title="Live Demo">↗</a>
                      <a href={project.github} className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-muted transition-all cursor-pointer hover:text-foreground hover:bg-border no-underline" title="GitHub Source">⌨</a>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mt-2 mb-1">{project.title}</h3>
                  <p className="text-muted text-[0.95rem]">{project.description}</p>
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
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] mb-4">Experience</h2>
          <p className="text-muted text-[1.1rem] mb-12">My journey through the tech industry.</p>
          <div className="max-w-[800px]">
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-1">Full Stack Engineer</h3>
              <h4 className="text-[1rem] font-medium text-muted mb-2">Ever Technologies</h4>
              <p className="text-muted text-[1.1rem]">Worked as a Full-stack Developer (Nest.js, Next.js, React Native) on Ever Teams (Open Work and Project Management Platform) and Ever Gauzy (Open Business Management Platform - ERP/CRM/HRM/ATS/PM). Also involved in various client projects.</p>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-1">Full Stack Engineer</h3>
              <h4 className="text-[1rem] font-medium text-muted mb-2">AdminAtete</h4>
              <p className="text-muted text-[1.1rem]">Developed as a Full-stack Developer (Express.js, Next.js) for AdminAtete, a tech startup offering digital solutions for business services, including a document archiving application.</p>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-1">Frontend Developer</h3>
              <h4 className="text-[1rem] font-medium text-muted mb-2">CRES Startup</h4>
              <p className="text-muted text-[1.1rem]">Worked as a Full-stack Web Developer (Nest.js, Next.js) for a start-up and research center focused on creating web applications and artificial intelligence solutions for business management and data collection.</p>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-1">Backend Developer</h3>
              <h4 className="text-[1rem] font-medium text-muted mb-2">Attendacy GDA (KADEA)</h4>
              <p className="text-muted text-[1.1rem]">Worked as a Full-stack Developer (Express.js, React.js) for Attendacy GDA, an application to manage student attendance within a coding academy.</p>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-1">Frontend Developer</h3>
              <h4 className="text-[1rem] font-medium text-muted mb-2">One Stop Center</h4>
              <p className="text-muted text-[1.1rem]">Worked as a Frontend Developer (Angular) on a web application that manages parcel-related information and shares it across multiple company agencies.</p>
            </div>
             <div className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-1">Frontend Web Developer</h3>
              <h4 className="text-[1rem] font-medium text-muted mb-2">Buku My Class</h4>
              <p className="text-muted text-[1.1rem]">Worked as a Full Stack Developer (Frontend and Backend) and Frontend Developer (React.js) for Buku, an application enabling secondary school students to access class notes from anywhere.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-24 scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] mb-4">Get In Touch</h2>
          <p className="text-muted text-[1.1rem] mb-12">Let's work together on your next project</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div>
              <h4 className="text-muted mb-2">Email</h4>
              <a href="mailto:ckarungu921@gmail.com" className="text-[1.2rem] font-semibold hover:text-muted transition-colors">ckarungu921@gmail.com</a>
            </div>
            <div>
              <h4 className="text-muted mb-2">Phone</h4>
              <p className="text-[1.2rem] font-semibold">+243 970 509 466</p>
            </div>
             <div>
              <h4 className="text-muted mb-2">Availability</h4>
              <p className="text-[1.2rem] font-semibold">Open to projects</p>
            </div>
          </div>

          <div className="py-12 border-t border-border">
             <p className="text-muted text-[1.1rem] max-w-[600px] mb-8">
               I build scalable full-stack systems with clean architecture, solid backend logic, and production-ready user experiences. Focused on code quality, maintainability, and real-world performance.
             </p>
             <p className="text-muted text-[1.1rem]">© 2026 Cédric Karungu. All rights reserved.</p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
