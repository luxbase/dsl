import { Phone, Mail, MapPin, Leaf, ArrowRight } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(var(--bg-secondary))] border-t border-[rgb(var(--border))]">
      <div className="container-custom">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-forest-600 dark:bg-forest-500 flex-shrink-0">
                <Leaf size={18} className="text-white dark:text-obsidian-950" />
              </div>
              <div>
                <div className="font-display font-bold text-sm leading-tight text-[rgb(var(--text-primary))]">
                  Daniel Saldiver
                </div>
                <div className="text-xs leading-tight text-[rgb(var(--text-muted))]">
                  Landscaping
                </div>
              </div>
            </div>
            <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed mb-5">
              Transforming San Antonio yards into living works of art since 2015.
              Licensed, insured, and committed to excellence.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--accent))] hover:opacity-80 transition-opacity"
              >
                <Phone size={14} />
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors"
              >
                <Mail size={14} />
                {BUSINESS.email}
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
                <MapPin size={14} />
                {BUSINESS.address}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))] uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-1.5 text-sm text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent))] transition-colors group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))] uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-1.5 text-sm text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent))] transition-colors group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-[rgb(var(--text-primary))] uppercase tracking-wider mb-4">
              Get a Free Estimate
            </h3>
            <p className="text-sm text-[rgb(var(--text-secondary))] mb-4 leading-relaxed">
              Ready to transform your outdoor space? Call today for a free, no-obligation estimate.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="btn-primary text-sm px-5 py-3 w-full justify-center"
            >
              <Phone size={15} />
              {BUSINESS.phone}
            </a>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge-green text-xs">Free Estimates</span>
              <span className="badge-green text-xs">Licensed & Insured</span>
              <span className="badge-green text-xs">5-Star Rated</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[rgb(var(--border))] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[rgb(var(--text-muted))] text-center sm:text-left">
            © {year} {BUSINESS.name}. All rights reserved. {BUSINESS.serviceArea}.
          </p>
          <p className="text-xs text-[rgb(var(--text-muted))]">
            {BUSINESS.license}
          </p>
        </div>
      </div>
    </footer>
  );
}
