"use client"

export const dynamic = "force-dynamic";
import Pager from "@/components/pager";
import { Trophy, Award, Target, Users, ExternalLink, Binary } from "lucide-react";
import codeforcesIcon from "../../public/images/codeforces.png"
import codecheifIcons from "../../public/images/codecheif.png"
import leetcodeIcon from "../../public/images/leetcode.png"
import Image from "next/image";
import CountUp from "@/components/CountUp";
import LetterGlitch from "@/components/LetterGlitch";
import { useTheme } from "next-themes";

const StatCard = ({
    title,
    value,
    icon: Icon,
    colorClass = "text-neutral-900 dark:text-neutral-50",
    className = "",
}: {
    title: string;
    value: number;
    icon: React.ComponentType<{ className?: string }>;
    colorClass?: string;
    className?: string;
}) => (
    <div
        className={`bg-white dark:bg-transparent border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 w-full h-full transition-all duration-200 hover:scale-[1.02] hover:shadow-sm flex flex-col justify-between z-10 relative ${className}`}
    >
        <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                {title}
            </h3>
            <div className={`p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 ${colorClass}`}>
                <Icon className="h-4 w-4" />
            </div>
        </div>
        <div>
            <CountUp
                from={value / 2}
                to={value}
                separator=","
                direction="up"
                duration={1}
                className={`text-2xl font-bold tracking-tight ${colorClass}`}
                delay={0}
            />
        </div>
    </div>
);

const Stats = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    const codeforcesStats = [
        { title: "Current Rating", value: 1424, icon: Trophy, colorClass: "text-cyan-600 dark:text-cyan-400" },
        { title: "Max Rating", value: 1452, icon: Award, colorClass: "text-cyan-600 dark:text-cyan-400" },
        { title: "Problems Solved", value: 450, icon: Target, colorClass: "text-indigo-600 dark:text-indigo-400" },
    ];

    const codechefStats = [
        { title: "Current Rating", value: 1810, icon: Trophy, colorClass: "text-purple-600 dark:text-purple-400" },
        { title: "Global Rank", value: 902, icon: Users, colorClass: "text-purple-600 dark:text-purple-400" },
        { title: "Problems Solved", value: 250, icon: Target, colorClass: "text-indigo-600 dark:text-indigo-400" },
    ];

    const leetcodeStats = [
        { title: "Problems Solved", value: 900, icon: Target, colorClass: "text-amber-500 dark:text-amber-400" },
        { title: "Contest Rating", value: 1950, icon: Trophy, colorClass: "text-amber-500 dark:text-amber-400" },
        { title: "Current Streak", value: 45, icon: Binary, colorClass: "text-neutral-600 dark:text-neutral-400" },
    ];

    return (
        <div className="relative px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-14 w-full min-h-screen font-sans antialiased">

            {/* BACKGROUND LAYER: Letter Glitch isolated container */}
            {
                isDark && <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-15 dark:opacity-10">
                    <LetterGlitch
                        glitchSpeed={50}
                        centerVignette={true}
                        outerVignette={false}
                        smooth
                        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
                    />
                </div>
            }

            {/* FOREGROUND LAYER: Content stack elements */}
            <div className="relative z-10 w-full space-y-12">

                {/* MASTER DSA HEADER SECTION */}
                <div className="space-y-2 border-b border-neutral-200 dark:border-neutral-800 pb-6">
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                        DSA & Competitive Programming
                    </h1>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-3xl leading-relaxed">
                        Problem-solving is where I sharpen the instincts I use in
                        everyday engineering — thinking in trade-offs, spotting
                        edge cases, and writing efficient code under pressure.
                        Here's where that shows up across Codeforces, CodeChef,
                        and LeetCode.
                    </p>
                </div>

                {/* 1. CODEFORCES METRICS BLOCK */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Image src={codeforcesIcon} alt="Codeforces" className="h-7 w-7 object-contain" />
                        <h2 className="text-xl mt-4.5 font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                            Codeforces <span className="text-neutral-300 dark:text-neutral-700 font-normal">|</span> <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg">Specialist</span>
                        </h2>
                        <a href="https://codeforces.com/profile/Sarthakgupta46" target="_blank" rel="noopener noreferrer" className="ml-1 mt-px cursor-pointer">
                            <ExternalLink className="size-4 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-200" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {codeforcesStats.map((stat, idx) => (
                            <StatCard key={idx} title={stat.title} value={stat.value} icon={stat.icon} colorClass={stat.colorClass} />
                        ))}
                    </div>
                </div>

                {/* 2. CODECHEF METRICS BLOCK */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Image src={codecheifIcons} alt="CodeChef" className="h-7 w-7 object-contain" />
                        <h2 className="text-xl mt-4.5 font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                            CodeChef <span className="text-neutral-300 dark:text-neutral-700 font-normal">|</span> <span className="text-purple-600 dark:text-purple-400 font-semibold text-lg">4-Star Coder</span>
                        </h2>
                        <a href="https://www.codechef.com/users/sarthakgupta46" target="_blank" rel="noopener noreferrer" className="ml-1  mt-px cursor-pointer">
                            <ExternalLink className="size-4  text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-200" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {codechefStats.map((stat, idx) => (
                            <StatCard key={idx} title={stat.title} value={stat.value} icon={stat.icon} colorClass={stat.colorClass} />
                        ))}
                    </div>
                </div>

                {/* 3. LEETCODE METRICS BLOCK */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Image src={leetcodeIcon} alt="LeetCode" className="h-6 w-6 object-contain" />
                        <h2 className="text-xl mt-4.5 font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                            LeetCode <span className="text-neutral-300 dark:text-neutral-700 font-normal">|</span> <span className="text-amber-600 dark:text-amber-500 font-semibold text-lg">900 Questions Solved</span>
                        </h2>
                        <a href="https://leetcode.com/u/Sarthakgupta46/" target="_blank" rel="noopener noreferrer" className="ml-1 cursor-pointer">
                            <ExternalLink className="size-4 mt-px text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all duration-200" />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-4">
                        {leetcodeStats.map((stat, idx) => (
                            <StatCard key={idx} title={stat.title} value={stat.value} icon={stat.icon} colorClass={stat.colorClass} />
                        ))}
                    </div>

                </div>

                {/* Pagination Controls */}
                <div className="pt-6">
                    <Pager
                        prevHref="/stats"
                        nextHref="/"
                        prevTitle="Stats"
                        nextTitle="Home"
                    />
                </div>
            </div>
        </div>
    );
};

export default Stats;