"use client";

import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section id="book" className="relative bg-vice-bg py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimatedSection>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-vice-cyan">
            Ready to Transform Your Ride?
          </p>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl font-[family-name:var(--font-syne)]">
            Book Your Detail Today
          </h2>
          <p className="mb-10 text-lg text-vice-muted">
            Serving Broward & Miami-Dade County. Same-week appointments available.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href="tel:3058536101"
              className="inline-flex items-center justify-center rounded-full bg-vice-pink px-10 py-5 text-base font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-vice-pink-light hover:scale-105 hover:shadow-[0_0_40px_rgba(255,45,122,0.5)]"
            >
              Call or Text: (305) 853-6101
            </a>
            <p className="text-sm text-vice-muted">
              Or fill out the form below and we will get back to you within 30 minutes.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12">
          <form className="grid gap-4 text-left sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="rounded-xl border border-vice-border bg-vice-card px-5 py-4 text-white placeholder-white/30 outline-none transition-colors focus:border-vice-pink focus:shadow-[0_0_15px_rgba(255,45,122,0.15)]"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="rounded-xl border border-vice-border bg-vice-card px-5 py-4 text-white placeholder-white/30 outline-none transition-colors focus:border-vice-pink focus:shadow-[0_0_15px_rgba(255,45,122,0.15)]"
            />
            <input
              type="text"
              placeholder="Vehicle (Year, Make, Model)"
              className="rounded-xl border border-vice-border bg-vice-card px-5 py-4 text-white placeholder-white/30 outline-none transition-colors focus:border-vice-pink focus:shadow-[0_0_15px_rgba(255,45,122,0.15)]"
            />
            <select className="rounded-xl border border-vice-border bg-vice-card px-5 py-4 text-white/70 outline-none transition-colors focus:border-vice-pink">
              <option value="">Select Service</option>
              <option value="full-sedan">Full Detail — Sedan ($165)</option>
              <option value="full-suv">Full Detail — SUV ($195)</option>
              <option value="full-large">Full Detail — Large ($215)</option>
              <option value="int-sedan">Interior Only — Sedan ($125)</option>
              <option value="int-suv">Interior Only — SUV ($145)</option>
              <option value="ext-sedan">Exterior Only — Sedan ($95)</option>
            </select>
            <textarea
              placeholder="Address & preferred date/time"
              rows={3}
              className="rounded-xl border border-vice-border bg-vice-card px-5 py-4 text-white placeholder-white/30 outline-none transition-colors focus:border-vice-pink focus:shadow-[0_0_15px_rgba(255,45,122,0.15)] sm:col-span-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-vice-cyan px-5 py-4 text-sm font-bold uppercase tracking-wider text-vice-bg transition-all hover:bg-vice-cyan-dim hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] sm:col-span-2"
            >
              Request Appointment
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
