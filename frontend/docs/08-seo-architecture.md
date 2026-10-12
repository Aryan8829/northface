# SEO Architecture

## 1. Page-Level SEO (Metadata)
- **Title Tags:** `Page Name | [Company Name] — Technology Services`
- **Meta Descriptions:** 150-160 characters, concise, including primary keywords.
- **Canonical URLs:** Self-referencing canonicals on all pages.

## 2. Open Graph & Twitter Cards
- **OG Title & Description:** Mirrored from standard meta tags.
- **OG Image:** Dynamically generated or statically assigned per major route (Home, Services, Solutions). Case Studies and Articles must have specific, high-quality OG images.
- **Twitter Card:** `summary_large_image`.

## 3. Structured Data (JSON-LD)
- **Organization:** On Home and About pages.
- **WebSite:** On Home with sitelinks search box if applicable.
- **Service:** On individual `/services/[slug]` pages.
- **Article:** On `/insights/[slug]`.
- **BreadcrumbList:** On all nested pages (e.g., Services -> Specific Service).

## 4. Crawlability
- **`sitemap.xml`:** Dynamically generated listing all static and dynamic routes (Services, Solutions, Industries, Products, Case Studies, Insights).
- **`robots.txt`:** Allow all, link to sitemap.

## 5. Performance for SEO
- Fast LCP via `next/image` and proper image formats.
- No layout shifts (CLS) by defining image dimensions.
