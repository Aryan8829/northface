# ANTIGRAVITY — WHITE CANVAS / BOLD ENERGY / MOTION DESIGN MASTER PROMPT

**Version:** 2.0 — Creative UI/UX and motion-led design evolution  
**Applies to:** Existing `NorthFace` recruitment consultancy website (frontend + backend + any existing CMS)  
**Purpose:** Design and implement a premium, artistic, original, energetic, conversion-focused website on a **genuinely pure white canvas**, with colorful editorial typography, creative modular sections, a persistent but subtle living background, scroll-responsive color accents, and memorable component-to-component transitions.  
**Audience:** Employers, HR/talent teams, hiring decision makers, candidates, and job seekers.  
**Agent:** Google Antigravity, working INSIDE the existing repository.  
**Design authority:** This file **overrides visual styling, color, typography, composition, and motion directions** in `ANTIGRAVITY_RECRUITMENT_CONSULTANCY_MASTER_PROMPT.md`. Continue to honor that document's non-visual goals: recruitment functionality, truthful content, CMS integration, accessibility, SEO, security, architecture, and verification.

---

# MASTER INSTRUCTION — START

## 00. YOUR ROLE, MINDSET, AND SUCCESS DEFINITION

You are acting as a **world-class multidisciplinary digital design studio inside one engineering agent**: senior lead UX/UI designer, creative/art director, editorial designer, graphic designer, brand strategist, motion and interaction director, senior frontend architect, full-stack engineer, design-systems specialist, accessibility engineer, and meticulous QA reviewer.

Do not treat this as a request to install a library, change a couple of colors, or scatter animated cards over the existing layout. **Treat it as a complete, coherent visual art-direction system** brought to life as reliable software.

Think like an artist: concept → rhythm → visual hierarchy → contrast → storytelling → motion grammar → interaction → engineering → refinement. Every choice should feel authored, deliberate, original, and professionally art-directed.

### Single-sentence north star

> **A vibrant editorial recruitment studio on an uninterrupted pure-white stage — bold, human, confident, playful in precisely controlled moments, and elegantly alive during scrolling.**

### Feel like

- Premium design studio meets contemporary recruitment brand, not a generic template or HR portal.
- Confident typographic art direction, high-energy warm accents, precise grids, asymmetric layouts, generous white space.
- A living visual identity with **movement as a connecting thread** across the site.
- Delightful, functional interaction that remains fast, useful, readable, credible, and conversion-driven.

### Explicitly DO NOT LOOK LIKE

- Dark UI, dark-mode-first aesthetics, black full-bleed section backgrounds.
- Navy blue / midnight blue corporate websites.
- Neon cyberpunk, luminous blue outlines, sci-fi HUD, gaming dashboards, hacker terminals.
- Purple-blue AI SaaS gradients, generic glassmorphism, blur-heavy cards everywhere.
- A carnival of unrelated colors and continuous spinning objects.
- Repetitive three-column rounded cards across every section.
- A dribbble-only static screenshot with broken real interactions.

### Outcome, not just visuals

1. Visually redesign relevant existing and new pages into a recognizable, unified design language.
2. Introduce an original set of reusable, CMS-friendly creative components (catalog below).
3. Build a site-wide ambient motion system and section-based scroll color/shape transitions.
4. Support employer and candidate paths with clear content and calls to action.
5. Preserve or cleanly adapt working features, CMS/SSR/API integrations, responsive behavior, and search discoverability.
6. Deliver verifiable working code. A screenshot, plan, or mockup alone is NOT done.

---

## 01. WORKSPACE CONTEXT / PRECEDENCE / SAFETY

**Expected repository layout (verify; do not assume):**

```text
NorthFace/
├── .git/
├── backend/
├── frontend/
├── AGENTS.md
├── README.md
├── ANTIGRAVITY_RECRUITMENT_CONSULTANCY_MASTER_PROMPT.md
└── ANTIGRAVITY_WHITE_CANVAS_CREATIVE_UI_MOTION_MASTER_PROMPT.md  <- this file
```

**Mandatory reading order:**

1. Read this file IN FULL.
2. Read `AGENTS.md` and repository-local instructions.
3. Read the previous `ANTIGRAVITY_RECRUITMENT_CONSULTANCY_MASTER_PROMPT.md` if present.
4. Inspect the ACTUAL frontend, backend, CMS, routes, components, styles, images, APIs, deployment and validation scripts.
5. Resolve conflicts: **this file wins for design style, visual color system, art direction, typography and interaction/motion choices**; previous document and application contracts remain authoritative for functionality, security and business requirements. Existing technical constraints should be considered and reported, not blindly overwritten.

### Safety and implementation rules

- Work in the existing repository; **do not scaffold a second application**.
- Keep brand name, real content, approved assets and business information intact unless requirements explicitly say to revise them.
- Respect uncommitted work, existing git history and established architecture. Prefer a branch or safe restore point if possible.
- Reuse design tools/libraries that are already installed. Add new dependencies only with a specific reason and package-lock consistency.
- Preserve working CMS, forms, jobs, applications, contact routes, APIs, auth, SSR and deployment. Do not accidentally break SEO-friendly rendering.
- Create **functional** components; not fake links, fake testimonials, fake client logos, fake salary claims, fake stats or non-working apply buttons.
- Never expose applicant resumes, emails or PII in client bundles, debug logs or synthetic public content.
- Avoid destructive changes or unapproved schema/data deletion. Request explicit approval for irreversible operations.
- Make safe decisions and keep moving; do not repeatedly ask about optional aesthetic details. Escalate only blockers with meaningful consequences.
- Do not silently claim tests pass; actually run and report relevant tests.

---

## 02. THE CREATIVE CONCEPT: “HUMAN MOMENTUM”

This is the name of the **design concept**, NOT a request to rename the business.

**Core metaphor:** people, opportunities and companies are moving toward alignment. Represent this with **ribbons, connection routes, loops, meeting points, kinetic typography, and precise editorial markers**. A single thin, energetic visual path can subtly travel between sections, giving the entire site an authored sense of continuity.

### Signature visual language

