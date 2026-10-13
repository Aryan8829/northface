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

interface Node {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  isHub: boolean;
  pulsePhase: number;
}

interface Photon {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export function MomentumField() {
  const prefersReduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({
    x: -2000,
    y: -2000,
    targetX: -2000,
    targetY: -2000,
    active: false,
  });

  useEffect(() => {
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Palette: Move Green #0F3B27, Signal Lime #92FF5F, Ice #BFF2F0, Mint #CFF1D2, Spark #FF7036
    const COLOR_FOREST = "#0F3B27";
    const COLOR_LIME = "#92FF5F";
    const COLOR_ICE = "#BFF2F0";
    const COLOR_MINT = "#CFF1D2";
    const COLOR_SPARK = "#FF7036";

    let nodes: Node[] = [];
    let photons: Photon[] = [];

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Distribute luxury talent nodes in an organic grid
      const count = Math.min(Math.floor((width * height) / 22000), 55);
      nodes = [];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const isHub = i % 7 === 0;

        // Assign colors strategically
        let color = COLOR_ICE;
        if (isHub) {
          color = COLOR_FOREST;
        } else if (i % 3 === 0) {
          color = COLOR_LIME;
        } else if (i % 2 === 0) {
          color = COLOR_MINT;
        } else if (i % 11 === 0) {
          color = COLOR_SPARK; // Very rare spark
        }

        nodes.push({
          homeX: x,
          homeY: y,
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: isHub ? 3.6 : Math.random() * 1.8 + 1.2,
          color,
          isHub,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      // Initialize photon energy packets traveling between nodes
      photons = [];
      for (let p = 0; p < 8; p++) {
        photons.push({
          fromNode: Math.floor(Math.random() * nodes.length),
          toNode: Math.floor(Math.random() * nodes.length),
          progress: Math.random(),
          speed: Math.random() * 0.008 + 0.004,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetX = -2000;
      mouseRef.current.targetY = -2000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.012;

      // Smooth mouse lerping
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // =========================================================================
      // LAYER 1: ETHEREAL GENERATIVE AURORA WAVES (Fluid Harmonic Ribbons)
      // =========================================================================
      // Wave 1: Soft Botanical Mint Wash
      ctx.beginPath();
      ctx.moveTo(0, height * 0.25);
      for (let x = 0; x <= width; x += 40) {
        const y =
          height * 0.28 +
          Math.sin(x * 0.0018 + time * 0.8) * 45 +
          Math.cos(x * 0.003 - time * 0.5) * 30;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      const gradMint = ctx.createLinearGradient(0, 0, width, height);
      gradMint.addColorStop(0, "rgba(207, 241, 210, 0.28)");
      gradMint.addColorStop(0.5, "rgba(191, 242, 240, 0.18)");
      gradMint.addColorStop(1, "rgba(247, 249, 247, 0)");
      ctx.fillStyle = gradMint;
      ctx.fill();

      // Wave 2: Ethereal Ice Cyan Undulation
      ctx.beginPath();
      ctx.moveTo(0, height * 0.6);
      for (let x = 0; x <= width; x += 40) {
        const y =
          height * 0.62 +
          Math.cos(x * 0.0022 - time * 0.7) * 50 +
          Math.sin(x * 0.004 + time * 0.6) * 25;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      const gradIce = ctx.createLinearGradient(width, 0, 0, height);
      gradIce.addColorStop(0, "rgba(191, 242, 240, 0.25)");
      gradIce.addColorStop(0.6, "rgba(146, 255, 95, 0.08)");
      gradIce.addColorStop(1, "rgba(247, 249, 247, 0)");
      ctx.fillStyle = gradIce;
      ctx.fill();

      // =========================================================================
      // LAYER 2: ARCHITECTURAL SPATIAL GRID (Hairline ticks & crosshairs)
      // =========================================================================
      const gridSize = 140;
      ctx.strokeStyle = "rgba(15, 59, 39, 0.05)";
      ctx.lineWidth = 0.75;
      const crossSize = 4;

      for (let gx = gridSize; gx < width; gx += gridSize) {
        for (let gy = gridSize; gy < height; gy += gridSize) {
          // Draw subtle crosshair '+'
          ctx.beginPath();
          ctx.moveTo(gx - crossSize, gy);
          ctx.lineTo(gx + crossSize, gy);
          ctx.moveTo(gx, gy - crossSize);
          ctx.lineTo(gx, gy + crossSize);
          ctx.stroke();
        }
      }

      // =========================================================================
      // LAYER 3: EXECUTIVE SYNAPTIC MESH & PACKET TELEMETRY
      // =========================================================================
      const connectionDist = 145;

      // Update node physics
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Organic orbital drift around home anchor
        n.pulsePhase += 0.02;
        const driftX = Math.cos(n.pulsePhase + time) * 14;
        const driftY = Math.sin(n.pulsePhase + time * 0.8) * 14;

        n.x = n.homeX + driftX;
        n.y = n.homeY + driftY;

        // Interactive mouse magnetic gravity field
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 220) {
            const force = (1 - dist / 220) * 26;
            n.x += (dx / dist) * force;
            n.y += (dy / dist) * force;
          }
        }
      }

      // Draw synaptic connection filaments
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.22;

            // Check if near mouse to illuminate line in Signal Lime
            let isNearMouse = false;
            if (mouse.active) {
              const midX = (a.x + b.x) / 2;
              const midY = (a.y + b.y) / 2;
              const dMouse = Math.hypot(mouse.x - midX, mouse.y - midY);
              if (dMouse < 160) {
                isNearMouse = true;
              }
            }

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            if (isNearMouse) {
              ctx.strokeStyle = COLOR_LIME;
              ctx.globalAlpha = Math.min(alpha * 3.5, 0.75);
              ctx.lineWidth = 1.2;
            } else if (a.isHub || b.isHub) {
              ctx.strokeStyle = COLOR_FOREST;
              ctx.globalAlpha = alpha * 0.9;
              ctx.lineWidth = 0.9;
            } else {
              ctx.strokeStyle = "rgba(15, 59, 39, 0.4)";
              ctx.globalAlpha = alpha * 0.7;
              ctx.lineWidth = 0.6;
            }

            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Animate and render photon packets traveling along lines
      for (let p = 0; p < photons.length; p++) {
        const ph = photons[p];
        const from = nodes[ph.fromNode];
        const to = nodes[ph.toNode];

        if (from && to) {
          const dist = Math.hypot(to.x - from.x, to.y - from.y);
          if (dist < connectionDist * 1.5) {
            ph.progress += ph.speed;
            if (ph.progress >= 1) {
              ph.progress = 0;
              ph.fromNode = ph.toNode;
              ph.toNode = Math.floor(Math.random() * nodes.length);
            }

            const px = from.x + (to.x - from.x) * ph.progress;
            const py = from.y + (to.y - from.y) * ph.progress;

            // Render photon bead
            ctx.beginPath();
            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = COLOR_LIME;
            ctx.globalAlpha = 0.85;
            ctx.fill();

            // Tiny trailing glow
            ctx.beginPath();
            ctx.arc(px, py, 4, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(146, 255, 95, 0.35)";
            ctx.fill();
            ctx.globalAlpha = 1;
          } else {
            ph.toNode = Math.floor(Math.random() * nodes.length);
          }
        }
      }

      // Draw talent nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(n.pulsePhase * 2) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = n.isHub ? 0.95 : 0.75;
        ctx.fill();

        // Hub nodes get an executive radar ring in Signal Lime
        if (n.isHub) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 2.8, 0, Math.PI * 2);
          ctx.strokeStyle = COLOR_LIME;
          ctx.lineWidth = 0.8;
          ctx.globalAlpha = pulse * 0.45;
          ctx.stroke();

          // Outer secondary faint ring
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 4.4, 0, Math.PI * 2);
          ctx.strokeStyle = COLOR_FOREST;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = 0.15;
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
      }

      // =========================================================================
      // LAYER 4: INTERACTIVE MOUSE REFRACTION SPOTLIGHT
      // =========================================================================
      if (mouse.active) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          260
        );
        mouseGlow.addColorStop(0, "rgba(146, 255, 95, 0.16)");
        mouseGlow.addColorStop(0.4, "rgba(191, 242, 240, 0.12)");
        mouseGlow.addColorStop(1, "rgba(247, 249, 247, 0)");

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 260, 0, Math.PI * 2);
        ctx.fillStyle = mouseGlow;
        ctx.fill();
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
      {/* Dynamic 60FPS Multi-Layered Generative Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Floating Precision Telemetry Watermark (Executive Intelligence Atmosphere) */}
      <div className="absolute top-24 left-8 hidden lg:flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#0F3B27]/30 uppercase select-none pointer-events-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#92FF5F] shadow-[0_0_8px_#92FF5F]" />
        <span>NEXUS REAL-TIME SEARCH TELEMETRY // GLOBAL COORD 40.7128°N 74.0060°W</span>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#0F3B27]/30 uppercase select-none pointer-events-none">
        <span>ACTIVE MANDATE HUBS: NYC / LON / ZRH / SGP / SFO</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0F3B27]/40" />
      </div>

      {/* Continuous Fluid SVG Kinetic Journey Stream */}
      <svg
        className="absolute -top-10 right-0 w-[55vw] max-w-[850px] h-[750px] opacity-30 pointer-events-none"
        viewBox="0 0 850 750"
        fill="none"
      >
        <path
          d="M850 40 C 580 110, 280 270, 220 510 C 180 660, 320 730, 520 700"
          stroke="url(#luxury-stream-grad)"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          strokeLinecap="round"
          className="animate-[dash_40s_linear_infinite]"
        />
        <defs>
          <linearGradient
            id="luxury-stream-grad"
            x1="850"
            y1="40"
            x2="220"
            y2="510"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#92FF5F" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="#0F3B27" stopOpacity="0.6" />
            <stop offset="1" stopColor="#BFF2F0" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
