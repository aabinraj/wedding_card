"use client";
import React from "react";
import { motion } from "framer-motion";
import { FallingFlowers } from "./FallingFlowers";

import { VenueCard } from "./VenueCard";

import { HaldiCard } from "./HaldiCard";
import { Timeline } from "./Timeline";
import { FinalNote } from "./FinalNote";
import { PhotoGallery } from "./PhotoGallery";
import { RSVPForm } from "./RSVPForm";
import { WishbookButton } from "./WishbookButton";
import { MapButton } from "./MapButton";
import { ScratchCard } from "./ScratchCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export const MainInvitation = () => {
  return (
    <motion.div
      className="relative min-h-screen font-outfit pb-12"
      style={{ background: "linear-gradient(180deg, #FFF5F5 0%, #FBEFEF 30%, #FFE2E2 70%, #FFF5F5 100%)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Falling Flowers Background */}
      <FallingFlowers />

      {/* Hero section: Thalikettu Main Invitation */}
      <div className="flex justify-center p-2 md:p-6 w-full relative z-10">
        <motion.div
          className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center" style={{ aspectRatio: "3/4" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Background Image - Fits the box without extreme cropping */}
          <img
            src="/assets/images/main_invitation.webp"
            alt="Wedding Invitation"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.95) contrast(1.05)" }}
          />

          {/* Subtle gradient for text readability (no visible box) */}
          <div className="absolute inset-0 bg-white/10" />

          {/* Top Section: Ganesha Prayer - Absolutely positioned at the top */}
          <motion.div
            className="absolute top-8 left-0 w-full text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
          
          </motion.div>

          {/* Center Section: Names and Details - Tightly grouped to fit the inner border space */}
          <motion.div
            className="absolute top-20 left-0 w-full flex flex-col items-center justify-start text-center px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="h-[1px] w-8 bg-[#8B6F7E]/60" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-outfit text-[#8B6F7E] font-bold drop-shadow-sm">
                Thalikettu
              </span>
              <div className="h-[1px] w-8 bg-[#8B6F7E]/60" />
            </div>

            {/* Bride */}
            <h1 className="text-[2.8rem] leading-none font-great-vibes text-[#5A3D4A] drop-shadow-md mb-0">
              Sruthi
            </h1>
            <p className="text-[12px] text-[#4A2D3A] font-bold leading-tight max-w-[90%] drop-shadow-sm">
              D/o Mr. Selvarajan P.N &amp; Mrs. Vanaja A.R<br />
              <span className="text-[10px] opacity-90 font-medium">Punnakkaparambil house,<br /> Lokamaleswaram PO, Kodungallur</span>
            </p>

            {/* Weds separator */}
            <p className="text-base font-great-vibes text-[#8B6F7E] my-0 drop-shadow-sm">weds</p>

            {/* Groom */}
            <h2 className="text-[2.8rem] leading-none font-great-vibes text-[#5A3D4A] drop-shadow-md mb-0">
              Mridhul
            </h2>
            <p className="text-[12px] text-[#4A2D3A] font-bold leading-tight max-w-[90%] mb-2 drop-shadow-sm">
              S/o Mr. Manoj &amp; Mrs. Sangeetha<br />
              <span className="text-[10px] opacity-90 font-medium">Poolani, Chalakudy</span>
            </p>

            {/* Event Details */}
            <div className="w-full max-w-[260px] mx-auto">
              <p className="font-extrabold text-[10px] text-[#4A2D3A] tracking-wide drop-shadow-sm leading-tight">
                Kodungallur Sree Kurumba Bagavathi Temple
              </p>
              <p className="text-[10px] text-[#5A3D4A] font-bold mt-0.5 drop-shadow-sm">22 August 2026</p>
              <p className="text-[10px] text-[#5A3D4A] font-bold mt-1 bg-white/70 px-3 py-1 rounded-full inline-block backdrop-blur-md border border-[#8B6F7E]/30 shadow-sm whitespace-nowrap">
                8:30 AM – 9:00 AM
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content sections */}
      <div className="relative z-10 px-4 md:px-8 max-w-lg mx-auto mt-6">

        {/* Scratch card with Countdown */}
        <motion.section
          className="my-10"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ScratchCard />
        </motion.section>

        <motion.div
          className="text-center text-2xl mb-8"
          style={{ color: "#C5B3D3" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
        >
          ❀ ✦ ❀
        </motion.div>

        {/* Event cards */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <VenueCard />
        </motion.div>

        <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <HaldiCard />
        </motion.div>



        {/* Timeline */}
        <motion.div custom={7} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Timeline />
        </motion.div>

        {/* Photo Gallery */}
        <motion.div custom={8} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <PhotoGallery />
        </motion.div>

        {/* RSVP */}
        <motion.div custom={9} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <RSVPForm />
        </motion.div>

        {/* Map */}
        <motion.div custom={10} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center my-10">
          <MapButton />
        </motion.div>

        {/* Final note */}
        <motion.div custom={11} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <FinalNote />
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center py-10 opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.2em] uppercase font-outfit" style={{ color: "#C5B3D3" }}>
            Made with ♥
          </p>
        </motion.div>
      </div>

      {/* Wishbook floating button */}
      <WishbookButton />
    </motion.div>
  );
};
