"use client";
import { motion } from "framer-motion";
import { CP_PROFILES } from "@/data/portfolio";

export default function CompetitiveProgramming() {
  return (
    <motion.section
      id="competitive"
      className="py-24 border-b border-border scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] mb-4 text-center uppercase">
          Competitive Programming
        </h2>
        <p className="text-muted text-center text-[1.05rem] mb-14 max-w-xl mx-auto">
          Sharpening problem-solving skills across top competitive programming platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CP_PROFILES.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card-bg border border-card-border rounded-2xl p-7 flex flex-col no-underline transition-all hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              {/* Accent glow on hover */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl"
                style={{ backgroundColor: profile.color }}
              />

              {/* Header: icon + platform name */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${profile.color}18` }}
                >
                  <span
                    className="w-6 h-6 block"
                    style={{ color: profile.color }}
                    dangerouslySetInnerHTML={{ __html: profile.icon }}
                  />
                </div>
                <div>
                  <h3 className="text-[1.15rem] font-bold text-foreground leading-tight">
                    {profile.platform}
                  </h3>
                  <span className="text-[0.85rem] text-muted font-medium">
                    {profile.handle}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-4 mt-auto">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-[0.88rem] text-muted">{stat.label}</span>
                    <span
                      className="text-[1rem] font-bold"
                      style={{ color: profile.color }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Visit arrow */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-[0.85rem] text-muted font-medium group-hover:text-foreground transition-colors">
                  View Profile
                </span>
                <span className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all text-lg">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
