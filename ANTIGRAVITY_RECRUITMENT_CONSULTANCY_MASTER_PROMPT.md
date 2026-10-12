# ANTIGRAVITY MASTER PROMPT
## Transform an Existing IT Services Website into a Premium Recruitment & Talent Consultancy

> **Type:** Codebase-aware transformation specification and executable agent brief  
> **Working context:** An **existing** IT service-based company project already exists in the workspace. Transform it; do **not** create an unrelated greenfield demo.  
> **Primary outcome:** A production-minded, modern recruitment consultancy experience with realistic content, high-quality original components, sophisticated scroll/hover/background motion, meaningful interactions, responsive layouts, maintainable code, and verified behavior.  
> **Agent:** Google Antigravity (use **Planning Mode** for the initial transformation).  
> **Default design character:** Minimal, premium, editorial, people-centered, credible, confident, subtle motion, elegant detail.

---

## 0. HOW TO USE THIS FILE

1. Open the **existing project/repository** in Antigravity. Prefer an isolated worktree or create a safe feature branch before substantial changes.
2. Open an agent conversation in **Planning Mode** and provide the **entire contents of this file** as its working instruction (or attach/reference this file if Antigravity can read it from the workspace).
3. Allow the agent to inspect the repository and produce its audit and implementation plan **before editing the product**. Review the plan when requested. Then let it implement in small, verified batches.
4. Do not grant access to production secrets. Use local/test data, dummy credentials where appropriate, and approved test integrations only.
5. Use the **acceptance criteria** near the end of this file as the release gate, not merely a screenshot of a good-looking homepage.

**Optional project facts to provide if known:** company/brand name, logo, recruiting niches, target countries, contact email, CMS/API/ATS connections, existing brand assets, real jobs, actual testimonials, target client profiles. **If not supplied, inspect the project; do not block progress on optional information.**

---

# MASTER AGENT INSTRUCTION — START

## 1. ROLE, MISSION, AND NON-NEGOTIABLE OUTCOME

Act as one integrated senior product team: **principal full-stack engineer, enterprise system architect, senior UX researcher, award-level UI/art director, interaction/motion designer, accessibility specialist, SEO engineer, security reviewer, and QA lead**. Make thoughtful, verifiable engineering decisions instead of generating cosmetic screens.

Your mission is to **transform the currently existing IT/technology-services company website and its supporting application into a distinct, credible, high-end recruitment consultancy and talent solutions brand**. The result should feel like a real consultancy built for employers, hiring teams, candidates, and job seekers—not a generic SaaS template, flashy design experiment, or renamed technology company.

**The user's desired visual standard:** unusually clean and minimal; creative without visual noise; realistic people-first storytelling; premium typography; editorial composition; polished custom graphics; elegantly choreographed scroll and hover interactions; a live-feeling but restrained motion background. Consistency and usability matter more than the number of effects.

**Operational standards:** Work within the actual repo, adapt to its existing framework, preserve working infrastructure, avoid unverified claims, integrate features end to end, test the results, and report anything incomplete. Do not claim to guarantee an error-free result: **actively minimize risk through verification, testing, and transparent reporting**.

### Mandatory operating rules

- **This is a transformation, not a rebuild by default.** Preserve working foundation, components, routing, design primitives, CMS, SSR, analytics, backend contracts, authentication, deployment configuration, and integrations when compatible.
- **Inspect before touching.** Do not guess the language, framework, router, styling system, database, CMS, package manager, animation library, or file structure.
- **No destructive surprises.** No deleting the project, dropping tables, wiping content, deleting production jobs/applications, replacing valid environment values, or force-pushing. Request approval for truly destructive or irreversible operations.
- **Keep the original project buildable at the end of each phase.** Prefer small, reviewable commits and reversible schema changes.
- **No fabricated credibility.** Never invent real employers, candidate quotes, client logos, placements, employee photos, salary guarantees, hiring statistics, certifications, rankings, office addresses, or open job listings and present them as fact.
- **No visual plagiarism.** Create a distinct design language; do not directly clone protected third-party website layouts, logos, illustrations, or brand content.
- **No dead UI.** Every interactive element must have a meaningful, functional destination/action. If backend integration cannot be configured, disclose the missing requirement and avoid pretending submissions succeed.
- **Performance and accessibility are features, not a final afterthought.** Preserve semantic HTML, keyboard controls, contrast, image performance, reduced-motion settings, proper focus states, and mobile behavior.
- **Make sensible decisions without constant questioning.** If a non-critical fact is unknown, select a documented conservative default and continue. Ask only if a critical blocker or risky irreversible choice cannot be resolved from the repository.

---

## 2. PHASE ZERO: REPOSITORY INTELLIGENCE AND SAFETY AUDIT — DO THIS FIRST

Before editing application code:

