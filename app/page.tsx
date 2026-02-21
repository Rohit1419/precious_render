import Hero from "@/components/hero";
import Features from "@/components/features";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import ProblemSolution from "@/components/problem-solution";
import { getAllLandingPageData } from "@/lib/sanity/sanityFetch";
import Footer from "@/components/footer";

export const revalidate = 60;

export default async function Home() {
  const data = await getAllLandingPageData();

  // Fallback data in case Sanity is not configured yet
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Sanity CMS Not Configured</h1>
          <p className="text-muted-foreground">Please configure your Sanity CMS to see content.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-hidden">
      {data.hero && <Hero data={data.hero} />}
      {data.features && <Features data={data.features} />}
      {data.problemSolution && <ProblemSolution data={data.problemSolution} />}
      {data.services && <Services data={data.services} />}
      {data.portfolio && <Portfolio data={data.portfolio} />}
      {data.process && <Process data={data.process} />}
      {data.pricing && <Pricing data={data.pricing} />}
      {data.testimonials && <Testimonials data={data.testimonials} />}
      {data.faq && <FAQ data={data.faq} />}
      {data.contact && <Contact data={data.contact} />}
      <Footer/>
    </main>
  );
}