import React from "react";
import { AccentColor, accentHexMap } from "@/lib/motionTokens";

interface RibbonDividerProps {
  accentFrom?: AccentColor;
  accentTo?: AccentColor;
  variant?: "curve" | "loop" | "wave" | "straight";
  className?: string;
}

export function RibbonDivider({
  accentFrom = "coral",
  accentTo = "orange",
  variant = "curve",
  className = "",
}: RibbonDividerProps) {
  const fromColor = accentHexMap[accentFrom];
  const toColor = accentHexMap[accentTo];

  if (variant === "loop") {
    return (
      <div className={`w-full overflow-hidden flex justify-center py-6 select-none pointer-events-none ${className}`} aria-hidden="true">
        <svg className="w-full max-w-4xl h-14" viewBox="0 0 800 60" fill="none">
          <path
            d="M0 30 C 250 30, 320 10, 400 10 C 480 10, 480 50, 400 50 C 320 50, 350 30, 800 30"
            stroke={`url(#grad-loop-${accentFrom}-${accentTo})`}
            strokeWidth="1.25"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
          <circle cx="400" cy="30" r="3" fill={toColor} />
          <defs>
            <linearGradient id={`grad-loop-${accentFrom}-${accentTo}`} x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor={fromColor} stopOpacity="0.7" />
              <stop offset="0.5" stopColor={toColor} stopOpacity="0.8" />
              <stop offset="1" stopColor={fromColor} stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`w-full overflow-hidden py-4 select-none pointer-events-none ${className}`} aria-hidden="true">
        <svg className="w-full h-8" viewBox="0 0 1200 30" fill="none" preserveAspectRatio="none">
          <path
            d="M0 15 C 300 0, 600 30, 900 15 C 1050 7, 1150 20, 1200 15"
            stroke={toColor}
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        </svg>
      </div>
    );
  }

  // Default: subtle curved connector
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center py-6 select-none pointer-events-none ${className}`} aria-hidden="true">
      <div className="w-full max-w-6xl px-6 flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#EAE8E5] to-[#EAE8E5]" />
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: fromColor }} />
          <span className="h-1 w-8 rounded-full" style={{ backgroundColor: toColor }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: toColor }} />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#EAE8E5] to-[#EAE8E5]" />
      </div>
    </div>
  );
}
