"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Images } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";
import { AnimateIn, StaggerContainer, staggerChild } from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [lightbox, setLightbox] = useState<null | typeof GALLERY_IMAGES[number]>(null);

  const openLightbox = (img: typeof GALLERY_IMAGES[number]) => setLightbox(img);
  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <section
        id="gallery"
        className="section-padding bg-[rgb(var(--bg-secondary))]"
      >
        <div className="container-custom">
          {/* Header */}
          <AnimateIn className="text-center mb-16">
            <span className="section-label">
              <Images size={12} />
              Our Work
            </span>
            <h2 className="heading-display text-display-lg font-bold text-[rgb(var(--text-primary))] mb-4">
              Results That{" "}
              <span className="text-gradient italic">Speak for Themselves</span>
            </h2>
            <p className="text-[rgb(var(--text-secondary))] text-lg max-w-2xl mx-auto">
              Every yard is a canvas. Browse real transformations from San Antonio
              properties — residential and commercial.
            </p>
          </AnimateIn>

          {/* Masonry-style Grid */}
          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px]"
            stagger={0.07}
            delay={0.1}
          >
            {GALLERY_IMAGES.map((img) => (
              <motion.div
                key={img.id}
                variants={staggerChild}
                className={cn("gallery-item", img.span)}
                onClick={() => openLightbox(img)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="gallery-item-overlay">
                  <div className="flex items-end justify-between w-full">
                    <span className="text-white font-semibold text-sm drop-shadow">
                      {img.label}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ml-2">
                      <ZoomIn size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Always visible label on mobile */}
                <div className="absolute top-3 left-3 md:hidden">
                  <span className="badge-green text-xs">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          <AnimateIn delay={0.3} className="text-center mt-10">
            <p className="text-[rgb(var(--text-muted))] text-sm">
              Click any photo to enlarge &nbsp;·&nbsp; All photos from completed San Antonio projects
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4
                       bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-xl
                         bg-white/10 hover:bg-white/20 border border-white/20
                         flex items-center justify-center text-white transition-colors"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src.replace("w=900", "w=1400").replace("w=600", "w=1400")}
                alt={lightbox.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-white font-semibold text-sm">{lightbox.label}</span>
                <p className="text-white/70 text-xs mt-0.5">{lightbox.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
