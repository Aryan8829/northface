/**
 * Motion design tokens and presets for the "Human Momentum" design system.
 * Pure-white canvas with warm signal handoffs.
 */

export type AccentColor = "coral" | "orange" | "raspberry" | "yellow" | "lime";

export const accentHexMap: Record<AccentColor, string> = {
  coral: "#FF5B3D",
  orange: "#FF9A39",
  raspberry: "#E83379",
  yellow: "#FFC84B",
  lime: "#C6E86B",
};

export const accentWashMap: Record<AccentColor, string> = {
  coral: "#FFF3EF",
  orange: "#FFF8EE",
  raspberry: "#FDF2F7",
  yellow: "#FEFBEB",
  lime: "#F7FEE7",
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