- **Pure-white continuous stage:** white remains the underlying canvas from hero to footer. No full-width navy/dark blocks.
- **Vibrant warm signal:** vermilion/coral-orange as brand energy; fuchsia and sunshine yellow as carefully controlled supporting notes.
- **High-contrast typographic compositions:** very large expressive headlines, with small editorial captions, numbered indices and purposeful alignment.
- **Kinetic route / ribbon system:** original SVG strokes, circular tracks, hand-drawn-style vector arcs, orbiting punctuation and connectors that respond modestly to scroll.
- **Graphic humanism:** warm precision, not tech-fiction; use abstract shapes suggesting movement, connections, referrals, interviews, career steps and growth.
- **Quiet depth, not dark contrast:** hairline rules, subtle borders, minimal shadows, outline text only in controlled decorative areas.
- **Organic asymmetry:** a few wide/tall modules, offset grids, staggered headline proportions, occasional overlapping decorative layers.

### Experience rhythm

Think about the website like a beautifully sequenced magazine: **impact → relief → discovery → motion → clarity → proof → decision → conversion**. Do not give every section equal density. Never use 20 maximal-motion sections in a row.

---

## 03. EXACT COLOR ART DIRECTION — PURE WHITE, ENERGETIC, NOT CYBERPUNK

### Required base

| Role | Suggested token | HEX | Usage |
|---|---|---|---|
| Pure white stage | `--canvas` | `#FFFFFF` | Main page background, site root and predominant section backgrounds; never replace with dark/navy |
| Near-black ink | `--ink` | `#202022` | High-contrast body text, headings, icons; charcoal is for text, NOT a dark site theme |
| Secondary ink | `--ink-muted` | `#606064` | Metadata, secondary copy, descriptions |
| Hairline | `--line` | `#EAE8E5` | Dividers, tidy boundaries |
| Soft paper | `--surface-soft` | `#FAF9F7` | Sparing nested cards/panels; NOT the global page canvas |
| **Primary energy** | `--signal-coral` | `#FF5B3D` | Primary interactive accent, headlines, energetic strokes, active UI |
| Tangerine | `--signal-orange` | `#FF9A39` | Secondary motion strokes, artistic highlights |
| Rich raspberry | `--signal-raspberry` | `#E83379` | Focused highlights, featured moments, selectively animated graphics |
| Bright marigold | `--signal-yellow` | `#FFC84B` | Optimistic micro-accents and bounded highlight shapes |
| Fresh lime | `--signal-lime` | `#C6E86B` | Occasional positive/supporting motif, NOT fluorescent glow |
| Delicate coral wash | `--coral-wash` | `#FFF3EF` | Small tinted panels, card hovers; canvas stays white |
| Delicate peach wash | `--peach-wash` | `#FFF8EE` | Supporting visual scenes or illustrations |

These are **initial design tokens**. Preserve an existing verified brand identity if necessary, but the final solution MUST visibly read as white + warm energetic accents, not blue/navy/dark.

### Palette composition and roles

- Target approximately **75–85% visible white**, 10–15% text/neutral structure, 5–10% carefully distributed vibrant signals per view. This is an art-direction heuristic, not a pixel algorithm.
- Coral is the signature; orange, raspberry, lime and yellow are supporting colors, NOT four equally loud competing brand primaries.
- Typically use **one primary and at most one secondary vibrant accent in the same viewport**. This gives confidence rather than visual chaos.
- Make the accent move from coral → orange → raspberry → coral through **strokes, artwork, key words, button details and active indices**, while keeping the page background white.
- A short, accessible color-tint panel is allowed, but avoid huge saturated full-page backgrounds unless there is a deliberate, documented exception approved in the visual direction.
- Do not use neon glow, electric blue or dark gradients as decoration. Restrict gradients to delicate warm washes or SVG strokes that feel printed, not luminous.
- Run contrast checks: do not assume coral text on white passes for small text. Use near-black for small text; darken accent variants for functional text/borders when needed.

### Suggested section color narrative

| Experience region | Active editorial accent | Visual device |
|---|---|---|
| Hero | Coral | Opening orbit and underline |
| Employer/candidate gateway | Coral + marigold | Mirrored line art and asymmetric cards |
| Specialisms | Tangerine | Index markers and expanding type |
| Process | Raspberry | Tracing line and numbered milestones |
| Featured jobs | Coral | Filter underlines and card signal dots |
| Insights / guidance | Lime used sparingly | Flat graphic strips and framed editorial art |
| Closing CTA | Coral → tangerine | Loop closes around meaningful CTA |

Maintain white across ALL these transitions.

---

## 04. TYPOGRAPHY — MAKE THE LETTERS DO THE DESIGN WORK

**Typography must be the main visual protagonist**. Avoid a site that relies on enormous stock photos while typography is plain and small.

### Typeface strategy

- Use **one strong contemporary grotesk sans** (existing licensed project font if present) for headlines and interface copy, with optional carefully chosen secondary editorial serif **only for occasional emphasized words** if it improves the brand; maximum two families.
- Avoid heavyweight font downloads and unlicensed premium fonts. Prefer efficient self-hosted or sanctioned font sources with proper fallback and `font-display` handling.
- Editorial variation comes from scale, weight, rhythm, punctuation, line breaks, accent color and layout — not font proliferation.

### Typographic starting scale (responsive, tune based on real font)

```css
:root {
  --type-hero: clamp(3.25rem, 8.2vw, 8.6rem);
  --type-display: clamp(2.65rem, 5.8vw, 6.2rem);
  --type-h2: clamp(2.1rem, 4.1vw, 4.7rem);
  --type-h3: clamp(1.4rem, 2.2vw, 2.35rem);
  --type-body: clamp(1rem, 1.05vw, 1.125rem);
  --type-label: 0.75rem;
}
```

These are art-direction guides, not permission for clipping or overflow. Validate longest real CMS strings and localization.

### Composition rules

- Hero headline: powerful **two-to-four-line editorial statement**, left aligned unless another orientation is meaningfully justified.
- Highlight at most 1–2 words with the active accent; use tiny colored annotation lines/tick marks/punctuation for personality.
- Carefully controlled font weights (e.g., 500–800); prefer dense-but-readable large text with deliberate letter spacing.
- Use tiny upper-case, tracked labels for editorial indices: `01 / YOUR NEXT MOVE`, `03 / SPECIALISMS` (semantic headings still required).
- Build meaningful contrast: huge headline beside small intelligent copy and one clear action, not six equal text blocks.
- Use `text-wrap: balance` or equivalent responsibly, limit long-form line lengths around 60–75 characters, and give headings breathing room.
- Optional masked word reveal on scroll; the **content is fully visible without animation**.
- Never apply letter-splitting that damages selection, screen readers, SEO rendering or hydration. Use visible, semantic text with aria-safe decoration.
- No endless marquee of important content; any running type must be optional, pauseable if interactive, and disabled for reduced motion.

