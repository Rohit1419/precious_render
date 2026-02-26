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
  icon?: string;
  title: string;
  description: string;
  riskText?: string;
}

export interface Benefit {
  icon?: string;
  title: string;
  description: string;
}

export interface ProblemSolutionData {
  openingHeadlinePrimary?: string;
  openingHeadlineAccent?: string;
  openingSubheadline?: string;
  painPoints?: PainPoint[];
  solutionBadge?: string;
  solutionHeading?: string;
  solutionDescription?: string;
  compareBeforeImage?: string;
  compareAfterImage?: string;
  compareBeforeLabel?: string;
  compareAfterLabel?: string;
  solutionCtaLabel?: string;
  solutionCtaHref?: string;
  benefits?: Benefit[];
  caseStudyLabel?: string;
  caseStudyHeading?: string;
  caseStudyQuote?: string;
  caseStudyAuthorName?: string;
  caseStudyAuthorTitle?: string;
  caseStudyStats?: string[];
  comparisonHeading?: string;
  traditionalHeading?: string;
  traditionalImageUrl?: string;
  traditionalSteps?: string[];
  traditionalResult?: string;
  virtualHeading?: string;
  virtualBadge?: string;
  virtualImageUrl?: string;
  virtualSteps?: string[];
  virtualResult?: string;
  closingHeading?: string;
  closingDescription?: string;
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
  image?: string;      // resolved URL from Sanity image asset
  imageUrl?: string;   // external URL fallback (coalesced in GROQ)
}

export interface CompanyLogo {
  name: string;
  logo?: string;       // resolved URL from Sanity image asset
  logoUrl?: string;    // external URL fallback (coalesced in GROQ)
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
// export interface BlogPost {
//   _id: string;
//   title: string;
//   slug: string;
//   category?: string;
//   readTime?: string;
//   excerpt?: string;
//   coverImageUrl?: string;
//   author?: string;
//   publishedAt?: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   body?: any[];
// }

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
  label: string;
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
  email?: string;
  phone?: string;
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
  // blogPosts: BlogPost[];
  siteSettings: SiteSettings | null;
}
