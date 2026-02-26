import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import ProblemSolution from "@/components/problem-solution";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { getAllLandingPageData } from "@/lib/sanity/sanityFetch";

export const revalidate = 3;

export default async function Home() {
  const data = await getAllLandingPageData();

  return (
    <main className="min-h-screen">
      <Header data={data?.siteSettings} />
      <Hero data={data?.hero} />
      <Features data={data?.features} />
      <ProblemSolution data={data?.problemSolution} />
      <Services data={data?.services} />
      <Portfolio data={{ config: data?.portfolioConfig, projects: data?.portfolioProjects ?? [] }} />
      <Process data={data?.process} />
      <Testimonials data={data?.testimonials} />
      <Pricing data={data?.pricing} />
      <FAQ data={data?.faq} />
      <ContactForm data={data?.siteSettings} />
      <Footer data={data?.siteSettings} />
    </main>
  );
}
