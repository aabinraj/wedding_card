"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Details for the Haldi ceremony with image background.
 * Text is positioned in the upper golden brush stroke of the haldi.webp image.
 */
export const HaldiCard = () => {
  return (
    <section className="my-10 rounded-3xl overflow-hidden shadow-2xl relative w-full aspect-[4/5] md:aspect-[3/4]">
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
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-start pt-[22%] px-6 md:px-10">
        <motion.div
          className="w-full text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="h-[1px] w-6 bg-[#8B6F3E]/80" />
            <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-outfit text-[#5A4A2A] font-bold drop-shadow-sm">
              Pre-Wedding
            </span>
            <div className="h-[1px] w-6 bg-[#8B6F3E]/80" />
          </div>

          <h3 className="text-5xl md:text-6xl font-great-vibes mb-2 text-[#4A3A1A] drop-shadow-md">
            Haldi Ceremony
          </h3>
          
          <div className="font-outfit text-xs md:text-sm space-y-1 mb-3 text-[#4A3A1A] max-w-[85%] mx-auto drop-shadow-sm">
            <p className="font-extrabold text-sm md:text-base tracking-wide">Bride&apos;s Residence</p>
            <p className="font-bold opacity-90 text-[10px] md:text-[11px]">Punnakkaparambil house,<br/>Lokamaleswaram PO, Kodungallur</p>
          </div>
          
          <div className="inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-outfit font-extrabold tracking-wider shadow-md border border-[#D4A854]/50 bg-[#FFF9E6]/90 backdrop-blur-md text-[#5A4A2A]">
            20 Aug 2026 &nbsp;|&nbsp; 12:00 PM – 2:00 PM
          </div>
        </motion.div>
      </div>
    </section>
  );
};
