import { groq } from 'next-sanity';

export const heroQuery = groq`
  *[_type == "hero"][0] {
    title,
    subtitle,
    highlightText,
    rotatingWords,
    ctaPrimary,
    ctaSecondary,
    "backgroundVideoUrl": backgroundVideo.asset->url
  }
`;

export const featuresQuery = groq`
  *[_type == "features"][0] {
    sectionTitle,
    sectionDescription,
    features[] {
      title,
      description,
      icon
    }
  }
`;

export const servicesQuery = groq`
  *[_type == "services"][0] {
    sectionTitle,
    sectionDescription,
    services[] {
      title,
      description,
      icon,
      features[]
    }
  }
`;

export const pricingQuery = groq`
  *[_type == "pricing"][0] {
    sectionTitle,
    sectionDescription,
    plans[] {
      name,
      description,
      price,
      highlighted,
      features[]
    }
  }
`;

export const faqQuery = groq`
  *[_type == "faq"][0] {
    sectionTitle,
    sectionDescription,
    faqs[] {
      question,
      answer
    }
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonials"][0] {
    sectionTitle,
    sectionDescription,
    testimonials[] {
      quote,
      name,
      title,
      "imageUrl": image.asset->url
    },
    companyLogos[] {
      name,
      "logoUrl": logo.asset->url,
      invertOnDark
    }
  }
`;

export const processQuery = groq`
  *[_type == "process"][0] {
    sectionTitle,
    sectionDescription,
    steps[] {
      title,
      description,
      icon
    }
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    "logoUrl": logo.asset->url,
    "faviconUrl": favicon.asset->url,
    contactEmail,
    contactPhone,
    address,
    socialLinks
  }
`;

export const portfolioQuery = groq`
  *[_type == "portfolio"][0] {
    sectionTitle,
    sectionDescription,
    categories,
    projects[] {
      title,
      description,
      category,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      videoUrl,
      featured,
      client,
      date
    }
  }
`;


export const contactQuery = groq`
  *[_type == "contact"][0] {
    sectionTitle,
    sectionDescription,
    formTitle,
    formDescription,
    successMessage,
    errorMessage
  }
`;

export const problemSolutionQuery = groq`
  *[_type == "problemSolution"][0] {
    problemTitle,
    problemDescription,
    problems[] {
      title,
      description,
      icon
    },
    solutionTitle,
    solutionDescription,
    solutions[] {
      title,
      description,
      icon
    }
  }
`;