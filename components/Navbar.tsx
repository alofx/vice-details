"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Reviews", href: "#reviews" },
    { label: "Book", href: "#book" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-vice-bg/90 backdrop-blur-xl border-b border-vice-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-syne)]"
        >
          VICE<span className="text-vice-accent">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-vice-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#book"
          className="rounded-full bg-vice-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-vice-bg transition-all hover:bg-vice-accent-light"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
