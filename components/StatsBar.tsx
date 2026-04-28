"use client";

import { Star, MapPin, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Star, label: "38 Five-Star Reviews", value: "5.0" },
  { icon: MapPin, label: "Serving South Florida", value: "Broward + Dade" },
  { icon: Clock, label: "Same-Week Booking", value: "Fast" },
  { icon: Shield, label: "Fully Insured", value: "Protected" },
];

export default function StatsBar() {
  return (
    <section className="relative border-y border-vice-border bg-vice-card/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-vice-pink/20 bg-vice-card">
                <stat.icon className="h-5 w-5 text-vice-pink" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{stat.value}</p>
                <p className="text-xs text-vice-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
