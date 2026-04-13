"use client";
import { useState } from "react";
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
  const texts = ["Full stack coder", "Frontend", "Backend", "AI", "Competitive Programmer"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = texts[textIndex];
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length <= 1) { 
           setIsDeleting(false);
           setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      style={{ color: '#a855f7', fontSize: '1.25rem', marginBottom: '2rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', height: '2rem' }}
    >
      <span>{displayText || "\u00A0"}</span>
      <motion.span 
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        style={{ width: '2px', height: '1.2em', backgroundColor: '#a855f7', marginLeft: '4px', display: 'inline-block' }}
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
      <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: '100px' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              color: '#a855f7', 
              border: '1px solid rgba(168, 85, 247, 0.2)', 
              borderRadius: '100px', 
              padding: '0.4rem 1.2rem', 
              fontSize: '0.85rem', 
              fontWeight: 600,
              marginBottom: '2.5rem',
              display: 'inline-block'
            }}
          >
            Available for Freelance & Contract
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-heading" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, marginBottom: 0, letterSpacing: '-0.05em' }}
          >
            CHANDAN GUPTA
          </motion.h1>

          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             style={{ 
               fontSize: 'clamp(3rem, 8vw, 6rem)', 
               lineHeight: 1, 
               fontWeight: 800, 
               marginBottom: '2rem',
               letterSpacing: '-0.05em',
               background: 'linear-gradient(90deg, #a855f7, #c084fc)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent'
             }}
          >
            Competitive Coder
          </motion.h2>

          <TypewriterEffect />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted" style={{ maxWidth: '650px', marginBottom: '3rem', fontSize: '1.15rem' }}
          >
            I design high-performance systems and write extremely optimized algorithms designed to align technical precision with business growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex-gap" style={{ justifyContent: 'center', marginBottom: '4rem' }}
          >
             <a href="#" className="btn btn-primary" style={{ background: '#a855f7', color: '#fff', borderColor: '#a855f7', borderRadius: '100px', padding: '0.8rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Resume <span style={{ fontSize: '1.2rem' }}>↓</span>
            </a>
            <a href="#projects" className="btn btn-outline" style={{ border: '1px solid var(--border)', borderRadius: '100px', padding: '0.8rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              View My Work <span style={{ fontSize: '1.2rem' }}>❐</span>
            </a>
          </motion.div>
          
           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex-gap" style={{ justifyContent: 'center' }}
          >
            <a href="#" className="icon-btn" style={{ width: '44px', height: '44px', fontSize: '1.2rem' }}>⌨</a>
            <a href="#" className="icon-btn" style={{ width: '44px', height: '44px', fontSize: '1.2rem' }}>in</a>
            <a href="#" className="icon-btn" style={{ width: '44px', height: '44px', fontSize: '1.2rem' }}>✉</a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-heading">About Me</h2>
          <div className="grid-2">
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Cedric Karungu</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Fullstack Developer/Project Manager</p>
            </div>
            <div>
              <p className="text-muted" style={{ marginBottom: '1rem' }}>
                I'm a Fullstack Developer with 5+ years of experience building ERP, CRM, and AI-powered applications. Expert in React, Next.js, and Nest.js, I specialize in creating scalable digital solutions that bridge the gap between frontend and backend excellence.
              </p>
              <p className="text-muted" style={{ marginBottom: '1rem' }}>
                As a Project Manager at Ever Technologies, I lead the development of business management platforms. My background with CRES and AdminAtete has sharpened my ability to align technical implementation with strategic business objectives across various industries.
              </p>
              <p className="text-muted">
                Based in IT Management with a Fullstack specialization from Goma Digital Academy, I am a multilingual collaborator fluent in French, English, and Swahili. I am dedicated to delivering high-impact solutions that drive growth and enhance user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-heading" style={{ textAlign: "center" }}>Skills</h2>
          
          <div className="tabs-container">
            <div className="tabs-wrapper">
              <button 
                className={`tab-btn ${activeTab === "Front End" ? "active" : ""}`}
                onClick={() => setActiveTab("Front End")}
              >
                Front End
              </button>
              <button 
                className={`tab-btn ${activeTab === "Back End" ? "active" : ""}`}
                onClick={() => setActiveTab("Back End")}
              >
                Back End
              </button>
              <button 
                className={`tab-btn ${activeTab === "A.I" ? "active" : ""}`}
                onClick={() => setActiveTab("A.I")}
              >
                A.I
              </button>
            </div>
          </div>

          <div className="skill-grid">
            {SKILLS_DATA[activeTab].map((skill, index) => (
              <div key={index} className="skill-card">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="skill-icon" 
                  style={{ filter: skill.name === 'Express.js' || skill.name === 'Next.js' ? 'invert(1)' : 'none' }}
                />
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-level-wrapper">
                  <span className="skill-dot" style={{ backgroundColor: skill.dot }}></span>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header-split">
            <div>
              <h2 className="section-heading" style={{ marginBottom: "1rem" }}>My projects</h2>
              <p className="text-muted" style={{ maxWidth: "500px" }}>
                Selected projects demonstrating practical solutions and well-architected digital experiences.
              </p>
            </div>
            <div className="tabs-wrapper">
              <button 
                className={`tab-btn ${activeProjectTab === "All" ? "active" : ""}`}
                onClick={() => setActiveProjectTab("All")}
              >
                All
              </button>
              <button 
                className={`tab-btn ${activeProjectTab === "Web" ? "active" : ""}`}
                onClick={() => setActiveProjectTab("Web")}
              >
                Web
              </button>
              <button 
                className={`tab-btn ${activeProjectTab === "App" ? "active" : ""}`}
                onClick={() => setActiveProjectTab("App")}
              >
                App
              </button>
            </div>
          </div>

          <div className="grid-3">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.img} alt={project.title} className="project-card-image" />
                <div className="project-card-content">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    <div className="project-links">
                      {/* Using standard emoticons for simplicity, can swap for SVGs if requested */}
                      <a href={project.link} className="icon-btn" title="Live Demo">↗</a>
                      <a href={project.github} className="icon-btn" title="GitHub Source">⌨</a>
                    </div>
                  </div>
                  <h3 style={{ marginTop: '0.5rem', marginBottom: '0.2rem' }}>{project.title}</h3>
                  <p className="text-muted" style={{ fontSize: "0.95rem" }}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-heading">Experience</h2>
          <p className="text-muted" style={{ marginBottom: '3rem' }}>My journey through the tech industry.</p>
          <div style={{ maxWidth: '800px' }}>
            <div className="exp-item">
              <h3>Full Stack Engineer</h3>
              <h4>Ever Technologies</h4>
              <p className="text-muted">Worked as a Full-stack Developer (Nest.js, Next.js, React Native) on Ever Teams (Open Work and Project Management Platform) and Ever Gauzy (Open Business Management Platform - ERP/CRM/HRM/ATS/PM). Also involved in various client projects.</p>
            </div>
            <div className="exp-item">
              <h3>Full Stack Engineer</h3>
              <h4>AdminAtete</h4>
              <p className="text-muted">Developed as a Full-stack Developer (Express.js, Next.js) for AdminAtete, a tech startup offering digital solutions for business services, including a document archiving application.</p>
            </div>
            <div className="exp-item">
              <h3>Frontend Developer</h3>
              <h4>CRES Startup</h4>
              <p className="text-muted">Worked as a Full-stack Web Developer (Nest.js, Next.js) for a start-up and research center focused on creating web applications and artificial intelligence solutions for business management and data collection.</p>
            </div>
            <div className="exp-item">
              <h3>Backend Developer</h3>
              <h4>Attendacy GDA (KADEA)</h4>
              <p className="text-muted">Worked as a Full-stack Developer (Express.js, React.js) for Attendacy GDA, an application to manage student attendance within a coding academy.</p>
            </div>
            <div className="exp-item">
              <h3>Frontend Developer</h3>
              <h4>One Stop Center</h4>
              <p className="text-muted">Worked as a Frontend Developer (Angular) on a web application that manages parcel-related information and shares it across multiple company agencies.</p>
            </div>
             <div className="exp-item">
              <h3>Frontend Web Developer</h3>
              <h4>Buku My Class</h4>
              <p className="text-muted">Worked as a Full Stack Developer (Frontend and Backend) and Frontend Developer (React.js) for Buku, an application enabling secondary school students to access class notes from anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-muted" style={{ marginBottom: '3rem' }}>Let's work together on your next project</p>
          
          <div className="grid-3" style={{ marginBottom: '4rem' }}>
            <div>
              <h4 style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Email</h4>
              <a href="mailto:ckarungu921@gmail.com" style={{ fontSize: '1.2rem', fontWeight: 600 }}>ckarungu921@gmail.com</a>
            </div>
            <div>
              <h4 style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Phone</h4>
              <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>+243 970 509 466</p>
            </div>
             <div>
              <h4 style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Availability</h4>
              <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Open to projects</p>
            </div>
          </div>

          <div style={{ padding: '3rem 0', borderTop: '1px solid var(--border)' }}>
             <p className="text-muted" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
               I build scalable full-stack systems with clean architecture, solid backend logic, and production-ready user experiences. Focused on code quality, maintainability, and real-world performance.
             </p>
             <p className="text-muted">© 2026 Cédric Karungu. All rights reserved.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
