"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Venue information for the main wedding ceremony.
 * Text is perfectly positioned in the upper archway of the wedding_ceremony.webp image.
 */
export const VenueCard = () => {
  return (
    <section className="my-10 rounded-3xl overflow-hidden shadow-2xl relative w-full aspect-[4/5] md:aspect-[3/4]">
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
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-start pt-1 px-6 md:px-10">
        <motion.div
          className="w-full text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="h-[1px] w-6 bg-[#5A3D4A]/70" />
            <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-outfit text-[#4A2D3A] font-bold drop-shadow-sm">
              Main Event
            </span>
            <div className="h-[1px] w-6 bg-[#5A3D4A]/70" />
          </div>

          <h2 className="text-5xl md:text-6xl font-great-vibes mb-2 text-[#3A1D2A] drop-shadow-md">
            Wedding Ceremony
          </h2>
          
          <div className="font-outfit text-xs md:text-sm space-y-1 mb-3 text-[#3A1D2A] max-w-[85%] mx-auto drop-shadow-sm">
            <p className="font-extrabold text-sm md:text-base tracking-wide">Sree Narayana Hall</p>
            <p className="font-bold opacity-90 text-[10px] md:text-[11px]">Pettumma, Kodungallur, Kerala</p>
          </div>
          
          <div className="inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-outfit font-extrabold tracking-wider shadow-md border border-[#8B6F7E]/40 bg-white/90 backdrop-blur-md text-[#5A3D4A]">
            22 Aug 2026 &nbsp;|&nbsp; 10:00 AM – 2:00 PM
          </div>
        </motion.div>
      </div>
    </section>
  );
};
