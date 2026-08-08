"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Inline Google Maps embed showing the reception venue.
 * MSC Convention Centre, Meloor (Poolany, Thrissur, Kerala – PIN: 680311)
 * Coordinates: 10.3168° N, 76.3533° E
 */
export const ReceptionMapButton = () => {
  // Google Maps embed URL using the exact coordinates for MSC Convention Centre, Meloor
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.0!2d76.3533!3d10.3168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE5JzAwLjUiTiA3NsKwMjEnMTEuOSJF!5e0!3m2!1sen!2sin!4v1689600000001!5m2!1sen!2sin";

  // Direct link to get directions to MSC Convention Centre
  const directLink =
    "https://www.google.com/maps/search/?api=1&query=MSC+Convention+Centre+Meloor+Poolany+Thrissur+Kerala";

  return (
    <section
      className="my-12 p-6 md:p-8 rounded-3xl shadow-xl"
      style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #F5E6F0 100%)" }}
    >
      <div className="text-center mb-8">
        <motion.div
          className="flex items-center justify-center gap-3 mb-3"
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.25, delay: 0 }}
        >
          <div className="h-[1px] w-10" style={{ background: "#C5B3D3" }} />
          <span className="text-xs tracking-[0.25em] uppercase font-outfit" style={{ color: "#C5B3D3" }}>
            Reception Venue
          </span>
          <div className="h-[1px] w-10" style={{ background: "#C5B3D3" }} />
        </motion.div>
        <motion.h2
          className="text-3xl font-great-vibes mb-2"
          style={{ color: "#8B6F7E" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.25, delay: 0.05 }}
        >
          MSC Convention Centre
        </motion.h2>
        <motion.p
          className="font-outfit text-sm text-[#5A3D4A]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, delay: 0.08 }}
        >
          Meloor, Poolany, Thrissur, Kerala – 680311
        </motion.p>
      </div>

      <motion.div
        className="w-full rounded-2xl overflow-hidden shadow-inner border border-white"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      >
        <iframe
          src={embedUrl}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Reception Venue Map"
          className="bg-gray-100"
        />
      </motion.div>

      <div className="mt-8">
        <motion.a
          href={directLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-outfit text-sm tracking-wider shadow-lg transition-all"
          style={{
            background: "linear-gradient(135deg, #F5CBCB, #C5B3D3)",
            color: "#fff",
            boxShadow: "0 4px 15px rgba(197,179,211,0.4)",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(197,179,211,0.6)" }}
          whileTap={{ scale: 0.97 }}
        >
          <span>📍</span>
          <span>Get Directions</span>
        </motion.a>
      </div>
    </section>
  );
};
