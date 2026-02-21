export interface HeroData {
  title: string;
  subtitle?: string;
  highlightText: string;
  rotatingWords: string[];
  ctaPrimary?: string;
  ctaSecondary?: string;
  backgroundVideoUrl?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface FeaturesData {
  sectionTitle: string;
  sectionDescription?: string;
  features: Feature[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ServicesData {
  sectionTitle: string;
  sectionDescription?: string;
  services: Service[];
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  highlighted?: boolean;
  features: string[];
}

export interface PricingData {
  sectionTitle: string;
  sectionDescription?: string;
  plans: PricingPlan[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FaqData {
  sectionTitle: string;
  sectionDescription?: string;
  faqs: FAQ[];
}

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
  sectionTitle: string;
  sectionDescription?: string;
  testimonials: Testimonial[];
  companyLogos?: CompanyLogo[];
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessData {
  sectionTitle: string;
  sectionDescription?: string;
  steps: ProcessStep[];
}

export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  whatsapp?: string;
  youtube?: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription?: string;
  logoUrl?: string;
  faviconUrl?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  socialLinks?: SocialLinks;
}

export interface LandingPageData {
  hero: HeroData | null;
  features: FeaturesData | null;
  services: ServicesData | null;
  pricing: PricingData | null;
  faq: FaqData | null;
  testimonials: TestimonialsData | null;
  process: ProcessData | null;
  siteSettings: SiteSettings | null;
}