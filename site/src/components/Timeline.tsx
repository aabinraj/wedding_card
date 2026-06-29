"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * Visual timeline of wedding events with animated connectors.
 */
export const Timeline = () => {
  const events = [
    { date: "20 Aug 2026", title: "Haldi Ceremony", description: "Bride's residence", icon: "🌿" },
    { date: "22 Aug 2026", title: "Thalikettu", description: "Kurumba Bagavathi Temple", icon: "🕉️" },
    { date: "22 Aug 2026", title: "Wedding Ceremony", description: "Sree Narayana Hall", icon: "💍" },
    { date: "23 Aug 2026", title: "Reception", description: "Venue TBD", icon: "🎉" },
  ];

  return (
    <section
      className="my-8 p-6 md:p-8 rounded-2xl shadow-lg"
      style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #F5E6F0 100%)" }}
    >
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-[1px] w-10" style={{ background: "#C5B3D3" }} />
          <span className="text-xs tracking-[0.25em] uppercase font-outfit" style={{ color: "#C5B3D3" }}>
            Schedule
          </span>
          <div className="h-[1px] w-10" style={{ background: "#C5B3D3" }} />
        </div>
        <h2 className="text-3xl font-great-vibes" style={{ color: "#8B6F7E" }}>
          Wedding Timeline
        </h2>
      </div>

      <div className="relative">
        {/* Vertical connector line */}
        <div
          className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px]"
          style={{ background: "linear-gradient(to bottom, #F5CBCB, #C5B3D3)" }}
        />

        <div className="space-y-8">
          {events.map((e, i) => (
            <motion.div
              key={i}
              className="relative flex items-start gap-4 pl-14 md:pl-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 md:left-6 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                style={{
                  background: "linear-gradient(135deg, #F5CBCB, #C5B3D3)",
                  boxShadow: "0 0 12px rgba(197,179,211,0.4)",
                }}
              >
                <span className="text-[10px]">{e.icon}</span>
              </div>

              {/* Event card */}
              <div
                className="flex-1 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)" }}
              >
                <p className="text-xs font-outfit tracking-wider uppercase mb-1" style={{ color: "#C5B3D3" }}>
                  {e.date}
                </p>
                <h4 className="text-lg font-great-vibes" style={{ color: "#8B6F7E" }}>
                  {e.title}
                </h4>
                <p className="text-sm font-outfit" style={{ color: "#5A3D4A" }}>
                  {e.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
