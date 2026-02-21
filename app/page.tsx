import Header from "@/components/header";
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
import Footer from "@/components/footer";
import { getAllLandingPageData } from "@/lib/sanity/sanityFetch";
import ContactForm from "@/components/contact-form";

export const revalidate = 60;

export default async function Home() {
  const data = await getAllLandingPageData();

  return (
    <>
      <Header siteSettings={data?.siteSettings || null} />
      <main className="overflow-hidden">
        <Hero data={data?.hero || null} />
        <Features data={data?.features || null} />
        <ProblemSolution data={data?.problemSolution || null} />
        <Services data={data?.services || null} />
        <Portfolio data={data?.portfolio || null} />
        <Process data={data?.process || null} />
        <Pricing data={data?.pricing || null} />
        <Testimonials data={data?.testimonials || null} />
        <FAQ data={data?.faq || null} />
        <Contact data={data?.contact || null} siteSettings={data?.siteSettings || null} />
        {/* <ContactForm/> */}
      </main>
      <Footer siteSettings={data?.siteSettings || null} />
    </>
  );
}