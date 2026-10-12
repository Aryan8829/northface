export interface SubService {
  title: string;
  description: string;
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroDescription: string;
  icon: string;
  capabilities: string[];
  subServices: SubService[];
  industries: string[];
  approach: { step: string; title: string; description: string }[];
  testimonial: ServiceTestimonial;
}

export const services: Service[] = [
  {
    slug: "executive-search",
    title: "Retained Executive Search",
    subtitle: "Board, C-Suite & Leadership Appointments",
    description: "Exhaustive, confidential retained search for transformational leaders. Dedicated practice directors, 18-day average shortlist SLA, and 12-month replacement guarantee.",
    heroDescription: "Our flagship retained search practice partners directly with Boards of Directors, CEOs, and venture partners to appoint visionary leaders across Technology, Quantitative Finance, and Healthcare.",
    icon: "Award",
    capabilities: [
      "Board & C-Suite Succession Planning",
      "Confidential Passive Market Mapping",
      "Executive Compensation Benchmarking",
      "Multi-Tier Leadership Assessment",
      "12-Month Placement Warranty",
      "Structured Post-Placement Onboarding",
    ],
    subServices: [
      {
        title: "CEO & Board Appointments",
        description: "Confidential search for independent board directors, executive chairpersons, and chief executive officers.",
      },
      {
        title: "Technical C-Suite (CTO / CISO / CIO)",
        description: "Securing transformative engineering leaders capable of scaling multi-petabyte architectures and enterprise security programs.",
      },
      {
        title: "Commercial & Operational Leadership",
        description: "Placing proven Chief Operating Officers and Chief Commercial Officers with verifiable track records in rapid scaling.",
      },
      {
        title: "Market Intelligence & Talent Mapping",
        description: "Exhaustive organizational charts and compensation analyses across peer competitors prior to outreach.",
      },
    ],
    industries: ["Technology & AI", "Quantitative Finance", "Healthcare & Bio", "Industrial Systems"],
    approach: [
      { step: "01", title: "Mandate Scoping", description: "In-depth calibration with the board and hiring committee on cultural DNA and 24-month milestones." },
      { step: "02", title: "Discreet Mapping", description: "Direct headhunting of non-active, high-quartile leaders currently producing outsized results." },
      { step: "03", title: "Assessment Defense", description: "Rigorous 90-minute structured evaluation of leadership agility, architecture, and team resilience." },
      { step: "04", title: "Offer Stewardship", description: "Aligning equity terms, non-competes, and transition timelines to guarantee a 98% acceptance rate." },
    ],
    testimonial: {
      quote: "Nexus delivered a calibrated shortlist of four tier-one CTO candidates in just 16 days. Their leadership assessment proved spot-on.",
      author: "Julian Vance",
      role: "Managing Partner",
      company: "Vanguard Tech Ventures",
    },
  },
  {
    slug: "permanent-placement",
    title: "Permanent Specialist Placement",
    subtitle: "Principal Engineers, Staff ICs & Technical Managers",
    description: "Direct-hire recruitment for rare, high-impact technical specialists and foundational engineering individual contributors. Zero upfront fee risk.",
    heroDescription: "We identify and engage elite individual contributors who never apply through public job boards. From Staff Distributed Systems Engineers to Quantitative Portfolio Managers.",
    icon: "Users",
    capabilities: [
      "Staff & Principal Engineering ICs",
      "Quantitative Researchers & Traders",
      "Architectural Domain Specialists",
      "Exclusive Candidate Presentation",
      "Rigorous Technical Verification",
      "90-Day Placement Warranty",
    ],
    subServices: [
      {
        title: "Staff & Principal Systems ICs",
        description: "Recruiting the hands-on engineering pillars that anchor critical infrastructure and platform initiatives.",
      },
      {
        title: "Quantitative Research & Alpha Generation",
        description: "Connecting hedge funds and proprietary desks with verified mathematical researchers and algorithmic modelers.",
      },
      {
        title: "Foundational AI & ML Specialists",
        description: "Placing kernel optimization engineers, distributed training architects, and inference platform leads.",
      },
      {
        title: "Security & Cryptography Engineers",
        description: "Specialized headhunting for zero-trust architects, reverse engineers, and cryptographic protocol specialists.",
      },
    ],
    industries: ["Financial Services", "Technology", "Healthcare", "Energy"],
    approach: [
      { step: "01", title: "Stack Calibration", description: "Deep dive into your exact codebase constraints, concurrency requirements, and team dynamics." },
      { step: "02", title: "Targeted Outreach", description: "Personalized, technical outreach to passive contributors by practice leads who speak their language." },
      { step: "03", title: "Rigor Validation", description: "Verification of GitHub contributions, system design depth, and compensation alignment." },
      { step: "04", title: "Closing & Onboarding", description: "Guiding the candidate through resignation, counter-offer resistance, and onboarding." },
    ],
    testimonial: {
      quote: "They found us a Principal CUDA architect who had been with his previous employer for 7 years. Truly exceptional headhunting.",
      author: "Elena Rostova",
      role: "VP of Engineering",
      company: "Apex Compute Systems",
    },
  },
  {
    slug: "rpo",
    title: "Embedded Talent Partner (RPO)",
    subtitle: "Sprint Scaling & Enterprise Team Buildouts",
    description: "Senior recruitment directors embedded directly into your Slack, Notion, and ATS to build entire technical departments in 3–6 month sprints.",
    heroDescription: "When you need to hire 15+ specialized engineers in a single quarter, traditional agencies become cost-prohibitive. Our embedded talent solution combines search rigor with internal alignment.",
    icon: "Briefcase",
    capabilities: [
      "Embedded Dedicated Recruiters",
      "Interview Loop & Rubric Standardization",
      "Applicant Tracking System Optimization",
      "Employer Branding & Value Proposition",
      "Predictable Monthly Retainer Model",
      "Zero Per-Placement Agency Markups",
    ],
    subServices: [
      {
        title: "Squad & Department Buildouts",
        description: "Rapidly assembling multi-disciplinary engineering pods from scratch for new product launches.",
      },
      {
        title: "Hiring Loop Optimization",
        description: "Training internal hiring managers to evaluate candidates consistently and reduce time-to-hire by 40%.",
      },
      {
        title: "Candidate Experience Architecture",
        description: "Ensuring every candidate receives timely feedback and professional treatment, boosting offer conversion.",
      },
      {
        title: "Global Sourcing Hubs",
        description: "Setting up talent acquisition pipelines across North America, the UK, and key European technology hubs.",
      },
    ],
    industries: ["Technology", "Financial Services", "Healthcare"],
    approach: [
      { step: "01", title: "Integration", description: "Our search directors join your Slack, configure your ATS, and align with department heads within 48 hours." },
      { step: "02", title: "Pipeline Engine", description: "Launch outbound sourcing campaigns across targeted talent pools with branded collateral." },
      { step: "03", title: "Interview Coordination", description: "Manage full-cycle scheduling, technical screens, and debrief scorecards." },
      { step: "04", title: "Close & Handoff", description: "Deliver hires against quarterly SLAs while leaving your internal talent ops permanently upgraded." },
    ],
    testimonial: {
      quote: "Nexus embedded two recruiters into our team and scaled our AI research group from 8 to 34 people in under four months.",
      author: "Marcus Thorne",
      role: "Chief Operating Officer",
      company: "Cognitive Synthetics",
    },
  },
  {
    slug: "interim-contract",
    title: "Interim Leadership & Fractional Operators",
    subtitle: "Rapid Deployment for Turnarounds & Restructuring",
    description: "Vetted interim C-Suite and VP-level operators deployed within days for post-merger integrations, carve-outs, or executive transitions.",
    heroDescription: "Critical leadership voids can paralyze an organization. We maintain a pre-vetted bench of former Fortune 500 CEOs, CTOs, and COOs ready to deploy on 72-hour notice.",
    icon: "Clock",
    capabilities: [
      "Interim CTO & Engineering Leadership",
      "Interim COO & Operational Carve-Outs",
      "Fractional Chief Information Security Officers",
      "Crisis Management & Turnaround Advisory",
      "72-Hour Rapid Deployment Protocol",
      "Permanent Successor Grooming",
    ],
    subServices: [
      {
        title: "Post-Merger Operational Integration",
        description: "Interim leaders with proven track records rationalizing disparate platforms and extracting supply chain synergies.",
      },
      {
        title: "C-Suite Bridge Leadership",
        description: "Maintaining team morale, strategic velocity, and investor trust while a permanent executive search is conducted.",
      },
      {
        title: "Enterprise Cybersecurity Remediation",
        description: "Interim CISOs leading forensic cleanup, SOC 2 compliance certifications, and regulatory reporting.",
      },
      {
        title: "Venture Spinout Advisory",
        description: "Fractional executives guiding newly spun-out business units through initial capital allocation and governance setup.",
      },
    ],
    industries: ["Industrial Systems", "Financial Services", "Healthcare", "Technology"],
    approach: [
      { step: "01", title: "Rapid Diagnostic", description: "Understand the acute leadership void, immediate regulatory risks, and 90-day deliverables." },
      { step: "02", title: "48-Hour Shortlist", description: "Present 2-3 vetted interim operators who have successfully solved this exact challenge before." },
      { step: "03", title: "Immediate Deployment", description: "Full onboarding and mandate kickoff within 72 hours under clear governance parameters." },
      { step: "04", title: "Orderly Handoff", description: "Structured handover to the permanent successor upon mandate completion." },
    ],
    testimonial: {
      quote: "Their interim COO took over our European manufacturing integration on 5 days' notice and captured £18M in annualized EBITDA synergies.",
      author: "David Sterling",
      role: "Partner",
      company: "Blackwood Capital",
    },
  },
  {
    slug: "technology",
    title: "Technology & AI Practice",
    subtitle: "Distributed Systems, Foundation AI & Cloud Infrastructure",
    description: "Deep-domain search for high-scale platform architects, GPU kernel specialists, site reliability directors, and AI infrastructure executives.",
    heroDescription: "Our specialized technology practice is led by former software architects and engineering leaders who understand kernel internals, distributed consensus, and AI model training dynamics.",
    icon: "Cpu",
    capabilities: [
      "Foundation AI & LLM Systems",
      "High-Performance Computing (HPC)",
      "Distributed Storage & Mesh Networks",
      "Kubernetes & Multi-Cloud Architecture",
      "Developer Platform Engineering",
      "Enterprise Zero-Trust Security",
    ],
    subServices: [
      { title: "Distributed Systems & Cloud", description: "Recruiting architects capable of designing fault-tolerant, high-concurrency distributed platforms." },
      { title: "Machine Learning Infrastructure", description: "Placing leaders in GPU orchestration, NCCL acceleration, and multi-node model parallelization." },
      { title: "Enterprise Platform Engineering", description: "Building internal developer platform teams that multiply organizational engineering velocity." },
      { title: "Site Reliability & Cloud Operations", description: "Headhunting leaders to establish rigorous 99.999% availability and FinOps cost disciplines." },
    ],
    industries: ["Technology", "Financial Services", "Healthcare", "Manufacturing"],
    approach: [
      { step: "01", title: "Architecture Audit", description: "Analyze your engineering roadmap, microservices architecture, and technical challenges." },
      { step: "02", title: "Passive Headhunting", description: "Identify elite contributors currently building foundational infrastructure at scale." },
      { step: "03", title: "Technical Verification", description: "Validate architectural trade-offs, code craftsmanship, and distributed systems instincts." },
      { step: "04", title: "Executive Placement", description: "Secure top-tier talent with transparent compensation frameworks and career roadmaps." },
    ],
    testimonial: {
      quote: "Nexus understood our CUDA and RDMA requirements instantly. Every candidate they put forward was exceptionally qualified.",
      author: "Dr. Aris Thorne",
      role: "VP of Research",
      company: "TensorMesh AI",
    },
  },
  {
    slug: "data-analytics",
    title: "Quantitative & Data Systems Practice",
    subtitle: "Statistical Arbitrage, Alpha Generation & Low-Latency Systems",
    description: "Laser-focused recruitment for mathematical researchers, deep learning quantitative modelers, and ultra-low-latency FPGA trading engineers.",
    heroDescription: "We partner with proprietary trading desks, quantitative hedge funds, and institutional asset managers to place elite mathematical minds and low-latency systems architects.",
    icon: "BarChart3",
    capabilities: [
      "Statistical Arbitrage Researchers",
      "Mid & High-Frequency Alpha Modelers",
      "C++20 / FPGA Low-Latency Engineers",
      "Petabyte-Scale Simulation Systems",
      "Alternative Data & NLP Pipelines",
      "Chief Risk & Portfolio Analytics Officers",
    ],
    subServices: [
      { title: "Quantitative Alpha Generation", description: "Placing PhD researchers with verified track records of generating standalone Sharpe ratios above 2.0." },
      { title: "Ultra-Low-Latency Execution", description: "Headhunting C++ and FPGA hardware engineers who optimize matching engines down to single-digit nanoseconds." },
      { title: "Machine Learning Trading Strategies", description: "Connecting firms with specialists deploying deep learning and reinforcement learning in liquid markets." },
      { title: "Quantitative Risk & Compliance", description: "Placing senior risk officers capable of safeguarding capital across complex derivatives portfolios." },
    ],
    industries: ["Financial Services", "Technology"],
    approach: [
      { step: "01", title: "Strategy Alignment", description: "Determine exact asset classes, frequency bands, and holding period parameters." },
      { step: "02", title: "Global Talent Scan", description: "Discreetly engage proven alpha researchers across top-tier funds and academic research centers." },
      { step: "03", title: "Verification & PnL Review", description: "Analyze track-record veracity, modeling discipline, and IP/non-compete enforceability." },
      { step: "04", title: "Formula Structuring", description: "Design performance bonus formulas and capital allocations that ensure long-term retention." },
    ],
    testimonial: {
      quote: "They placed two Senior Quant Researchers who developed a new mid-frequency book generating significant alpha within six months.",
      author: "Charles Montgomery",
      role: "Head of Trading",
      company: "Apex Quant Capital",
    },
  },
  {
    slug: "innovation",
    title: "Leadership Advisory & Org Design",
    subtitle: "Talent Benchmarking, Retention & Equity Architecture",
    description: "Advisory services for boards and investors on organizational scaling, executive compensation packages, and talent retention guarantees.",
    heroDescription: "Beyond individual searches, our managing directors advise boards and founders on compensation calibration, hiring committee governance, and executive retention strategies.",
    icon: "Lightbulb",
    capabilities: [
      "Executive Compensation Benchmarking",
      "Organizational Design & Span of Control",
      "Hiring Rubric & Interview Loop Auditing",
      "Retention Guarantee Programs",
      "Leadership Succession Planning",
      "Founder-to-Exec Transition Coaching",
    ],
    subServices: [
      { title: "Market Compensation Studies", description: "Providing unvarnished, real-time data on base, bonus, and equity expectations across target sectors." },
      { title: "Hiring Loop Modernization", description: "Redesigning legacy interview processes to eliminate bias, reduce drop-off, and increase candidate closing rates." },
      { title: "Executive Onboarding Design", description: "Structuring 90-day integration blueprints that accelerate time-to-impact for new leadership hires." },
      { title: "Board Succession Architecture", description: "Planning multi-year succession roadmaps for critical C-Suite and technical fellow positions." },
    ],
    industries: ["Technology & AI", "Financial Services", "Healthcare & Bio", "Industrial Systems"],
    approach: [
      { step: "01", title: "Diagnostic Review", description: "Examine past hiring attrition, compensation structures, and hiring funnel velocity." },
      { step: "02", title: "Benchmarking", description: "Compare internal compensation bands against current market demands and competitor packages." },
      { step: "03", title: "Rubric Standardization", description: "Implement structured scorecards and behavioral assessment frameworks across teams." },
      { step: "04", title: "Executive Coaching", description: "Provide confidential onboarding advisory to ensure high retention and cultural resonance." },
    ],
    testimonial: {
      quote: "Their compensation benchmarking saved us from making an uncalibrated offer that would have created internal equity turmoil.",
      author: "Rebecca Sterling",
      role: "Chief People Officer",
      company: "BioHealth Diagnostics",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
