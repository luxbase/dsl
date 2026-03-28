"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, ChevronDown, Star, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=85";

const trustBadges = [
  { icon: Star,   label: "5-Star Rated"        },
  { icon: Shield, label: "Licensed & Insured"   },
  { icon: Award,  label: "10+ Years Experience" },
];

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded]   = useState(false);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY * 0.35;
      parallaxRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 -bottom-24 will-change-transform"
      >
        {/* Placeholder bg while image loads */}
        <div className="absolute inset-0 bg-obsidian-900" />

        <img
          src={HERO_IMAGE}
          alt="Lush professionally maintained lawn in San Antonio Texas"
          className={cn(
            "w-full h-full object-cover transition-opacity duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setLoaded(true)}
          fetchPriority="high"
        />

        {/* Gradient overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Dark theme extra overlay */}
        <div className="absolute inset-0 dark:bg-black/20" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16 flex flex-col items-center text-center">
        {/* Service area badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
                     bg-white/10 backdrop-blur-sm border border-white/20 text-white/90
                     text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
          Serving San Antonio & Surrounding Areas
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="heading-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                     font-bold max-w-4xl mx-auto mb-6"
        >
          San Antonio&apos;s Premier{" "}
          <span className="italic text-forest-400">Landscaping</span>{" "}
          Experts
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We design, build, and maintain outdoor spaces that elevate your property value
          and make your neighbors look twice. Free estimates on every project.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <a
            href={BUSINESS.phoneHref}
            className="btn-call text-base px-8 py-4 min-w-52"
          >
            <Phone size={19} />
            Call {BUSINESS.phone}
          </a>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base
                       border-2 border-white/50 text-white hover:bg-white/10 hover:border-white/80
                       transition-all duration-200 backdrop-blur-sm min-w-48"
          >
            View Our Services
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full
                         bg-white/10 backdrop-blur-sm border border-white/20
                         text-white text-sm font-medium"
            >
              <Icon size={14} className="text-forest-400 flex-shrink-0" />
              {label}
            </div>
          ))}
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full
                       bg-white/10 backdrop-blur-sm border border-white/20
                       text-white text-sm font-medium"
          >
            <span className="text-forest-400 font-bold">FREE</span>
            Estimates
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-1.5 text-white/60
                   hover:text-white transition-colors group"
        aria-label="Scroll to services"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
        <ChevronDown
          size={20}
          className="animate-bounce group-hover:text-forest-400 transition-colors"
        />
      </motion.button>
    </section>
  );
}
