"use client";

import { Phone, Calendar, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";
import { AnimateIn } from "@/components/ui/AnimateIn";

const CTA_BG =
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80";

export function CTASection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CTA_BG}
          alt="Beautiful San Antonio lawn"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/80 to-forest-950/90" />
        <div className="absolute inset-0 dark:bg-black/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[800px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />

      <div className="container-custom relative z-10 text-center">
        <AnimateIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
                          bg-forest-600/30 backdrop-blur-sm border border-forest-500/30 text-forest-300
                          text-sm font-medium">
            <Leaf size={14} />
            Ready to Get Started?
          </div>

          <h2 className="heading-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Your Dream Yard Is One{" "}
            <span className="text-forest-400 italic">Call Away</span>
          </h2>

          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Free estimates. No pressure. No obligation. Just honest advice from San
            Antonio&apos;s most trusted landscaping team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={BUSINESS.phoneHref}
              className="btn-call text-lg px-9 py-5 min-w-60"
            >
              <Phone size={22} />
              {BUSINESS.phone}
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-9 py-5 rounded-xl
                         font-bold text-lg border-2 border-white/40 text-white
                         hover:bg-white/10 hover:border-white/70
                         backdrop-blur-sm transition-all duration-200 min-w-52"
            >
              <Calendar size={20} />
              Request a Quote
            </button>
          </div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3
                       text-white/60 text-sm font-medium"
          >
            {[
              "Free Estimates",
              "Licensed & Insured",
              "10+ Years Experience",
              "Serving All San Antonio",
              "5-Star Rated",
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                )}
                {item}
              </span>
            ))}
          </motion.div>
        </AnimateIn>
      </div>
    </section>
  );
}