### Copy character

Clear, specific, human, optimistic and recruitment-focused. Examples are illustrative, **NOT confirmed promises**:

- “Good people. Great possibilities.”
- “Talent moves everything.”
- “Where ambition finds its people.”
- “Make your next move matter.”

Create copy adaptable to true services and CMS content. Do not fabricate placement metrics or client endorsements.

---

## 05. LAYOUT SYSTEM AND GRAPHIC DESIGN DETAILS

### Grid

- Desktop: a rigorous 12-column editorial grid or framework-native equivalent; fluid maximum container about 1320–1480px as appropriate.
- Tablet: deliberate transition to 6/8-column or fluid grid.
- Mobile: readable single column with selective horizontal scrollers only where they genuinely help.
- Edge spacing: balanced `clamp()` horizontal padding and section rhythm; no fixed-width components that break at 80%/100%/125%/200% zoom.
- Use **very wide headlines, restrained gutters, oversized index numerals, slim vertical annotations, hairline rules, asymmetrical feature panels**.

### Shape grammar

- Rounded corners should be **selective and intentional**: tight-radius buttons/cards, expressive elliptical/circular masks for illustration, clear square-edged editorial panels.
- Construct original graphic visuals from: bezier curves, dot grids, circular rings, split chevrons, line threads, arcs, offset frames and overlapping colored paper-like shapes.
- Create a few distinctive **design motifs**, then repeat with variation. Do not assign an unrelated illustrated style to each component.
- Shadows should be gentle and uncommon. Borders/negative space carry most separation.
- Photos, when genuinely available and licensed, can use editorial crops and asymmetrical frames. Never fabricate employee or candidate identities.

### Density and pacing

- Alternate **statement sections / functional sections / abstract motion interludes**.
- A functional job search should be cleaner than a hero. Keep intense motion away from form inputs, reading-intensive articles and search results.
- Use empty white space intentionally; never add filler solely to make the page long.

---

## 06. PERSISTENT WHOLE-WEBSITE BACKGROUND MOTION SYSTEM

### Required concept: “Momentum Field”

A **single, persistent, intentionally restrained decorative motion layer** that visually ties the website together — not one expensive animation engine in every section. It must render over the pure white canvas without distracting from text, jobs or forms.

#### Visual ingredients

1. **Journey threads:** 1–3 ultra-thin curved SVG strokes/orbit paths at strategic locations; some segment subtly advances as the user scrolls.
2. **Floating signals:** a very limited number of soft warm circles/ellipses/dots that drift imperceptibly at rest.
3. **Connection points:** occasional small dot / ring markers suggesting talent meeting opportunity.
4. **Pointer depth:** for devices with fine pointers, decorative shapes shift only about 4–14px in response to pointer movement, interpolated smoothly; NEVER track the pointer with a giant opaque element.
5. **Section context:** the same paths/markers may change from coral to tangerine/raspberry as a new section becomes active, without changing the base white canvas.
6. **Closing loop:** by the final CTA, the motif can visually resolve into a final linked arc/loop, reinforcing the story.

#### Layering architecture

```text
Page root — CSS background #FFFFFF
  ├─ MomentumField (site-level, aria-hidden, pointer-events none)
  │    ├─ static SVG/thread artwork (always visible when motion disabled)
  │    ├─ optional lightweight drift/pointer layers
  │    └─ optional scroll-reactive path progress
  ├─ site chrome (header, navigation)
  ├─ semantic content (sections, controls, forms)
  └─ overlays / dialogs (proper stacking and accessibility)
```

- Ensure visual layers cannot obscure click targets, block page scrolling, create unexpected scrollbars or reduce body text contrast.
- Keep visible graphic opacity/stroke density very low around content. Decorative objects must not sit behind paragraphs as distracting high-contrast clutter.
- Integrate with the framework's lifecycle; prevent duplicate listeners and resize memory leaks.
- Desktop can receive sophisticated depth; touch screens should receive an elegant simplified effect, not broken pseudo-hover.
- **Ambient motion should feel alive at rest**, but no large constant shifting of the page; gentle timing approximately 12–28 seconds for decorative drifts is a reasonable design starting point.

### Engineering preference hierarchy

1. CSS transforms/opacity for tiny loops and micro-interactions.
2. SVG + declarative animation or an **already installed** motion library for pathways and coordinated sequences.
3. IntersectionObserver / CSS scroll-driven animation where well-supported, with cross-browser fallback.
4. `requestAnimationFrame` only for truly necessary pointer smoothing or visual mapping; throttle / stop work when tab is hidden or element is not visible.
5. Canvas/WebGL **only if profiling proves the aesthetic benefit cannot be achieved with simpler methods**, with a safe non-canvas fallback. DO NOT introduce three.js by default.

Use GSAP/ScrollTrigger, Motion/Framer Motion, or equivalents only if the project already uses them or if the new dependency is justified and properly maintained. Avoid overlapping engines.

### Motion health constraints

- Honor `prefers-reduced-motion: reduce` and provide no-motion static visual quality.
- No scroll hijacking; preserve natural wheel/touch/keyboard behavior.
- No permanent high-CPU canvas loops on mobile.
- No layout-affecting `top/left/width/height` animations for frequently animated elements when `transform` or `opacity` can do the job.
- Avoid gradients blur/radius filters that repaint huge layers on every frame.
- Keep the background behind essential content, labels, forms, system messages, and consent dialogs.

---

## 07. SCROLL-DRIVEN ART DIRECTION AND COMPONENT-TO-COMPONENT TRANSITIONS

Motion must feel like a single choreographed identity, not random entrances. Create **reusable, named motion presets** and implement them consistently.

### A. Section handoff / color baton

As the next section enters the viewport, transfer the active signal color smoothly from one creative device to another (e.g., underline → line path → step counter). The **background remains #FFFFFF**. Colors should transition across decorative SVG stroke, section number, accent word and selected icon only.

### B. Kinetic editorial reveal

