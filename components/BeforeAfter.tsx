"use client";

import { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function BeforeAfter() {
  const [slider, setSlider] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSlider(pct);
  };

  return (
    <section className="relative bg-vice-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-vice-cyan">
            See the Difference
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl font-[family-name:var(--font-syne)]">
            Before & After
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-vice-muted">
            Drag the slider to reveal the Vice Details transformation.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div
            ref={containerRef}
            className="relative mx-auto aspect-video max-w-4xl cursor-ew-resize overflow-hidden rounded-2xl border border-vice-border"
            onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onMouseDown={(e) => handleMove(e.clientX)}
            onTouchStart={(e) => handleMove(e.touches[0].clientX)}
          >
            {/* After (Clean) — full width */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero-dirty.jpg')", filter: "brightness(0.4)" }}
            />
            
            {/* Before (Dirty) — clipped */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/hero-dirty.jpg')",
                clipPath: `inset(0 ${100 - slider}% 0 0)`,
              }}
            />

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              style={{ left: `${slider}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-vice-pink shadow-lg">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 rounded-full bg-vice-pink px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Before
            </div>
            <div className="absolute top-4 right-4 rounded-full bg-vice-cyan px-3 py-1 text-xs font-bold uppercase tracking-wider text-vice-bg">
              After
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
