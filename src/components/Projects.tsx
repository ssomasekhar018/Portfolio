import React from 'react'

const projects = [
    {
        title: "ClauseCheck",
        subtitle: "AI-Powered Legal Tech Suite",
        emoji: "⚖️",
        description: "Full-stack AI legal platform combining courtroom simulation, legal case search, and contract risk analysis. Implemented real-time courtroom argument simulation using WebSockets and AI agents.",
        tech: ["FastAPI", "React", "LLMs", "WebSockets", "Node.js"],
        color: "#E62429",
        link: "https://github.com/ssomasekhar018/ClauseCheck-Team-Odyssey"
    },
    {
        title: "WebScanPro",
        subtitle: "AI-Enhanced Vulnerability Scanner",
        emoji: "🛡️",
        description: "Python-based automated web security scanner with crawling, payload injection, response analysis, and ML/DL models for anomaly detection with reduced false positives.",
        tech: ["Python", "Selenium", "ML/DL", "Docker", "BeautifulSoup"],
        color: "#2667FF",
        link: "https://github.com/springboardmentor1416g/WebScanPro/tree/Somasekhara-Srinivas"
    }
]

export default function Projects() {
    return (
        <section id="projects" className="relative py-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(230,36,41,0.03)_0%,transparent_50%)]" />
            <div className="absolute left-[3%] bottom-[8%] text-[15vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">04</div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-gray-500 font-mono text-sm tracking-[0.3em] uppercase block mb-4">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                        FEATURED{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E62429] to-[#2667FF]">
                            PROJECTS
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Top Accent Bar */}
                            <div
                                className="h-[2px] w-full"
                                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                            />

                            {/* Hover Glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(ellipse at 30% 0%, ${p.color}08, transparent 60%)` }}
                            />

                            <div className="p-10 relative z-10">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-3xl">{p.emoji}</span>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                                                {p.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm font-mono tracking-wide" style={{ color: p.color }}>
                                            {p.subtitle}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <a
                                        href={p.link}
                                        className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300 shrink-0 mt-1"
                                    >
                                        <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    {p.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map((t, j) => (
                                        <span
                                            key={j}
                                            className="text-[10px] font-mono px-3 py-1.5 rounded-lg border border-white/[0.06] text-gray-500 uppercase tracking-wider group-hover:border-white/[0.1] group-hover:text-gray-400 transition-all duration-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