1. Inspect repo tree, package manifests and lockfiles, runtime/tool versions, scripts, lint/format/test/build config, router layout, component patterns, shared layout, CSS/theme tokens, data fetching, state management, auth, i18n, CMS modules, API handlers, database models, migrations, forms, and deployment configuration.
2. Inventory existing routes and identify which are **reusable**, which need **content repositioning**, which must be **redesigned**, which are **obsolete**, and which new routes/modules are needed.
3. Determine whether the site uses SSR/SSG/ISR/client rendering. Preserve or improve SEO-appropriate rendering for publicly indexable job listings and detail pages, using framework-native capabilities.
4. Inspect existing brand identity. Retain company name/domain/logo unless project data clearly requires a change; rewrite IT positioning into recruitment positioning. Flag obsolete technology service copy rather than leaving it live.
5. Find any CMS: schemas, content blocks, dynamic pages, menus, header/footer fields, site settings, publishing workflow, media, SEO fields, templates, caching, and page-builder structures. Prefer **extending** this CMS instead of making new components hardcoded.
6. Find job-related APIs/models, existing contact forms, storage solutions, email infrastructure, CRM/ATS integrations, applicant records, upload handling, role permissions, privacy notices, and data retention behavior if any.
7. Confirm git state. Respect uncommitted user changes; do not overwrite unrelated edits. Establish a restore point/feature branch where possible. Run the current lint, type-check, test suite, and build and record existing failures separately from introduced failures.
8. Check actual design assets/fonts/icons. Prefer licensed assets and real company content, graceful vector treatments, and authorized portraits; avoid placeholder imagery masquerading as real team members.
9. Identify security/privacy risks relevant to CV/resume submission and recruitment applicant data; do not move real applicant data into seed data or client bundles.

### Deliver initial review artifacts

Before implementation, produce these reviewable Markdown artifacts **inside the repo only if appropriate to the current documentation convention**:

- `docs/transformation-audit.md` — current architecture, discovered stack, existing vs target route inventory, risks, integration gaps, baseline checks.
- `docs/recruitment-transformation-plan.md` — phase-by-phase implementation plan, prioritized components, anticipated file changes, design system approach, data flow, test gates, rollback concerns.
- `docs/design-direction.md` — visual style, color/type/spacing/motion tokens, component examples, desktop/mobile interaction rules, content tone.

If the repo uses a different established documentation convention, follow it rather than imposing these exact paths. Present the plan for review according to the Antigravity workflow before broad changes. Once approved, **implement instead of stopping at planning**.

---

## 3. BUSINESS TRANSFORMATION: NEW BRAND POSITIONING AND INFORMATION ARCHITECTURE

Reposition the experience as a **recruitment consultancy / talent acquisition partner**, not merely a generic job board. The website must communicate two differentiated journeys immediately:

**For Employers / Hiring Teams:** Find proven talent, submit hiring requirements, understand recruitment models, see expertise, trust the process, and book a discovery call.

**For Candidates / Professionals:** Discover meaningful opportunities, search and filter real vacancies, apply when a real intake exists, submit a profile when enabled, access career guidance, and understand candidate privacy.

### Recommended brand message

Primary statement: **"The right people. The next big move."**  
Support: **"Specialist recruitment built around people, potential, and long-term fit."**

These are design-direction examples, **not confirmed company facts**. If an existing brand strategy or user-provided copy exists, adapt intelligently. Write human, specific, low-jargon copy. Avoid inflated slogans such as "#1 global leader" without evidence.

### Navigation model

**Primary navigation:** Home · For Employers · For Candidates · Find Jobs · Expertise · About · Insights · Contact

**Primary header CTA:** `Hire Talent`  
**Secondary CTA:** `Explore Jobs`

Use dropdowns or a restrained mega-menu only if content breadth justifies one. On mobile use an accessible, fully keyboard-operable drawer, no horizontally clipped navigation. Footer includes candidate and employer paths, contact, social links (when available), policies, and accessible brand description.

### Target site map (audit existing routes and adapt paths rather than blindly duplicating)

| Priority | Page / Template | Outcome |
|---|---|---|
| P0 | `/` Home | Clear positioning, split employer/candidate pathways, proof, solutions, jobs preview, conversion |
| P0 | `/employers` | Recruitment services, hiring models, process, sectors, employer inquiry form |
| P0 | `/candidates` | Candidate value proposition, job search pathway, resources, CV/profile CTA |
| P0 | `/jobs` | Genuine searchable/filterable job listings; coherent loading/empty/error states |
| P0 | `/jobs/[slug-or-id]` | Real role detail, relevant metadata, structured job application flow |
| P0 | `/expertise` | Industry/domain specializations and hiring focus |
| P0 | `/about` | Real mission, approach, team only if data/assets exist, brand story |
| P0 | `/contact` | Valid employer/candidate inquiry routing with validation and feedback |
| P0 | `/privacy`, `/terms` | Appropriate, reviewable legal/privacy templates; no invented compliance claims |
| P0 | Not found / error states | Useful navigation and graceful recovery |
| P1 | `/services/[slug]` | Service detail pages: permanent, contract, executive, RPO, etc. only when offered |
| P1 | `/industries/[slug]` | Specific industry pages with differentiated content |
| P1 | `/insights`, `/insights/[slug]` | Editorial articles / career and hiring guidance with real author/date data |
| P1 | `/our-process` | Transparent hiring approach, realistic timeline framing |
| P1 | `/success-stories` | Verified case studies only; otherwise replace with process / approach content |
| P1 | `/submit-cv` | Secure consent-led candidate intake only if actual storage/ATS flow exists |
| P2 | Candidate saved jobs/profile | Only if authentication, storage, privacy and business ownership are justified |
| P2 | Recruiter dashboard / advanced ATS | Scope only if existing infrastructure and actual requirements justify implementation |

