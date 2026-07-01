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

        <div className="p-6 md:p-10 text-center relative z-10 flex flex-col items-center">
          
          {/* Top subtle decoration */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scaleX: 0.5 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#8B6F7E]/40" />
            <span className="text-[#8B6F7E]/60 text-sm">✦</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#8B6F7E]/40" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-great-vibes mb-5"
            style={{ color: "#6B4F5E" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            With Love, S & M
          </motion.h2>
          
          <motion.div
            className="w-8 h-8 rounded-full bg-[#FFF0F0] flex items-center justify-center mb-6 shadow-inner border border-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.4, delay: 0.28, type: "spring", stiffness: 200 }}
          >
            <span className="text-xs">🤍</span>
          </motion.div>

          <motion.p
            className="font-outfit text-sm leading-relaxed max-w-xs mx-auto"
            style={{ color: "#5A3D4A" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0.38 }}
          >
            Every beautiful memory is made even more special when shared with loved ones. 
                Your presence, prayers, and blessings would mean the world to us 
                       as we celebrate the beginning of our forever.
          </motion.p>

          {/* Bottom subtle decoration */}
          <motion.div
            className="mt-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, delay: 0.52 }}
          >
            <p className="font-outfit text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold" style={{ color: "#8B6F7E" }}>
              Please Respond to the Rsvp form
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#8B6F7E]/30 to-transparent mt-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
