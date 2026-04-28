"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    text: "Best detail I've ever had. Car looks brand new. They came right to my apartment complex too.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    text: "Professional, on time, and the interior smells amazing. Worth every penny.",
    rating: 5,
  },
  {
    name: "David R.",
    text: "Had my work truck detailed during my shift. Came back to a completely different vehicle.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    text: "I've tried 3 other mobile detailers. Vice is the only one I'll call from now on.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-vice-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-vice-cyan">
            38 Five-Star Reviews
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl font-[family-name:var(--font-syne)]">
            What Customers Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-vice-border bg-vice-card/50 p-8 transition-all duration-300 hover:border-vice-cyan/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-vice-pink text-vice-pink"
                  />
                ))}
              </div>
              <p className="mb-4 text-white/80 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-sm font-semibold text-vice-cyan">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
