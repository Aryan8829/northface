"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";

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

export function MomentumField() {
  const prefersReduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReduced) return;

    let frameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized offset from center: -1 to 1
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      // Max displacement 12px
      targetX = nx * 10;
      targetY = ny * 10;
    };

    const updateSmooth = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMouseOffset({ x: currentX, y: currentY });
      frameId = requestAnimationFrame(updateSmooth);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    frameId = requestAnimationFrame(updateSmooth);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [prefersReduced]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Journey Thread 1: Top-Right Fluid Vector Arc */}
      <svg
        className="absolute -top-24 right-0 w-[55vw] max-w-[850px] h-[750px] opacity-[0.35] transition-transform duration-700 ease-out"
        style={{
          transform: prefersReduced
            ? "none"
            : `translate3d(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px, 0)`,
        }}
        viewBox="0 0 850 750"
        fill="none"
      >
        <path
          d="M850 50 C 550 120, 280 280, 220 520 C 180 680, 320 740, 500 720"
          stroke="#FF5B3D"
          strokeWidth="1.25"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
        <circle cx="220" cy="520" r="4" fill="#FF5B3D" />
        <circle cx="220" cy="520" r="9" stroke="#FF5B3D" strokeWidth="0.75" strokeOpacity="0.4" />
      </svg>

      {/* Journey Thread 2: Mid-Left Orbiting Route */}
      <svg
        className="absolute top-[40vh] -left-20 w-[45vw] max-w-[650px] h-[600px] opacity-[0.28] transition-transform duration-700 ease-out"
        style={{
          transform: prefersReduced
            ? "none"
            : `translate3d(${-mouseOffset.x * 0.6}px, ${-mouseOffset.y * 0.6}px, 0)`,
        }}
        viewBox="0 0 650 600"
        fill="none"
      >
        <path
          d="M0 450 C 180 430, 340 320, 380 180 C 420 50, 320 0, 180 40"
          stroke="#FF9A39"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="380" cy="180" r="3.5" fill="#FF9A39" />
        <circle cx="380" cy="180" r="8" stroke="#FF9A39" strokeWidth="0.75" strokeOpacity="0.5" />
      </svg>

      {/* Floating Signal A: Soft Coral Energy Bloom (Upper Right) */}
      <div
        className="absolute top-16 right-[12%] w-[420px] h-[420px] rounded-full bg-[#FFF3EF] blur-[110px] opacity-70 transition-transform duration-1000 ease-out"
        style={{
          transform: prefersReduced
            ? "none"
            : `translate3d(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px, 0)`,
        }}
      />

      {/* Floating Signal B: Soft Tangerine Warmth (Lower Left) */}
      <div
        className="absolute bottom-24 left-[8%] w-[380px] h-[380px] rounded-full bg-[#FFF8EE] blur-[100px] opacity-60 transition-transform duration-1000 ease-out"
        style={{
          transform: prefersReduced
            ? "none"
            : `translate3d(${-mouseOffset.x * 1.1}px, ${-mouseOffset.y * 1.1}px, 0)`,
        }}
      />

      {/* Micro Marker Signals (Tiny geometric waypoints) */}
      <div
        className="hidden md:block absolute top-[28vh] left-[15%] w-2 h-2 rounded-full bg-[#FF5B3D]/30"
        style={{
          transform: prefersReduced ? "none" : `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
        }}
      />
      <div
        className="hidden md:block absolute top-[65vh] right-[18%] w-1.5 h-1.5 rounded-full bg-[#E83379]/30"
        style={{
          transform: prefersReduced ? "none" : `translate3d(${-mouseOffset.x * 0.5}px, ${-mouseOffset.y * 0.5}px, 0)`,
        }}
      />
    </div>
  );
}
