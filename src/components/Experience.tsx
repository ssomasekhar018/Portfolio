import React from 'react'

const experiences = [
    {
        type: "work",
        date: "OCT — NOV 2025",
        title: "Infosys Springboard",
        subtitle: "Summer Internship",
        description: "Developed WebScanPro, an AI-enhanced automated vulnerability scanner for SQLi, XSS, IDOR, and authentication vulnerabilities. Built end-to-end modules including crawling, payload injection, response analysis, ML/DL model training, and unified reporting.",
        tags: ["Python", "ML/DL", "Security", "Automation"]
    },
    {
        type: "education",
        date: "2023 — 2027",
        title: "B.Tech in CSE",
        subtitle: "SRM University, Amaravati, AP",
        description: "Computer Science and Engineering with focus on AI/ML, full-stack development, and software engineering principles.",
        tags: ["AI/ML", "Full-Stack", "DSA", "Software Engineering"]
    }
]

export default function Experience() {
    return (
        <section id="experience" className="relative py-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(38,103,255,0.04)_0%,transparent_50%)]" />
            <div className="absolute left-[3%] bottom-[8%] text-[15vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">03</div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[#2667FF] font-mono text-sm tracking-[0.3em] uppercase block mb-4">
                        Where I've Been
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                        EXPERIENCE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2667FF] to-[#00d4ff]">EDUCATION</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-0">
                    {experiences.map((exp, i) => {
                        const isWork = exp.type === "work"
                        const accentColor = isWork ? "#E62429" : "#2667FF"

                        return (
                            <div key={i} className="relative pl-12 pb-16 last:pb-0 group">
                                {/* Timeline Line */}
                                <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-white/[0.06] group-last:bg-gradient-to-b group-last:from-white/[0.06] group-last:to-transparent" />

                                {/* Timeline Dot */}
                                <div
                                    className="absolute left-0 top-1 w-[30px] h-[30px] rounded-full border-2 flex items-center justify-center bg-[#050510]"
                                    style={{ borderColor: accentColor }}
                                >
                                    <div
                                        className="w-2.5 h-2.5 rounded-full"
                                        style={{ backgroundColor: accentColor, boxShadow: `0 0 12px ${accentColor}` }}
                                    />
                                </div>

                                {/* Content Card */}
                                <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-0.5">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span
                                            className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full border"
                                            style={{ color: accentColor, borderColor: `${accentColor}30` }}
                                        >
                                            {exp.date}
                                        </span>
                                        <span className="text-xs text-white/30 font-mono">{isWork ? "💼 WORK" : "🎓 EDUCATION"}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4">{exp.subtitle}</p>
                                    <p className="text-gray-400 leading-relaxed text-sm mb-6">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag, j) => (
                                            <span
                                                key={j}
                                                className="text-[10px] font-mono px-3 py-1 rounded-full border border-white/[0.06] text-gray-500 uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
