# Recruitment Consultancy Transformation Plan

**Objective:** Transform existing IT services codebase into a high-end, human-centered recruitment consultancy and executive talent search platform.  
**Strategy:** Phased, gated execution preserving existing Next.js 16 + Tailwind CSS v4 foundation and verified build health.

---

## Phase Breakdown & Execution Road Map

### Phase 1: Foundation, Tokens & Brand Identity
- **Goal:** Adapt visual design system, navigation contracts, and metadata to recruitment positioning.
- **Tasks:**
  - Update `globals.css` with recruitment consultancy palette (warm canvas `#F7F8F6`, crisp surface `#FFFFFF`, graphite `#141820`, cobalt `#3859D8`, sage `#E9F2ED`, subtle hairline dividers `#E2E6E8`).
  - Update `navigation.ts` to reflect the master information architecture:
    - Primary Nav: For Employers · For Candidates · Find Jobs · Practice Areas · About · Insights · Contact
    - CTAs: `Hire Talent` (Primary) & `Explore Jobs` (Secondary).
  - Update `RootLayout` metadata: title, description, keywords, OpenGraph tags centered on talent consultancy.
- **Verification Gate:** Build passes (`npm run build`), no layout regressions in header or footer.

---

### Phase 2: Signature Motion Background & Transformed Homepage
- **Goal:** Create the signature recruitment hero, ambient talent background, and modular homepage.
- **Tasks:**
  - Build `AmbientTalentBackground.tsx`: multi-layer subtle particle/node constellation with pointer response, gentle organic drift, and complete reduced-motion fallback.
  - Re-engineer `HeroSection.tsx`:
    - Editorial copy: *"The right people. The next big move."*
    - Dual immediate CTAs: `Find Talent` (Employers) and `Explore Opportunities` (Candidates).
    - Bespoke abstract talent-network visual (vector node pathways, alignment arcs).
  - Build `DualGatewaySection.tsx`: Two-audience pathway with interactive hover response.
  - Transform Services section into `RecruitmentSolutionsSection.tsx`: Executive Search, Permanent Placement, Interim Leadership, RPO, Specialized Tech Hiring.
  - Implement `PracticeAreasSection.tsx` (Interactive expertise explorer).
  - Re-engineer `ProcessSection.tsx`: 5-stage scroll-progress talent connection journey (Understand → Search → Evaluate → Introduce → Support).
  - Implement `FeaturedJobsSection.tsx`: Live preview of curated vacancies with role type, location, and apply links.
  - Implement `TrustPrinciplesSection.tsx`: Methodology, confidentiality, candidate advocacy.
  - Implement `EmployerCTASection.tsx` & `FAQSection.tsx`.
- **Verification Gate:** Homepage loads seamlessly on desktop & mobile; 0 console errors; smooth 60fps animations.

---

### Phase 3: Core Audience Pages (`/employers` & `/candidates`)
- **Goal:** Dedicated landing funnels for hiring managers and talent.
- **Tasks:**
  - Build `/app/employers/page.tsx`:
    - Value proposition, hiring models (Retained, Contingent, Embedded RPO), candidate qualification rigor.
    - Interactive "Submit Hiring Brief" modal/form with validation.
  - Build `/app/candidates/page.tsx`:
    - Candidate career progression thesis, job search entry, career guidance, confidential representation.
    - Candidate direct intake / CV submission CTA with privacy consent.
- **Verification Gate:** Both routes render statically and look distinct, editorial, and conversion-focused.

---

### Phase 4: Jobs Directory & Role Detail Engine (`/jobs` & `/jobs/[slug]`)
- **Goal:** Complete, authentic job search and application experience.
- **Tasks:**
  - Create typed job store `src/data/jobs.ts`:
    - Fields: `id`, `slug`, `title`, `department`, `location`, `workplaceType` (Remote/Hybrid/On-site), `employmentType` (Full-time/Contract/Executive), `salaryRange`, `description`, `responsibilities`, `requirements`, `publishedAt`.
  - Build `/app/jobs/page.tsx`:
    - Interactive search toolbar: keyword input, department filter, location filter, workplace type selector.
    - Real-time client filtering with active count and responsive drawer filters on mobile.
    - Graceful empty states and retry actions.
  - Build `/app/jobs/[slug]/page.tsx`:
    - SSG with `generateStaticParams`.
    - Role overview, company context, key competencies, compensation & benefits.
    - Interactive slide-over / embedded Application Modal with validation, file upload mock-boundary, and explicit consent checkbox.
- **Verification Gate:** SSG generates all job detail pages; filter and search respond instantly with zero hydration mismatch.

---

### Phase 5: Practice Areas, About, Case Studies & Contact
- **Goal:** Complete secondary ecosystem.
- **Tasks:**
  - Refactor `/app/industries` -> Practice Areas (Tech & AI, HealthTech & Bio, Quantitative Finance, Industrial Systems).
  - Refactor `/app/services` -> Talent Solutions.
  - Update `/app/about/page.tsx`: Firm history, leadership philosophy, ethical placement standard.
  - Update `/app/case-studies/page.tsx`: Placement case studies (e.g., building a 50-person AI research team, hiring a Fortune 500 CTO).
  - Update `/app/contact/page.tsx`: Dual-tab form (Employers vs Candidates) with validated routing.
  - Update `/app/privacy/page.tsx` & `/app/terms/page.tsx`: Recruitment privacy standards (CV storage, GDPR rights).
- **Verification Gate:** Full site builds cleanly; all navigation links resolve to live, polished pages.

---

### Phase 6: Code Quality, Accessibility, SEO & Verification
- **Goal:** Flawless enterprise compliance.
- **Tasks:**
  - Check keyboard accessibility (Focus visible, drawer trap, aria-expanded).
  - Run `npx eslint src` (0 errors, 0 warnings).
  - Run `npm run build` (50+ routes statically generated).
  - Ensure sitemap (`src/app/sitemap.ts`) and robots (`src/app/robots.ts`) correctly index all new recruitment pages.