Large headings reveal in short masked/opacity sequences with minor y-offset (e.g., 12–24px), sequentially with accompanying caption and CTA. Maintain accessibility and SSR/hydration stability.

### C. Connecting line draw

SVG path stroke progress maps to intersection/scroll progression between process stages or adjacent sections. Draw only within the visible region and stop outside it. Do not create a massive path that forces scroll progress calculations across the entire application.

### D. Sticky storytelling (rare and deliberate)

Use one or two standout pinned/near-sticky modules on long pages, such as the recruitment process or expertise story. Their content changes within a bounded section while standard page scrolling remains intact. On mobile and reduced-motion, render a natural stack.

### E. Depth parallax (low amplitude)

A hero decorative disk, small typographic label and background route move at slightly different rates, **not the paragraph or button itself**. Limit displacement; ensure no clipping at zoom / mobile.

### F. Section reveal through shapes

Introduce a new section using overlapping white-on-white editorial framing, an arc moving across the divider, or an SVG mask/reveal on purely decorative artwork. Do not hide the actual semantic content or load it only after scroll.

### G. Animated number / progress markers

Numbers and progress indicators may increment/trace once when appearing, but use **real values only**. If actual counts are unavailable, use sequence indices rather than invented business KPIs.

### H. Accent morph / graphic transformation

Reuse the brand's orbit/ribbon form: circle → line → connection nodes → loop. Favor simple compositional changes over expensive shape morphing and offer a static fallback.

### Motion preset definitions (initial targets)

| Preset | Behavior | Indicative duration/easing |
|---|---|---|
| `quiet-enter` | Small opacity + vertical reveal | 420–650ms, smooth ease-out |
| `stagger-words` | Editorial title parts unfold | 60–100ms stagger, 550–750ms total |
| `draw-path` | Line traces between meaningful points | Scroll-linked, bounded |
| `hover-lift` | Small translateY + accent rule | 180–260ms |
| `button-sweep` | Small color fill or arrow shift | 200–320ms |
| `accent-shift` | Editorial accent color change | 400–800ms |
| `ambient-drift` | Barely perceptible graphic drift | 12–28s |
| `soft-parallax` | Decorative position transform | Scroll-linked, tiny movement |

Implement motion tokens/config so designers can tune duration, stagger, amplitude and disable flags centrally. Never run all presets on every module; aim for **one primary interaction per section** plus optional ambient background.

---

## 08. HOVER, CURSOR, FOCUS, AND MICRO-INTERACTION GRAMMAR

### Navigation

- White sticky header with minimal subtle border/blur only if needed for legibility; never a navy bar.
- Animated active underline or small coral dot translating between links; accessible dropdowns and keyboard handling.
- Compact/expanded transitions based on scroll without layout-jumps or abrupt geometry changes.
- Proper mobile menu with meaningful touch targets, focus management and Escape handling.

### Buttons

- Primary: bold near-black or coral filled according to contrast; design a crisp white/coral interaction system, not glow.
- Hover: small arrow travel, micro-sweep or outline animation, never a magnet effect that prevents predictable clicking.
- Secondary: clean text/link with animated underline/route ending in arrow.
- Keyboard focus visible, not removed in favor of hover styling.

### Cards

- Hover primarily affects one element: a rising illustration, shifting frame line or extending accent stroke.
- Do not force all cards to scale/lift/spin; category cards, process cards and job cards deserve different levels of restraint.
- On touch, show information without requiring hover; no hover-only primary actions.

### Custom cursor

Optional only. Default to the native cursor unless a subtle custom pointer improves a specific creative canvas. Never obscure text fields, links, selection or system feedback. Disable on touch and reduced motion. **Not a success requirement.**

### Forms and search

- Gentle floating labels/clear active borders/precise validation, not moving form containers.
- Ensure Enter submit, labels, screen reader announcements, loading/error/success states and real backend behavior.

---

## 09. DISTINCTIVE CREATIVE COMPONENT CATALOG — DESIGN AND IMPLEMENT INTENTIONALLY

**Important:** This is a catalog of usable modules, not an instruction to cram all 30 onto the homepage. Prioritize a coherent narrative. Build the chosen ones as reusable, typed, CMS-configurable units with thoughtful states. Some items can live on interior pages only.

For every new component define: semantic purpose, responsive layout, CMS fields/content source, motion preset, focus/hover/touch behavior, loading/empty/error states if data-driven, fallback without animations, acceptance checks.

### P0: Brand-defining and high-conversion modules

**C01 — Kinetic Recruitment Hero**  
Huge editorial headline, contrasting micro-labels, two distinct CTAs (`Hire Talent`, `Explore Jobs`), and a bespoke moving connection/orbit artwork. White background always. Reveal headline in an accessible sequence. Use original SVG graphics, not a generic animated sphere.

**C02 — Living Momentum Field**  
Site-wide low-density background system described in §06. One shared provider or component in the root layout. Its active color follows nearby section context.

**C03 — Audience Gateway / Split Choice**  
Two thoughtfully asymmetric employers/candidates sections, not two identical rectangles. Each side has a unique linear illustration and a clean, high-contrast CTA. On hover, route strokes connect to the active choice. On mobile, stack with visible choice text.

**C04 — Recruitment Services Editorial Grid**  
Flexible, magazine-like service blocks with varied span/scale, numbered labels, short descriptions and ink+coral illustration. Real service routes or real inquiry destinations only. CMS controls ordering, text, icons and layout variant.

**C05 — Interactive Expertise Index**  
Oversized typographic list of actual specialties. Highlighted item swaps a companion editorial visual with subtle transition and accurate content. Use keyboard-accessible tabs or links, not hover-only selection.

**C06 — Process Trace / Career Path Map**  
A line travels through 4–6 real recruitment stages as the user scrolls. Numbered milestone copy remains readable. Desktop may be sticky; mobile switches to semantic vertical steps.

**C07 — Opportunity Finder Search Stage**  
Actual search/filters for real jobs with smart clear/empty states. Keep motion almost absent inside input/results. Search terms, pagination and URLs should behave as project architecture supports.

**C08 — Featured Roles / Job Ticket Cards**  
A fresh “editorial ticket” interpretation of jobs: title, location, contract type, optional salary if verified, clear action, slim route line. Minor hover arrow translation; keyboard focus included.

