"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useAppState } from "../context/AppStateContext";

/**
 * Simplified preloader – auto-completes immediately since the
 * OpeningAnimation now handles the intro experience.
 */
export const Preloader = () => {
  const { loadingProgress } = useAppState();

  if (loadingProgress >= 100) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-[1000]"
        style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #FBEFEF 50%, #FFE2E2 100%)" }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            className="w-48 h-[2px] mx-auto rounded-full overflow-hidden mb-4"
            style={{ background: "#FFE2E2" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #F5CBCB, #C5B3D3)" }}
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <p className="text-xs tracking-[0.3em] uppercase font-outfit" style={{ color: "#C5B3D3" }}>
            Loading…
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
