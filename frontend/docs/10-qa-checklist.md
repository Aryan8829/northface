# QA Checklist

Every phase must pass these quality gates before approval.

## 1. Functional
- [ ] Links navigate to the correct pages.
- [ ] Forms submit successfully (Client validation passes).
- [ ] Forms reject invalid input (Server validation passes).
- [ ] Loading states appear during async operations.
- [ ] Error boundaries catch failures gracefully.
- [ ] 404 pages render for unknown routes.

## 2. Visual
- [ ] Adheres strictly to the Design System tokens.
- [ ] No arbitrary pixel values in Tailwind classes.
- [ ] Typography scale is respected.
- [ ] Hover and focus states are visible and consistent.
- [ ] Animations do not distract or interfere with readability.

## 3. Responsive
- [ ] Renders perfectly at 320px (Small Mobile).
- [ ] Renders perfectly at 375px & 425px (Mobile).
- [ ] Renders perfectly at 768px (Tablet).
- [ ] Renders perfectly at 1024px & 1280px (Laptop).
- [ ] Renders perfectly at 1440px & 1920px+ (Desktop/Ultrawide).

## 4. Accessible
- [ ] Keyboard navigation works (Tab, Space, Enter, Arrows).
- [ ] Focus states are clearly visible for all interactive elements.
- [ ] Semantic HTML is used (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- [ ] Heading hierarchy is logical (H1 -> H2 -> H3, no skipping).
- [ ] WCAG AA color contrast requirements are met.
- [ ] `prefers-reduced-motion` is respected for heavy animations.
- [ ] ARIA labels are present where native HTML falls short.

## 5. SEO
- [ ] Unique `<title>` on every page.
- [ ] Unique `<meta name="description">` on every page.
- [ ] Canonical URLs are set.
- [ ] Open Graph (`og:image`, `og:title`, etc.) are configured.

## 6. Performance
- [ ] Images use `next/image` and modern formats (WebP/AVIF).
- [ ] No oversized hero assets loaded unnecessarily on mobile.
- [ ] Core Web Vitals (LCP, CLS, INP) score "Good" in Lighthouse/PageSpeed.

## 7. Code Quality
- [ ] ESLint passes with no warnings.
- [ ] TypeScript typecheck passes (`tsc --noEmit`).
- [ ] No exposed secrets or API keys.
- [ ] Meaningful Git commits.
