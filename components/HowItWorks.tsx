"use client";

import { Phone, Calendar, Sparkles, Star } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Book",
    desc: "Call, text, or book online. Tell us your vehicle and location.",
  },
  {
    icon: Calendar,
    title: "Schedule",
    desc: "Pick a date and time. We confirm and send a reminder 24hrs before.",
  },
  {
    icon: Sparkles,
    title: "Detail",
    desc: "We arrive fully equipped. You relax while we transform your ride.",
  },
  {
    icon: Star,
    title: "Enjoy",
    desc: "Pay easily. Leave a review. We'll remind you when it's time to rebook.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-vice-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-vice-cyan">
            Simple Process
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl font-[family-name:var(--font-syne)]">
            How It Works
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-vice-pink/30 bg-vice-card shadow-[0_0_20px_rgba(255,45,122,0.1)]">
                <step.icon className="h-7 w-7 text-vice-pink" />
              </div>
              <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-vice-cyan">
                Step {i + 1}
              </span>
              <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-vice-muted">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
