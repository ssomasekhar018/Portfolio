import React, { forwardRef } from 'react'

const IntroOverlay = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="fixed inset-0 z-40 pointer-events-none">
            {/* Top Shutter */}
            <div className="shutter-top absolute top-0 left-0 w-full h-[50vh] bg-[#050510] z-40 border-b border-[#E62429]/30 flex items-end justify-center overflow-hidden">
                <span className="mb-6 text-[20vw] font-black text-white/[0.03] leading-none select-none tracking-tighter">
                    SPIDEY
                </span>
            </div>

            {/* Bottom Shutter */}
            <div className="shutter-bottom absolute bottom-0 left-0 w-full h-[50vh] bg-[#050510] z-40 border-t border-[#E62429]/30 flex items-start justify-center overflow-hidden">
                <span className="mt-6 text-[20vw] font-black text-white/[0.03] leading-none select-none tracking-tighter">
                    VERSE
                </span>
            </div>

            {/* Center Spider Logo (visible between shutters during reveal) */}
            <div className="intro-content absolute inset-0 z-50 flex items-center justify-center">
                <div className="text-center">
                    <span className="text-8xl block mb-4">🕷️</span>
                    <p className="font-mono text-xs tracking-[0.5em] text-white/40 uppercase">
                        Web Experience
                    </p>
                </div>
            </div>
        </div>
    )
})

export default IntroOverlay
