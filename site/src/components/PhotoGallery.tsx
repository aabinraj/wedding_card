"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Correct paths matching actual filenames (with space before parenthesis, .jpeg extension)
const images = [
  "/assets/images/gallerypic (1).webp",
  "/assets/images/gallerypic (2).webp",
  "/assets/images/gallerypic (3).webp",
  "/assets/images/gallerypic (4).webp",
  "/assets/images/gallerypic (5).webp",
  "/assets/images/gallerypic (6).webp",
  "/assets/images/gallerypic (7).webp",
  "/assets/images/gallerypic (8).webp",
  "/assets/images/gallerypic (9).webp"
];

export const PhotoGallery = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setOpenIdx(idx);
  const closeLightbox = () => setOpenIdx(null);

  return (
    <section
      className="my-8 p-6 md:p-8 rounded-2xl shadow-lg"
      style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #FFE2E2 100%)" }}
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-[1px] w-10" style={{ background: "#C5B3D3" }} />
          <span className="text-xs tracking-[0.25em] uppercase font-outfit" style={{ color: "#C5B3D3" }}>
            Memories
          </span>
          <div className="h-[1px] w-10" style={{ background: "#C5B3D3" }} />
        </div>
        <h2 className="text-3xl font-great-vibes" style={{ color: "#8B6F7E" }}>
          Photo Gallery
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {images.slice(0, 8).map((src, i) => (
          <motion.button
            key={i}
            onClick={() => openLightbox(i)}
            className="focus:outline-none rounded-xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.04, duration: 0.25 }}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-36 md:h-48 object-cover"
              loading="lazy"
            />
          </motion.button>
        ))}
      </div>

      {/* 9th image centred on its own row */}
      {images.length === 9 && (
        <div className="flex justify-center mt-3 md:mt-4">
          <motion.button
            onClick={() => openLightbox(8)}
            className="focus:outline-none rounded-xl overflow-hidden shadow-md w-[calc(50%-6px)] md:w-[calc(50%-8px)]"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 8 * 0.04, duration: 0.25 }}
          >
            <img
              src={images[8]}
              alt="Gallery 9"
              className="w-full h-36 md:h-48 object-cover"
              loading="lazy"
            />
          </motion.button>
        </div>
      )}

      {/* Lightbox */}
      {openIdx !== null &&
        createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition"
                aria-label="Close"
              >
                <FaTimes size={28} />
              </button>
              <motion.img
                src={images[openIdx]}
                alt={`Gallery ${openIdx + 1}`}
                className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};
