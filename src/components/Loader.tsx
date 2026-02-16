import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Loader() {
    const pillRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLSpanElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)
    const spiderRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const tl = gsap.timeline()

        // Spider drops in
        tl.fromTo(spiderRef.current,
            { y: -80, opacity: 0, scale: 0.5 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
        )

            // Pill fades in
            .fromTo(pillRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
                "-=0.3"
            )

            // Progress bar fills
            .to(progressRef.current, {
                width: "100%",
                duration: 2.5,
                ease: "power1.inOut"
            })

            // Text swap: LOADING -> WELCOME
            .to(textRef.current, {
                opacity: 0, y: -10, duration: 0.3,
                onComplete: () => {
                    if (textRef.current) textRef.current.textContent = "WELCOME"
                }
            })
            .to(textRef.current, { opacity: 1, y: 0, duration: 0.3 })

            // Spider pulse
            .to(spiderRef.current, {
                scale: 1.3, duration: 0.3, yoyo: true, repeat: 1, ease: "power2.inOut"
            })

        return () => { tl.kill() }
    }, [])

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050510]">
            {/* Web Thread (thin line from top to spider) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[calc(50vh-60px)] bg-gradient-to-b from-transparent via-white/10 to-white/30" />

            {/* Spider Emoji */}
            <span
                ref={spiderRef}
                className="text-5xl mb-6 drop-shadow-[0_0_20px_rgba(230,36,41,0.6)] opacity-0"
                style={{ filter: 'drop-shadow(0 0 8px rgba(230,36,41,0.4))' }}
            >
                🕷️
            </span>

            {/* Pill Container */}
            <div
                ref={pillRef}
                className="relative flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md overflow-hidden opacity-0"
            >
                {/* Text */}
                <span ref={textRef} className="font-mono text-sm tracking-[0.3em] text-white/80 uppercase">
                    LOADING
                </span>

                {/* Progress Bar */}
                <div
                    ref={progressRef}
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#E62429] to-[#2667FF] rounded-full"
                    style={{ width: '0%' }}
                />
            </div>

            {/* Subtle bottom text */}
            <p className="absolute bottom-8 font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase">
                S Somasekhara Srinivas — Portfolio
            </p>
        </div>
    )
}
