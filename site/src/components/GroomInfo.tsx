"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Information about the groom with decorative flower accent.
 */
export const GroomInfo = () => {
  return (
    <motion.section
      className="rounded-2xl overflow-hidden shadow-lg h-full"
      style={{ background: "linear-gradient(135deg, #F5F0FF 0%, #FFE2E2 100%)" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Flower accent */}
      <div className="relative w-full h-36 overflow-hidden">
        <img
          src="/assets/images/FLOWERS (3).webp"
          alt="Decorative flowers"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 30%, rgba(245,240,255,0.9) 100%)",
          }}
        />
      </div>

      <div className="p-5 text-center -mt-4 relative">
        {/* Small heart icon */}
        <div className="w-8 h-8 mx-auto mb-3 rounded-full flex items-center justify-center"
          style={{ background: "#C5B3D330" }}
        >
          <img src="/assets/images/heart.webp" alt="" className="w-5 h-5 object-contain" />
        </div>

        <p className="text-xs tracking-[0.2em] uppercase font-outfit mb-2" style={{ color: "#C5B3D3" }}>
          The Groom
        </p>
        <h3 className="text-2xl font-great-vibes mb-3" style={{ color: "#6B5477" }}>
          Mridhul TM
        </h3>
        <div className="space-y-1 font-outfit text-sm" style={{ color: "#5A3D4A" }}>
          <p><span style={{ color: "#C5B3D3" }}>Father:</span> Manoj</p>
          <p><span style={{ color: "#C5B3D3" }}>Mother:</span> Sangeetha</p>
        </div>
        <p className="mt-3 font-outfit text-xs" style={{ color: "#8B6F7E" }}>
          Poolani, Chalakudy
        </p>
      </div>
    </motion.section>
  );
};
