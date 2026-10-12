export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  description?: string;
  featured?: {
    title: string;
    description: string;
    href: string;
    image?: string;
    cta: string;
  };
  children?: NavChild[];
}

export const navigation: NavItem[] = [
  {
    label: "For Employers",
    href: "/employers",
    description: "Specialized talent acquisition and executive search models for high-growth enterprises.",
    featured: {
      title: "Executive Search & Leadership Placement",
      description: "Partner with our principal practice directors to appoint proven executives, board members, and technical fellows.",
      href: "/employers",
      cta: "Explore Hiring Solutions",
    },
    children: [
      { label: "Employer Overview", href: "/employers", description: "Our talent solutions and partnership models." },
      { label: "Executive Search", href: "/services/executive-search", description: "Retained search for C-suite and VP roles." },
      { label: "Permanent Placement", href: "/services/permanent-placement", description: "Direct-hire specialist and team build-outs." },
      { label: "Embedded RPO", href: "/services/rpo", description: "Dedicated talent acquisition partnership." },
      { label: "Interim Leadership", href: "/services/interim-contract", description: "Vetted interim operators and strategic advisors." },
      { label: "Submit Hiring Brief", href: "/contact?type=employer", description: "Send your role specification to practice leads." },
    ],
  },
  {
    label: "For Candidates",
    href: "/candidates",
    description: "Empathetic, confidential career guidance and access to high-impact vacancies.",
    featured: {
      title: "Confidential Career Representation",
      description: "We represent exceptional leaders and technical specialists through direct introduction to pre-vetted opportunities.",
      href: "/candidates",
      cta: "Candidate Advisory",
    },
    children: [
      { label: "Candidate Overview", href: "/candidates", description: "Our approach to representation and advocacy." },
      { label: "Find Opportunities", href: "/jobs", description: "Search our curated directory of active mandates." },
      { label: "Career Guidance", href: "/insights", description: "Compensation frameworks and market dynamics." },
      { label: "Candidate Rights & Privacy", href: "/privacy", description: "How we safeguard your CV and confidential records." },
      { label: "Submit Your Profile", href: "/contact?type=candidate", description: "Direct confidential intake for upcoming mandates." },
    ],
  },
  {
    label: "Find Jobs",
    href: "/jobs",
    description: "Explore verified career opportunities across our key industry practices.",
    featured: {
      title: "Active Leadership Mandates",
      description: "Explore verified executive and specialist roles with transparent scope, remote flexibility, and compensation clarity.",
      href: "/jobs",
      cta: "Search All Jobs",
    },
    children: [
      { label: "All Open Roles", href: "/jobs", description: "Browse complete verified job directory." },
      { label: "Technology & AI", href: "/jobs?department=Technology", description: "Software architecture, ML, and infra roles." },
      { label: "Quantitative Finance", href: "/jobs?department=Finance", description: "Algorithmic trading, risk, and fintech." },
      { label: "Life Sciences & Health", href: "/jobs?department=Healthcare", description: "Biotech, clinical, and healthtech roles." },
      { label: "Executive Leadership", href: "/jobs?department=Executive", description: "C-level, VP, and Director mandates." },
    ],
  },
  {
    label: "Practice Areas",
    href: "/industries",
    description: "Deep domain recruitment specialization backed by senior former-industry practitioners.",
    featured: {
      title: "Domain-Specialized Search",
      description: "Our practice directors come from the industries they serve, ensuring nuanced evaluation and precision culture fit.",
      href: "/industries",
      cta: "View All Practices",
    },
    children: [
      { label: "Technology & AI", href: "/industries/technology", description: "Enterprise software, cloud, and foundation models." },
      { label: "Financial Services", href: "/industries/financial-services", description: "Investment banking, asset management, and fintech." },
      { label: "Healthcare & Life Sciences", href: "/industries/healthcare", description: "Biopharma, digital therapeutics, and medical devices." },
      { label: "Industrial & CleanTech", href: "/industries/energy", description: "Renewable infrastructure, robotics, and supply chain." },
      { label: "Enterprise Operations", href: "/industries/manufacturing", description: "Chief Operating Officer and global delivery." },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    description: "Market intelligence, compensation benchmarks, and executive talent reports.",
    featured: {
      title: "Global Tech Compensation Index 2026",
      description: "Real-world salary benchmarks, equity trends, and talent migration data across North America and Europe.",
      href: "/insights",
      cta: "Read Intelligence Brief",
    },
    children: [
      { label: "Market Perspectives", href: "/insights", description: "Analysis on hiring velocity and compensation trends." },
      { label: "Placement Case Studies", href: "/case-studies", description: "How we scale leadership teams for Fortune 500s." },
      { label: "Hiring Playbooks", href: "/insights", description: "Structured evaluation frameworks for technical talent." },
    ],
  },
  {
    label: "About",
    href: "/about",
    description: "Learn about Nexus Talent Partners, our operating philosophy, and global footprint.",
    featured: {
      title: "The Nexus Standard",
      description: "Recruitment built on intellectual rigor, radical candor, and long-term organizational value.",
      href: "/about",
      cta: "Our Story",
    },
    children: [
      { label: "Firm Overview", href: "/about", description: "Our mission, philosophy, and global footprint." },
      { label: "Search Methodology", href: "/about#methodology", description: "Evidence-driven 5-stage qualification process." },
      { label: "Placement Case Studies", href: "/case-studies", description: "Measurable impact across 850+ global placements." },
      { label: "Global Offices", href: "/contact", description: "Americas, EMEA, and APAC presence." },
    ],
  },
];

export const footerNavigation = {
  employers: [
    { label: "Hiring Solutions", href: "/employers" },
    { label: "Executive Search", href: "/services/executive-search" },
    { label: "Embedded RPO", href: "/services/rpo" },
    { label: "Submit Hiring Brief", href: "/contact?type=employer" },
    { label: "Talent Case Studies", href: "/case-studies" },
  ],
  candidates: [
    { label: "Browse Open Jobs", href: "/jobs" },
    { label: "Candidate Journey", href: "/candidates" },
    { label: "Career Insights", href: "/insights" },
    { label: "Submit Confidential Profile", href: "/contact?type=candidate" },
    { label: "Candidate Data Protection", href: "/privacy" },
  ],
  practiceAreas: [
    { label: "Technology & AI", href: "/industries/technology" },
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
    { label: "Industrial & CleanTech", href: "/industries/energy" },
  ],
  company: [
    { label: "Firm Overview", href: "/about" },
    { label: "Search Methodology", href: "/about#methodology" },
    { label: "Contact Practice Leads", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Candidate Consent Policy", href: "/privacy#consent" },
    { label: "Terms of Engagement", href: "/terms" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};
