"use client";
import React from "react";
import { motion } from "framer-motion";
import { useAppState } from "../context/AppStateContext";
import { playSeal, playBackground } from "../lib/audio";

/**
 * Envelope component – shows the wedding envelope image (which contains a wax seal).
 * Clicking anywhere on it plays the seal sound, starts background music,
 * and triggers a slide-up exit animation before revealing the invitation.
 */
export const Envelope = () => {
  const { setIsOpen } = useAppState();

  const handleClick = () => {
    playSeal();
    playBackground();
    setIsOpen(true);
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-40 cursor-pointer"
      style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #FBEFEF 50%, #FFE2E2 100%)" }}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6 }}
    >
      {/* Subtle instruction text */}
      <motion.p
        className="text-sm tracking-[0.2em] uppercase font-outfit mb-6"
        style={{ color: "#C5B3D3" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        Tap to Open
      </motion.p>

      {/* Envelope image with breathing animation */}
      <motion.div
        className="relative w-full max-w-lg aspect-square px-4 md:px-8"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
        }}
      >
        <img
          src="/assets/images/envelope.webp"
          alt="Wedding Envelope"
          className="w-full h-full object-contain drop-shadow-2xl"
          draggable={false}
        />
        {/* Glow effect behind the envelope */}
        <div
          className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #C5B3D3 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* Names below the envelope */}
      <motion.p
        className="mt-8 text-3xl font-great-vibes"
        style={{ color: "#F5CBCB" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Sruthi & Mridhul
      </motion.p>
    </motion.div>
  );
};
