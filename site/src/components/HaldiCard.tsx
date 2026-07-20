"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Details for the Haldi ceremony with image background.
 * Text is positioned in the upper golden brush stroke of the haldi.webp image.
 */
export const HaldiCard = () => {
  return (
    <section className="my-10 rounded-3xl overflow-hidden shadow-2xl relative w-full" style={{ aspectRatio: "4/5" }}>
      {/* Background Image */}
      <img
        src="/assets/images/haldi.webp"
        alt="Haldi Ceremony"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.95) contrast(1.05)" }}
      />
      
      {/* Subtle overlay for text readability without obscuring the image heavily */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content Container positioned high up in the brush stroke */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-[22%] px-4">
        <div className="w-full text-center relative z-10">
          <motion.div
            className="flex items-center justify-center gap-2 mb-1"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="h-[1px] w-6 bg-[#8B6F3E]/80" />
            <span className="text-[9px] tracking-[0.2em] uppercase font-outfit text-[#5A4A2A] font-bold drop-shadow-sm">
              Pre-Wedding
            </span>
            <div className="h-[1px] w-6 bg-[#8B6F3E]/80" />
          </motion.div>

          <motion.h3
            className="text-[2.6rem] leading-tight font-great-vibes mb-2 text-[#4A3A1A] drop-shadow-md"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.55, delay: 0.13 }}
          >
            Haldi Ceremony
          </motion.h3>

          <motion.div
            className="font-outfit space-y-0.5 mb-3 text-[#4A3A1A] max-w-[90%] mx-auto drop-shadow-sm"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.5, delay: 0.26 }}
          >
            <p className="font-extrabold text-sm tracking-wide">Bride&apos;s Residence</p>
            <p className="font-bold opacity-90 text-[10px]">Punnakkaparambil house,<br/>Lokamaleswaram PO, Kodungallur</p>
          </motion.div>

          <motion.div
            className="inline-block px-3 py-1.5 rounded-full text-[10px] font-outfit font-extrabold tracking-wide shadow-md border border-[#D4A854]/50 bg-[#FFF9E6]/90 backdrop-blur-md text-[#5A4A2A] whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, delay: 0.39 }}
          >
            20 Aug 2026 &nbsp;|&nbsp; Evening
          </motion.div>
        </div>
      </div>
    </section>
  );
};
