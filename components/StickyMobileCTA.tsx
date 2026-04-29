"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-vice-border bg-vice-bg/95 backdrop-blur-xl px-6 py-4 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="tel:3058536101"
        className="flex w-full items-center justify-center rounded-full bg-vice-pink py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,45,122,0.4)] transition-all active:scale-95"
      >
        Call (305) 853-6101
      </a>
    </div>
  );
}
