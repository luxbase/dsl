"use client";

import { Star, Quote, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { AnimateIn, StaggerContainer, staggerChild } from "@/components/ui/AnimateIn";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300 dark:text-gray-600"}
        />
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-forest-500 to-forest-700
                    flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
      {initials}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-[rgb(var(--bg-secondary))] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5
                      bg-forest-500 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5
                      bg-forest-500 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <span className="section-label">
            <MessageSquare size={12} />
            Customer Reviews
          </span>
          <h2 className="heading-display text-display-lg font-bold text-[rgb(var(--text-primary))] mb-4">
            What San Antonio Homeowners{" "}
            <span className="text-gradient italic">Are Saying</span>
          </h2>
          <p className="text-[rgb(var(--text-secondary))] text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what our clients say after
            experiencing the Saldiver difference.
          </p>

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-2xl
                          bg-[rgb(var(--bg-card))] border border-[rgb(var(--border))]
                          shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-[rgb(var(--text-primary))] font-bold text-lg">5.0</span>
            <span className="text-[rgb(var(--text-muted))] text-sm">
              · 100+ reviews · Google & Yelp verified
            </span>
          </div>
        </AnimateIn>

        {/* Testimonial cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.1}
          delay={0.1}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={staggerChild}
              className="card-base p-6 flex flex-col gap-4"
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="text-forest-400/50 dark:text-forest-500/40 flex-shrink-0"
              />

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="text-[rgb(var(--text-secondary))] text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[rgb(var(--border))]">
                <Avatar initials={t.avatar} />
                <div>
                  <div className="text-sm font-semibold text-[rgb(var(--text-primary))]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[rgb(var(--text-muted))]">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Note */}
        <AnimateIn delay={0.3} className="text-center mt-8">
          <p className="text-[rgb(var(--text-muted))] text-xs">
            Testimonials represent real customer experiences. Names and locations may be abbreviated for privacy.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