**C09 — Proof Without Pretend Metrics**  
Verified data/cases/quotes only. If unavailable, replace with transparent methodology, process standards, or team approach — do not fabricate outcomes. Display actual metrics with one-time restrained counting only when legitimate.

**C10 — Conversion Finale / Closing Loop**  
Bold ending statement with oversized typography; the background journey line resolves into an open loop framing the CTA. Separate employer and candidate actions; accessible on mobile.

### P1: Artistic narrative and differentiation modules

**C11 — Statement Bridge / Type-only Interlude**  
A large typographic message breaking two dense sections; coral word accent and a passing curve. Strong white space, minimal UI.

**C12 — Editorial Service Spotlight**  
Deep-dive on one service with large typographic title, multi-column explanation, a warm SVG vignette and 3 specific benefits; avoid sales hyperbole.

**C13 — Human Connection Diagram**  
Original abstract representation of candidate → consultant → employer matching. Animated arcs in a deliberate, sparse vector scene; screen reader gets a concise textual explanation.

**C14 — Dual Journey Timeline**  
Switch between `For employers` and `For candidates` process journeys. Accessible segmented tabs with scroll-progress line, no content loss if JavaScript is disabled.

**C15 — Recruiter / Advisor Profile Editorial**  
Real approved personnel profiles with portraits if available, expertise/copy/contact link; otherwise do not use fabricated team members. Use asymmetrical portrait framing and bold name typography.

**C16 — Industry Motion Posters**  
Graphic posters for verified specialties: minimal image or original illustration + one huge typographic word + index. On hover, controlled line/shape movement; link to detail pages.

**C17 — Connection Routes Map (Abstract)**  
A conceptual, **not geographic**, route illustration showing employer needs converging with candidate strengths; clear textual labels, no fake mapped locations.

**C18 — Hiring Problem / Solution Accordion**  
Functional FAQ/solution panel with bold type, responsive line graphics and smooth height transition using accessible patterns; supports CMS content.

**C19 — Quote as Artwork**  
A real, approved short quote in oversized typography with genuine author context. If no quote exists, use a brand promise clearly written as company positioning without invented attribution.

**C20 — Career Growth Ladder**  
Steps or bands of candidate support with small movement on reveal. Not a literal staircase that breaks reading order; meaningful semantic sequence.

**C21 — Insights Editorial Cards**  
Mixed-span magazine grid for actual articles with date/category/author where real. Feature one hero story and avoid repetitive image-card structure.

**C22 — Skills Constellation (Abstract)**  
Compact visual cluster of truthful sector skills/roles; dots/labels connect subtly. Labels remain accessible, tappable if interactive, and never move during reading.

**C23 — Opportunity Match Visualizer (Explanatory)**  
Illustrate how recruitment fit is evaluated. It is not a real AI matching score unless implemented and backed by correct data. No misleading “97% match” examples represented as factual.

**C24 — Recruitment Model Selector**  
Compare permanent, contract, executive etc. only if the business genuinely offers them. Accessible tabs or cards with practical differences and CTA to discuss hiring.

**C25 — Scroll-linked Section Index**  
Subtle section progress numerals and small labels for long storytelling pages. May become static/mobile hidden if it interferes with usability. Must not become persistent navigation clutter.

**C26 — Ribbon Divider System**  
Reusable full-width section transition art created as lightweight SVG variants; one fluid warm stroke crosses a divider and hands its color/shape to the next section.

**C27 — FAQ / Objection Handling Cards**  
Concise employer/candidate-specific answers, proper accordion semantics, optional small background doodles with no distracting constant movement.

**C28 — CV Submission Journey**  
Only if a secure actual intake backend exists. Clear fields, file constraints, validation, explicit data consent, progress/error/success, retention awareness. No fake completed uploads.

**C29 — Hiring Requirement Brief Builder**  
A simple, accessible multi-step employer enquiry only if backend supports it or can be implemented safely. Keep steps short, preserve user input, permit back navigation, validate and submit to real endpoint.

**C30 — Branded Zero States / 404 / Success**  
Even empty jobs, unavailable filtered results, not-found pages and contact confirmation should feel intentionally designed with an original line illustration and useful next action.

### Build-quality rule

**Prefer 12 exceptionally finished components over 30 half-working ones.** Implement a coherent P0 set first; add P1 modules where a page has a clear reason to use them. Do not create empty route shells or dump the whole catalog into one infinite homepage.

---

## 10. PAGE-BY-PAGE ART DIRECTION AND COMPOSITION

### 10A. HOME — flagship narrative

**Target arc (adapt to actual routes/content):**

1. **White kinetic hero** — oversized 2–4 line headline, candidate/employer CTA split, orbit/thread visual.
2. **Mini credibility/context strip** — real specializations, not invented client logos or numbers.
3. **Audience gateway** — employers vs candidates, asymmetrical interactive choice panels.
4. **Type-only statement interlude** — one brave headline; motion path bridges prior section to next.
5. **Services editorial grid** — different card spans, informative copy, selectively animated SVGs.
6. **Expertise index** — big typographic specialty list with visual preview.
7. **Recruitment process trace** — numbered journey with scroll-responsive colored line.
8. **Human connection diagram** — abstract visual interlude with tangible explanatory copy.
9. **Featured live jobs** — functional data-first module with graceful empty state.
10. **Trust/proof** — genuine client feedback/process evidence or transparent values.
11. **Insights** — real content, clear reading choices.
12. **Closing loop CTA** — warm, bold conversion section and white editorial footer.

Not all blocks need to ship if there is no valid content. Remove filler; improve the story.

**Hero art direction:** The eye should first land on the headline, second on a warm connected graphic, third on the correct CTA. Avoid background movement behind dense text. Position a restrained off-center circular path near a side visual, with an animated small coral marker indicating connection.

**Section transition sequence:** use 2–3 distinct treatments instead of same fade everywhere: (i) line handoff, (ii) typographic break, (iii) graphic frame expansion. The user's scroll remains natural.

### 10B. FOR EMPLOYERS

Design with confidence and clarity. Huge statement headline, concise solutions, industry expertise, hiring model selector, illustrative process, verified success evidence and a functional employer enquiry form. More structured than homepage, with occasional coral motion path and graphic annotation. CTA: discuss hiring / submit brief.

### 10C. FOR CANDIDATES

