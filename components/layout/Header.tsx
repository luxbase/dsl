"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[rgb(var(--bg-primary)/0.95)] backdrop-blur-md border-b border-[rgb(var(--border))] shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2.5 group"
            >
              <div className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
                "bg-forest-600 dark:bg-forest-500 group-hover:bg-forest-700 dark:group-hover:bg-forest-400",
                "transition-colors duration-200"
              )}>
                <Leaf size={18} className="text-white dark:text-obsidian-950" />
              </div>
              <div className="hidden xs:block">
                <div className={cn(
                  "font-display font-bold text-sm leading-tight",
                  scrolled || menuOpen
                    ? "text-[rgb(var(--text-primary))]"
                    : "text-white"
                )}>
                  Daniel Saldiver
                </div>
                <div className={cn(
                  "text-xs leading-tight font-medium",
                  scrolled || menuOpen
                    ? "text-[rgb(var(--text-muted))]"
                    : "text-white/80"
                )}>
                  Landscaping
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeSection === link.href.replace("#", "")
                      ? "text-[rgb(var(--accent))] bg-[rgb(var(--accent)/0.1)]"
                      : scrolled
                        ? "text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-surface))]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle
                className={cn(
                  !scrolled && "border-white/20 bg-white/10 hover:bg-white/20 text-white"
                )}
              />

              {/* Call CTA — desktop */}
              <a
                href={BUSINESS.phoneHref}
                className={cn(
                  "hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl",
                  "font-semibold text-sm transition-all duration-200",
                  scrolled
                    ? "bg-forest-600 text-white hover:bg-forest-700 dark:bg-forest-500 dark:text-obsidian-950 dark:hover:bg-forest-400"
                    : "bg-white text-forest-800 hover:bg-forest-50"
                )}
                style={{ boxShadow: "0 2px 12px rgba(22,163,74,0.3)" }}
              >
                <Phone size={15} className="flex-shrink-0" />
                <span>{BUSINESS.phone}</span>
              </a>

              {/* Hamburger */}
              <button
                className={cn(
                  "md:hidden w-10 h-10 flex items-center justify-center rounded-xl",
                  "border transition-colors duration-200",
                  scrolled
                    ? "border-[rgb(var(--border))] text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-surface))]"
                    : "border-white/20 text-white hover:bg-white/10"
                )}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 md:hidden
                       bg-[rgb(var(--bg-primary)/0.97)] backdrop-blur-lg
                       border-b border-[rgb(var(--border))] shadow-xl"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-base font-medium",
                    "transition-colors duration-150",
                    activeSection === link.href.replace("#", "")
                      ? "bg-[rgb(var(--accent)/0.1)] text-[rgb(var(--accent))]"
                      : "text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-surface))] hover:text-[rgb(var(--text-primary))]"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="pt-2 mt-2 border-t border-[rgb(var(--border))]">
                <a
                  href={BUSINESS.phoneHref}
                  className="btn-call w-full justify-center text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone size={18} />
                  Call {BUSINESS.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
