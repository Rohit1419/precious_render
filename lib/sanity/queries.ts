import { groq } from 'next-sanity';

// ── Hero ─────────────────────────────────────────────────────────────────────
export const heroQuery = groq`
  *[_type == "hero" && _id == "hero"][0] {
    headlinePrefix,
    headlineSuffix,
    headlineHighlight,
    staticLeadText,
    rotatingWords,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
    "backgroundVideoUrl": backgroundVideo.asset->url
  }
`;

// ── Features ─────────────────────────────────────────────────────────────────
export const featuresQuery = groq`
  *[_type == "features" && _id == "features"][0] {
    sectionTitle,
    sectionDescription,
    ctaLabel,
    ctaHref,
    features[] {
      title,
      description,
      icon
    }
  }
`;

// ── Problem & Solution ────────────────────────────────────────────────────────
export const problemSolutionQuery = groq`
  *[_type == "problemSolution" && _id == "problemSolution"][0] {
    "openingHeadlinePrimary": problemHeading,
    "openingSubheadline": problemSubtitle,
    painPoints[] { title, "description": body, "riskText": riskLabel },
    solutionBadge,
    solutionHeading,
    "solutionDescription": solutionBody,
    "compareBeforeImage": compareBeforeImage.asset->url,
    "compareAfterImage": compareAfterImage.asset->url,
    compareBeforeLabel,
    compareAfterLabel,
    solutionCtaLabel,
    solutionCtaHref,
    benefits[] { title, description },
    caseStudyLabel,
    caseStudyHeading,
    caseStudyQuote,
    "caseStudyAuthorName": caseStudyName,
    "caseStudyAuthorTitle": caseStudyBusiness,
    "caseStudyStats": caseStudyStats[].label,
    comparisonHeading,
    "traditionalImageUrl": traditionalImage.asset->url,
    traditionalSteps,
    traditionalResult,
    "virtualImageUrl": virtualImage.asset->url,
    virtualSteps,
    virtualResult,
    "closingHeading": closingCtaHeading,
    "closingDescription": closingCtaBody,
    closingCtaLabel,
    closingCtaHref
  }
`;

// ── Services ──────────────────────────────────────────────────────────────────
export const servicesQuery = groq`
  *[_type == "services" && _id == "services"][0] {
    badge,
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

// ── Portfolio ─────────────────────────────────────────────────────────────────
export const portfolioConfigQuery = groq`
  *[_type == "portfolioConfig" && _id == "portfolioConfig"][0] {
    badge,
    sectionTitle,
    categories[] { id, label, description }
  }
`;

export const portfolioProjectsQuery = groq`
  *[_type == "portfolioProject"] | order(order asc) {
    _id,
    title,
    category,
    description,
    "thumbnailUrl": thumbnail.asset->url,
    isVideo,
    videoUrl,
    order
  }
`;

// ── Process ───────────────────────────────────────────────────────────────────
export const processQuery = groq`
  *[_type == "process" && _id == "process"][0] {
    badge,
    sectionTitle,
    sectionDescription,
    steps[] {
      title,
      description,
      icon
    }
  }
`;

// ── Testimonials ──────────────────────────────────────────────────────────────
export const testimonialsQuery = groq`
  *[_type == "testimonials" && _id == "testimonials"][0] {
    badge,
    sectionTitle,
    sectionDescription,
    footerLabel,
    testimonials[] {
      quote,
      name,
      title,
      "imageUrl": coalesce(image.asset->url, imageUrl)
    },
    companyLogos[] {
      name,
      "logoUrl": coalesce(logo.asset->url, logoUrl),
      invertOnDark
    }
  }
`;

// ── Pricing ───────────────────────────────────────────────────────────────────
export const pricingQuery = groq`
  *[_type == "pricing" && _id == "pricing"][0] {
    badge,
    sectionTitle,
    sectionDescription,
    footerText,
    footerCtaLabel,
    footerCtaHref,
    plans[] {
      name,
      description,
      price,
      priceSuffix,
      highlighted,
      features[],
      ctaLabel,
      ctaHref
    }
  }
`;

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const faqQuery = groq`
  *[_type == "faq" && _id == "faq"][0] {
    badge,
    sectionTitle,
    sectionDescription,
    faqs[] {
      question,
      answer
    }
  }
`;

// ── Blog ──────────────────────────────────────────────────────────────────────
// export const blogPostsQuery = groq`
//   *[_type == "blogPost"] | order(publishedAt desc) {
//     _id,
//     title,
//     "slug": slug.current,
//     category,
//     readTime,
//     excerpt,
//     "coverImageUrl": coverImage.asset->url,
//     coverImageUrl,
//     author,
//     publishedAt
//   }
// `;

// export const blogPostBySlugQuery = groq`
//   *[_type == "blogPost" && slug.current == $slug][0] {
//     _id,
//     title,
//     "slug": slug.current,
//     category,
//     readTime,
//     excerpt,
//     "coverImageUrl": coverImage.asset->url,
//     coverImageUrl,
//     author,
//     publishedAt,
//     body
//   }
// `;

// ── Site Settings ─────────────────────────────────────────────────────────────
export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    siteName,
    siteDescription,
    "logoUrl": logo.asset->url,
    "faviconUrl": favicon.asset->url,
    tagline,
    "email": contactEmail,
    "phone": contactPhone,
    address,
    socialLinks,
    navItems[] { label, href },
    footerLinkGroups[] {
      title,
      links[] { "label": name, href }
    }
  }
`;
