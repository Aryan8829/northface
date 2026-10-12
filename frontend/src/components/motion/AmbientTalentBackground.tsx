"use client";

import React, { useEffect, useRef, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

interface AmbientTalentBackgroundProps {
  className?: string;
  intensity?: "subtle" | "medium" | "deep";
  showMesh?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  phase: number;
}

export function AmbientTalentBackground({
  className = "",
  intensity = "subtle",
  showMesh = true,
}: AmbientTalentBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const mousePos = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Track mouse coordinates relative to canvas
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Initialize network particles (connected talent constellation)
    const particleCount = width > 768 ? (intensity === "medium" ? 36 : 24) : 12;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1.2,
        baseAlpha: Math.random() * 0.35 + 0.25,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const connectionDistance = width > 768 ? 140 : 90;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle connecting network vectors
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap around bounds softly
        if (p1.x < -20) p1.x = width + 20;
        if (p1.x > width + 20) p1.x = -20;
        if (p1.y < -20) p1.y = height + 20;
        if (p1.y > height + 20) p1.y = -20;

        p1.phase += 0.015;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(43, 84, 224, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw node
        const nodeGlow = 0.5 + Math.sin(p1.phase) * 0.2;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(43, 84, 224, ${p1.baseAlpha * nodeGlow})`;
        ctx.fill();
      }

      // 2. Subtle pointer proximity aura
      const mx = mousePos.current.x;
      const my = mousePos.current.y;
      if (mx > 0 && mx < width && my > 0 && my < height) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
        gradient.addColorStop(0, "rgba(43, 84, 224, 0.08)");
        gradient.addColorStop(1, "rgba(43, 84, 224, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [reducedMotion, intensity]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Soft gradient diffusion layer */}
      {showMesh && (
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-[20%] right-[-10%] w-[650px] h-[650px] rounded-full bg-accent/8 blur-[130px]" />
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        </div>
      )}

      {/* SVG Fine Grid Coordinate Lines (Architectural Aesthetic) */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#2B54E0_1px,transparent_1px)] [background-size:32px_32px]" 
      />

      {/* Interactive Talent Constellation Canvas */}
      {!reducedMotion ? (
        <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      ) : (
        /* Static fallback for reduced motion */
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      )}
    </div>
  );
}
