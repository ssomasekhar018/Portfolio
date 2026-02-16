import React from 'react'

const skillCategories = [
    {
        title: "Languages",
        icon: "⚡",
        skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++", "SQL"]
    },
    {
        title: "Frameworks",
        icon: "🕸️",
        skills: ["React", "FastAPI", "Node.js", "Express", "Vite"]
    },
    {
        title: "AI / ML",
        icon: "🧠",
        skills: ["LLMs (Gemini/GPT-4)", "ML/DL", "NLP", "Computer Vision"]
    },
    {
        title: "Tools & DB",
        icon: "🛠️",
        skills: ["Git", "GitHub", "Docker", "MongoDB", "SQLite", "VS Code"]
    },
    {
        title: "Design",
        icon: "🎨",
        skills: ["Tailwind CSS", "Material UI", "Figma", "Responsive Design"]
    }
]

export default function Skills() {
    return (
        <section id="skills" className="relative py-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(230,36,41,0.04)_0%,transparent_50%)]" />
            <div className="absolute left-[3%] bottom-[8%] text-[15vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">02</div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[#E62429] font-mono text-sm tracking-[0.3em] uppercase block mb-4">
                        What I Work With
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                        TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E62429] to-[#ff6b6b]">ARSENAL</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {skillCategories.map((cat, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-[#E62429]/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Glow on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E62429]/0 to-[#2667FF]/0 group-hover:from-[#E62429]/5 group-hover:to-[#2667FF]/5 transition-all duration-500" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-2xl">{cat.icon}</span>
                                    <h3 className="text-lg font-bold text-white/90 tracking-wide">{cat.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill, j) => (
                                        <span
                                            key={j}
                                            className="text-xs font-mono px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-gray-400 group-hover:text-white/70 group-hover:border-white/15 transition-all duration-300"
                                        >
                                            {skill}
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