Optimistic and human. Statement hero, career path cards, current opportunities, truthful expectations, support steps and guidance. Interactive career timeline or growth ladder; no fake AI match indicator. CTA: browse opportunities / submit CV only if real secure intake exists.

### 10D. FIND JOBS / JOB DETAIL

**Prioritize usability above visual experimentation.** White, editorial, crisp result rows or ticket cards. Search, filters, sorting, pagination or URL state according to real backend. Accessible filter controls and clear metadata. Empty/loading/error states. Job detail: hierarchy around title/location/type/responsibilities/requirements/benefits/real apply path. Keep background animations near-zero behind listings and forms.

### 10E. EXPERTISE / INDUSTRIES / SERVICES

Design like a print-style index: large category headings and purposeful specialty artwork. On detail pages use an original top banner graphic, specific content, process/capability blocks, relevant roles (if real), and meaningful CTA.

### 10F. ABOUT / PEOPLE / OUR APPROACH

Art-directed narrative about real company background, team and values. Use human photos only with genuine authorization. Convert unsupported history/metrics into brand-philosophy statements. Include an engaging process graphic and a white CTA.

### 10G. INSIGHTS / ARTICLE

Editorial typography with readable measure, real metadata, restrained motion outside reading columns, accessible table of contents where useful. Avoid sticky animations that hide reading content. Author/about fields must reflect real data.

### 10H. CONTACT / HIRING BRIEF / CV INTAKE

Clear route selection, safe accessible form design, privacy notices and real submission behavior. An occasional small warm illustrated curve beside form is sufficient; no animated cursor trails near inputs. Do not collect more applicant information than necessary.

### 10I. CMS / ADMIN

Do NOT impose the expressive marketing-site visual treatment on every admin data table. Admin should remain fast, clean, readable, secure and functional. Support design content controls, block ordering, motion presets and live previews without destabilizing existing admin UX. Retain functional separation between public design and operational screens.

### 10J. SHARED HEADER + FOOTER

**Header:** pure white, strong alignment, purposeful whitespace, clear logo, compact nav with mobile behavior, employer/candidate CTA differentiation, subtle active color.  
**Footer:** white, strong type-forward brand closer, organized navigation/social/legal info based on real data, one original ribbon motif. No mandatory dark footer.

---

## 11. GRAPHIC ASSET STRATEGY — ORIGINALITY WITHOUT TEMPLATE DEPENDENCE

1. **Prefer bespoke scalable vector graphics** for the central motion language: strokes, waypoints, loops, human connections, abstract recruitment scenes. These can be authored directly inside the codebase as reusable SVG components.
2. Support them with a restrained set of licensed photography only when useful to show real people or verified business context.
3. Every visual must have a job: clarify, guide, create brand recall or establish rhythm. Delete purely decorative clutter.
4. Keep stroke widths, dot sizes, spacing rules, radius patterns and color tokens consistent across all illustrations.
5. Use SVG paths with transforms instead of enormous Lottie/video files unless justified and optimized.
6. No unsolicited brand/logo changes. Do not invent copyrighted third-party brand assets.
7. Avoid giant animated background videos, random 3D stock shapes, constant confetti, emoji illustrations, lens flare, metallic material, heavy glass effects, dark gradients, and cyberpunk motifs.
8. Provide meaningful alt text only for informative images; decorative shapes should be `aria-hidden`.

### Art direction check

Take one screenshot of hero, one of process, and one of jobs. It should be obvious that all three came from the same design studio, despite distinct composition and motion intensity.

---

## 12. FULLY DYNAMIC CMS-READY COMPONENT ARCHITECTURE

Inspect the existing CMS first. DO NOT rebuild it just to make animation controls. If a CMS exists, safely extend its block/page schema and editing interfaces; if not, keep typed props and adapters so it can be integrated later without rewriting every component.

### Data-driven design model

A visual section/component should separate:

- `content`: heading, eyebrow, body, CTA labels/URLs, labels, meaningful list items, factual images.
- `layout`: variant, density, columns/spans, ordering, alignment, optional section width.
- `theme`: permitted accent preset (`coral`, `tangerine`, `raspberry`, `sunshine`, `neutral`), **without allowing a dark/navy full-page theme**.
- `motion`: safe named preset, intensity (`off`, `subtle`, `standard`), section handoff effect; never raw arbitrary scripting via CMS.
- `visibility`: publish/schedule/show-hide controls where existing system supports them.
- `seo`: existing page title, description, OG data, schema where applicable.
- `accessibility`: alt text, screen-reader descriptions for informative diagrams, validation and keyboard behavior.

**Example conceptual schema, adapt to actual types/ORM:**

```ts
type Accent = 'coral' | 'tangerine' | 'raspberry' | 'sunshine' | 'neutral';
type MotionPreset = 'none' | 'quiet-enter' | 'stagger-words' | 'draw-path' | 'soft-parallax';

type EditorialSection = {
  id: string;
  type: string;             // registered, validated block type
  order: number;
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctas?: Array<{ label: string; href: string; style: 'primary' | 'secondary' }>;
  accent?: Accent;
  motion?: MotionPreset;
  layoutVariant?: string;   // validated per-block enum
  visible?: boolean;
  dataSourceKey?: string;   // for real services/jobs/articles where supported
};
```

This schema is **illustrative**; do not paste blindly. Reuse the project's schema conventions, validation, translations and safe migration strategy.

### CMS integration requirements

- Fields for every visible copy area (hero heading, accent word if design needs it, supporting lines, CTA labels, images, alt text and module title).
- Blocks are reorderable if existing page builder patterns support it; section transitions should re-evaluate gracefully when order changes.
- Preview uses same renderer/components as public pages where possible; avoid a second inconsistent design implementation.
- Header/footer shared settings stay centralized, with explicit per-section/per-page overrides only where needed.
- Site-wide palette/motion presets are centrally configured and **restricted to accessible choices** so authors cannot accidentally destroy visual consistency.
- Jobs and articles should continue coming from their real content source, not from arbitrary duplicated hand-entered cards.
- SSR/SEO remain intact: initial copy and important page structure render without waiting for motion to initialize.
- Do not impose unnecessary migrations. If schema changes are necessary, produce reversible migrations, defaults, validation and a rollback strategy. Preserve all existing records.
- Preview, fallback, missing image handling, empty field handling and unpublished content must not break layout.

