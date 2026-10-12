# Transformation Audit: IT Services to Recruitment & Talent Consultancy

**Date:** October 13, 2026  
**Repository:** `NorthFace/frontend`  
**Author:** Principal Full-Stack Engineer & Enterprise Architect

---

## 1. Discovered Stack & Runtime Architecture

- **Core Framework:** Next.js 16.3.7 (Turbopack, App Router)
- **UI Library:** React 19.2.8 & React DOM 19.2.8
- **Language:** TypeScript 5.x with strict type checking
- **Styling System:** Tailwind CSS v4 (`@tailwindcss/postcss` 4.x, `tailwindcss` 4.x, `@theme` in `globals.css`)
- **Iconography:** `lucide-react` 1.49.0
- **Animation Ecosystem:** `framer-motion` 13.4.6 + CSS keyframes/hardware-accelerated transforms
- **Forms & Validation:** `react-hook-form` 7.89.0, `zod` 3.25.76, `@hookform/resolvers` 5.9.1
- **Database / ORM:** `@prisma/client` 7.10.0 listed in `package.json`; currently zero active database migrations or hard backend locks
- **CMS:** No external headless CMS bound; content is modeled via structured typed datasets (`src/data/`)
- **Rendering & Output:** Server-Driven Static Site Generation (SSG) with `generateStaticParams`, sitemap generator, robots generator
- **Linting & Code Quality:** ESLint 9 (flat config via `eslint.config.mjs`, `eslint-config-next`), zero errors/warnings

---

## 2. Route Inventory & Migration Strategy

| Current Route | Current Content | Action | Target Destination / Role |
|---|---|---|---|
| `/` | Enterprise market intelligence consulting | **Redesign** | **P0:** Signature Recruitment Consultancy Home (Dual employer/candidate gateways, signature talent visual, process timeline, jobs preview) |
| `/about` | Firm overview (strategy & intelligence) | **Reposition** | **P0:** Talent firm story, methodology, practice leadership, ethical recruiting principles |
| `/contact` | Generic enterprise contact form | **Upgrade** | **P0:** Dual intake routing (Employer hiring brief vs Candidate advisory inquiry) |
| `/services` & `/services/[slug]` | Tech & strategy services | **Reposition** | **P0/P1:** Talent solutions (Permanent Placement, Executive Search, Interim/Contract, RPO, Talent Mapping, Specialized Tech Hiring) |
| `/industries` & `/industries/[slug]` | Macro-economic industry sectors | **Reposition** | **P1:** Recruitment Practice Areas (Technology & AI, Financial Services, Healthcare & Bio, Advanced Engineering, Enterprise SaaS) |
| `/reports` & `/reports/[slug]` | Research reports catalog | **Transform & Repurpose** | **P0:** Replaced/augmented by `/jobs` and `/jobs/[slug]` as primary operational directory; research data migrated into `/insights` talent whitepapers |
| `/jobs` & `/jobs/[slug]` | *(New)* | **New P0** | Searchable talent directory, role detail, structured application flow, honest vacancy metadata |
| `/employers` | *(New)* | **New P0** | Dedicated employer landing page, hiring models, SLA & process, submit hiring brief form |
| `/candidates` | *(New)* | **New P0** | Dedicated candidate landing page, career navigation, candidate rights & privacy, job exploration |
| `/case-studies` | Corporate turnaround case studies | **Reposition** | **P1:** High-impact hiring case studies (Executive leadership placement, global team scaling, cost-per-hire optimization) |
| `/insights` & `/insights/[slug]` | General strategy articles | **Reposition** | **P1:** Talent intelligence, hiring salary benchmarks, executive recruitment guides |
| `/privacy`, `/terms` | General privacy policy | **Upgrade** | **P0:** Recruitment compliance, candidate CV retention, consent-first processing, GDPR/CCPA alignment |

---

## 3. Existing Components & Design Primitives

- **Navigation & Layout:**
  - `src/components/layout/Header.tsx`: Responsive navigation with mega-dropdowns, mobile drawer, search modal trigger
  - `src/components/layout/Footer.tsx`: Enterprise multi-column footer with brand links and pre-footer CTA
  - `src/components/layout/SearchOverlay.tsx`: Fast client search modal with category filtering
  - `src/components/layout/AppShell.tsx`: Global page wrapper
- **UI Components:**
  - `src/components/ui/button.tsx`: CVA-based button component
  - `src/components/ui/animations.tsx`: Framer Motion reveal wrappers (`FadeIn`, `StaggerContainer`, etc.)
- **Section Modules:**
  - Hero, Metrics, Capabilities, Industries, Case Studies, FAQ, Process, Solutions, Global Presence, Global CTA

---

## 4. Architectural & Safety Risks

1. **Candidate PII Protection:**
   - Resumes and candidate submissions must never be stored in public directories, client bundles, or logged with sensitive personal data.
2. **Build & Route Integrity:**
   - All static paths (`generateStaticParams`) must resolve cleanly so `npm run build` maintains 100% SSG generation without runtime errors.
3. **No Plagiarism / Honest Positioning:**
   - Avoid fabricated candidate profiles, fake client testimonials, or invented job counts. Use honest, high-fidelity sample market positions and genuine service workflows.
4. **Motion Performance:**
   - Background canvas/SVG ambient animations must maintain `pointer-events: none`, respect `prefers-reduced-motion`, and not drop FPS on mobile devices.
