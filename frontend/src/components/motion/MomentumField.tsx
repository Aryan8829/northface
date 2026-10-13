"use client";

import React, { useEffect, useRef, useSyncExternalStore } from "react";

// Client-safe media query subscription for reduced motion
function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
  orbitAngle: number;
  orbitSpeed: number;
}

const PALETTE = [
  "#FF5B3D", // Signal Coral
  "#FF9A39", // Tangerine
  "#E83379", // Raspberry
  "#FFC84B", // Sunshine
  "#C6E86B", // Lime
];

export function MomentumField() {
  const prefersReduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Initialize 65 particle nodes representing talent constellation
    const particleCount = Math.min(Math.floor((width * height) / 22000), 75);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        color,
        baseAlpha: Math.random() * 0.4 + 0.35,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const connectionDist = 135;
      const mouseDistThreshold = 180;

      // Draw interactive connections between close particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 91, 61, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw connection from particle to mouse if nearby
        if (mouse.active) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouseDistThreshold) {
            const mAlpha = (1 - mdist / mouseDistThreshold) * 0.38;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 91, 61, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Gentle magnetic attraction to cursor
            p1.x -= (mdx / mdist) * 0.4;
            p1.y -= (mdy / mdist) * 0.4;
          }
        }
      }

      // Draw mouse interactive glowing aura
      if (mouse.active) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          140
        );
        gradient.addColorStop(0, "rgba(255, 91, 61, 0.12)");
        gradient.addColorStop(0.5, "rgba(255, 154, 57, 0.05)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 140, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Natural organic drift
        p.orbitAngle += p.orbitSpeed;
        p.x += p.vx + Math.cos(p.orbitAngle + time) * 0.15;
        p.y += p.vy + Math.sin(p.orbitAngle + time) * 0.15;

        // Wrap around boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Pulse alpha gently
        const pulseAlpha = p.baseAlpha + Math.sin(time * 2 + i) * 0.15;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.15, Math.min(pulseAlpha, 0.85));
        ctx.fill();

        // Soft outer ring on primary coral nodes
        if (p.color === "#FF5B3D" || p.color === "#E83379") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = Math.max(0.08, pulseAlpha * 0.35);
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReduced]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Dynamic 60FPS Interactive Particle Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Floating Animated Ambient Blobs (Living organic energy) */}
      <div className="absolute top-12 right-[10%] w-[550px] h-[550px] rounded-full bg-[#FFF3EF]/70 blur-[130px] animate-[pulse_8s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-[480px] h-[480px] rounded-full bg-[#FFF8EE]/65 blur-[120px] animate-[pulse_10s_ease-in-out_infinite] delay-1000 pointer-events-none" />
      <div className="absolute top-[45vh] left-[35%] w-[380px] h-[380px] rounded-full bg-[#FFFBE8]/50 blur-[100px] animate-[pulse_12s_ease-in-out_infinite] delay-2000 pointer-events-none" />

      {/* Continuous Animated SVG Journey Streams */}
      <svg
        className="absolute -top-20 right-0 w-[60vw] max-w-[900px] h-[800px] opacity-40 pointer-events-none"
        viewBox="0 0 900 800"
        fill="none"
      >
        <path
          d="M900 60 C 600 130, 300 290, 240 540 C 200 700, 350 770, 550 740"
          stroke="url(#ambient-stream-grad)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          strokeLinecap="round"
          className="animate-[dash_35s_linear_infinite]"
        />
        <defs>
          <linearGradient id="ambient-stream-grad" x1="900" y1="60" x2="240" y2="540" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF5B3D" stopOpacity="0.8" />
            <stop offset="0.6" stopColor="#FF9A39" stopOpacity="0.5" />
            <stop offset="1" stopColor="#E83379" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
