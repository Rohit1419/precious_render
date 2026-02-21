export interface Hero {
  title: string;
  subtitle: string;
  highlightText: string;
  rotatingWords: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  backgroundVideoUrl?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Features {
  sectionTitle: string;
  sectionDescription: string;
  features: Feature[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Services {
  sectionTitle: string;
  sectionDescription: string;
  services: Service[];
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  highlighted?: boolean;
  features: string[];
}

export interface Pricing {
  sectionTitle: string;
  sectionDescription: string;
  plans: PricingPlan[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSection {
  sectionTitle: string;
  sectionDescription: string;
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

export interface Testimonials {
  sectionTitle: string;
  sectionDescription: string;
  testimonials: Testimonial[];
  companyLogos?: CompanyLogo[];
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface Process {
  sectionTitle: string;
  sectionDescription: string;
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
  siteDescription: string;
  logoUrl?: string;
  faviconUrl?: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks?: SocialLinks;
}

export interface PortfolioProject {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt?: string;
  videoUrl?: string;
  featured?: boolean;
  client?: string;
  date?: string;
}

export interface Portfolio {
  sectionTitle: string;
  sectionDescription: string;
  categories: string[];
  projects: PortfolioProject[];
}



export interface Contact {
  sectionTitle: string;
  sectionDescription: string;
  formTitle: string;
  formDescription: string;
  successMessage: string;
  errorMessage: string;
}

export interface ProblemItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProblemSolution {
  problemTitle: string;
  problemDescription: string;
  problems: ProblemItem[];
  solutionTitle: string;
  solutionDescription: string;
  solutions: ProblemItem[];
}