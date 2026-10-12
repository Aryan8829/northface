# Design System

## 1. Audit of Existing Design
**Findings:** No existing design files, assets, or codebase were found in the workspace. Only `README.md` was present. Therefore, we must establish a new design system from scratch following the guidelines.

## 2. Visual Identity & Metaphor
- **Direction:** Dark editorial direction.
- **Metaphor:** Mountain-climbing (journey, ascent, milestones, peak). Used conceptually in imagery, copy, and structural milestones.
- **Vibe:** Premium, modern, trustworthy, technically capable, clean. Not a generic IT template or over-animated site.

## 3. Tokens & Typography
- **Primary Font:** Inter or Roboto (Clean, readable sans-serif).
- **Display Font (Optional):** Playfair Display or equivalent for editorial contrast, sparingly used.
- **Color Palette:**
  - Background: Deep slate/obsidian (dark theme).
  - Surface: Slightly lighter slate for cards/containers.
  - Primary Accent: A sharp, professional color (e.g., Electric Blue or Emerald Green).
  - Text: Off-white for high contrast (WCAG AA/AAA).
  - Muted: Grays for secondary text and borders.

## 4. Spacing & Grid
- **Grid:** 12-column fluid grid.
- **Spacing Scale:** Tailwind default scale (4px base). Strict adherence (no arbitrary values like `mt-[17px]`).
- **Container:** Max-width 1440px or 1920px with centered content.

## 5. Components
- **Buttons:** Solid, outline, and ghost variants. Sharp or slightly rounded corners (not pill-shaped).
- **Cards:** Subtle borders, dark surfaces, hover effects (slight lift or border glow).
- **Inputs:** High contrast borders, clear focus rings, accessible labels.
- **Badges:** Small, uppercase, letter-spaced, muted background.

## 6. Motion Rules
- **Tools:** GSAP + ScrollTrigger, Framer Motion.
- **Philosophy:** Motion must serve hierarchy. Use for page transitions, revealing sections smoothly, and micro-interactions.
- **Accessibility:** Must respect `prefers-reduced-motion` media queries. Disable heavy animations if true.
