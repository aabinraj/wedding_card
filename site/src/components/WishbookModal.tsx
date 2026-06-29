"use client";
import React, { useState } from "react";
import { addWish } from "../lib/firebase";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface Props {
  onClose: () => void;
}

/**
 * Modal with frosted-glass backdrop for leaving a wish.
 */
export const WishbookModal: React.FC<Props> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await addWish({ name, wish, timestamp: new Date().toISOString() });
      alert("Your wish has been saved!");
      onClose();
    } catch (err) {
      console.error("Firebase error:", err);
      alert("Failed to save wish to database. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="p-6 rounded-2xl shadow-2xl max-w-md w-[90%] relative"
          style={{
            background: "rgba(255,245,245,0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(245,203,203,0.3)",
          }}
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 transition"
            style={{ color: "#8B6F7E" }}
            aria-label="Close"
          >
            <FaTimes size={18} />
          </button>

          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-[1px] w-8" style={{ background: "#C5B3D3" }} />
              <span className="text-xs tracking-[0.2em] uppercase font-outfit" style={{ color: "#C5B3D3" }}>
                Wishbook
              </span>
              <div className="h-[1px] w-8" style={{ background: "#C5B3D3" }} />
            </div>
            <h3 className="text-2xl font-great-vibes" style={{ color: "#8B6F7E" }}>
              Leave a Wish
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-xl font-outfit text-sm focus:outline-none focus:ring-2"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid #F5CBCB",
                color: "#5A3D4A",
              }}
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Your Wish"
              className="p-3 rounded-xl font-outfit text-sm focus:outline-none focus:ring-2 resize-none"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid #F5CBCB",
                color: "#5A3D4A",
              }}
              rows={3}
              value={wish}
              required
              onChange={(e) => setWish(e.target.value)}
            />
            <motion.button
              type="submit"
              disabled={submitting}
              className="px-6 py-3 rounded-full font-outfit text-sm tracking-wider shadow-lg"
              style={{
                background: "linear-gradient(135deg, #F5CBCB, #C5B3D3)",
                color: "#fff",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {submitting ? "Saving…" : "Save Wish ♥"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
