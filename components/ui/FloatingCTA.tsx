"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/lib/constants";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-4 sm:right-6 z-50"
        >
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.phone}`}
            className="flex items-center gap-3 px-5 py-3.5 rounded-2xl
                       bg-forest-600 dark:bg-forest-500 text-white dark:text-obsidian-950
                       font-semibold text-sm shadow-2xl
                       hover:bg-forest-700 dark:hover:bg-forest-400
                       transition-all duration-200 group"
            style={{ boxShadow: "0 8px 32px rgba(22,163,74,0.45)" }}
          >
            <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <Phone size={15} className="group-hover:rotate-12 transition-transform" />
            </div>
            <span className="hidden sm:block">{BUSINESS.phone}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
