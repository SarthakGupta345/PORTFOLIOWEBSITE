"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
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
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-[-0.02em] mb-4 text-foreground uppercase">Get In Touch</h2>
          <p className="text-muted text-[1.1rem]">Let's work together on your next project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 mb-24">
          {/* Left Column: Contact info cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#120d1f] border border-border/10 p-6 rounded-2xl flex flex-col gap-1 transition-all hover:border-accent/40">
              <div className="w-10 h-10 rounded-lg bg-[#1a1429] border border-accent/20 flex items-center justify-center text-accent mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <h4 className="text-muted text-sm font-medium mb-0.5 uppercase tracking-wide">Email</h4>
              <a href="mailto:ckarungu921@gmail.com" className="text-foreground font-semibold text-sm hover:text-accent transition-colors">ckarungu921@gmail.com</a>
            </div>

            <div className="bg-[#120d1f] border border-border/10 p-6 rounded-2xl flex flex-col gap-1 transition-all hover:border-accent/40">
              <div className="w-10 h-10 rounded-lg bg-[#1a1429] border border-accent/20 flex items-center justify-center text-accent mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <h4 className="text-muted text-sm font-medium mb-0.5 uppercase tracking-wide">Phone</h4>
              <p className="text-foreground font-semibold text-sm">+243 970 509 466</p>
            </div>

            <div className="bg-[#120d1f] border border-border/10 p-6 rounded-2xl flex flex-col gap-1 transition-all hover:border-accent/40">
              <div className="w-10 h-10 rounded-lg bg-[#1a1429] border border-accent/20 flex items-center justify-center text-accent mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h4 className="text-muted text-sm font-medium mb-0.5 uppercase tracking-wide">Availability</h4>
              <p className="text-foreground font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
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
              <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                Send Message 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
