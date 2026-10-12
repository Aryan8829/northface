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
    label: "Capabilities",
    description: "Explore our core consulting and technology services.",
    featured: {
      title: "Enterprise AI Transformation",
      description: "Discover how we are deploying generative AI across Fortune 500 supply chains to reduce operational friction by 40%.",
      href: "/services/technology",
      cta: "Read Capability Brief",
    },
    children: [
      { label: "Technology", href: "/services/technology", description: "Architecture and systems integration." },
      { label: "Innovation", href: "/services/innovation", description: "Venture building and R&D." },
      { label: "Data Analytics", href: "/services/data-analytics", description: "Predictive modeling and BI." },
      { label: "Insight Services", href: "/services/insight-services", description: "Market intelligence." },
      { label: "Consulting", href: "/services/consulting", description: "Strategic advisory." },
      { label: "Social Impact", href: "/services/social-impact", description: "Sustainable growth." },
    ],
  },
  {
    label: "Reports",
    description: "Access our proprietary market intelligence across 8 global sectors.",
    featured: {
      title: "Global AI Platform Market 2026",
      description: "Comprehensive analysis covering cloud AI, edge AI, and enterprise MLOps platforms.",
      href: "/reports/global-ai-platform-market-2026",
      cta: "View Report",
    },
    children: [
      { label: "All Reports", href: "/reports", description: "Browse full catalog." },
      { label: "Technology", href: "/reports?industry=technology", description: "Software & Hardware." },
      { label: "Healthcare", href: "/reports?industry=healthcare", description: "Digital Health & Bio." },
      { label: "Energy", href: "/reports?industry=energy", description: "Renewables & Grid." },
      { label: "Manufacturing", href: "/reports?industry=manufacturing", description: "Industry 4.0." },
      { label: "Financial Services", href: "/reports?industry=financial-services", description: "Fintech & Banking." },
    ],
  },
  {
    label: "Insights",
    description: "Latest thinking on the trends shaping the future of enterprise.",
    featured: {
      title: "The Semiconductor Supply Chain Outlook",
      description: "How geopolitical shifts and advanced packaging are reshaping global chip production.",
      href: "/insights/semiconductor-supply-chain-outlook",
      cta: "Read Insight",
    },
    children: [
      { label: "Articles", href: "/insights", description: "Editorial perspectives." },
      { label: "Case Studies", href: "/case-studies", description: "Client success stories." },
      { label: "Industry Trends", href: "/insights", description: "Sector-specific analysis." },
    ],
  },
  {
    label: "Company",
    description: "Learn about our mission, operating model, and global presence.",
    featured: {
      title: "Join Nexus Consulting",
      description: "We are hiring principal analysts and technology architects across our 14 global offices.",
      href: "/about#careers",
      cta: "View Open Roles",
    },
    children: [
      { label: "About Us", href: "/about", description: "Our mission and vision." },
      { label: "Leadership", href: "/about#leadership", description: "Meet our partners." },
      { label: "Global Offices", href: "/contact", description: "14 locations worldwide." },
      { label: "Careers", href: "/about#careers", description: "Work with us." },
    ],
  },
];

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/about#careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Technology", href: "/services/technology" },
    { label: "Innovation", href: "/services/innovation" },
    { label: "Data Analytics", href: "/services/data-analytics" },
    { label: "Insight Services", href: "/services/insight-services" },
    { label: "Consulting", href: "/services/consulting" },
  ],
  reports: [
    { label: "All Reports", href: "/reports" },
    { label: "Technology", href: "/reports?industry=technology" },
    { label: "Healthcare", href: "/reports?industry=healthcare" },
    { label: "Custom Research", href: "/contact" },
  ],
  insights: [
    { label: "Latest Articles", href: "/insights" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Terms", href: "/terms" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};
