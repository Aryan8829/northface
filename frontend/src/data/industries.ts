export interface IndustrySubCategory {
  slug: string;
  name: string;
  reportCount: number;
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  heroDescription: string;
  icon: string;
  reportCount: number;
  subCategories: IndustrySubCategory[];
  keyTrends: string[];
  relatedServices: string[];
}

export const industries: Industry[] = [
  {
    slug: "technology",
    name: "Technology",
    description: "Comprehensive market intelligence spanning software, IT services, semiconductors, cloud computing, and emerging technology platforms.",
    heroDescription: "The technology sector continues to reshape every industry. Our research covers the full spectrum — from enterprise software and cloud infrastructure to semiconductors and quantum computing — delivering the intelligence leaders need to invest, build, and compete.",
    icon: "Cpu",
    reportCount: 42,
    subCategories: [
      { slug: "software", name: "Enterprise Software", reportCount: 14 },
      { slug: "it-services", name: "IT Services", reportCount: 8 },
      { slug: "semiconductors", name: "Semiconductors", reportCount: 7 },
      { slug: "cloud-computing", name: "Cloud Computing", reportCount: 9 },
      { slug: "cybersecurity", name: "Cybersecurity", reportCount: 4 },
    ],
    keyTrends: ["AI-native applications", "Edge computing expansion", "Sovereign cloud mandates", "Chip supply chain diversification"],
    relatedServices: ["technology", "data-analytics", "innovation"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Deep research into pharmaceuticals, biotechnology, medical devices, digital health, and healthcare delivery systems worldwide.",
    heroDescription: "Healthcare is being transformed by precision medicine, AI diagnostics, and decentralized care models. Our analysts track clinical pipelines, regulatory shifts, and market dynamics to help investors, pharma leaders, and health systems make better decisions.",
    icon: "Heart",
    reportCount: 38,
    subCategories: [
      { slug: "pharmaceuticals", name: "Pharmaceuticals", reportCount: 12 },
      { slug: "biotechnology", name: "Biotechnology", reportCount: 9 },
      { slug: "medical-devices", name: "Medical Devices", reportCount: 8 },
      { slug: "digital-health", name: "Digital Health", reportCount: 6 },
      { slug: "diagnostics", name: "Diagnostics", reportCount: 3 },
    ],
    keyTrends: ["GLP-1 drug expansion", "AI-assisted diagnostics", "Decentralized clinical trials", "Gene therapy commercialization"],
    relatedServices: ["insight-services", "consulting", "data-analytics"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    description: "Market intelligence across banking, insurance, capital markets, fintech, and digital payments — covering regulation, technology, and competitive strategy.",
    heroDescription: "Financial services are at a crossroads of regulation, technology, and consumer behavior change. Our research spans traditional banking and insurance to fintech disruptors and embedded finance, helping institutions navigate complexity with confidence.",
    icon: "Landmark",
    reportCount: 35,
    subCategories: [
      { slug: "banking", name: "Banking", reportCount: 10 },
      { slug: "insurance", name: "Insurance", reportCount: 7 },
      { slug: "fintech", name: "Fintech", reportCount: 8 },
      { slug: "capital-markets", name: "Capital Markets", reportCount: 6 },
      { slug: "digital-payments", name: "Digital Payments", reportCount: 4 },
    ],
    keyTrends: ["Embedded finance proliferation", "Real-time payments infrastructure", "RegTech adoption", "Digital asset regulation"],
    relatedServices: ["consulting", "technology", "insight-services"],
  },
  {
    slug: "energy",
    name: "Energy & Utilities",
    description: "Research covering renewable energy, oil & gas, power generation, energy storage, and the global energy transition landscape.",
    heroDescription: "The energy transition is the defining industrial shift of our era. Our analysts track renewable deployments, grid modernization, battery technology, hydrogen economics, and carbon markets to inform investment and strategy decisions at every scale.",
    icon: "Zap",
    reportCount: 28,
    subCategories: [
      { slug: "renewable-energy", name: "Renewable Energy", reportCount: 9 },
      { slug: "oil-gas", name: "Oil & Gas", reportCount: 6 },
      { slug: "energy-storage", name: "Energy Storage", reportCount: 5 },
      { slug: "power-generation", name: "Power Generation", reportCount: 4 },
      { slug: "hydrogen", name: "Hydrogen", reportCount: 4 },
    ],
    keyTrends: ["Grid-scale battery deployment", "Green hydrogen economics", "Carbon capture commercialization", "Utility-scale solar growth"],
    relatedServices: ["social-impact", "consulting", "insight-services"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Intelligence on advanced manufacturing, industrial automation, supply chain, aerospace & defense, and materials science.",
    heroDescription: "Manufacturing is being reshaped by automation, reshoring, and sustainability mandates. Our research covers Industry 4.0 technologies, supply chain resilience, advanced materials, and the competitive dynamics driving the next industrial revolution.",
    icon: "Factory",
    reportCount: 24,
    subCategories: [
      { slug: "industrial-automation", name: "Industrial Automation", reportCount: 7 },
      { slug: "aerospace-defense", name: "Aerospace & Defense", reportCount: 5 },
      { slug: "advanced-materials", name: "Advanced Materials", reportCount: 5 },
      { slug: "supply-chain", name: "Supply Chain & Logistics", reportCount: 4 },
      { slug: "automotive", name: "Automotive", reportCount: 3 },
    ],
    keyTrends: ["Digital twin adoption", "Reshoring acceleration", "Additive manufacturing at scale", "Autonomous mobile robots"],
    relatedServices: ["technology", "innovation", "consulting"],
  },
  {
    slug: "consumer-goods",
    name: "Consumer Goods & Retail",
    description: "Market research spanning FMCG, e-commerce, luxury goods, food & beverage, and the evolving consumer landscape.",
    heroDescription: "Consumer expectations are evolving faster than ever. Our analysts track shifting buying behaviors, direct-to-consumer models, sustainable packaging trends, and retail technology to help brands and retailers stay ahead of the curve.",
    icon: "ShoppingBag",
    reportCount: 20,
    subCategories: [
      { slug: "fmcg", name: "FMCG", reportCount: 6 },
      { slug: "e-commerce", name: "E-Commerce", reportCount: 5 },
      { slug: "food-beverage", name: "Food & Beverage", reportCount: 4 },
      { slug: "luxury", name: "Luxury Goods", reportCount: 3 },
      { slug: "retail-tech", name: "Retail Technology", reportCount: 2 },
    ],
    keyTrends: ["Social commerce growth", "Sustainable packaging mandates", "AI-powered personalization", "Quick commerce expansion"],
    relatedServices: ["insight-services", "innovation", "data-analytics"],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    description: "Research into 5G, fiber, satellite, unified communications, and the infrastructure powering digital connectivity worldwide.",
    heroDescription: "Telecommunications infrastructure underpins every digital transformation. Our research covers 5G deployment economics, fiber rollout strategies, satellite broadband, and the convergence of network and cloud — helping operators and investors allocate capital wisely.",
    icon: "Radio",
    reportCount: 16,
    subCategories: [
      { slug: "5g-networks", name: "5G Networks", reportCount: 5 },
      { slug: "fiber-broadband", name: "Fiber & Broadband", reportCount: 4 },
      { slug: "satellite", name: "Satellite Communications", reportCount: 3 },
      { slug: "unified-communications", name: "Unified Communications", reportCount: 4 },
    ],
    keyTrends: ["Private 5G networks", "Open RAN adoption", "LEO satellite constellations", "Network-as-a-Service models"],
    relatedServices: ["technology", "consulting", "insight-services"],
  },
  {
    slug: "life-sciences",
    name: "Life Sciences",
    description: "Market intelligence across drug development, clinical research, genomics, agricultural biotech, and regulatory landscapes.",
    heroDescription: "Life sciences innovation is accelerating at an unprecedented pace. From CRISPR therapeutics to mRNA platforms, our research helps pharma executives, biotech investors, and CROs navigate the science, regulation, and market dynamics shaping the industry.",
    icon: "Microscope",
    reportCount: 18,
    subCategories: [
      { slug: "drug-development", name: "Drug Development", reportCount: 6 },
      { slug: "genomics", name: "Genomics & Proteomics", reportCount: 4 },
      { slug: "clinical-research", name: "Clinical Research", reportCount: 4 },
      { slug: "agricultural-biotech", name: "Agricultural Biotech", reportCount: 4 },
    ],
    keyTrends: ["mRNA platform expansion", "CRISPR therapeutics", "AI drug discovery", "Companion diagnostics growth"],
    relatedServices: ["insight-services", "data-analytics", "consulting"],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}

export function getTotalReportCount(): number {
  return industries.reduce((sum, i) => sum + i.reportCount, 0);
}
