"use client";
import React, { useEffect, useRef } from "react";

/**
 * FallingFlowers – pure CSS-animation approach using flower images.
 * Completely avoids the broken tsparticles engine.
 */
export const FallingFlowers = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const images = [
      "/assets/images/FLOWERS (1).webp",
      "/assets/images/FLOWERS (2).webp",
      "/assets/images/FLOWERS (3).webp",
      "/assets/images/FLOWERS (4).webp",
      "/assets/images/FLOWERS (5).webp",
      "/assets/images/heart.webp",
      "/assets/images/heart.webp", // added twice so hearts appear more often
    ];

    const flowers: HTMLImageElement[] = [];

    const createFlower = () => {
      const img = document.createElement("img");
      img.src = images[Math.floor(Math.random() * images.length)];
      const size = 20 + Math.random() * 20; // 20–40px
      img.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        object-fit: contain;
        left: ${Math.random() * 100}%;
        top: -60px;
        opacity: ${0.5 + Math.random() * 0.5};
        pointer-events: none;
        animation: flowerFall ${6 + Math.random() * 8}s linear ${Math.random() * 5}s infinite;
        transform: rotate(${Math.random() * 360}deg);
        filter: drop-shadow(0 2px 4px rgba(197,179,211,0.3));
      `;
      container.appendChild(img);
      flowers.push(img);
    };

    // Create 18 flowers
    for (let i = 0; i < 18; i++) {
      createFlower();
    }

    return () => {
      flowers.forEach((f) => f.remove());
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes flowerFall {
          0%   { transform: translateY(0px) rotate(0deg); opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 0.7; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
      />
    </>
  );
};
