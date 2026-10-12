export interface Job {
  id: string;
  slug: string;
  title: string;
  department: "Technology" | "Finance" | "Healthcare" | "Executive" | "Engineering";
  location: string;
  workplaceType: "Remote" | "Hybrid" | "On-site";
  employmentType: "Full-time" | "Executive Search" | "Interim / Contract";
  salaryRange: string;
  experienceLevel: "Director" | "VP" | "C-Suite" | "Principal / Staff" | "Senior Specialist";
  excerpt: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  publishedAt: string;
  closingDate?: string;
  featured: boolean;
  practiceAreaSlug: string;
}

export const jobs: Job[] = [
  {
    id: "job-01",
    slug: "vp-machine-learning-infrastructure",
    title: "Vice President, Machine Learning Infrastructure",
    department: "Technology",
    location: "San Francisco, CA (or Hybrid US)",
    workplaceType: "Hybrid",
    employmentType: "Executive Search",
    salaryRange: "$380,000 – $460,000 + Significant Equity",
    experienceLevel: "VP",
    excerpt: "Lead the core distributed training and inference platforms powering foundation AI models across 50,000+ GPUs.",
    description: "Our client is an industry-defining AI research institute scaling their foundational inference clusters. We are seeking an exceptional engineering executive to direct a 70-person distributed systems and high-performance computing organization.",
    responsibilities: [
      "Architect and scale multi-datacenter GPU/TPU training clusters with 99.95% uptime guarantees.",
      "Lead cross-functional teams spanning kernel optimization, network fabrics (InfiniBand/RoCE), and model parallelization.",
      "Partner with research directors to project compute requirements and allocate a $150M+ annual infrastructure budget.",
      "Recruit, mentor, and cultivate principal engineering talent across North America.",
    ],
    requirements: [
      "12+ years of high-performance computing / systems engineering leadership.",
      "Proven track record managing 50+ engineers in hyper-scale cloud or distributed systems environments.",
      "Deep expertise in CUDA, NCCL, Kubernetes cluster orchestration, and high-throughput storage systems.",
      "Exceptional communication skills with board-level executive presence.",
    ],
    benefits: [
      "Comprehensive executive health, dental, and vision coverage.",
      "Top-tier equity grant with favorable liquidity provisions.",
      "Unlimited executive paid time off and wellness sabbatical allowances.",
      "Dedicated executive relocation package.",
    ],
    publishedAt: "2026-10-01",
    featured: true,
    practiceAreaSlug: "technology",
  },
  {
    id: "job-02",
    slug: "chief-technology-officer-fintech",
    title: "Chief Technology Officer (CTO)",
    department: "Executive",
    location: "New York, NY",
    workplaceType: "Hybrid",
    employmentType: "Executive Search",
    salaryRange: "$450,000 – $550,000 + Carried Interest / Equity",
    experienceLevel: "C-Suite",
    excerpt: "Direct technology strategy, regulatory compliance, and distributed engineering for a tier-1 institutional digital asset platform.",
    description: "Retained search on behalf of a federally chartered institutional trading and custody platform. The incoming CTO will oversee a 120-person global engineering and quantitative infrastructure organization navigating rigorous SEC/CFTC compliance.",
    responsibilities: [
      "Oversee end-to-end technology vision, ultra-low-latency matching engines, and cryptographic key management.",
      "Lead SOC 2 Type II, ISO 27001, and financial regulatory audits.",
      "Scale the engineering organization from 120 to 200+ globally over the next 18 months.",
      "Advise the Board of Directors on cybersecurity risk posture and technological capital allocation.",
    ],
    requirements: [
      "Prior experience as CTO or SVP of Engineering at a regulated financial institution or high-growth fintech.",
      "Deep architectural mastery of event-driven architectures, FPGA trading environments, or cryptographic security.",
      "Demonstrated success steering organizations through major regulatory examinations.",
    ],
    benefits: [
      "Executive compensation package with enterprise performance bonus.",
      "Substantial equity stake in high-growth institution.",
      "Concierge medical care and executive family coverage.",
    ],
    publishedAt: "2026-09-28",
    featured: true,
    practiceAreaSlug: "financial-services",
  },
  {
    id: "job-03",
    slug: "principal-quantitative-researcher",
    title: "Principal Quantitative Researcher, Statistical Arbitrage",
    department: "Finance",
    location: "Chicago, IL / New York, NY",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    salaryRange: "$350,000 – $450,000 Base + High Performance PnL Bonus",
    experienceLevel: "Principal / Staff",
    excerpt: "Develop automated mid-frequency algorithmic strategies across global equities and liquid derivatives.",
    description: "A premier quantitative trading firm managing $8B+ in AUM is expanding its alpha research desk. This individual will have full autonomy to generate, backtest, and deploy predictive alphas using alternative datasets and deep learning techniques.",
    responsibilities: [
      "Formulate, test, and implement proprietary statistical arbitrage models across US and European equities.",
      "Extract alpha signals from novel unstructured datasets (satellite, transaction feeds, NLP filings).",
      "Collaborate directly with execution developers to optimize fill rates and minimize market impact.",
    ],
    requirements: [
      "Ph.D. or Master's in Mathematics, Physics, Computer Science, or Quantitative Finance.",
      "5+ years of verified track record generating standalone Sharpe ratios above 2.0.",
      "Exceptional programming skills in Python and modern C++ (C++20).",
    ],
    benefits: [
      "Industry-leading bonus formula directly tied to portfolio performance.",
      "Access to proprietary petabyte-scale simulation compute clusters.",
      "Top-tier private health coverage and wellness stipends.",
    ],
    publishedAt: "2026-10-04",
    featured: true,
    practiceAreaSlug: "financial-services",
  },
  {
    id: "job-04",
    slug: "vp-clinical-development-biopharma",
    title: "Vice President, Clinical Development & Oncology",
    department: "Healthcare",
    location: "Boston, MA",
    workplaceType: "On-site",
    employmentType: "Executive Search",
    salaryRange: "$390,000 – $470,000 + Equity & Bonus",
    experienceLevel: "VP",
    excerpt: "Lead Phase II/III global clinical trials for next-generation targeted antibody-drug conjugates (ADCs).",
    description: "A clinical-stage biotechnology leader focused on precision oncology is seeking an M.D. executive to spearhead global clinical strategy and FDA/EMA regulatory dossier submissions.",
    responsibilities: [
      "Design and execute global Phase II and registration-enabling Phase III clinical protocols.",
      "Serve as primary clinical liaison with regulatory bodies including the FDA, EMA, and PMDA.",
      "Direct medical monitoring, investigator meetings, and Key Opinion Leader (KOL) steering committees.",
    ],
    requirements: [
      "M.D. with board certification in Medical Oncology or Hematology.",
      "8+ years of clinical development experience in pharmaceutical or biotech industry.",
      "Track record of at least one successful NDA/BLA submission.",
    ],
    benefits: [
      "Substantial equity grant with breakthrough commercialization milestones.",
      "Executive life, disability, and comprehensive medical coverage.",
      "Full relocation assistance to Boston biotech cluster.",
    ],
    publishedAt: "2026-10-02",
    featured: true,
    practiceAreaSlug: "healthcare",
  },
  {
    id: "job-05",
    slug: "head-of-cloud-platform-engineering",
    title: "Head of Cloud Platform Engineering",
    department: "Engineering",
    location: "Austin, TX / Remote US",
    workplaceType: "Remote",
    employmentType: "Full-time",
    salaryRange: "$260,000 – $320,000 + Equity",
    experienceLevel: "Director",
    excerpt: "Architect developer self-service platforms, multi-region Kubernetes, and enterprise FinOps across multi-cloud.",
    description: "High-growth enterprise B2B SaaS platform serving 40% of the Fortune 100 seeking a Director / Head of Platform to build a world-class internal developer platform (IDP).",
    responsibilities: [
      "Design developer platform tooling that accelerates engineering delivery across 350+ software developers.",
      "Establish automated GitOps pipelines, observability standards, and zero-trust mesh networks.",
      "Drive cloud cost efficiency, reducing compute overhead by 25% through spot optimization and right-sizing.",
    ],
    requirements: [
      "8+ years in DevOps, Platform Engineering, or SRE leadership.",
      "Expert knowledge of AWS, Terraform, Kubernetes, ArgoCD, and OpenTelemetry.",
      "Demonstrated ability to foster an engineering culture of reliability and high velocity.",
    ],
    benefits: [
      "100% remote flexibility with home office stipend.",
      "Annual $4,000 professional development & learning grant.",
      "Comprehensive medical, dental, 401(k) with 5% employer match.",
    ],
    publishedAt: "2026-09-29",
    featured: false,
    practiceAreaSlug: "technology",
  },
  {
    id: "job-06",
    slug: "interim-chief-operating-officer",
    title: "Interim Chief Operating Officer (COO)",
    department: "Executive",
    location: "London, UK / Remote Hybrid",
    workplaceType: "Hybrid",
    employmentType: "Interim / Contract",
    salaryRange: "£1,400 – £1,800 / day (6-9 Month Mandate)",
    experienceLevel: "C-Suite",
    excerpt: "Lead operational integration and post-merger supply chain restructuring for an industrial robotics acquisition.",
    description: "Private equity backed industrial automation manufacturer requiring an experienced interim COO to drive rapid integration and footprint rationalization following a £250M cross-border acquisition.",
    responsibilities: [
      "Streamline European manufacturing supply chains and consolidate manufacturing centers across UK and Germany.",
      "Re-align procurement agreements to extract £18M in annualized EBITDA synergies.",
      "Transition leadership to a permanent executive within 9 months.",
    ],
    requirements: [
      "Extensive prior tenure as COO in manufacturing, advanced robotics, or industrial tech.",
      "Proven track record of successful private equity carve-outs and post-merger integrations.",
      "Fluency in English and working proficiency in German advantageous.",
    ],
    benefits: [
      "High daily rate with quarterly completion bonus.",
      "Executive corporate accommodation in London / Munich provided.",
      "Option to be considered for long-term Advisory Board seat.",
    ],
    publishedAt: "2026-10-06",
    featured: false,
    practiceAreaSlug: "energy",
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getAllJobSlugs(): string[] {
  return jobs.map((j) => j.slug);
}

export function getFeaturedJobs(): Job[] {
  return jobs.filter((j) => j.featured);
}