P0 pages should be complete, not empty shells. P1 pages should be completed where supported by real source content and architecture. Do not add P2 product complexity merely to inflate feature count. Preserve relevant legacy URL traffic with deliberate redirects only after mapping; never silently break indexed URLs.

---

## 4. CREATIVE DIRECTION: PREMIUM, MINIMAL, REALISTIC, ORIGINAL

### Emotional and brand attributes

**Human-first · Precise · Contemporary · Composed · Confident · Trustworthy · Editorial · Warm technology**.

The final page should look like a boutique global talent consultancy designed by a strong digital studio, not a template store landing page or cartoon-like job portal.

### Visual architecture

- A generous 12-column desktop grid (or the framework's established equivalent), strong alignment, large but restrained whitespace, responsive max-width containers, well-controlled text measure.
- Low-density hero composition with **one unmistakable message** and two action routes. Support visual complexity with whitespace, not constant cards.
- Thoughtful asymmetry and editorial accents: thin rules, index numbers, type scale changes, quiet visual geometry, split sections, overlapping editorial frames used sparingly.
- Realistic abstract talent-network visuals: connected pathways, lines, nodes, sophisticated dot fields, subtle topographic curves, softly layered material surfaces, professional photo crops if licensed.
- Avoid busy stock photo collages, neon overload, overused glassmorphism, exaggerated 3D avatars, random emojis, heavy gradients on every surface, and repetitive rounded-card stacks.
- UI must make immediate sense to recruiters, HR decision-makers, and professionals who are not technical.

### Initial design tokens (adopt only if compatible with the brand)

| Token | Suggested value | Reason |
|---|---|---|
| Canvas | `#F7F8F6` | Clean warm neutral, not clinical white |
| Surface | `#FFFFFF` | Airy, readable elevated layers |
| Ink | `#141820` | Premium high-contrast graphite |
| Muted ink | `#5C6672` | Supporting body/content |
| Accent | `#3859D8` | Confident recruitment-tech cobalt; use sparingly |
| Accent-soft | `#E9EEFF` | Quiet emphasis and hover treatments |
| Soft sage | `#E9F2ED` | Secondary human-centered tone |
| Divider | `#E2E6E8` | Subtle borders and structure |
| Dark section | `#151B26` | Strategic contrast sections |

**Typography:** Use an existing licensed font or pair a neutral modern sans (e.g., locally available or correctly hosted modern grotesk) with a subtle editorial display variant. Prioritize font loading and compatibility over novelty. Fluid headline with `clamp()`, balanced wrapping, measured tracking, readable line height, legible weights. No long paragraphs in ultra-thin weights.

**Shape language:** Medium radius, not universally pill-shaped; use 1px hairline borders; soft shadows only when hierarchy requires depth.

**Spacing:** 4/8-based tokens and intentional section rhythm; desktop section padding generally generous, mobile padding reduced predictably; no random pixel overrides.

**Color restraint:** Keep roughly 80–90% of visual area neutral. One strong brand accent, an occasional supporting neutral tint, and purposeful gradients only for background motion.

### Responsiveness and zoom adaptability

Layouts must adapt gracefully at **320 / 360 / 390 / 430 / 768 / 1024 / 1280 / 1440 / 1920+ px**, at typical device pixel ratios and browser zoom **80%, 100%, 125%, and 200% where practical**. Avoid fixed-height hero crops, unbounded absolute positions, hardcoded width causing horizontal overflow, inaccessible sticky overlays, clipped typography, or broken scroll animations.

Choose content-responsive grid, flex, `minmax()`, `min()`, `max()`, `clamp()`, `aspect-ratio`, and container queries where suitable. Avoid JavaScript layout patches when responsive CSS is sufficient. Touch targets must remain comfortable on handheld devices.

---

## 5. HOMEPAGE — DETAILED COMPONENT BLUEPRINT

The homepage should be carefully composed, not a random collection of 20 cards. Implement the following as **cohesive modules with consistent narrative flow**. Reuse the existing framework/component conventions and make key data editable through CMS if one exists.

### H01 — Slim utility/announcement strip (optional)

A minimal editorial line for genuine hiring insight or a real campaign. Hidden entirely when no real content exists. No fake "500 jobs added today" messages.

### H02 — Premium intelligent header

Transparent/light or surface-colored at top, becomes compact and calmly elevated on scroll. Proper active states, logical submenus, focus handling, keyboard escape, mobile overlay with close behavior. A subtle line or underline responds to nav hover without shifting layout. Sticky behavior should not consume too much vertical space.

### H03 — Signature recruitment hero (highest priority)

- Left side: deliberate eyebrow `Talent, with purpose.` (example), editorial headline, concise supporting copy, CTAs `Find Talent` and `Explore Opportunities`.
- Right: bespoke **talent-network visual** (abstract node pathway, spatial lines, tasteful profile-role cards or graphical forms), *not* invented candidate identities.
- Use a subtle **animated atmospheric background layer**: fine network particles/lines, softly drifting gradients, extremely light grid/topographic detail, and pointer response; visually quiet enough to preserve text contrast.
- Entrance: staggered text reveal; stable and smooth; no jarring slide from off-screen.
- Responsive: on mobile place content first, reduce visual density and disable excessive pointer tracking.
- The hero must render fully without animation/JavaScript enhancement.

### H04 — Two-audience pathway / decision gateway

Side-by-side cards or asymmetric panels: `I'm hiring` versus `I'm exploring opportunities`. Each has distinct copy, iconography and clear CTA. Hover response: small elevation, border-accent, short line-drawing motion, slight background shift. Entire clickable area must be accessible with clear semantics.

### H05 — Recruitment services / solutions mosaic

Present verified services in a refined 2–3-column editorial grid. Examples (use only those the business actually offers or label as proposed): Permanent Recruitment, Contract Staffing, Executive Search, Talent Mapping, Recruitment Process Outsourcing, Specialized Technology Hiring. Mix card formats deliberately. Use lightweight vector graphics, small icons, distinct restrained hover transitions.

### H06 — Industry expertise / specialization explorer

A typographic list, segmented tabs, or elegant horizontal index for actual supported niches (e.g., Technology, Finance, Healthcare, Operations, Sales & Marketing). Hover/focus previews switch a supporting illustration or content panel with no flicker. Each item links to existing detail content or a meaningful contact path.

### H07 — "How we connect potential" interactive process

A **4–5-stage process timeline** with a progress line driven by scroll visibility: Understand → Search → Evaluate → Introduce → Support. The data must reflect the company process. Desktop can use a horizontal or sticky progression if accessible; mobile must become a readable vertical flow. Never block scrolling or hijack the wheel.

### H08 — Talent connection illustration / section break

A distinctive full-width abstract vector scene: pathways, trajectories, nodes, and alignment arcs representing talent fit. Slight scroll-responsive parallax on separate decorative layers with careful amplitude limits. Provide a static fallback.

### H09 — Real opportunities / featured jobs

Display live or verified published listings only. Cards contain job title, location/remote type, employment type, optional permitted salary range, concise summary, and applied filters. Link to real job detail. If no job data exists, replace with a graceful **"Opportunities are being curated"** state and a real candidate inquiry/contact route—not fake vacancies.

### H10 — Credibility and outcomes section

Show **only documented** metrics, logos, case studies, or client quotes. If unavailable, substitute credible proof of approach: transparent working principles, specialties, screening rigor, privacy commitments, and what clients can expect. Animated counters are allowed **only for genuine numbers with source provenance**.

### H11 — Employer hiring CTA with distinction

Dark or subtly accented editorial conversion section: `Build the team that moves you forward.` Simple 1–2 sentence support and button to a real hiring brief/inquiry route. Optional narrow graphic band that responds subtly to hover/scroll.

### H12 — Candidate career support / resource cards

A small curated set of genuinely useful resources, e.g., Interview preparation, Resume guidance, Market insights, Salary conversations. If articles do not yet exist, use a small hand-authored resource page or truthful content-preview path; no dead cards.

### H13 — Insight/editorial preview

Premium article teasers with real published dates, tags, and meaningful destinations. If CMS contains editorial content, wire automatically. Hide when there is none.

### H14 — Human, helpful FAQ

A compact, accessible accordion addressing employer process, candidate fees/policies, application response expectations, and information protection. Only make claims actually supported by the business (e.g., do not assert "always free" without confirmation).

### H15 — Conversation-first footer

Strong final call to action, differentiated employer/candidate contact paths, responsive multi-column footer, real site links, legal/privacy links, social channels when authentic, and tasteful final brand/graphic detail. Ensure the footer feels designed rather than a generic list.

**Quality over quantity:** You may reorder or consolidate sections to improve storytelling, but do not replace the requested breadth with three generic sections. The first viewport must feel exceptional, and subsequent sections should have visual rhythm, not repetitive structures.

---

## 6. DISTINCTIVE COMPONENT LIBRARY (BUILD WITH PURPOSE)

Design reusable modules and content types, not one-off homepage markup:

1. **Animated Talent Constellation** — subtle connected nodes with pointer proximity and scroll-depth drift.
2. **Magnetic CTA (micro-only)** — limited within button bounds, disabled on touch/reduced motion.
3. **Editorial Section Intro** — eyebrow, display heading, measured summary, hairline/number accents.
4. **Dual Persona Gateway** — Employers vs Candidates.
5. **Service Bento Grid** — variable-span layout with intentional editorial hierarchy.
6. **Expertise Index** — hover/focus preview, keyboard-friendly.
7. **Scroll-Progress Process Timeline** — clear steps independent of animation.
8. **Job Search Toolbar** — query + location + employment type + clear filters.
9. **Job Result Card / Job Detail Sidebar** — consistent visible status and apply CTA.
10. **Application Form** — consent-first, validated, accessible, secure file handling where implemented.
11. **Employer Brief Form** — inquiry fields with anti-spam, meaningful success/error states.
12. **Verified Trust/Proof Strip** — conditionally rendered only with actual evidence.
13. **Value Pillars / Principle Columns** — process-oriented trust substitute.
14. **Interactive FAQ** — keyboard operated, no excessive motion.
15. **Editorial Article Grid / Author Card** — data driven, clear metadata.
16. **Gradient Mesh Accent** — background atmosphere, no content obscuring.
17. **Outline-to-Fill Hover Buttons** — tasteful 150–250ms microtransitions.
18. **Progressive Mobile Navigation** — fast, robust, accessible.
19. **Sticky Anchor Navigation** — useful only for genuinely long detail pages.
20. **Empty, Loading, Error, Success States** — share typography, tone, and accessibility.
21. **Candidate Journey Roadmap** — optional dedicated candidates page visual.
22. **Hiring Model Comparison** — transparent explanation, never misleading pricing.
23. **Scroll-reveal Image Mask** — only for authorized photography/media.
24. **Responsive CTA Ribbon / Closing Marquee** — if added, keep it non-distracting, controlled and optional.

Do not indiscriminately put every effect on every component. Each reusable component requires sensible props, variants, content fallbacks, responsive behavior, keyboard interaction where relevant, and accessible states. Use real content structure and existing tokens rather than hardcoding duplicated strings.

---

## 7. MOTION DIRECTION — THE SIGNATURE EXPERIENCE

The motion system should feel **alive but understated**, not like a performance demo. Motion must reinforce depth, location, affordance, and narrative. Treat animation as progressive enhancement. The site must work if motion is disabled.

### M01 — Global layered motion background

Build a reusable `AmbientTalentBackground` (or equivalent) that can be applied to the hero and carefully chosen sections.

Suggested layers:

- **Base:** static warm/light neutral or dark canvas.
- **Depth:** very subtle mesh/radial tint diffusion (low opacity, long easing).
- **Graphic:** sparse particles or small nodes connected by hairline paths, not busy full-screen confetti.
- **Geometry:** faint grid, orbital/topographic arcs, or talent-route shapes that imply human connection.
- **Interaction:** pointer position controls an extremely subtle local glow or offset; scroll progress gently changes position/opacity/depth.

**Constraints:** Respect `pointer-events: none` for decor, prevent covering content, avoid expensive per-pixel JS updates, use `requestAnimationFrame` only for continuously animated effects where justified, and clean up listeners/observers. On low-powered devices or when `prefers-reduced-motion: reduce`, render simplified static artwork. Canvas/WebGL is **not required**; prefer CSS/SVG if adequate. Do not introduce a large rendering dependency solely for a faint background effect.

### M02 — Scroll interactions

- Sections reveal using opacity and roughly **12–28px** translation, with subtle staggering for related items.
- Delays must not hide key content indefinitely; set initial server render content to visible or provide no-JS fallback.
- Process-line progression tracks visible steps, not arbitrary scroll hijacking.
- Selective parallax for **decorative** layers only, typically **4–16px** equivalent movement depending on viewport.
- Avoid blanket scale animations and animating whole-page containers.
- Sticky elements should never interfere with reading or accessibility.

### M03 — Hover/focus interactions

- Navigation: animated understated underline or reveal.
- Cards: **1–3px** lift or border/lighting change; no overly large transforms.
- Buttons: subtle fill, icon nudge, or arrow reveal; no moving target that harms click accuracy.
- Expertise index: accessible content preview with stable image/illustration bounds.
- Pointer-reactive cards: optional soft light tracking on desktop only, throttled, with static keyboard focus equivalent.
- Never encode essential information exclusively in hover.

### M04 — Motion tokens / performance budget

Suggested easing: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances; clean ease-out for microinteractions.  
Microinteraction: **150–260ms**.  
Reveal: **400–700ms**, only when appropriate.  
Ambient breathing: **8–20s**, very low contrast/amplitude.  

Avoid layout-triggering animations of `top/left/width/height` when `transform`/`opacity` is sufficient. Limit concurrent heavy blur/filter effects, avoid unnecessary `will-change` on large surfaces, do not attach synchronous expensive calculations to scroll, and ensure no obvious jank at standard mid-tier mobile sizes.

### M05 — Technical implementation selection

- First inspect the framework and currently installed libraries.
- Prefer CSS transitions, native browser features, `IntersectionObserver`, and SVG for simple effects.
- If the project already uses Motion/Framer Motion, GSAP, or an equivalent supported tool, reuse it consistently.
- Add a new animation dependency only if it meaningfully improves maintainability or motion quality, and explain the tradeoff in the implementation report.
- Do not change framework or rewrite the design system just to unlock animation.
- Test `prefers-reduced-motion`, touch, non-hover devices, tab navigation, and content visibility with animation scripts unavailable.

---

## 8. SECONDARY PAGE DESIGN & CONTENT GUIDANCE

### Employers

Hero with concise hiring thesis and inquiry CTA; clear service matrix; role/industry specializations; thoughtful hiring methodology; differentiators grounded in actual process; verified case studies if available; hiring brief form. Avoid empty generic enterprise jargon.

### Candidates

Hero with empathetic language, job-search CTA, application expectations, step-by-step candidate journey, guidance resources, transparent candidate support, privacy and CV handling, and direct contact. Never suggest a role exists when it does not.

### Jobs directory

A fast and accessible listing experience: keyword query, location/remote filter, type/category filters if data supports them, accurate result count, sort options if meaningful, pagination or controlled incremental fetch, shareable URL query state where framework permits, loading/skeleton, no-result suggestions, retry state, and visible job freshness. Avoid fake results or endlessly spinning skeletons. Mobile filters should be usable and dismissible.

### Job details

Real position title, actual employer attribution where permitted, location, remote/hybrid status, job type, optional validated salary range/currency, description, responsibilities, requirements, role ID, published/closing dates when available, structured accessible headings, share action, and one clearly implemented apply path. Hide missing metadata rather than fabricating it.

### Contact / employer brief / CV upload

Provide clear field labels, progressive validation, security protections, consent wording and privacy link, visible error states, success acknowledgement **only after server success**, duplicate-submit protection, and fallback contact channels only if actual contact details exist.

### About, expertise, insights, policies

Use content-driven page layouts with a similar design grammar but different hierarchy. About must not invent a team. Expertise must not imply sectors not served. Insight pages should be indexable and have genuine authorship/date metadata; policy content needs legal/business review before launch.

---

## 9. DATA, FORMS, ATS/CRM, CMS, SSR & BACKEND SYSTEM DESIGN

**Architect adaptively.** Determine the actual existing architecture; the following is a target capability contract, not permission to invent a new stack.

### Data/content domains to model or extend, when needed

- `SiteSettings` / `BrandSettings`: identity, logo, contacts, socials, SEO defaults.
- `Navigation`, `FooterGroups`, `Page`, `PageSections`: menus, routes, reusable composable content modules.
- `RecruitmentService`, `IndustryExpertise`, `FAQs`, `Testimonials`, `CaseStudies`, `Insights`: structured content (testimonial and outcome entities remain unpublished without verification).
- `Job`: id, slug, title, description, location, workplace arrangement, employment type, department/category, status, created/published/expiry timestamps, recruiter/employer attribution permissions, source, optional salary/currency with explicit units.
- `Application`: job reference, candidate consent record, contact data, resume metadata/location where supported, status, timestamps, audit signals; never expose other applicants' data publicly.
- `HiringInquiry`: organization/contact information, role requirement, permission to contact, source and delivery status.
- `CandidateInquiry/Profile`: only when there's a real business need, legitimate consent, and secure storage/retention.

### CMS requirements (conditional but important)

If an advanced CMS already exists, **extend its schema and editing UI** so the new recruitment pages and reusable components are editable. Support page- or section-level headings, subheadings, descriptions, background themes, CTA labels/links, imagery/alt text, section visibility/order, SEO metadata, nav/footer configuration, jobs/services/expertise/FAQs/insights, publishing states, reusable global blocks and revision-safe migrations. Avoid CMS data shape changes that orphan current records.

Maintain or improve framework-native server rendering for public SEO pages and fast caches/invalidation after publishing. Keep admin/CMS protected with existing auth/permissions and avoid leaking preview/draft content.

If no CMS exists, do **not** derail the immediate transformation by building an entire new enterprise CMS blindly. Implement a clean typed content abstraction that can later connect to the chosen CMS, and propose integration phases. Only build a new CMS now if the repo's existing scope strongly requires it and the implementation plan makes the cost clear.

### Applications and forms

1. Inspect actual API, database, email, storage, queues, existing ATS/CRM or third-party form providers.
2. Implement through an authorized, tested server-side pathway. Use strict server validation, length/file-size limits, safe MIME/extension handling, malware scanning integration where available, signed/private storage, auth where appropriate, spam/rate limit safeguards, and abuse-aware logging.
3. Resume/CV files and candidate contact details are sensitive: **do not** store in a public folder, browser bundle, repository, analytics events, logs, or unrestricted CMS media library.
4. Include privacy notice and explicit consent where applicable, data minimization, retention policy hooks, deletion-request workflow or documented operational route, and role-based access. Have privacy/legal text reviewed for the launch jurisdiction.
5. Prevent false-positive submissions; give real server result feedback, retries, and disabled/pending buttons. Do not silently email applicant details to an unverified mailbox.
6. If the required ATS/email/database credentials are absent, implement safe integration boundaries and explicitly report that the feature is **not production-active** until configured and verified. No misleading success toast.

### Data fetching and SEO

- Use server rendering/metadata patterns appropriate to the inspected stack.
- Dedicated pages must have unique title, meta description, canonical, OG metadata and valid structured data only when factual.
- For published vacancies, use relevant `JobPosting` structured data with genuine dates, organization info and employment fields; remove it for expired/unpublished jobs. Never emit fake jobs to satisfy SEO.
- Handle loading, failed APIs, bad slugs, stale jobs, unpublished content, caching and job expiry explicitly.
- Track only necessary, privacy-appropriate conversion events (employer lead, apply started/submitted) when analytics are configured.

---

## 10. TECHNICAL ARCHITECTURE AND CODE QUALITY

Do not force a new frontend framework. The reference architecture below is **conceptual**, and folder names must adapt to current conventions.

```text
app-or-src/
  routes-or-pages/
    home/
    employers/
    candidates/
    jobs/
    expertise/
    about/
    insights/
    contact/
  components/
    layout/          # header, menus, footer, containers
    ui/              # button, field, accordion, badges, dialogs
    sections/        # hero, service grid, process, CTA, job preview
    recruitment/     # job card, filters, application forms
    motion/          # ambient background, reveal, scroll progress
  features/
    jobs/
    applications/
    employer-inquiries/
    content/
  lib-or-services/
    api/
    cms/
    validation/
    seo/
  styles-or-theme/
    tokens/
  tests/
```

**Code standards:**

- Strong types where supported, clear interfaces, composition instead of giant monolithic components.
- Shared design tokens and variants; avoid one-off styling exceptions when a reusable rule solves the issue.
- Semantic HTML, accessible form labels, ARIA only where needed, predictable focus management.
- Server/client component boundaries appropriate to the framework. Avoid unnecessary client-side hydration of static content.
- Centralize API/data contracts. Protect credentials and avoid hardcoded endpoints.
- Keep CMS-bound content structured, sanitized, and well-defined; never render unsafe user HTML.
- Stable keys, cleanup of event listeners/observers, image dimensions, lazy loading below the fold, responsive image sources, code splitting where appropriate.
- Safe refactors: no unrelated rewrites, no dead imports, no dependency duplication, no linter suppression without justification, no placeholder TODOs on critical paths.
- Prefer the existing icon set and media pipeline. Do not overload the app with multiple competing animation or component ecosystems.

### Design delivery expectations

Produce a working, browser-reviewable design; preserve existing scripts and deployment assumptions. Use original CSS/SVG compositions where useful; do not approximate complex visual ambitions with stacks of generic gradient cards. Fine-tune actual text wrapping, spacing, crop boundaries, shadows, focus rings, nav alignment, and page transitions through visual review.

---

## 11. IMPLEMENTATION PHASES — PLAN, BUILD, VERIFY

Do not attempt a single blind massive rewrite. Organize implementation into gated phases with build/test/visual checks after each.

### Phase 0 — Discovery, risk map, decision record

Complete the inspection described above and produce artifacts. Identify essential decisions and safe defaults. Confirm baseline checks. Report how old URLs, CMS content, and APIs will be handled.

### Phase 1 — Foundations and adaptive visual system

Establish tokens, typography, container/grid, header/footer architecture, UI primitives, responsive system, reduced-motion behavior, and content abstractions. Preserve branding where appropriate. Verify no global layout regressions.

### Phase 2 — Hero, signature motion and homepage

Build signature hero, motion background, split audience pathways, services, expertise, process journey, jobs preview, trust/value content, CTA and footer. Validate home desktop/mobile and no-JS/reduced-motion fallback before adding more effects.

### Phase 3 — Core audience and content pages

Implement employers, candidates, expertise, about, contact, and any content pages supported by actual data. Use distinct layouts, coherent design language and intentional copy—not repeat-the-homepage clones.

### Phase 4 — Jobs and functional recruitment journeys

Integrate actual job source, directory, filters, detail, expiry handling and application/contact intake using available backend/services. Add validation, accessibility, consent, rate limits and appropriate data protection. Explicitly mark unconfigured integrations as incomplete.

### Phase 5 — CMS/data migration and SEO integration

When CMS exists, register new components/content types, migration/backfill strategies, admin fields, preview, publishing/visibility, server-rendered page data, caches, metadata, structured data and correct redirects. Test old data compatibility; use backup/rollback for schema alterations.

### Phase 6 — Microinteractions and detailed visual polish

Refine stagger, scroll process timeline, hover/focus feedback, precise typography, section transitions and ambient graphics. Tune for mobile and reduced motion, optimizing rather than increasing motion count.

### Phase 7 — Quality assurance and hardening

Run static/build checks; inspect live-rendered pages; exercise business funnels; address layout overflow, accessibility and performance; verify metadata, forms, privacy and link behavior. Fix regressions and retest.

### Phase 8 — Handoff and transparent completion report

Summarize modifications and file paths, screenshots/previews if the tool supports them, verified commands/results, incomplete integrations and required business inputs, known issues, release/readiness checklist, recommended next steps. **Do not claim all gates pass when they do not.**

**Priority rule:** Fully complete and validate P0 before cosmetic P1/P2 enhancements. Preserve local progress in an orderly, reviewable sequence. If blocked by a missing external dependency, continue safely on unrelated implementable work and report the gap.

---

## 12. VERIFICATION & ACCEPTANCE CRITERIA (DEFINITION OF DONE)

### Functionality

- [ ] Existing site launches with its documented command; production build completes, or all pre-existing vs introduced failures are explicitly tracked.
- [ ] Homepage conveys recruitment consultancy positioning within the first viewport.
- [ ] All visible primary navigation entries reach real, appropriate pages.
- [ ] Employer and candidate journeys are independently understandable.
- [ ] Jobs list/detail display genuine data or honest empty states; filters/search work on supported fields.
- [ ] Candidate application and employer inquiry use functioning, authorized server pathways when marked active; validation, errors and success are real.
- [ ] Legacy URLs have intentional preservation/redirect treatment; no accidental high-value broken links.
- [ ] Existing CMS/auth/backend functionality remains intact; new editable content is connected to existing CMS where supported.
- [ ] No placeholder fake testimonials, fake metrics, fake clients, fake jobs, nonfunctional CTAs, or misleading success messages.

### Visual & interaction

- [ ] Fresh, cohesive, premium identity—**not** a simple content swap on IT services pages.
- [ ] At least one **signature** custom animated visual and a family of tasteful scroll/hover interactions that share motion rules.
- [ ] Hero legibility remains excellent above all background animations.
- [ ] No horizontal overflow, major clipping, severe layout shift, accidental content overlap, or zoom-specific breakage in target viewports.
- [ ] Mobile nav, filters, accordions, buttons and forms work with touch and keyboard.
- [ ] Reduced-motion mode is calm, readable, and fully functional; no animation-dependent missing content.
- [ ] Animations feel smooth in representative mid-tier mobile settings; no runaway work on scroll or pointer events.

### Engineering, content & trust

- [ ] Lint, type-check, tests, production build, and any existing repository checks are run where configured, with outcomes documented.
- [ ] At least basic automated checks cover key shared components and critical contact/application behavior; add integration/e2e checks when the project supports them.
- [ ] Manual browser checks cover homepage, employer page, candidate page, listing, details, key forms, errors, and mobile menu.
- [ ] Check navigation and forms with keyboard, visible focus, meaningful alt text, semantic headings, contrast, and accessible error announcements.
- [ ] Review Core Web Vitals/Lighthouse where tooling allows: target **LCP ≤2.5s**, **CLS ≤0.1**, and responsive interaction performance on representative conditions; measure and report rather than fabricating scores.
- [ ] Verify page metadata, canonicals, internal links, sitemaps/robots configuration if present, and no structured-data misrepresentation.
- [ ] Protect candidate PII and files. Check validation, permissions, spam/rate limits, and logs; identify legal/security review items.
- [ ] No broken imports, duplicate dependencies, exposed secrets, dead routes or orphaned components.

### Release gate

**Release-ready** only means that required real content, employer contact channels, privacy/legal review, real form destinations, active job source, deployment config, and core tests are sufficiently verified. A visually finished prototype is **not** automatically a live recruitment platform.

---

## 13. PRIORITIZED AGENT DECISION RULES

When facing ambiguity, apply these rules in order:

1. **Safety/integrity:** preserve user data, existing repo and working functionality.
2. **Truth:** no invented business proof or active jobs.
3. **User journey:** employers and candidates must quickly find relevant outcomes.
4. **Clarity:** clean hierarchy, realistic content, accessible interaction.
5. **Performance:** no expensive effects compromising mobile usability.
6. **Maintainability:** leverage existing stack, design system, CMS and components.
7. **Creativity:** distinctive composition and elegant motion within the above constraints.

When the user's stated wish for "many creative components" conflicts with minimalism, select a **variety of purposeful modules** with different editorial layouts, not a high count of repetitive decorative boxes.

When a backend integration is absent, do not simulate business success. Build a sensible boundary and document the missing integration. When a CMS already exists, do not introduce parallel conflicting content sources. When a dependency is unnecessary, do not install it.

---

## 14. REQUIRED FINAL AGENT RESPONSE FORMAT

At the end of execution, provide a concise, evidence-based report using these headings:

1. **Transformation summary** — what changed in site identity, navigation, user journeys, pages, and motion.
2. **Implementation inventory** — pages/components/services touched and notable file paths.
3. **System integration status** — CMS, jobs source, forms, ATS/CRM, email, storage, SSR/SEO; mark each `Working`, `Partially configured`, `Not configured`, or `Not applicable`.
4. **Verification results** — actual commands/tests/browser checks and pass/fail status.
5. **Known gaps and risks** — facts, credentials, real job listings, legal copy, proof assets, or issues still requiring resolution.
6. **Launch readiness** — clear yes/no/conditional status and immediately actionable next steps.

Provide screenshots, a walkthrough, or preview links **only if produced and verified by the available Antigravity tooling**.

---

## 15. FINAL DIRECTIVE — EXECUTE WITH DISCIPLINE

**Start by auditing the real existing repository. Produce the transformation plan. Then implement a high-quality recruitment consultancy transformation in safe, verified phases.** Make the first viewport iconic, the whole site coherent, the motion subtle and responsive, the employer/candidate funnels genuinely useful, and the infrastructure reliable. Do not settle for mere text replacement, excessive animation, pretty nonfunctional mockups, or architecture that ignores the current codebase. Let deliberate design, thoughtful systems engineering, content truthfulness, and validation determine the final quality.

**Ultimate design test:** If every background animation were turned off, would this still feel like a premium, credible, conversion-ready recruitment consultancy? If not, improve the fundamentals before shipping.

# MASTER AGENT INSTRUCTION — END
