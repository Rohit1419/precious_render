// ── Hero ─────────────────────────────────────────────────────────────────────
export interface HeroData {
  headlinePrefix?: string;
  headlineSuffix?: string;
  headlineHighlight: string;
  staticLeadText?: string;
  rotatingWords: string[];
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  backgroundVideoUrl?: string;
}

// ── Features ─────────────────────────────────────────────────────────────────
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface FeaturesData {
  sectionTitle: string;
  sectionDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  features: Feature[];
}

// ── Problem & Solution ────────────────────────────────────────────────────────
export interface PainPoint {
  title: string;
  body: string;
  riskLabel?: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface CaseStudyStat {
  label: string;
}

export interface ProblemSolutionData {
  problemHeading?: string;
  problemSubtitle?: string;
  painPoints?: PainPoint[];
  solutionBadge?: string;
  solutionHeading?: string;
  solutionBody?: string;
  compareBeforeImageUrl?: string;
  compareAfterImageUrl?: string;
  compareBeforeLabel?: string;
  compareAfterLabel?: string;
  solutionCtaLabel?: string;
  solutionCtaHref?: string;
  benefits?: Benefit[];
  caseStudyLabel?: string;
  caseStudyHeading?: string;
  caseStudyQuote?: string;
  caseStudyName?: string;
  caseStudyBusiness?: string;
  workingCapitalFreed?: string;
  caseStudyStats?: CaseStudyStat[];
  comparisonHeading?: string;
  traditionalImageUrl?: string;
  traditionalSteps?: string[];
  traditionalResult?: string;
  virtualImageUrl?: string;
  virtualSteps?: string[];
  virtualResult?: string;
  closingCtaHeading?: string;
  closingCtaBody?: string;
  closingCtaLabel?: string;
  closingCtaHref?: string;
}

// ── Services ──────────────────────────────────────────────────────────────────
export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ServicesData {
  badge?: string;
  sectionTitle: string;
  sectionDescription?: string;
  services: Service[];
}

// ── Portfolio ─────────────────────────────────────────────────────────────────
export interface PortfolioCategory {
  id: string;
  label: string;
  description?: string;
}

export interface PortfolioConfig {
  badge?: string;
  sectionTitle: string;
  categories: PortfolioCategory[];
}

export interface PortfolioProject {
  _id: string;
  title: string;
  category: string;
  description?: string;
  thumbnailUrl?: string;
  isVideo?: boolean;
  videoUrl?: string;
  order?: number;
}

// ── Process ───────────────────────────────────────────────────────────────────
export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessData {
  badge?: string;
  sectionTitle: string;
  sectionDescription?: string;
  steps: ProcessStep[];
}

// ── Testimonials ──────────────────────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageUrl?: string;
}

export interface CompanyLogo {
  name: string;
  logoUrl: string;
  invertOnDark?: boolean;
}

export interface TestimonialsData {
  badge?: string;
  sectionTitle: string;
  sectionDescription?: string;
  footerLabel?: string;
  testimonials: Testimonial[];
  companyLogos?: CompanyLogo[];
}

// ── Pricing ───────────────────────────────────────────────────────────────────
export interface PricingPlan {
  name: string;
  description?: string;
  price: string;
  priceSuffix?: string;
  highlighted?: boolean;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface PricingData {
  badge?: string;
  sectionTitle: string;
  sectionDescription?: string;
  footerText?: string;
  footerCtaLabel?: string;
  footerCtaHref?: string;
  plans: PricingPlan[];
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
export interface FAQ {
  question: string;
  answer: string;
}

export interface FaqData {
  badge?: string;
  sectionTitle: string;
  sectionDescription?: string;
  faqs: FAQ[];
}

// ── Blog ──────────────────────────────────────────────────────────────────────
export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  readTime?: string;
  excerpt?: string;
  coverImageUrl?: string;
  author?: string;
  publishedAt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
}

// ── Site Settings ─────────────────────────────────────────────────────────────
export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  whatsapp?: string;
  youtube?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface SiteSettings {
  siteName: string;
  siteDescription?: string;
  logoUrl?: string;
  faviconUrl?: string;
  tagline?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  socialLinks?: SocialLinks;
  navItems?: NavItem[];
  footerLinkGroups?: FooterLinkGroup[];
}

// ── Landing Page (all data combined) ─────────────────────────────────────────
export interface LandingPageData {
  hero: HeroData | null;
  features: FeaturesData | null;
  problemSolution: ProblemSolutionData | null;
  services: ServicesData | null;
  portfolioConfig: PortfolioConfig | null;
  portfolioProjects: PortfolioProject[];
  process: ProcessData | null;
  testimonials: TestimonialsData | null;
  pricing: PricingData | null;
  faq: FaqData | null;
  blogPosts: BlogPost[];
  siteSettings: SiteSettings | null;
}