---

## 13. IMPLEMENTATION STRATEGY — AUDIT, DESIGN, BUILD, VERIFY

This is not merely a brief to write another design brief. Once the repository has been inspected and a safe plan established, **implement the design in the existing project** incrementally. Present a concise plan/checkpoints; if the environment explicitly requires approval before edits, get it. Otherwise begin safe non-destructive work and ask only when an irreversible change is needed.

### PHASE 0 — Evidence-based audit

- Read manifests, architecture, styles, routes, assets, UI library and existing design tokens.
- Identify which recruiting pages/components currently exist, what is functional and what is unfinished.
- Map reusable code, CMS blocks, existing layout system and backend contracts.
- Record current dev/build/test baseline and any pre-existing errors.
- Determine correct project scripts and how to run frontend/backend safely.
- Identify conflicting previous palette rules; **replace blue/navy/dark art direction with white + warm signal palette**.
- Produce a brief UI audit with page screenshots if dev environment supports it.

**Output:** page inventory, risk list, proposed tokens, prioritized module map, low-risk rollout plan.

### PHASE 1 — Build design system foundation

- Establish CSS/design tokens, fluid typography, container/spacing/radius rules, focus states and responsive utilities.
- Integrate fonts efficiently and use accessible type fallbacks.
- Design shared navigation, buttons, inputs, footer and link treatments.
- Create reusable `SectionShell`, `EditorialHeading`, `AccentText`, `RouteLine`, `SignalMarker`, `MotionReveal`, etc. using established project patterns.
- Add visual regression-friendly stories/tests if existing tooling supports them.

**Gate:** shared primitives look correct at 320 / 390 / 768 / 1024 / 1440+ and browser zoom; no horizontal overflow.

### PHASE 2 — Motion infrastructure and background

- Build one shared `MomentumField` and isolated motion utilities.
- Add component-level entrance, section accent context, bounded path traces, simple hover interactions.
- Add reduced-motion and touch-device fallbacks from day one.
- Document animation ownership; prevent duplicate listeners/engines.

**Gate:** no content shift, scrolling remains native, motion does not intercept pointer, CPU/performance acceptable.

### PHASE 3 — Flagship homepage redesign

- Implement hero and content hierarchy first; verify static layout before animation.
- Add audience gateway, type interlude, service mosaic, expertise index, process trace, jobs, trust/insights and final CTA as real content permits.
- Create only purposeful section handoffs and active accent changes.
- Refine responsive tablet/mobile designs independently, not by shrinking desktop wholesale.

**Gate:** actual employer/candidate user journeys remain obvious; no dead CTA; homepage builds and renders cleanly.

### PHASE 4 — Interior pages and genuine feature integration

- Employers and candidates routes.
- Jobs index/detail/search/apply flows from real data and real APIs.
- Expertise/services/about/insights/contact pages.
- Empty/error/loading states, conversion forms, navigation, page titles and SEO.
- Keep UI animation away from critical data workflows.

**Gate:** navigation and functional flows work with the actual application; backend contracts are preserved.

### PHASE 5 — CMS integration and editing affordances

- Reuse or extend existing models/blocks, styles and presets.
- Add validated fields for new creative components and motion options.
- Verify published content, preview, reordering and fallback behavior.
- Implement migration only where unavoidable and safe.

**Gate:** representative text/CTA/module changes can be made through CMS without manually changing frontend code, where CMS exists.

### PHASE 6 — Creative director polish + cross-device QA

- Review each section at real desktop/mobile breakpoints and zoom values.
- Refine typography, visual rhythm, clipping, optical alignment, copy, transition timing and restraint.
- Reconcile motion timing so consecutive modules feel like one authored sequence.
- Check contrast, keyboard, screen reader expectations, reduced motion, network throttling and browser/device performance.
- Run the repo's existing build/lint/type-check/test commands; fix introduced errors, distinguish pre-existing ones.

**Gate:** aesthetically coherent AND technically production-minded.

### PHASE 7 — Final delivery and honest status

Report:

1. What design system and visual language changed.
2. Which pages/modules were implemented.
3. How global background / scroll accent / section transitions work.
4. CMS integration status and any migration.
5. Commands/tests run and their actual results.
6. Known limitations and missing business content/integration credentials.
7. Locations of key source files and how to edit component data/presets.
8. Screenshots or visual evidence where available.

Never report unrun tests as passed. Never call a mocked submission a working integration.

---

## 14. DETAILED RESPONSIVENESS, ACCESSIBILITY, AND PERFORMANCE RULES

### Screen and zoom matrix

Check at least **320, 360, 390, 430, 768, 1024, 1280, 1440, and 1920 px** where practical. Also inspect **80%, 100%, 125%, and 200% browser zoom** as feasible. Verify portrait touch layouts and long text in CMS.

- No horizontal overflow, clipped headline, invisible CTA, decorative overlay blocking navigation, sticky section trap or unreadable text.
- Prefer fluid CSS layout and content-first responsive rules rather than viewport-specific absolute-position patches.
- Decorative ribbons can be cropped by their own intentional art containers, never by forcing the entire page to crop/scroll sideways.
- On mobile, simplify background and sticky motion, keep real reading order and adequate touch targets.

### Accessibility

- Honor `prefers-reduced-motion`; content is still beautiful and complete when animations do not run.
- Avoid flashing, rapid color cycling and vestibular triggers. No important information conveyed solely by color or motion.
- Use semantic hierarchy, anchors/buttons correctly, keyboard accessible tab/accordion/menu patterns, visible focus and escape handling.
- Keep motion graphics decorative with `aria-hidden`; provide text equivalent to informative diagrams.
- Validate interactive foreground/background contrast, especially coral on white and yellow on white.
- Preserve `:focus-visible`; keyboard users must never depend on hover.
- Keep form field labels, errors, instructions, submission status and file-upload consent accessible.
- No text hidden before intersection observer starts in SSR/JS-disabled conditions.

### Performance

