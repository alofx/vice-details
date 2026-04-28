"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    const text = textRef.current;
    if (!video || !container) return;

    const setupScroll = () => {
      const duration = video.duration || 13;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Scrub video from start to end
      tl.to(video, { currentTime: duration, ease: "none" }, 0);

      // Fade in text at start
      if (text) {
        tl.fromTo(text, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: "power2.out" }, 0);
        tl.to(text, { opacity: 0, y: -50, ease: "power2.in" }, 0.7);
      }
    };

    if (video.readyState >= 2) {
      setupScroll();
    } else {
      video.addEventListener("loadeddata", setupScroll, { once: true });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === container) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] w-full"
      id="transformation"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero-scroll.mp4"
          muted
          playsInline
          preload="auto"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-vice-bg via-transparent to-vice-bg" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Floating Text */}
        <div
          ref={textRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center pointer-events-none"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-vice-cyan">
            Watch the Transformation
          </p>
          <h2 className="max-w-3xl text-4xl font-bold text-white md:text-6xl font-[family-name:var(--font-syne)]">
            From <span className="text-vice-pink">Dirty</span> to{" "}
            <span className="text-vice-cyan">Spotless</span>
          </h2>
          <p className="mt-4 max-w-lg text-white/70">
            Keep scrolling to see the full detailing process unfold before your eyes.
          </p>
        </div>
      </div>
    </section>
  );
}
