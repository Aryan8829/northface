export type ReportStatus = "published" | "upcoming";

export interface Report {
  slug: string;
  title: string;
  excerpt: string;
  industry: string;
  industrySlug: string;
  category: string;
  categorySlug: string;
  region: string;
  status: ReportStatus;
  publishedDate: string;
  forecastPeriod: string;
  pages: number;
  format: string;
  marketSize?: string;
  cagr?: string;
}

export const reports: Report[] = [
  // Technology
  {
    slug: "global-ai-platform-market-2026",
    title: "Global Artificial Intelligence Platform Market Report 2026-2032",
    excerpt: "Comprehensive analysis of the AI platform market covering cloud AI, edge AI, and enterprise MLOps platforms across North America, Europe, and Asia Pacific.",
    industry: "Technology",
    industrySlug: "technology",
    category: "Enterprise Software",
    categorySlug: "software",
    region: "Global",
    status: "published",
    publishedDate: "2026-09-15",
    forecastPeriod: "2026-2032",
    pages: 285,
    format: "PDF + Excel",
    marketSize: "$142.3B",
    cagr: "34.2%",
  },
  {
    slug: "cloud-infrastructure-services-market",
    title: "Cloud Infrastructure & Platform Services Market Analysis",
    excerpt: "Deep-dive into IaaS, PaaS, and serverless computing markets with competitive positioning of major hyperscalers and emerging niche providers.",
    industry: "Technology",
    industrySlug: "technology",
    category: "Cloud Computing",
    categorySlug: "cloud-computing",
    region: "Global",
    status: "published",
    publishedDate: "2026-08-20",
    forecastPeriod: "2026-2031",
    pages: 240,
    format: "PDF + Excel",
    marketSize: "$312.8B",
    cagr: "21.5%",
  },
  {
    slug: "cybersecurity-mesh-architecture-market",
    title: "Cybersecurity Mesh Architecture (CSMA) Market Outlook",
    excerpt: "Analysis of the distributed cybersecurity architecture market driven by zero-trust adoption, remote workforce expansion, and regulatory compliance.",
    industry: "Technology",
    industrySlug: "technology",
    category: "Cybersecurity",
    categorySlug: "cybersecurity",
    region: "Global",
    status: "published",
    publishedDate: "2026-07-10",
    forecastPeriod: "2026-2031",
    pages: 195,
    format: "PDF + Excel",
    marketSize: "$28.4B",
    cagr: "26.8%",
  },
  {
    slug: "semiconductor-advanced-packaging-market",
    title: "Advanced Semiconductor Packaging Market Report",
    excerpt: "Strategic assessment of 2.5D/3D packaging, chiplet architectures, and fan-out wafer-level packaging technologies reshaping chip design.",
    industry: "Technology",
    industrySlug: "technology",
    category: "Semiconductors",
    categorySlug: "semiconductors",
    region: "Global",
    status: "published",
    publishedDate: "2026-06-05",
    forecastPeriod: "2026-2032",
    pages: 210,
    format: "PDF + Excel",
    marketSize: "$54.7B",
    cagr: "12.3%",
  },
  {
    slug: "quantum-computing-enterprise-market",
    title: "Quantum Computing in Enterprise: Market Assessment 2027",
    excerpt: "Evaluating commercial viability of quantum computing across financial modeling, drug discovery, logistics optimization, and cryptography use cases.",
    industry: "Technology",
    industrySlug: "technology",
    category: "Enterprise Software",
    categorySlug: "software",
    region: "North America",
    status: "upcoming",
    publishedDate: "2027-01-15",
    forecastPeriod: "2027-2035",
    pages: 180,
    format: "PDF + Excel",
  },
  // Healthcare
  {
    slug: "digital-therapeutics-market-2026",
    title: "Digital Therapeutics (DTx) Market Report 2026-2031",
    excerpt: "Analysis of prescription digital therapeutics, clinical validation pathways, reimbursement models, and competitive landscape across chronic disease management.",
    industry: "Healthcare",
    industrySlug: "healthcare",
    category: "Digital Health",
    categorySlug: "digital-health",
    region: "Global",
    status: "published",
    publishedDate: "2026-09-01",
    forecastPeriod: "2026-2031",
    pages: 220,
    format: "PDF + Excel",
    marketSize: "$18.2B",
    cagr: "28.4%",
  },
  {
    slug: "precision-medicine-genomics-market",
    title: "Precision Medicine & Clinical Genomics Market Analysis",
    excerpt: "Comprehensive study of pharmacogenomics, companion diagnostics, and targeted therapy markets with regulatory landscape across FDA, EMA, and PMDA.",
    industry: "Healthcare",
    industrySlug: "healthcare",
    category: "Biotechnology",
    categorySlug: "biotechnology",
    region: "Global",
    status: "published",
    publishedDate: "2026-08-12",
    forecastPeriod: "2026-2032",
    pages: 310,
    format: "PDF + Excel",
    marketSize: "$96.5B",
    cagr: "15.7%",
  },
  {
    slug: "ai-medical-imaging-market",
    title: "AI in Medical Imaging & Diagnostics Market Outlook",
    excerpt: "Market assessment of AI-powered radiology, pathology, and ophthalmology diagnostics with clinical accuracy benchmarks and adoption curves.",
    industry: "Healthcare",
    industrySlug: "healthcare",
    category: "Diagnostics",
    categorySlug: "diagnostics",
    region: "Global",
    status: "published",
    publishedDate: "2026-07-25",
    forecastPeriod: "2026-2031",
    pages: 175,
    format: "PDF + Excel",
    marketSize: "$8.9B",
    cagr: "32.1%",
  },
  {
    slug: "glp1-receptor-agonist-market",
    title: "GLP-1 Receptor Agonist Market & Pipeline Analysis",
    excerpt: "Strategic analysis of the GLP-1 drug class spanning obesity, diabetes, and emerging cardiovascular and NASH indications with pipeline assessment.",
    industry: "Healthcare",
    industrySlug: "healthcare",
    category: "Pharmaceuticals",
    categorySlug: "pharmaceuticals",
    region: "Global",
    status: "upcoming",
    publishedDate: "2026-12-01",
    forecastPeriod: "2026-2033",
    pages: 260,
    format: "PDF + Excel",
  },
  // Financial Services
  {
    slug: "embedded-finance-market-2026",
    title: "Embedded Finance Market Report 2026-2031",
    excerpt: "Analysis of Banking-as-a-Service, embedded lending, insurance, and payments platforms transforming non-financial companies into financial service providers.",
    industry: "Financial Services",
    industrySlug: "financial-services",
    category: "Fintech",
    categorySlug: "fintech",
    region: "Global",
    status: "published",
    publishedDate: "2026-08-28",
    forecastPeriod: "2026-2031",
    pages: 230,
    format: "PDF + Excel",
    marketSize: "$228.5B",
    cagr: "24.1%",
  },
  {
    slug: "regtech-compliance-automation-market",
    title: "RegTech & Compliance Automation Market Analysis",
    excerpt: "Market intelligence on regulatory technology covering KYC/AML automation, transaction monitoring, regulatory reporting, and compliance-as-a-service.",
    industry: "Financial Services",
    industrySlug: "financial-services",
    category: "Fintech",
    categorySlug: "fintech",
    region: "Global",
    status: "published",
    publishedDate: "2026-07-15",
    forecastPeriod: "2026-2031",
    pages: 190,
    format: "PDF + Excel",
    marketSize: "$33.1B",
    cagr: "19.8%",
  },
  // Energy
  {
    slug: "grid-scale-battery-storage-market",
    title: "Grid-Scale Battery Energy Storage Systems Market Report",
    excerpt: "Comprehensive analysis of utility-scale BESS market covering lithium-ion, solid-state, and flow battery technologies with project pipeline assessment.",
    industry: "Energy & Utilities",
    industrySlug: "energy",
    category: "Energy Storage",
    categorySlug: "energy-storage",
    region: "Global",
    status: "published",
    publishedDate: "2026-09-10",
    forecastPeriod: "2026-2032",
    pages: 245,
    format: "PDF + Excel",
    marketSize: "$42.6B",
    cagr: "28.9%",
  },
  {
    slug: "green-hydrogen-economy-market",
    title: "Green Hydrogen Economy: Market Outlook 2026-2035",
    excerpt: "Strategic analysis of green hydrogen production, distribution infrastructure, and end-use applications across industrial, transport, and power sectors.",
    industry: "Energy & Utilities",
    industrySlug: "energy",
    category: "Hydrogen",
    categorySlug: "hydrogen",
    region: "Global",
    status: "published",
    publishedDate: "2026-06-20",
    forecastPeriod: "2026-2035",
    pages: 290,
    format: "PDF + Excel",
    marketSize: "$89.3B",
    cagr: "42.5%",
  },
  {
    slug: "offshore-wind-energy-market",
    title: "Offshore Wind Energy Market Assessment 2027",
    excerpt: "Market study covering fixed and floating offshore wind technologies, supply chain dynamics, and policy frameworks across Europe, Asia, and North America.",
    industry: "Energy & Utilities",
    industrySlug: "energy",
    category: "Renewable Energy",
    categorySlug: "renewable-energy",
    region: "Global",
    status: "upcoming",
    publishedDate: "2027-02-01",
    forecastPeriod: "2027-2035",
    pages: 255,
    format: "PDF + Excel",
  },
  // Manufacturing
  {
    slug: "industrial-robotics-cobots-market",
    title: "Industrial Robotics & Collaborative Robots Market Report",
    excerpt: "Analysis of industrial robotics market covering articulated, SCARA, delta, and collaborative robots with sector adoption curves in automotive, electronics, and food.",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    category: "Industrial Automation",
    categorySlug: "industrial-automation",
    region: "Global",
    status: "published",
    publishedDate: "2026-08-05",
    forecastPeriod: "2026-2031",
    pages: 215,
    format: "PDF + Excel",
    marketSize: "$75.2B",
    cagr: "14.6%",
  },
  {
    slug: "digital-twin-manufacturing-market",
    title: "Digital Twin Technology in Manufacturing Market Analysis",
    excerpt: "Market assessment of digital twin applications in predictive maintenance, process optimization, and product lifecycle management across discrete and process manufacturing.",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    category: "Industrial Automation",
    categorySlug: "industrial-automation",
    region: "Global",
    status: "published",
    publishedDate: "2026-05-15",
    forecastPeriod: "2026-2031",
    pages: 180,
    format: "PDF + Excel",
    marketSize: "$18.7B",
    cagr: "35.2%",
  },
  // Consumer Goods
  {
    slug: "social-commerce-market-2026",
    title: "Social Commerce Market Report 2026-2031",
    excerpt: "Deep-dive into social media-driven commerce covering live shopping, creator-led retail, shoppable content, and platform economics across TikTok, Instagram, and emerging platforms.",
    industry: "Consumer Goods & Retail",
    industrySlug: "consumer-goods",
    category: "E-Commerce",
    categorySlug: "e-commerce",
    region: "Global",
    status: "published",
    publishedDate: "2026-09-05",
    forecastPeriod: "2026-2031",
    pages: 200,
    format: "PDF + Excel",
    marketSize: "$1.2T",
    cagr: "31.4%",
  },
  // Telecoms
  {
    slug: "private-5g-networks-enterprise-market",
    title: "Private 5G Networks for Enterprise Market Outlook",
    excerpt: "Analysis of private cellular network deployments in manufacturing, ports, mining, and healthcare with spectrum strategy, vendor landscape, and ROI frameworks.",
    industry: "Telecommunications",
    industrySlug: "telecommunications",
    category: "5G Networks",
    categorySlug: "5g-networks",
    region: "Global",
    status: "published",
    publishedDate: "2026-07-20",
    forecastPeriod: "2026-2031",
    pages: 175,
    format: "PDF + Excel",
    marketSize: "$14.8B",
    cagr: "38.7%",
  },
  // Life Sciences
  {
    slug: "mrna-therapeutics-platform-market",
    title: "mRNA Therapeutics Platform Market Report 2026-2033",
    excerpt: "Beyond vaccines: comprehensive assessment of mRNA technology in oncology, rare diseases, protein replacement, and gene editing delivery platforms.",
    industry: "Life Sciences",
    industrySlug: "life-sciences",
    category: "Drug Development",
    categorySlug: "drug-development",
    region: "Global",
    status: "published",
    publishedDate: "2026-08-30",
    forecastPeriod: "2026-2033",
    pages: 275,
    format: "PDF + Excel",
    marketSize: "$45.8B",
    cagr: "18.9%",
  },
  {
    slug: "crispr-gene-editing-therapeutics-market",
    title: "CRISPR Gene Editing Therapeutics Market Analysis",
    excerpt: "Strategic analysis of CRISPR-based therapeutics pipeline covering sickle cell disease, beta-thalassemia, oncology, and in-vivo editing platforms.",
    industry: "Life Sciences",
    industrySlug: "life-sciences",
    category: "Drug Development",
    categorySlug: "drug-development",
    region: "Global",
    status: "upcoming",
    publishedDate: "2026-11-15",
    forecastPeriod: "2026-2034",
    pages: 230,
    format: "PDF + Excel",
  },
];

export function getReportBySlug(slug: string): Report | undefined {
  return reports.find((r) => r.slug === slug);
}

export function getAllReportSlugs(): string[] {
  return reports.map((r) => r.slug);
}

export function getUniqueIndustries(): string[] {
  return [...new Set(reports.map((r) => r.industry))];
}

export function getUniqueRegions(): string[] {
  return [...new Set(reports.map((r) => r.region))];
}

export function getUniqueYears(): string[] {
  return [...new Set(reports.map((r) => r.publishedDate.split("-")[0]))].sort().reverse();
}

export function filterReports(filters: {
  status?: string;
  industry?: string;
  region?: string;
  year?: string;
  search?: string;
}): Report[] {
  let filtered = [...reports];

  if (filters.status) {
    filtered = filtered.filter((r) => r.status === filters.status);
  }
  if (filters.industry) {
    filtered = filtered.filter((r) => r.industrySlug === filters.industry);
  }
  if (filters.region) {
    filtered = filtered.filter((r) => r.region === filters.region);
  }
  if (filters.year) {
    const year = filters.year;
    filtered = filtered.filter((r) => r.publishedDate.startsWith(year));
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.excerpt.toLowerCase().includes(q) ||
        r.industry.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
    );
  }

  return filtered.sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}
