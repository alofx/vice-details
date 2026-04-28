"use client";

const services = [
  {
    name: "Full Detail",
    desc: "Interior + exterior deep clean. The complete transformation.",
    prices: [
      { vehicle: "Sedan", price: "$165" },
      { vehicle: "SUV", price: "$195" },
      { vehicle: "Large SUV / Truck", price: "$215" },
    ],
    popular: true,
  },
  {
    name: "Interior Only",
    desc: "Seats, carpets, dash, vents, and every crevice deep cleaned.",
    prices: [
      { vehicle: "Sedan", price: "$125" },
      { vehicle: "SUV", price: "$145" },
      { vehicle: "Large", price: "$165" },
    ],
    popular: false,
  },
  {
    name: "Exterior Only",
    desc: "Hand wash, clay, wax, tires, and rims brought back to life.",
    prices: [
      { vehicle: "Sedan", price: "$95" },
      { vehicle: "SUV", price: "$115" },
      { vehicle: "Large", price: "$135" },
    ],
    popular: false,
  },
];

const addOns = [
  { name: "Cloth seat stain extraction", price: "$25–$45 / seat" },
  { name: "Full seat set extraction", price: "$95+" },
  { name: "Engine bay cleaning", price: "$45" },
  { name: "Pet hair removal", price: "$35–$75" },
  { name: "Excess trash / severe mess", price: "Custom quote" },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-vice-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-vice-accent">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl font-[family-name:var(--font-syne)]">
            Premium Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-vice-muted">
            We come to you. Home, apartment, office, or job site — we handle
            every detail.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 hover:border-vice-accent/50 ${
                service.popular
                  ? "border-vice-accent/40 bg-vice-card"
                  : "border-vice-border bg-vice-card/50"
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-vice-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-vice-bg">
                  Most Popular
                </span>
              )}
              <h3 className="mb-2 text-2xl font-bold text-white font-[family-name:var(--font-syne)]">
                {service.name}
              </h3>
              <p className="mb-6 text-sm text-vice-muted">{service.desc}</p>
              <div className="space-y-3">
                {service.prices.map((p) => (
                  <div
                    key={p.vehicle}
                    className="flex items-center justify-between border-b border-vice-border pb-3"
                  >
                    <span className="text-white/80">{p.vehicle}</span>
                    <span className="text-lg font-bold text-vice-accent">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 rounded-2xl border border-vice-border bg-vice-card/30 p-8">
          <h3 className="mb-6 text-center text-xl font-bold text-white font-[family-name:var(--font-syne)]">
            Add-Ons
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between rounded-lg bg-vice-bg px-5 py-3"
              >
                <span className="text-sm text-white/80">{addon.name}</span>
                <span className="font-semibold text-vice-accent">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-vice-muted">
            Multi-car discount: $15–$25 off second vehicle at same location &
            time.
          </p>
        </div>
      </div>
    </section>
  );
}
