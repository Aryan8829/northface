# Design Direction: Premium Recruitment Consultancy

**Brand Aesthetic:** Minimal, Editorial, People-Centered, Confident, Architectural.  
**Tone of Voice:** Direct, Human, High-Echelon, Jargon-Free.

---

## 1. Palette & Material Surfaces

| Token | Hex / Value | Semantic Role |
|---|---|---|
| **Canvas** | `#F8F9FA` | Warm, crisp architectural neutral base |
| **Surface** | `#FFFFFF` | Elevated content planes & card layers |
| **Ink** | `#111620` | Deep graphite text; maximum readability |
| **Muted Ink** | `#525D6A` | Refined secondary body & label hierarchy |
| **Cobalt Accent** | `#2B54E0` | Confident recruitment-technology blue; buttons, active indicators |
| **Cobalt Soft** | `#EEF3FF` | Accent tints, selected badges, subtle hover highlights |
| **Sage Tint** | `#EBF2EE` | Secondary human-centered calm accent |
| **Hairline** | `#E5E9EC` | 1px clean architectural boundaries & grid lines |
| **Dark Section** | `#0E1420` | High-contrast conversion and narrative sections |

---

## 2. Typography Scale

- **Display Serif:** `Playfair Display` (editorial headlines, quote accents, statement metrics)
- **Primary Body & Sans:** `Inter` (high-clarity UI, navigation, job details, metadata)
- **Hierarchy:**
  - Hero Display: `text-5xl md:text-7xl font-serif font-bold tracking-tight`
  - Section Headlines: `text-3xl md:text-5xl font-serif font-bold`
  - Eyebrows: `text-xs uppercase tracking-[0.2em] font-bold text-accent`
  - Body Text: `text-base md:text-lg text-muted-foreground leading-relaxed font-light`

---

## 3. Motion System & Ambient Aesthetics

- **Ambient Background (`AmbientTalentBackground`):**
  - Fine network particles (SVG/Canvas) connected by hairline vectors that represent talent pathways.
  - Subtle mouse proximity response (micro parallax glow under pointer).
  - Smooth 12s ambient drift with opacity ≤ 0.08 so text legibility is never compromised.
  - Full `@media (prefers-reduced-motion: reduce)` override to static faint lines.
- **Micro-Interactions:**
  - Buttons: 180ms ease-out with subtle icon translate (+3px on hover).
  - Cards: 2px elevation with smooth border-color transition to `accent/40`.
  - Staggered Entrances: 400ms entrance with 16px vertical translation.

---

## 4. Responsive Rules

- **Mobile Viewports (320px - 768px):**
  - Content-first stacking; complex decorative backgrounds simplified.
  - Full-screen accessible mobile navigation drawer with large touch targets (minimum 44x44px).
  - Sticky bottom CTAs on Job Detail pages for high mobile conversion.
- **Desktop (1024px - 1920px+):**
  - Generous 12-column grid with max container width of 1440px (`container-enterprise`).
  - Strict alignment of section dividers and hairline borders.
