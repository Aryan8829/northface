/**
 * Luxury Motion Design Tokens for Nexus Talent Partners.
 * Deep Forest Green, Signal Lime, Soft White, Ice, and Mint Palette.
 */

export type AccentColor =
  | "forest"
  | "lime"
  | "ice"
  | "mint"
  | "persimmon"
  | "coral"
  | "orange"
  | "raspberry"
  | "yellow";

export const accentHexMap: Record<AccentColor, string> = {
  forest: "#0F3B27",
  lime: "#92FF5F",
  ice: "#BFF2F0",
  mint: "#CFF1D2",
  persimmon: "#FF7036",

  // Backward-compatible mappings aligned to the luxury palette
  coral: "#0F3B27",
  orange: "#92FF5F",
  raspberry: "#0F3B27",
  yellow: "#92FF5F",
};

export const accentWashMap: Record<AccentColor, string> = {
  forest: "rgba(15, 59, 39, 0.08)",
  lime: "rgba(146, 255, 95, 0.15)",
  ice: "rgba(191, 242, 240, 0.35)",
  mint: "rgba(207, 241, 210, 0.35)",
  persimmon: "rgba(255, 112, 54, 0.15)",

  // Backward-compatible mappings
  coral: "rgba(15, 59, 39, 0.06)",
  orange: "rgba(146, 255, 95, 0.12)",
  raspberry: "rgba(191, 242, 240, 0.3)",
  yellow: "rgba(207, 241, 210, 0.3)",
};

export const motionPresets = {
  quietEnter: {
    duration: 0.55,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  staggerWords: {
    stagger: 0.08,
    duration: 0.65,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  hoverLift: {
    duration: 0.22,
    ease: [0.34, 1.56, 0.64, 1] as const,
  },
  buttonSweep: {
    duration: 0.28,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  accentShift: {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1] as const,
  },
  ambientDrift: {
    duration: 20,
    ease: "linear" as const,
  },
};
