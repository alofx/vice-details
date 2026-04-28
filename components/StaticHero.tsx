"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StaticHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;
    if (!section || !content || !bg) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Text moves up faster than scroll (parallax)
    tl.to(content, { y: -200, ease: "none" }, 0);
    // Background moves slower (subtle parallax)
    tl.to(bg, { y: 100, ease: "none" }, 0);

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      id="hero"
    >
      {/* Background Image — Dirty Car Frame */}
      <div
        ref={bgRef}
        className="absolute inset-0 h-[120%] w-full"
        style={{
          backgroundImage: "url('/images/hero-dirty.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-vice-bg" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-vice-cyan">
          Premium Mobile Detailing — South Florida
        </p>
        <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl font-[family-name:var(--font-syne)]">
          We Bring the
          <br />
          <span className="text-vice-pink">Detail</span> to You
        </h1>
        <p className="mb-10 max-w-xl text-lg text-white/80 md:text-xl">
          Professional interior & exterior detailing at your home, office, or
          apartment across Broward & Miami-Dade.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-vice-pink px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-vice-pink-light hover:scale-105 hover:shadow-[0_0_30px_rgba(255,45,122,0.4)]"
          >
            Book Now
          </a>
          <a
            href="#transformation"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-vice-cyan hover:bg-vice-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
          >
            See the Transformation
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
