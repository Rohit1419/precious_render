import { client } from './sanityClient';
import { 
  heroQuery, 
  featuresQuery, 
  servicesQuery, 
  pricingQuery, 
  faqQuery, 
  testimonialsQuery, 
  processQuery, 
  siteSettingsQuery,
  portfolioQuery,
  contactQuery,
  problemSolutionQuery
} from './queries';

const REVALIDATE_TIME = 60; // 60 seconds

export async function getHeroData() {
  try {
    const data = await client.fetch(heroQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching hero data:', error);
    return null;
  }
}

export async function getFeaturesData() {
  try {
    const data = await client.fetch(featuresQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching features data:', error);
    return null;
  }
}

export async function getServicesData() {
  try {
    const data = await client.fetch(servicesQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching services data:', error);
    return null;
  }
}

export async function getPricingData() {
  try {
    const data = await client.fetch(pricingQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching pricing data:', error);
    return null;
  }
}

export async function getFaqData() {
  try {
    const data = await client.fetch(faqQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching FAQ data:', error);
    return null;
  }
}

export async function getTestimonialsData() {
  try {
    const data = await client.fetch(testimonialsQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching testimonials data:', error);
    return null;
  }
}

export async function getProcessData() {
  try {
    const data = await client.fetch(processQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching process data:', error);
    return null;
  }
}

export async function getSiteSettings() {
  try {
    const data = await client.fetch(siteSettingsQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

export async function getPortfolioData() {
  try {
    const data = await client.fetch(portfolioQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return null;
  }
}


export async function getContactData() {
  try {
    const data = await client.fetch(contactQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching contact data:', error);
    return null;
  }
}

export async function getProblemSolutionData() {
  try {
    const data = await client.fetch(problemSolutionQuery, {}, {
      next: { revalidate: REVALIDATE_TIME }
    });
    return data;
  } catch (error) {
    console.error('Error fetching problem-solution data:', error);
    return null;
  }
}

// Fetch all data at once for the landing page
export async function getAllLandingPageData() {
  try {
    const [
      hero,
      features,
      services,
      pricing,
      faq,
      testimonials,
      process,
      siteSettings,
      portfolio,
      contact,
      problemSolution
    ] = await Promise.all([
      getHeroData(),
      getFeaturesData(),
      getServicesData(),
      getPricingData(),
      getFaqData(),
      getTestimonialsData(),
      getProcessData(),
      getSiteSettings(),
      getPortfolioData(),
      getContactData(),
      getProblemSolutionData()
    ]);

    return {
      hero,
      features,
      services,
      pricing,
      faq,
      testimonials,
      process,
      siteSettings,
      portfolio,
      contact,
      problemSolution
    };
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return null;
  }
}