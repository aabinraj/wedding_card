"use client";
import React, { useState } from "react";
import { addGuest } from "../lib/firebase";
import { motion, AnimatePresence } from "framer-motion";

/**
 * RSVP form with elegant styling – user selects attendance, then provides name and dietary info.
 */
export const RSVPForm = () => {
  const [status, setStatus] = useState<string>("");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [diet, setDiet] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleStatus = (s: string) => {
    setStatus(s);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await addGuest({ name, diet, status, timestamp: new Date().toISOString() });
      alert("Thank you! Your RSVP has been recorded.");
      setStatus("");
      setShowForm(false);
      setName("");
      setDiet("");
    } catch (err) {
      console.error("Firebase error:", err);
      alert("Something went wrong saving to the database. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const buttonBase = "px-5 py-2.5 rounded-full font-outfit text-sm tracking-wider transition-all shadow-md";

  return (
    <section
      className="my-8 p-6 md:p-8 rounded-2xl shadow-lg"
      style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #FFE2E2 100%)" }}
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-[1px] w-10" style={{ background: "#C5B3D3" }} />
          <span className="text-xs tracking-[0.25em] uppercase font-outfit" style={{ color: "#C5B3D3" }}>
            Will You Join Us?
          </span>
          <div className="h-[1px] w-10" style={{ background: "#C5B3D3" }} />
        </div>
        <h2 className="text-3xl font-great-vibes" style={{ color: "#8B6F7E" }}>RSVP</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {[
          { label: "Joyfully Attending", value: "attending" },
          { label: "Maybe", value: "maybe" },
          { label: "Unable to Attend", value: "unable" },
        ].map((opt) => (
          <motion.button
            key={opt.value}
            className={buttonBase}
            style={{
              background: status === opt.value
                ? "linear-gradient(135deg, #F5CBCB, #C5B3D3)"
                : "rgba(255,255,255,0.6)",
              color: status === opt.value ? "#fff" : "#8B6F7E",
              border: status === opt.value ? "none" : "1px solid #F5CBCB",
            }}
            onClick={() => handleStatus(opt.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {opt.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col space-y-3 max-w-md mx-auto overflow-hidden"
          >
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
            <input
              type="text"
              placeholder="Dietary Restrictions (if any)"
              className="p-3 rounded-xl font-outfit text-sm focus:outline-none focus:ring-2"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid #F5CBCB",
                color: "#5A3D4A",
              }}
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
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
              {submitting ? "Submitting…" : "Submit RSVP"}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
};
