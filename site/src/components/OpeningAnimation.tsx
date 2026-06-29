"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onComplete: () => void;
}

/**
 * OpeningAnimation – Full-screen intro that plays when the page first loads.
 * A decorative line expands from the center, then elegant text fades in,
 * then the whole overlay fades out to reveal the envelope.
 */
export const OpeningAnimation: React.FC<Props> = ({ onComplete }) => {
  const [phase, setPhase] = useState<"line" | "text" | "exit">("line");

  useEffect(() => {
    // Phase 1: Line expands (0 → 1.2s)
    const t1 = setTimeout(() => setPhase("text"), 1200);
    // Phase 2: Text visible (1.2s → 3.5s)
    const t2 = setTimeout(() => setPhase("exit"), 3500);
    // Phase 3: Exit animation finishes (3.5s → 4.5s)
    const t3 = setTimeout(() => onComplete(), 4500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #FBEFEF 50%, #FFE2E2 100%)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Decorative ornament top */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontSize: "2rem", color: "#C5B3D3" }}
          >
            ✦
          </motion.div>

          {/* Expanding line – left side */}
          <div className="relative flex items-center justify-center w-full">
            <motion.div
              className="h-[1px]"
              style={{
                background: "linear-gradient(90deg, transparent, #C5B3D3 40%, #F5CBCB 100%)",
              }}
              initial={{ width: 0 }}
              animate={{ width: "35vw" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Center diamond */}
            <motion.div
              className="mx-4 flex-shrink-0"
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 45 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div
                className="w-3 h-3"
                style={{
                  background: "linear-gradient(135deg, #F5CBCB, #C5B3D3)",
                  boxShadow: "0 0 12px rgba(197,179,211,0.5)",
                }}
              />
            </motion.div>

            {/* Expanding line – right side */}
            <motion.div
              className="h-[1px]"
              style={{
                background: "linear-gradient(90deg, #F5CBCB, #C5B3D3 60%, transparent)",
              }}
              initial={{ width: 0 }}
              animate={{ width: "35vw" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Text that fades in after the line */}
          <AnimatePresence>
            {phase === "text" && (
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p
                  className="text-4xl md:text-5xl font-great-vibes"
                  style={{ color: "#C5B3D3" }}
                >
                  The Celebration Begins…
                </p>
                <motion.p
                  className="mt-3 text-sm tracking-[0.3em] uppercase font-outfit"
                  style={{ color: "#F5CBCB" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Sruthi & Mridhul
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Decorative ornament bottom */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ fontSize: "2rem", color: "#C5B3D3" }}
          >
            ✦
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
