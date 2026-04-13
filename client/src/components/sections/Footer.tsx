"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#090614] border-t border-border/10 pt-20 pb-8 mt-12 bg-gradient-to-b from-transparent to-[#04020a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_2fr] gap-12 mb-16">
          
          {/* Column 1 */}
          <div className="flex flex-col pr-6">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">CG<span className="text-accent">.</span></h3>
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
                Rajasthan, India
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
               {['Ever Teams', 'AdminAtete', 'Focus', 'HIÜRD'].map(work => (
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
          <p className="text-muted text-sm shrink-0">© 2026 Chandan Gupta. All rights reserved.</p>
          <p className="text-muted text-sm flex flex-wrap justify-center gap-2 md:gap-4 lg:pr-12 items-center">
            <span>Competitive Software Engineer</span>
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
  );
}
