import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import IntroOverlay from './components/IntroOverlay'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [introFinished, setIntroFinished] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Phase 1: Loader plays its internal animations (progress bar + text swap)
      // We just wait for it
      tl.to({}, { duration: 4 })

        // Phase 2: Fade out loader
        .to('.loader-container', { opacity: 0, duration: 0.6, ease: "power2.inOut" })
        .call(() => setLoading(false))

        // Phase 3: Show Intro Spider + brief pause
        .fromTo('.intro-content', { opacity: 0 }, { opacity: 1, duration: 0.5 })
        .to({}, { duration: 1.2 })
        .to('.intro-content', { opacity: 0, scale: 0.8, duration: 0.5, ease: "power2.in" })

        // Phase 4: Shutters open (cinematic reveal)
        .to('.shutter-top', { yPercent: -100, duration: 1.4, ease: 'power4.inOut' }, 'reveal')
        .to('.shutter-bottom', { yPercent: 100, duration: 1.4, ease: 'power4.inOut' }, 'reveal')

        // Phase 5: Mark intro finished -> Hero animations trigger
        .call(() => setIntroFinished(true))

    }, overlayRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-[#050510] relative overflow-x-hidden">
      {/* Loader */}
      {loading && (
        <div className="loader-container fixed inset-0 z-50">
          <Loader />
        </div>
      )}

      {/* Intro Overlay (Shutters) */}
      {!introFinished && <IntroOverlay ref={overlayRef} />}

      {/* Main Content */}
      <div className="relative z-10">
        <Hero introFinished={introFinished} />
        {introFinished && (
          <div className="animate-fade-in-slow">
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
        )}
      </div>

      {/* Footer */}
      {introFinished && (
        <footer className="relative py-16 text-center border-t border-white/[0.04]">
          <span className="text-2xl block mb-4">🕷️</span>
          <p className="text-gray-600 text-sm font-mono tracking-wider">
            © 2026 S Somasekhara Srinivas
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Crafted with passion & GSAP
          </p>
        </footer>
      )}
    </div>
  )
}
