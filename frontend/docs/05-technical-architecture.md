# Technical Architecture

## 1. Frontend Architecture
- **Framework:** Next.js (App Router). Best for SEO, Server Components, and modular architecture.
- **Language:** TypeScript for type safety.
- **Styling:** Tailwind CSS with a strict design token system.
- **Animations:** GSAP + ScrollTrigger (complex scroll animations), Framer Motion (page transitions, simple interactions).
- **Performance:** Native `next/image`, lazy loading, minimal client boundaries. Server Components by default.

## 2. Backend Architecture
- **Choice:** Node.js (with Express/Fastify or purely Next.js Route Handlers depending on scale).
- **Reasoning:** Since the frontend is Next.js, using Node.js allows for a unified TypeScript ecosystem, shared types across boundaries, and reduces context switching. FastAPI is excellent, but unless we are heavily leveraging Python-specific ML libraries right now, Node.js is cleaner for a B2B service/SaaS pivot. *Recommendation: Use Next.js Route Handlers for the initial build, extracting to a separate Node.js microservice only if SaaS logic becomes too heavy.*

## 3. Database & Storage
- **Database:** PostgreSQL. Perfect for relational data like leads, jobs, and future SaaS multi-tenancy.
- **ORM:** Prisma or Drizzle for type-safe database access.
- **Storage:** AWS S3 (for case study assets, images, PDF proposals).

## 4. API Design
- **Style:** RESTful (via Next.js `/api` routes).
- **Validation:** Zod for runtime schema validation on both client and server.

## 5. CMS Strategy
- **Initial:** Local markdown/MDX or JSON in `/data` for Services, Solutions, and Case Studies to ensure extreme performance and developer control.
- **Deferred:** Headless CMS (Sanity or Payload) will be integrated in a later phase when non-technical staff require editing access.

## 6. Deployment & Security
- **Frontend:** Vercel (optimal for Next.js App Router).
- **Database:** Supabase, Neon, or AWS RDS.
- **Security:** Strict CORS, CSRF protection, environment variables for all secrets, server-side validation for contact forms, rate limiting (Upstash Redis if needed, but keeping it simple first with standard limits).

## 7. Analytics
- **Tool:** Privacy-respecting analytics (Plausible or Fathom) to avoid cookie banners unless required by jurisdiction.
