"use client";

import { Scissors, Leaf, Wrench, Droplets, Check, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES, BUSINESS } from "@/lib/constants";
import { AnimateIn, StaggerContainer, staggerChild } from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";

const iconMap = {
  Scissors, Leaf, Wrench, Droplets,
} as const;

export function Services() {
  return (
    <section id="services" className="section-padding bg-[rgb(var(--bg-primary))]">
      <div className="container-custom">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="section-label">
            <Leaf size={12} />
            What We Do
          </span>
          <h2 className="heading-display text-display-lg font-bold text-[rgb(var(--text-primary))] mb-4">
            Services Built for{" "}
            <span className="text-gradient">San Antonio</span>
          </h2>
          <p className="text-[rgb(var(--text-secondary))] text-lg max-w-2xl mx-auto leading-relaxed">
            From weekly lawn maintenance to full landscape transformations — we handle
            every aspect of your outdoor space with precision and care.
          </p>
        </AnimateIn>

        {/* Service Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          stagger={0.12}
          delay={0.1}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Leaf;

            return (
              <motion.div
                key={service.id}
                variants={staggerChild}
                className="card-base group overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden rounded-t-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* Icon badge */}
                    <div className={cn(
                      "absolute bottom-4 left-4",
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      "bg-forest-600 dark:bg-forest-500 shadow-lg"
                    )}>
                      <Icon size={20} className="text-white dark:text-obsidian-950" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="heading-display text-xl font-bold text-[rgb(var(--text-primary))] mb-2 group-hover:text-[rgb(var(--accent))] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[rgb(var(--text-secondary))] text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-[rgb(var(--text-secondary))]">
                          <span className="w-4 h-4 rounded-full bg-forest-100 dark:bg-forest-900/50 flex items-center justify-center flex-shrink-0">
                            <Check size={10} className="text-forest-600 dark:text-forest-400" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href={BUSINESS.phoneHref}
                      className="inline-flex items-center gap-2 text-sm font-semibold
                                 text-[rgb(var(--accent))] hover:gap-3 transition-all duration-200"
                    >
                      <Phone size={14} />
                      Get a Free Quote
                      <span className="ml-auto text-[rgb(var(--accent)/0.4)]">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimateIn delay={0.3} className="text-center mt-12">
          <p className="text-[rgb(var(--text-secondary))] mb-4">
            Not sure which service you need? We offer <strong className="text-[rgb(var(--text-primary))]">free consultations</strong> — no pressure, no obligation.
          </p>
          <a href={BUSINESS.phoneHref} className="btn-primary">
            <Phone size={16} />
            Schedule a Free Consultation
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
