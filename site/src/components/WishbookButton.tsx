"use client";
import React, { useState } from "react";
import { WishbookModal } from "./WishbookModal";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * Floating button that opens the wishbook modal.
 */
export const WishbookButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 flex items-center justify-center shadow-xl z-30"
        style={{
          background: "linear-gradient(135deg, #F5CBCB, #C5B3D3)",
          color: "#fff",
          boxShadow: "0 4px 20px rgba(197,179,211,0.5)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        aria-label="Open Wishbook"
      >
        <FaRegHeart size={22} />
      </motion.button>
      {open && <WishbookModal onClose={() => setOpen(false)} />}
    </>
  );
};
