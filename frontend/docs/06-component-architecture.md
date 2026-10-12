# Component Architecture

## 1. Directory Structure
```text
components/
├── ui/              # Dumb, reusable atomic components (Button, Input, Badge, Card, Container)
├── navigation/      # Navbar, MobileMenu, Breadcrumbs, Footer
├── sections/        # Page-level sections (Hero, Trust, Services, Products, CTA)
├── forms/           # Contact form, Newsletter signup (Client components)
├── service/         # Service-specific layout components
├── product/         # Product-specific layout components
├── case-study/      # Case Study specific components
└── blog/            # Insight/Article components
```

## 2. Component Principles
- **Separation of Concerns:** Content is passed as props from the page level. Components should not fetch data unless strictly necessary (e.g., a Client Component form submitting to an API).
- **Server Components by Default:** All components in `ui/`, `sections/`, and `navigation/` (mostly) should be Server Components.
- **Client Boundaries:** Use `"use client"` only for:
  - Interactive elements (Forms, Buttons with onClick).
  - Animation wrappers (Framer Motion, GSAP).
  - Context providers.
- **Tailwind Variants:** Use `cva` (Class Variance Authority) for components with multiple variants (like Buttons and Badges) to keep classes clean.

## 3. Key Components
- **`Container`**: Centers content, max-width, responsive padding.
- **`Section`**: Vertical spacing, background colors, semantic `<section>` tag.
- **`Typography`**: Standardized H1-H6 and P tags based on design tokens.
