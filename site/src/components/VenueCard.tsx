"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Venue information for the main wedding ceremony.
 * Text is perfectly positioned in the upper archway of the wedding_ceremony.webp image.
 */
export const VenueCard = () => {
  return (
    <section className="my-10 rounded-3xl overflow-hidden shadow-2xl relative w-full" style={{ aspectRatio: "4/5" }}>
      {/* Background Image */}
      <img
        src="/assets/images/wedding_ceremony.webp"
        alt="Wedding Ceremony Venue"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.9) contrast(1.1)" }}
      />
      
      {/* Subtle Overlay to help text pop */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content Container positioned precisely in the upper archway space */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-3 px-4">
        <div className="w-full text-center relative z-10">
          <motion.div
            className="flex items-center justify-center gap-2 mb-1"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="h-[1px] w-6 bg-[#5A3D4A]/70" />
            <span className="text-[9px] tracking-[0.2em] uppercase font-outfit text-[#4A2D3A] font-bold drop-shadow-sm">
              Main Event
            </span>
            <div className="h-[1px] w-6 bg-[#5A3D4A]/70" />
          </motion.div>

          <motion.h2
            className="text-[2.6rem] leading-tight font-great-vibes mb-2 text-[#3A1D2A] drop-shadow-md"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            Wedding Ceremony
          </motion.h2>

          <motion.div
            className="font-outfit space-y-0.5 mb-3 text-[#3A1D2A] max-w-[90%] mx-auto drop-shadow-sm"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <p className="font-extrabold text-sm tracking-wide">Sree Narayana Hall</p>
            <p className="font-bold opacity-90 text-[10px]">Pettumma, Kodungallur, Kerala</p>
          </motion.div>

          <motion.div
            className="inline-block px-3 py-1.5 rounded-full text-[10px] font-outfit font-extrabold tracking-wide shadow-md border border-[#8B6F7E]/40 bg-white/90 backdrop-blur-md text-[#5A3D4A] whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, delay: 0.36 }}
          >
            22 Aug 2026 &nbsp;|&nbsp; 10:00 AM – 2:00 PM
          </motion.div>
        </div>
      </div>
    </section>
  );
};
