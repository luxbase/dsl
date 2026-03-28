"use client";

import { Check, Phone, Users } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BUSINESS, TRUST_SIGNALS } from "@/lib/constants";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?auto=format&fit=crop&w=900&q=80";

const whyUs = [
  "Locally owned and operated — born and raised in San Antonio",
  "All crew members background-checked and professionally trained",
  "We show up on time, every time — or your next service is free",
  "Custom plans tailored to your yard's specific soil and climate",
  "Transparent pricing — no hidden fees, no surprises",
  "Fully licensed (TPCL), insured, and bonded in Texas",
];

export function About() {
  return (
    <section id="about" className="section-padding bg-[rgb(var(--bg-primary))]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Image side */}
          <AnimateIn direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={ABOUT_IMAGE}
                  alt="Daniel Saldiver team working on a San Antonio landscape project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-forest-900/20 to-transparent" />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 grid grid-cols-2 gap-3">
                {TRUST_SIGNALS.slice(0, 2).map((s) => (
                  <div
                    key={s.label}
                    className="card-base px-4 py-4 text-center min-w-[110px] shadow-xl"
                  >
                    <div className="stat-value text-3xl mb-0.5">{s.value}</div>
                    <div className="text-[10px] font-medium text-[rgb(var(--text-muted))] uppercase tracking-wide leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Badge overlay */}
              <div className="absolute top-4 left-4 px-3 py-2 rounded-xl
                              bg-forest-600 dark:bg-forest-500 shadow-lg">
                <div className="text-white dark:text-obsidian-950 text-xs font-bold uppercase tracking-wide">
                  Est. 2015
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Text side */}
          <AnimateIn direction="right" delay={0.15}>
            <div>
              <span className="section-label">
                <Users size={12} />
                About Us
              </span>
              <h2 className="heading-display text-display-lg font-bold text-[rgb(var(--text-primary))] mb-6">
                Your Yard Deserves More Than{" "}
                <span className="text-gradient italic">Average</span>
              </h2>

              <p className="text-[rgb(var(--text-secondary))] text-base leading-relaxed mb-5">
                Daniel Saldiver has been transforming San Antonio properties for over a decade.
                What started as a one-man crew with a pickup truck has grown into a trusted
                landscaping company serving hundreds of families across the greater San Antonio area.
              </p>
              <p className="text-[rgb(var(--text-secondary))] text-base leading-relaxed mb-8">
                Our philosophy is simple: treat every yard like it&apos;s our own. We combine
                deep knowledge of Texas-native plants, water-efficient design, and old-fashioned
                attention to detail to create outdoor spaces you&apos;ll actually use and enjoy.
              </p>

              {/* Why us list */}
              <ul className="space-y-3 mb-8">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[rgb(var(--text-secondary))]">
                    <span className="w-5 h-5 rounded-full bg-forest-100 dark:bg-forest-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-forest-600 dark:text-forest-400" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stat row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-5 rounded-2xl bg-[rgb(var(--bg-surface))]">
                {TRUST_SIGNALS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="stat-value text-2xl mb-0.5">{s.value}</div>
                    <div className="text-[11px] font-medium text-[rgb(var(--text-muted))] uppercase tracking-wide leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <a href={BUSINESS.phoneHref} className="btn-primary">
                <Phone size={16} />
                Call for a Free Estimate
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
