"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const setupScroll = () => {
      const duration = video.duration || 13;

      gsap.to(video, {
        currentTime: duration,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    };

    if (video.readyState >= 2) {
      setupScroll();
    } else {
      video.addEventListener("loadeddata", setupScroll, { once: true });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full"
      id="hero"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero-scroll.mp4"
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-vice-accent">
            Premium Mobile Detailing
          </p>
          <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl font-[family-name:var(--font-syne)]">
            We Bring the
            <br />
            <span className="text-vice-accent">Detail</span> to You
          </h1>
          <p className="mb-10 max-w-xl text-lg text-white/80 md:text-xl">
            Professional interior & exterior detailing at your home, office, or
            apartment across South Florida.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-vice-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-vice-bg transition-all duration-300 hover:bg-vice-accent-light hover:scale-105"
            >
              Book Now
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              View Services
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/50">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
