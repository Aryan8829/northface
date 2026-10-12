# Data Architecture

## 1. Domain Models (TypeScript Interfaces)

**Service**
- `id`, `slug`, `title`, `shortDescription`, `fullDescription`, `icon`, `capabilities[]`, `useCases[]`, `process[]`

**Solution**
- `id`, `slug`, `title`, `problem`, `impact`, `solution`, `architecture`, `outcomes[]`

**Industry**
- `id`, `slug`, `title`, `description`, `challenges[]`, `solutions[]`

**Case Study**
- `id`, `slug`, `title`, `clientName` (or generic if confidential), `industry`, `challenge`, `solution`, `results[]`, `testimonial`, `techStack[]`

**Product (SaaS)**
- `id`, `slug`, `name`, `tagline`, `features[]`, `pricing` (if applicable), `status`

**Lead (Database Model - PostgreSQL)**
- `id` (UUID), `createdAt`, `name`, `email`, `company`, `phone`, `serviceOfInterest`, `budget`, `description`, `status` (New, Contacted, Qualified)

## 2. Data Flow
1. **Static Data:** For Phase 4-12, Services, Solutions, Industries, and Case Studies will reside in `data/*.json` or `data/*.ts`.
2. **Dynamic Data:** Leads will be sent via POST to `/api/leads`, validated via Zod, stored in PostgreSQL, and trigger an email via SMTP.

## 3. Database Schema (Prisma Example)
```prisma
model Lead {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())
  name      String
  email     String
  company   String?
  phone     String?
  service   String
  budget    String?
  message   String
  status    String   @default("NEW")
}
```
