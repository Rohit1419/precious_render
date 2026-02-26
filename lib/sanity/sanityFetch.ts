import { client } from './sanityClient';
import {
  heroQuery,
  featuresQuery,
  problemSolutionQuery,
  servicesQuery,
  portfolioConfigQuery,
  portfolioProjectsQuery,
  processQuery,
  testimonialsQuery,
  pricingQuery,
  faqQuery,
  blogPostsQuery,
  blogPostBySlugQuery,
  siteSettingsQuery,
} from './queries';

export async function getHeroData() {
  try {
    const result = await client.fetch(heroQuery);
    return result ?? null;
  } catch (error) {
    console.error('[Sanity] Error fetching hero data:', error);
    return null;
  }
}

export async function getFeaturesData() {
  try {
    const result = await client.fetch(featuresQuery);
    return result ?? null;
  } catch (error) {
    console.error('[Sanity] Error fetching features data:', error);
    return null;
  }
}

export async function getProblemSolutionData() {
  try {
    const result = await client.fetch(problemSolutionQuery);
    return result ?? null;
  } catch (error) {
    console.error('[Sanity] Error fetching problem-solution data:', error);
    return null;
  }
}

export async function getServicesData() {
  try {
    const result = await client.fetch(servicesQuery);
    return result ?? null;
  } catch (error) {
    console.error('[Sanity] Error fetching services data:', error);
    return null;
  }
}

export async function getPortfolioData() {
  try {
    const [portfolioConfig, portfolioProjects] = await Promise.all([
      client.fetch(portfolioConfigQuery),
      client.fetch(portfolioProjectsQuery),
    ]);
    return { portfolioConfig: portfolioConfig ?? null, portfolioProjects: portfolioProjects ?? [] };
  } catch (error) {
    console.error('[Sanity] Error fetching portfolio data:', error);
    return { portfolioConfig: null, portfolioProjects: [] };
  }
}

export async function getProcessData() {
  try {
    const result = await client.fetch(processQuery);
    return result ?? null;
  } catch (error) {
    console.error('[Sanity] Error fetching process data:', error);
    return null;
  }
}

export async function getTestimonialsData() {
  try {
    const result = await client.fetch(testimonialsQuery);
    return result ?? null;
  } catch (error) {
    console.error('[Sanity] Error fetching testimonials data:', error);
    return null;
  }
}

export async function getPricingData() {
  try {
    const result = await client.fetch(pricingQuery);
    return result ?? null;
  } catch (error) {
    console.error('[Sanity] Error fetching pricing data:', error);
    return null;
  }
}

export async function getFaqData() {
  try {
    const result = await client.fetch(faqQuery);
    return result ?? null;
  } catch (error) {
    console.error('[Sanity] Error fetching FAQ data:', error);
    return null;
  }
}

export async function getBlogPosts() {
  try {
    const result = await client.fetch(blogPostsQuery);
    return result ?? [];
  } catch (error) {
    console.error('[Sanity] Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const result = await client.fetch(blogPostBySlugQuery, { slug });
    return result ?? null;
  } catch (error) {
    console.error('[Sanity] Error fetching blog post by slug:', error);
    return null;
  }
}

export async function getSiteSettings() {
  try {
    const result = await client.fetch(siteSettingsQuery);
    return result ?? null;
  } catch (error) {
    console.error('[Sanity] Error fetching site settings:', error);
    return null;
  }
}

/**
 * Fetches ALL landing page data in parallel for maximum performance.
 * Used in app/page.tsx as the single data-fetch call.
 */
export async function getAllLandingPageData() {
  try {
    const [
      hero,
      features,
      problemSolution,
      services,
      { portfolioConfig, portfolioProjects },
      process,
      testimonials,
      pricing,
      faq,
      blogPosts,
      siteSettings,
    ] = await Promise.all([
      getHeroData(),
      getFeaturesData(),
      getProblemSolutionData(),
      getServicesData(),
      getPortfolioData(),
      getProcessData(),
      getTestimonialsData(),
      getPricingData(),
      getFaqData(),
      getBlogPosts(),
      getSiteSettings(),
    ]);

    return {
      hero,
      features,
      problemSolution,
      services,
      portfolioConfig,
      portfolioProjects,
      process,
      testimonials,
      pricing,
      faq,
      blogPosts,
      siteSettings,
    };
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return null;
  }
}
