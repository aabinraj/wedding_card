"use client";
import React, { useRef, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";
import { heartSparkleParticles } from "../lib/particlesConfig";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ScratchCard reveals the countdown when the user scratches
 * about 25% of the overlay. After that it triggers a burst of heart
 * particles and permanently reveals the live countdown timer.
 */
export const ScratchCard = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadFull(tsParticles).then(() => setInit(true));
  }, []);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  
  // Hardcoded wedding date (22 Aug 2026 08:30 IST)
  const targetDate = new Date("2026-08-22T08:30:00+05:30").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Scratch logic
  useEffect(() => {
    if (revealed) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // High DPI Canvas support
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (!rect) return;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    ctx.scale(dpr, dpr);

    // Initial overlay design (elegant frosted glass with instruction)
    ctx.fillStyle = "#FFF5F5";
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    // Add some noise/texture pattern
    for (let i = 0; i < 500; i++) {
      ctx.fillStyle = `rgba(200, 150, 150, ${Math.random() * 0.1})`;
      ctx.fillRect(Math.random() * rect.width, Math.random() * rect.height, 2, 2);
    }

    ctx.font = "italic 24px 'Great Vibes', cursive";
    ctx.fillStyle = "#8B6F7E";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Scratch to reveal", rect.width / 2, rect.height / 2 - 10);
    
    ctx.font = "12px 'Outfit', sans-serif";
    ctx.fillText("the countdown", rect.width / 2, rect.height / 2 + 15);

    let isDrawing = false;
    let scratchedPixels = 0;
    const brushSize = 35;
    
    const calculateScratchedArea = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparent = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparent++;
      }
      const percentage = transparent / (pixels.length / 4);
      if (percentage > 0.25) { // Reveal if 25% scratched
        setRevealed(true);
        setShowHeart(true);
        // Hide particles after 4 seconds
        setTimeout(() => setShowHeart(false), 4000); 
      }
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      handleMove(e);
    };

    const handleEnd = () => {
      isDrawing = false;
      calculateScratchedArea();
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      e.preventDefault();

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const canvasRect = canvas.getBoundingClientRect();
      const x = clientX - canvasRect.left;
      const y = clientY - canvasRect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, brushSize, 0, Math.PI * 2);
      ctx.fill();
    };

    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);

    canvas.addEventListener("touchstart", handleStart, { passive: false });
    canvas.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleEnd);

    return () => {
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [revealed]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-1">
      <div className="w-14 h-16 sm:w-16 sm:h-20 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/90 to-[#FFF5F5]/80 shadow-[inset_0_1px_3px_rgba(255,255,255,1),0_4px_10px_rgba(139,111,126,0.15)] backdrop-blur-md border border-white/60 mb-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/40" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl sm:text-4xl font-outfit font-light text-[#5A3D4A] z-10"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] sm:text-xs font-outfit tracking-[0.2em] uppercase text-[#8B6F7E] font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative w-full max-w-sm mx-auto my-8">
      {/* Header above scratch area */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-great-vibes text-[#8B6F7E] mb-2 drop-shadow-sm">Save the Date</h2>
        <div className="flex justify-center items-center gap-3">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5B3D3]" />
          <span className="text-[#C5B3D3] text-sm">❀</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5B3D3]" />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-[180px] sm:h-[200px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#FFF0F0] to-[#FFE2E2] border border-white/50">
        
        {/* The hidden content (Live Countdown) */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <TimeBlock value={timeLeft.days} label="Days" />
            <span className="text-2xl text-[#C5B3D3]/50 pb-6">:</span>
            <TimeBlock value={timeLeft.hours} label="Hrs" />
            <span className="text-2xl text-[#C5B3D3]/50 pb-6">:</span>
            <TimeBlock value={timeLeft.minutes} label="Min" />
            <span className="text-2xl text-[#C5B3D3]/50 pb-6">:</span>
            <TimeBlock value={timeLeft.seconds} label="Sec" />
          </div>
        </div>

        {/* The scratchable overlay */}
        <AnimatePresence>
          {!revealed && (
            <motion.canvas
              ref={canvasRef}
              className="absolute inset-0 z-10 touch-none cursor-crosshair"
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

      </div>

      {/* Heart Sparkles Animation when revealed */}
      {showHeart && init && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <Particles
            id="heart-sparkle"
            options={heartSparkleParticles}
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
};
