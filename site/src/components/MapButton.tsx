"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Inline Google Maps embed showing the wedding venue.
 */
export const MapButton = () => {
  // Using a standard Google Maps embed URL for Sree Narayana Hall, Kodungallur
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.471714442253!2d76.19632311479603!3d10.223450992700305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081bc13bb652b3%3A0xc0fb10c5bc6b8a82!2sSree%20Narayana%20Hall!5e0!3m2!1sen!2sin!4v1689600000000!5m2!1sen!2sin";
  
  // Direct link for the "Get Directions" button using standard search query
  const directLink = "https://www.google.com/maps/search/?api=1&query=Sree+Narayana+Hall,+Pettumma,+Kodungallur,+Kerala"; 

  return (
    <section 
      className="my-12 p-6 md:p-8 rounded-3xl shadow-xl"
      style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #F5E6F0 100%)" }}
    >
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-[1px] w-10" style={{ background: "#C5B3D3" }} />
          <span className="text-xs tracking-[0.25em] uppercase font-outfit" style={{ color: "#C5B3D3" }}>
            Venue Location
          </span>
          <div className="h-[1px] w-10" style={{ background: "#C5B3D3" }} />
        </div>
        <h2 className="text-3xl font-great-vibes mb-2" style={{ color: "#8B6F7E" }}>
          Sree Narayana Hall
        </h2>
        <p className="font-outfit text-sm text-[#5A3D4A]">
          Pettumma, Kodungallur, Kerala
        </p>
      </div>

      <motion.div 
        className="w-full rounded-2xl overflow-hidden shadow-inner border border-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <iframe 
          src={embedUrl} 
          width="100%" 
          height="350" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Wedding Venue Map"
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
