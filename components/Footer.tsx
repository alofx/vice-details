"use client";

export default function Footer() {
  return (
    <footer className="border-t border-vice-border bg-vice-bg py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-syne)]"
            >
              VICE<span className="text-vice-accent">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-vice-muted">
              Premium mobile car detailing across South Florida. We bring the
              shine to you.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-vice-muted">
              <li>Full Detail</li>
              <li>Interior Only</li>
              <li>Exterior Only</li>
              <li>Add-Ons & Extras</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-vice-muted">
              <li>
                <a
                  href="tel:3058536101"
                  className="transition-colors hover:text-vice-accent"
                >
                  (305) 853-6101
                </a>
              </li>
              <li>Broward & Miami-Dade County</li>
              <li>South Florida</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-vice-border pt-8 md:flex-row">
          <p className="text-xs text-vice-muted">
            © {new Date().getFullYear()} Vice Details. All rights reserved.
          </p>
          <p className="text-xs text-vice-muted">
            Premium mobile detailing. Not a cheap car wash.
          </p>
        </div>
      </div>
    </footer>
  );
}
