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
    slug: "technology",
    title: "Technology",
    subtitle: "Engineering Excellence at Enterprise Scale",
    description: "We design, build, and operate technology platforms that form the backbone of modern enterprises — from cloud-native architectures to legacy modernization.",
    heroDescription: "Our technology practice partners with CTOs and engineering leaders to architect resilient, scalable systems that drive competitive advantage. We bring deep expertise across cloud, data infrastructure, DevOps, and platform engineering.",
    icon: "Cpu",
    capabilities: [
      "Cloud Architecture & Migration",
      "Platform Engineering",
      "DevOps & SRE",
      "API Strategy & Integration",
      "Legacy Modernization",
      "Infrastructure as Code",
    ],
    subServices: [
      { title: "Cloud Transformation", description: "Migrate and modernize workloads across AWS, Azure, and GCP with zero-downtime strategies and cost optimization frameworks." },
      { title: "Platform Engineering", description: "Build internal developer platforms that accelerate delivery, enforce governance, and reduce cognitive load for engineering teams." },
      { title: "Enterprise Integration", description: "Design and implement API-first architectures, event-driven systems, and integration layers that connect your entire digital ecosystem." },
      { title: "Site Reliability Engineering", description: "Establish SRE practices, observability stacks, and incident management frameworks that keep your systems resilient at scale." },
    ],
    industries: ["Financial Services", "Healthcare", "Technology", "Manufacturing", "Telecommunications", "Energy"],
    approach: [
      { step: "01", title: "Assess", description: "Comprehensive audit of your current technology landscape, identifying bottlenecks, risks, and modernization opportunities." },
      { step: "02", title: "Architect", description: "Design target-state architectures aligned with your business objectives, scalability requirements, and team capabilities." },
      { step: "03", title: "Build", description: "Agile delivery of platforms and systems with embedded quality engineering, security, and performance testing." },
      { step: "04", title: "Operate", description: "Ongoing operational support, monitoring, and continuous improvement through SRE and platform engineering best practices." },
    ],
    testimonial: {
      quote: "Nexus helped us migrate 200+ microservices to Kubernetes with zero production incidents. Their engineering rigor is unmatched.",
      author: "David Park",
      role: "VP of Engineering",
      company: "FinTech Corp",
    },
  },
  {
    slug: "innovation",
    title: "Innovation",
    subtitle: "From Ideation to Market-Ready Products",
    description: "We help organizations move from concept to commercialization — building new products, ventures, and business models that create lasting value.",
    heroDescription: "Our innovation practice combines design thinking, rapid prototyping, and lean experimentation to help you validate ideas fast, build products that users love, and scale ventures with confidence.",
    icon: "Lightbulb",
    capabilities: [
      "Product Strategy & Discovery",
      "Design Thinking Workshops",
      "Rapid Prototyping & MVPs",
      "Venture Building",
      "Innovation Lab Setup",
      "Go-to-Market Strategy",
    ],
    subServices: [
      { title: "Product Discovery & Strategy", description: "Validate market opportunities through user research, competitive analysis, and structured experimentation before committing resources." },
      { title: "Venture Building", description: "Incubate and launch new digital ventures from zero to one, with dedicated cross-functional teams and agile governance." },
      { title: "Innovation Labs", description: "Establish internal innovation capabilities with the right talent, processes, tooling, and cultural frameworks." },
      { title: "Rapid Prototyping", description: "Build and test functional prototypes in weeks, not months, using lean methodology and user-centered design." },
    ],
    industries: ["Technology", "Financial Services", "Retail", "Healthcare", "Media & Entertainment", "Automotive"],
    approach: [
      { step: "01", title: "Discover", description: "Identify unmet needs through ethnographic research, market analysis, and competitive intelligence." },
      { step: "02", title: "Define", description: "Frame the opportunity, define success metrics, and align stakeholders around a shared innovation thesis." },
      { step: "03", title: "Prototype", description: "Build, test, and iterate on solutions rapidly using design sprints and lean validation techniques." },
      { step: "04", title: "Scale", description: "Launch validated solutions to market with go-to-market strategy, operational readiness, and growth playbooks." },
    ],
    testimonial: {
      quote: "Their venture building methodology took our health-tech concept from napkin sketch to 50K users in under nine months.",
      author: "Sarah Chen",
      role: "Chief Innovation Officer",
      company: "HealthBridge Inc.",
    },
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    subtitle: "Intelligence That Drives Decisions",
    description: "We transform raw data into actionable intelligence — building analytics platforms, AI/ML models, and data strategies that power smarter decisions.",
    heroDescription: "Our data practice helps organizations unlock the full value of their data assets. From building modern data platforms to deploying production AI systems, we deliver end-to-end data capabilities that create measurable business impact.",
    icon: "BarChart3",
    capabilities: [
      "Data Strategy & Governance",
      "Modern Data Platforms",
      "AI & Machine Learning",
      "Business Intelligence",
      "Real-Time Analytics",
      "Data Engineering",
    ],
    subServices: [
      { title: "Data Platform Modernization", description: "Design and implement cloud-native data architectures — lakehouse, streaming, and mesh — optimized for your scale and use cases." },
      { title: "AI & Machine Learning", description: "Build, deploy, and operate production ML systems including predictive models, NLP pipelines, computer vision, and generative AI." },
      { title: "Business Intelligence", description: "Create self-service analytics environments with curated dashboards, semantic layers, and embedded reporting capabilities." },
      { title: "Data Governance & Quality", description: "Establish data governance frameworks, quality monitoring, cataloging, and lineage tracking across your data estate." },
    ],
    industries: ["Financial Services", "Healthcare", "Retail", "Manufacturing", "Energy", "Telecommunications"],
    approach: [
      { step: "01", title: "Audit", description: "Assess your data maturity, identify high-value use cases, and quantify the business impact of improved data capabilities." },
      { step: "02", title: "Design", description: "Architect the target data platform, governance model, and organizational structure to support your analytics ambitions." },
      { step: "03", title: "Implement", description: "Build data pipelines, ML models, and BI solutions with rigorous engineering practices and embedded data quality." },
      { step: "04", title: "Optimize", description: "Continuously improve model performance, platform efficiency, and data quality through MLOps and DataOps practices." },
    ],
    testimonial: {
      quote: "The real-time analytics platform Nexus built processes 2 million events per second and has fundamentally changed how we detect fraud.",
      author: "James Morrison",
      role: "Chief Data Officer",
      company: "Global Payments Ltd.",
    },
  },
  {
    slug: "insight-services",
    title: "Insight Services",
    subtitle: "Research-Driven Market Intelligence",
    description: "We deliver deep market intelligence, competitive analysis, and strategic research that helps organizations make confident bets in uncertain markets.",
    heroDescription: "Our insight services combine proprietary data collection, expert analysis, and rigorous methodology to produce market intelligence that C-suite leaders trust for their most consequential decisions.",
    icon: "Search",
    capabilities: [
      "Market Sizing & Forecasting",
      "Competitive Intelligence",
      "Industry Analysis",
      "Customer & Buyer Research",
      "Technology Landscape Mapping",
      "Trend & Signal Detection",
    ],
    subServices: [
      { title: "Market Research Reports", description: "Comprehensive, data-rich reports covering market size, growth trajectories, competitive dynamics, and strategic implications across 24 industries." },
      { title: "Custom Research", description: "Bespoke research engagements designed around your specific strategic questions, market entry decisions, and competitive challenges." },
      { title: "Competitive Intelligence", description: "Structured monitoring and analysis of competitor strategies, product moves, partnerships, and organizational changes." },
      { title: "Trend Sensing", description: "Early identification of emerging technologies, market shifts, and disruption signals through systematic horizon scanning." },
    ],
    industries: ["All Industries", "Technology", "Healthcare", "Financial Services", "Energy", "Consumer Goods"],
    approach: [
      { step: "01", title: "Scope", description: "Define research objectives, key questions, and deliverable expectations through structured intake workshops." },
      { step: "02", title: "Collect", description: "Gather primary and secondary data through expert interviews, proprietary databases, surveys, and patent analysis." },
      { step: "03", title: "Analyze", description: "Apply rigorous analytical frameworks to synthesize findings into clear, actionable insights and strategic recommendations." },
      { step: "04", title: "Deliver", description: "Present findings through polished reports, interactive dashboards, and executive briefings tailored to your audience." },
    ],
    testimonial: {
      quote: "Their market sizing methodology is the most rigorous I have seen. The board now uses Nexus research as the baseline for all investment decisions.",
      author: "Maria Gonzalez",
      role: "SVP of Strategy",
      company: "Ascendant Holdings",
    },
  },
  {
    slug: "consulting",
    title: "Consulting",
    subtitle: "Strategy That Moves Markets",
    description: "We advise leadership teams on their most critical strategic, operational, and organizational challenges — from growth strategy to operating model transformation.",
    heroDescription: "Our consulting practice brings together seasoned advisors with deep industry expertise and a track record of guiding Fortune 500 leaders through complex transformations, market entries, and organizational redesigns.",
    icon: "Compass",
    capabilities: [
      "Corporate Strategy",
      "Operating Model Design",
      "M&A Advisory",
      "Organizational Transformation",
      "Growth Strategy",
      "Performance Improvement",
    ],
    subServices: [
      { title: "Corporate & Growth Strategy", description: "Define where to play and how to win. We help leadership teams develop growth strategies grounded in market data and competitive reality." },
      { title: "Operating Model Transformation", description: "Redesign organizational structures, processes, and governance to deliver on strategic ambitions with speed and efficiency." },
      { title: "M&A Strategy & Integration", description: "Support the full M&A lifecycle — from target identification and due diligence to post-merger integration and synergy capture." },
      { title: "Performance Improvement", description: "Identify and capture operational efficiencies through process optimization, cost reduction, and capability building." },
    ],
    industries: ["Financial Services", "Healthcare", "Technology", "Energy", "Manufacturing", "Consumer Goods"],
    approach: [
      { step: "01", title: "Diagnose", description: "Conduct a thorough assessment of your strategic position, organizational health, and competitive landscape." },
      { step: "02", title: "Strategize", description: "Develop clear strategic options with supporting analysis, business cases, and risk assessments." },
      { step: "03", title: "Mobilize", description: "Build organizational alignment, secure stakeholder buy-in, and develop detailed implementation roadmaps." },
      { step: "04", title: "Deliver", description: "Drive execution with embedded change management, governance structures, and progress tracking." },
    ],
    testimonial: {
      quote: "Nexus guided our post-merger integration across 12 countries. Their structured approach saved us an estimated $40M in integration costs.",
      author: "Robert Williams",
      role: "CEO",
      company: "Meridian Group",
    },
  },
  {
    slug: "social-impact",
    title: "Social / Impact Consulting",
    subtitle: "Purpose-Driven Growth",
    description: "We help organizations align profit with purpose — building ESG strategies, impact measurement frameworks, and sustainable business models.",
    heroDescription: "Our impact practice works with corporations, governments, and non-profits to design and implement strategies that create measurable social and environmental value while driving sustainable business growth.",
    icon: "Globe",
    capabilities: [
      "ESG Strategy & Reporting",
      "Impact Measurement & Management",
      "Sustainable Business Models",
      "Social Innovation",
      "Climate Strategy",
      "Stakeholder Engagement",
    ],
    subServices: [
      { title: "ESG Strategy & Reporting", description: "Develop comprehensive ESG strategies and reporting frameworks aligned with GRI, SASB, TCFD, and emerging regulatory requirements." },
      { title: "Impact Measurement", description: "Design and implement impact measurement frameworks that quantify social and environmental outcomes with credibility and rigor." },
      { title: "Climate & Sustainability", description: "Build science-based climate strategies, net-zero roadmaps, and circular economy models that meet stakeholder expectations." },
      { title: "Social Innovation", description: "Design innovative programs and ventures that address social challenges while creating shared value for communities and businesses." },
    ],
    industries: ["Energy", "Financial Services", "Consumer Goods", "Government", "Non-Profit", "Technology"],
    approach: [
      { step: "01", title: "Assess", description: "Evaluate your current ESG maturity, stakeholder expectations, and regulatory landscape to identify priorities." },
      { step: "02", title: "Design", description: "Develop a tailored impact strategy with clear goals, metrics, governance, and integration with core business operations." },
      { step: "03", title: "Implement", description: "Execute impact initiatives with structured program management, stakeholder engagement, and progress measurement." },
      { step: "04", title: "Report", description: "Build transparent reporting capabilities that meet regulatory requirements and build trust with investors, customers, and communities." },
    ],
    testimonial: {
      quote: "Nexus helped us develop an ESG framework that improved our MSCI rating by two notches and attracted $500M in sustainable investment.",
      author: "Amara Okafor",
      role: "Chief Sustainability Officer",
      company: "TerraVerde Energy",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
