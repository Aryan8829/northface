# Information Architecture

## 1. Sitemap
```text
/
├── Home
├── Services
│   ├── Software Development
│   ├── Web Development
│   ├── Mobile App Development
│   ├── AI & Machine Learning
│   ├── Generative AI
│   ├── Cloud & DevOps
│   ├── UI/UX Design
│   └── Enterprise Solutions
├── Solutions
│   ├── Business Automation
│   ├── Digital Transformation
│   ├── Legacy Modernization
│   ├── System Integration
│   ├── Data & Analytics
│   └── AI Automation
├── Industries
│   ├── FinTech
│   ├── Healthcare
│   ├── Manufacturing
│   ├── Retail
│   ├── Logistics
│   ├── Real Estate
│   └── Other
├── Products            (listing + /products/[slug])
├── Case Studies        (listing + /case-studies/[slug])
├── Technology
├── Process
├── About
├── Careers             (listing + /careers/[slug])
├── Insights            (listing + /insights/[slug])
├── Contact
├── Privacy Policy
└── Terms & Conditions
```

## 2. Navigation Structure
- **Global Header (Primary Nav):** Logo · Services · Solutions · Industries · Products · Case Studies · Company (Dropdown: About, Technology, Process, Careers, Insights, Contact) · **Let's Talk (Primary CTA)**
- **Global Footer:** Duplicate navigation links, contact info, social links, legal links (Privacy, Terms), copyright.

## 3. URL Structure
- `/`
- `/services` | `/services/[slug]`
- `/solutions` | `/solutions/[slug]`
- `/industries` | `/industries/[slug]`
- `/products` | `/products/[slug]`
- `/case-studies` | `/case-studies/[slug]`
- `/insights` | `/insights/[slug]`
- `/careers` | `/careers/[slug]`
- `/about`, `/technology`, `/process`, `/contact`
- `/privacy`, `/terms`

## 4. Core User Journeys
- **The Discovery Flow:** Home → Services → Service Detail → Case Study → Technology / Process → Contact
- **The Validation Flow:** Home → Case Studies → Case Study Detail → Contact
- **The Product Flow:** Home → Products → Product Detail → Request Demo / Contact
