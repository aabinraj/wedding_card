"use client";
import React, { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  hue: number;
}

/**
 * SparkleCursor – draws a trail of glittering sparkles at the cursor / touch position.
 * Works on both desktop (mousemove) and mobile (touchmove).
 * Uses a fixed canvas overlay so it always appears on top.
 */
export const SparkleCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to window
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Track mouse
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      spawnSparkles(e.clientX, e.clientY, 3);
    };

    // Track touch
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      mouseRef.current = { x: t.clientX, y: t.clientY };
      spawnSparkles(t.clientX, t.clientY, 4);
    };

    const spawnSparkles = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const maxLife = 40 + Math.random() * 40;
        sparklesRef.current.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          size: 2 + Math.random() * 4,
          opacity: 1,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -1 - Math.random() * 2,
          life: maxLife,
          maxLife,
          hue: Math.random() < 0.5 ? 330 : 280, // pink or lavender
        });
      }
    };

    const drawStar = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      const step = Math.PI / spikes;
      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(
          cx + Math.cos(rot) * outerRadius,
          cy + Math.sin(rot) * outerRadius
        );
        rot += step;
        ctx.lineTo(
          cx + Math.cos(rot) * innerRadius,
          cy + Math.sin(rot) * innerRadius
        );
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparklesRef.current = sparklesRef.current.filter((s) => s.life > 0);

      for (const s of sparklesRef.current) {
        const progress = 1 - s.life / s.maxLife;
        s.x += s.vx;
        s.y += s.vy;
        s.life--;
        s.opacity = 1 - progress;

        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = `hsl(${s.hue}, 80%, 75%)`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `hsl(${s.hue}, 80%, 80%)`;
        drawStar(ctx, s.x, s.y, 4, s.size, s.size * 0.4);
        ctx.fill();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
};
