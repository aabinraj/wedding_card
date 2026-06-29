"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Closing note shown at the end of the invitation with an elegant design.
 */
export const FinalNote = () => {
  return (
    <section className="my-12 px-2">
      <motion.div
        className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
        style={{ background: "linear-gradient(145deg, #FFF5F5 0%, #FFFFFF 50%, #FBEFEF 100%)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle decorative border overlay */}
        <div className="absolute inset-2 md:inset-3 border border-[#8B6F7E]/20 rounded-[2rem] pointer-events-none" />

        <div className="p-10 md:p-14 text-center relative z-10 flex flex-col items-center">
          
          {/* Top subtle decoration */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#8B6F7E]/40" />
            <span className="text-[#8B6F7E]/60 text-sm">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#8B6F7E]/40" />
          </div>

          <h2 className="text-4xl md:text-5xl font-great-vibes mb-5" style={{ color: "#6B4F5E" }}>
            With Love & Blessings
          </h2>
          
          <div className="w-8 h-8 rounded-full bg-[#FFF0F0] flex items-center justify-center mb-6 shadow-inner border border-white">
            <span className="text-xs">🤍</span>
          </div>

          <p className="font-outfit text-sm md:text-base leading-relaxed max-w-md mx-auto" style={{ color: "#5A3D4A" }}>
            We are truly blessed to have you in our lives.
            Your presence at our wedding would make our special day
            even more memorable.
          </p>

          {/* Bottom subtle decoration */}
          <div className="mt-8 flex flex-col items-center">
            <p className="font-outfit text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold" style={{ color: "#8B6F7E" }}>
              Please RSVP at your earliest convenience
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#8B6F7E]/30 to-transparent mt-4" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
