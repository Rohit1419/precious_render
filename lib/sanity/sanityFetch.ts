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

const REVALIDATE_TIME = 60; // 60 seconds ISR

export async function getHeroData() {
  try {
    return await client.fetch(heroQuery, {}, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching hero data:', error);
    return null;
  }
}

export async function getFeaturesData() {
  try {
    return await client.fetch(featuresQuery, {}, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching features data:', error);
    return null;
  }
}

export async function getProblemSolutionData() {
  try {
    return await client.fetch(problemSolutionQuery, {}, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching problem-solution data:', error);
    return null;
  }
}

export async function getServicesData() {
  try {
    return await client.fetch(servicesQuery, {}, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching services data:', error);
    return null;
  }
}

export async function getPortfolioData() {
  try {
    const [portfolioConfig, portfolioProjects] = await Promise.all([
      client.fetch(portfolioConfigQuery, {}, { next: { revalidate: REVALIDATE_TIME } }),
      client.fetch(portfolioProjectsQuery, {}, { next: { revalidate: REVALIDATE_TIME } }),
    ]);
    return { portfolioConfig, portfolioProjects: portfolioProjects ?? [] };
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return { portfolioConfig: null, portfolioProjects: [] };
  }
}

export async function getProcessData() {
  try {
    return await client.fetch(processQuery, {}, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching process data:', error);
    return null;
  }
}

export async function getTestimonialsData() {
  try {
    return await client.fetch(testimonialsQuery, {}, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching testimonials data:', error);
    return null;
  }
}

export async function getPricingData() {
  try {
    return await client.fetch(pricingQuery, {}, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching pricing data:', error);
    return null;
  }
}

export async function getFaqData() {
  try {
    return await client.fetch(faqQuery, {}, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching FAQ data:', error);
    return null;
  }
}

export async function getBlogPosts() {
  try {
    return await client.fetch(blogPostsQuery, {}, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    return await client.fetch(blogPostBySlugQuery, { slug }, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
}

export async function getSiteSettings() {
  try {
    return await client.fetch(siteSettingsQuery, {}, { next: { revalidate: REVALIDATE_TIME } });
  } catch (error) {
    console.error('Error fetching site settings:', error);
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
