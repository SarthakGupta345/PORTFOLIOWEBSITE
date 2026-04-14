"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";

// ── Replace with your real GitHub username ──
const GITHUB_USERNAME = "ck-dev";

// ── Stats (update with real numbers) ──
const GITHUB_STATS = {
  totalCommits: "1,240+",
  totalStars: "86",
  publicRepos: "42",
  contributions: "2,800+",
  followers: "120",
  pullRequests: "310+",
};

// ── Generate a realistic-looking heatmap grid ──
function generateHeatmapData(): number[][] {
  const weeks = 52;
  const days = 7;
  const grid: number[][] = [];

  // Use a seeded-ish approach so it looks consistent per render
  let seed = 42;
  const pseudoRandom = () => {
    seed = (seed * 16807 + 0) % 2147483647;
    return seed / 2147483647;
  };

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const r = pseudoRandom();
      // Weight towards lower values to look realistic
      if (r < 0.3) week.push(0);
      else if (r < 0.55) week.push(1);
      else if (r < 0.75) week.push(2);
      else if (r < 0.9) week.push(3);
      else week.push(4);
    }
    grid.push(week);
  }
  return grid;
}

const LEVEL_COLORS: Record<string, Record<number, string>> = {
  dark: {
    0: "rgba(255,255,255,0.04)",
    1: "rgba(168,85,247,0.2)",
    2: "rgba(168,85,247,0.4)",
    3: "rgba(168,85,247,0.65)",
    4: "rgba(168,85,247,0.9)",
  },
  light: {
    0: "rgba(0,0,0,0.04)",
    1: "rgba(168,85,247,0.15)",
    2: "rgba(168,85,247,0.35)",
    3: "rgba(168,85,247,0.55)",
    4: "rgba(168,85,247,0.8)",
  },
};

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const STAT_ITEMS = [
  { label: "Total Commits", value: GITHUB_STATS.totalCommits, icon: "●" },
  { label: "Stars Earned", value: GITHUB_STATS.totalStars, icon: "★" },
  { label: "Public Repos", value: GITHUB_STATS.publicRepos, icon: "◆" },
  { label: "Contributions", value: GITHUB_STATS.contributions, icon: "▲" },
  { label: "Followers", value: GITHUB_STATS.followers, icon: "◉" },
  { label: "Pull Requests", value: GITHUB_STATS.pullRequests, icon: "⎇" },
];

export default function GitHubActivity() {
  const heatmap = useMemo(() => generateHeatmapData(), []);

  // Place month labels approximately
  const monthPositions = useMemo(() => {
    const positions: { label: string; x: number }[] = [];
    for (let m = 0; m < 12; m++) {
      const weekIndex = Math.floor((m / 12) * 52);
      positions.push({ label: MONTH_LABELS[m], x: weekIndex });
    }
    return positions;
  }, []);

  return (
    <motion.section
      id="github"
      className="py-24 border-b border-border scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
          <div className="text-center sm:text-left">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] uppercase">
              GitHub Activity
            </h2>
            <p className="text-muted text-[1.05rem] mt-2">
              A year of building, contributing, and shipping code.
            </p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card-bg text-foreground font-medium text-[0.9rem] no-underline hover:border-accent hover:text-accent transition-all group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>@{GITHUB_USERNAME}</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {STAT_ITEMS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card-bg border border-card-border rounded-xl p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="text-accent text-lg mb-2">{stat.icon}</div>
              <div className="text-[1.35rem] font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-[0.78rem] text-muted font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Heatmap */}
        <motion.div
          className="bg-card-bg border border-card-border rounded-2xl p-6 sm:p-8 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[1rem] font-semibold text-foreground">
              Contribution Heatmap
            </h3>
            <span className="text-[0.8rem] text-muted">Last 12 months</span>
          </div>

          {/* Month labels */}
          <div className="min-w-[720px]">
            <div className="flex mb-1.5 ml-8">
              {monthPositions.map((m) => (
                <span
                  key={m.label}
                  className="text-[0.7rem] text-muted"
                  style={{
                    position: "relative",
                    width: `${100 / 12}%`,
                  }}
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Grid */}
            <div className="flex gap-[3px]">
              {/* Day labels */}
              <div className="flex flex-col gap-[3px] mr-1 shrink-0">
                {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                  <span
                    key={i}
                    className="text-[0.65rem] text-muted h-[13px] leading-[13px] w-6 text-right"
                  >
                    {d}
                  </span>
                ))}
              </div>

              {/* Weeks */}
              {heatmap.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((level, di) => (
                    <div
                      key={di}
                      className="w-[13px] h-[13px] rounded-[2px] transition-colors"
                      style={{
                        backgroundColor: LEVEL_COLORS.dark[level],
                      }}
                      title={`${level} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-1.5 mt-4">
              <span className="text-[0.7rem] text-muted mr-1">Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className="w-[13px] h-[13px] rounded-[2px]"
                  style={{ backgroundColor: LEVEL_COLORS.dark[level] }}
                />
              ))}
              <span className="text-[0.7rem] text-muted ml-1">More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