- Aim for **Core Web Vitals** quality in realistic conditions (e.g., LCP ≤2.5s, CLS ≤0.1, INP ≤200ms on representative field/lab conditions when measurable), but do not claim those numbers without measurement.
- Default to responsive, optimized imagery and limited font families/weights.
- Lazy load below-fold non-essential artwork and media appropriately; do not lazy load important LCP content incorrectly.
- Profile animation hotspots; animate transforms/opacity and limit oversized filter/compositing layers.
- Avoid scroll polling and duplicated resize listeners. Pause offscreen visual work.
- Keep section transitions deterministic and hydration-safe; don't create client/server text differences.
- Tree-shake dependencies, reuse code, avoid unnecessary new motion packages.

### Functional QA

- Navigation and mobile menu, all CTA hrefs, job filters/search/detail/apply, contact forms and real integrations.
- Existing SSR/routes and SEO metadata remain valid. Add appropriate structured data only when actually accurate.
- Browser back/forward and deep links work.
- Loading, error and empty UI, focus behavior, reduced-motion state and touch interactions work.
- No missing assets, hydration errors or noisy runtime warnings introduced.

---

## 15. CREATIVE DIRECTOR SELF-REVIEW (MANDATORY)

At the end of each meaningful design batch, answer these **concretely** and revise if needed:

1. Does the screenshot have a **truly white base**, not tinted gray or dark bands?
2. Is coral/orange clearly the energetic primary without looking neon/cyberpunk?
3. Can a first-time visitor identify the company as a recruitment consultancy in 5 seconds?
4. Can both an employer and candidate find the right next action instantly?
5. Is the typography striking, intentional, responsive and easy to read?
6. Does every section feel related to one continuous visual narrative rather than separate templates?
7. Is the background alive but not stealing attention from essential content?
8. Do scroll-linked color accents change meaningfully while preserving pure white?
9. Does at least one original, memorable creative graphic recur intelligently across sections?
10. Are long, functional pages calmer than the artistic homepage?
11. Do cards have varied, content-appropriate compositions instead of repetitive clone blocks?
12. Do all animations have a static/no-motion equivalent?
13. Does mobile look **designed**, not merely squeezed?
14. Can users complete actual tasks through working forms, jobs and navigation?
15. Can the business safely edit the modules/content in the CMS where one exists?
16. Did we verify real build/test outcomes rather than trusting screenshots?

**If the implementation is visually generic or incoherent:** do not merely add more effects. Return to hierarchy, typography, rhythm, color restraint and the core journey-thread concept.

---

## 16. ACCEPTANCE CRITERIA — DEFINITION OF DONE

### Visual

- [ ] Public website visibly uses **pure #FFFFFF canvas** with bold warm accents, not navy/dark/cyberpunk styling.
- [ ] Typographic hierarchy is premium/editorial with thoughtful font and scale choices.
- [ ] Original, reusable SVG/graphic motifs connect the experience visually.
- [ ] Background motion runs subtly where appropriate and has a high-quality static fallback.
- [ ] Section-to-section transitions use scroll-linked graphic/color handoff without changing the global white background.
- [ ] Homepage is art-directed and responsive, and interior pages share the same system.
- [ ] Color, text contrast, spacing, alignment and component variants feel deliberate.

### Product

- [ ] The site clearly sells a genuine recruitment consultancy, not legacy IT services.
- [ ] Employers and candidates have distinct, obvious journeys.
- [ ] Jobs/content are real or represented transparently as unavailable; no fake credibility data.
- [ ] CTA links/forms/search/job workflows operate honestly and correctly.
- [ ] CMS-controlled content and site structure remain maintainable when applicable.

### Engineering

- [ ] No introduced build/runtime errors in the checked paths; report pre-existing issues separately.
- [ ] Responsive checks include mobile, desktop and zoom; no accidental page overflow.
- [ ] Native scrolling works normally; no scroll trap or giant performance cost.
- [ ] Reduced-motion behavior is honored.
- [ ] Accessibility and focus flows are usable, including touch and keyboard.
- [ ] Performance-sensitive motions are profiled or responsibly simplified.
- [ ] Existing backend/database/SSR/deployment behavior is not casually destroyed.
- [ ] Code is organized, reusable, typed/tested according to repository standards, not huge unmaintainable components.

---

## 17. NON-NEGOTIABLE NEGATIVE PROMPT

If your initial generated design resembles ANY of these patterns, **reject and redesign that direction before implementation**:

- Navy full-screen recruitment hero with small white text.
- Dark blue gradient background with glowing neon cards.
- Purple SaaS AI hero, repeated glass cards and floating artificial dashboard panels.
- Black sections alternating with off-white simply to manufacture contrast.
- Random rainbow accent on every card.
- Giant motion blur clouds underneath body text.
- Constantly spinning background donuts/3D objects consuming CPU.
- Gratuitous text splittings that break screen readers or cause content flashes.
- Fake placement counter / fake employer list / fake testimonials.
- Unverified interactive “Apply” experience, fake submission success or placeholder hrefs.
- Scroll-jacking or making users wait through theatrical transitions to reach information.
- 20 identical cards with different icons pretending to be a unique design.

The intended result is **a bright, bold, art-directed recruitment brand, not a visual-effects demo**.

---

## 18. WHAT YOU SHOULD DO ON YOUR FIRST REPLY INSIDE ANTIGRAVITY

Without asking me to repeat this file:

1. Confirm you read both the current design master prompt and relevant existing project instructions.
2. Summarize the actual stack/repo structure you discovered (do not guess).
3. Give a **short, actionable design transformation plan** with a clear sequence of files and pages to modify.
4. State the approved-looking palette and deliberate interpretation of **pure white + warm vibrant accents + continuous ambient motion + scroll-linked color transitions**.
5. Explain which existing functionality/CMS modules must remain intact.
6. Start on safe implementation in phases when the execution environment allows; stop only for approval explicitly required by the user or for destructive/security-critical changes.
7. Show evidence through builds, screenshots and tests as work progresses.

## 19. EXACT EXECUTION REQUEST

**Now inspect and evolve my EXISTING NorthFace recruitment consultancy project according to this file. Keep the background pure white everywhere. Lead with warm coral-orange, add restrained raspberry/yellow/lime accents, dramatic typography, original connected-line illustrations, a tasteful animated ambient background, and seamless scroll-driven accent and component transitions. Build a coherent portfolio-grade interface across both employer and candidate journeys. Preserve real business logic, CMS integration, accessibility and performance. Do not create a new project. Do not substitute a plan for implementation. Verify the output and report the truth.**

# MASTER INSTRUCTION — END
