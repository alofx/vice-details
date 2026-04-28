"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#how-it-works" },
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
          VICE<span className="text-vice-pink">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-vice-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#book"
            className="hidden rounded-full bg-vice-pink px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-vice-pink-light hover:shadow-[0_0_20px_rgba(255,45,122,0.4)] md:inline-flex"
          >
            Book Now
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-vice-border bg-vice-bg/95 backdrop-blur-xl px-6 py-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-vice-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-vice-pink px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-vice-pink-light"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
