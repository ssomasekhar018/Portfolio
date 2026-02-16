import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface HeroProps {
  introFinished: boolean
}

export default function Hero({ introFinished }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imgContainerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLDivElement>(null)
  const btnsRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (introFinished) {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      // Nav slides down
      tl.fromTo(navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )

        // Image slides in from right
        .fromTo(imgContainerRef.current,
          { x: 120, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.4 },
          "-=0.4"
        )

        // Tag line
        .fromTo(tagRef.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          "-=0.8"
        )

        // Name letters stagger
        .fromTo(nameRef.current?.children ?? [],
          { y: 80, opacity: 0, rotateX: 40 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.12 },
          "-=0.5"
        )

        // Description
        .fromTo(descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )

        // Buttons
        .fromTo(btnsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )

        // Decorations
        .fromTo(decorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=0.5"
        )
    }
  }, [introFinished])

  // Parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!introFinished) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) - 0.5
    const y = ((e.clientY - rect.top) / rect.height) - 0.5
    gsap.to(imgContainerRef.current, { x: x * 15, y: y * 10, duration: 1.5, ease: "power1.out" })
    gsap.to(nameRef.current, { x: x * -6, y: y * -4, duration: 1.2, ease: "power1.out" })
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0f]"
      onMouseMove={handleMouseMove}
    >
      {/* === NAVBAR === */}
      <nav ref={navRef} className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-16 py-6 opacity-0">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🕷️</span>
          <span className="font-black text-white text-lg tracking-tight">PORTFOLIO</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] text-white/50 uppercase font-medium">
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-[#E62429] transition-colors font-bold text-white/70">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="#contact" className="px-5 py-2 bg-[#E62429] text-white text-[10px] font-bold tracking-[0.15em] rounded hover:bg-[#c21c21] transition-colors uppercase">
          Hire Me
        </a>
      </nav>

      {/* === BACKGROUND ELEMENTS === */}
      <div ref={decorRef} className="opacity-0">
        {/* Dot texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
        {/* Faint vertical line left */}
        <div className="absolute left-[8%] top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-[#E62429]/10 to-transparent" />
        {/* Giant ghost number */}
        <div className="absolute left-[3%] bottom-[8%] text-[15vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">
          01
        </div>
      </div>

      {/* Red atmospheric glow behind image area */}
      <div className="absolute right-[-5%] top-[20%] w-[600px] h-[600px] rounded-full bg-[#E62429]/[0.06] blur-[150px] pointer-events-none" />
      <div className="absolute left-[10%] bottom-[10%] w-[300px] h-[300px] rounded-full bg-[#2667FF]/[0.03] blur-[100px] pointer-events-none" />

      {/* === LEFT SIDE: TEXT CONTENT === */}
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-[55%] z-10 flex items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-xl">
          {/* Tagline */}
          <p
            ref={tagRef}
            className="flex items-center gap-3 text-[#E62429] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-6 opacity-0"
          >
            <span className="inline-block w-8 h-[2px] bg-[#E62429]" />
            Full Stack Developer & AI Engineer
          </p>

          {/* NAME - Each line is a child for stagger animation */}
          <div ref={nameRef} className="mb-8" style={{ perspective: '600px' }}>
            <h1
              className="font-black leading-[0.88] tracking-[-0.04em] text-white opacity-0"
              style={{ fontSize: 'clamp(48px, 8vw, 110px)' }}
            >
              S SOMA
            </h1>
            <h1
              className="font-black leading-[0.88] tracking-[-0.04em] opacity-0"
              style={{
                fontSize: 'clamp(48px, 8vw, 110px)',
                background: 'linear-gradient(135deg, #E62429 0%, #ff4444 50%, #E62429 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SEKHARA
            </h1>
            <h1
              className="font-black leading-[0.88] tracking-[-0.03em] opacity-0"
              style={{
                fontSize: 'clamp(38px, 6.5vw, 90px)',
                background: 'linear-gradient(135deg, #2667FF 0%, #00aaff 50%, #2667FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SRINIVAS
            </h1>
          </div>

          {/* Description */}
          <div ref={descRef} className="mb-8 opacity-0">
            <p className="text-sm md:text-base max-w-md leading-relaxed" style={{ color: '#ecc021ff' }}>
              Building next-gen AI systems and immersive web experiences.
            </p>
            <p className="text-gray-600 text-xs mt-2 tracking-wider font-mono">
              📍 INDIA · SRM UNIVERSITY · OPEN TO OPPORTUNITIES
            </p>
          </div>

          {/* Buttons */}
          <div ref={btnsRef} className="flex flex-wrap gap-4 opacity-0">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-[#E62429] text-white font-bold text-xs tracking-[0.15em] uppercase rounded-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(230,36,41,0.4)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/10 text-white/70 font-bold text-xs tracking-[0.15em] uppercase rounded-lg hover:bg-white/5 hover:border-white/25 hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Social links row */}
          <div className="flex items-center gap-6 mt-10 opacity-0" ref={(el) => {
            if (el && introFinished) {
              gsap.fromTo(el, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 2.5 })
            }
          }}>
            <span className="text-white/20 text-[10px] font-mono tracking-widest">FOLLOW</span>
            <div className="w-6 h-[1px] bg-white/10" />
            <a href="https://github.com/ssomasekhar018" target="_blank" rel="noopener noreferrer" className="text-white/25 text-[10px] font-mono tracking-wider hover:text-[#E62429] transition-colors uppercase">GitHub</a>
            <a href="https://www.linkedin.com/in/somasekharasrinivas-sannapaneni-32a790291/" target="_blank" rel="noopener noreferrer" className="text-white/25 text-[10px] font-mono tracking-wider hover:text-[#E62429] transition-colors uppercase">LinkedIn</a>
            <a href="https://www.instagram.com/ssomu_18/" target="_blank" rel="noopener noreferrer" className="text-white/25 text-[10px] font-mono tracking-wider hover:text-[#E62429] transition-colors uppercase">Instagram</a>
          </div>
        </div>
      </div>

      {/* === RIGHT SIDE: SPIDER-MAN IMAGE === */}
      <div
        ref={imgContainerRef}
        className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[50%] z-[5] flex items-end justify-center opacity-0"
      >
        {/* Red accent circle behind character */}
        <div
          className="absolute right-[10%] top-[25%] w-[35vmin] h-[35vmin] rounded-full"
          style={{
            background: 'radial-gradient(circle, #E62429 0%, #6b1012 70%, transparent 100%)',
            opacity: 0.2,
            filter: 'blur(30px)'
          }}
        />
        <img
          src="/spiderman_hero.jpg"
          alt="Spider-Man"
          className="h-[85vh] md:h-[95vh] w-auto max-w-none object-contain object-bottom"
          style={{
            filter: 'contrast(1.05) saturate(1.1)',
            maskImage: 'linear-gradient(to left, black 50%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 75%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'destination-in',
          }}
        />
      </div>

      {/* === SCROLL INDICATOR === */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-30">
        <span className="text-white/30 text-[9px] font-mono tracking-[0.3em]">SCROLL</span>
        <div className="w-[1px] h-5 bg-gradient-to-b from-[#E62429]/40 to-transparent" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-[6] pointer-events-none bg-gradient-to-t from-[#050510] to-transparent" />
    </section>
  )
}
