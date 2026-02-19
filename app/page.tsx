import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import ProblemSolution from "@/components/problem-solution";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Blog from "@/components/blog";
import FAQ from "@/components/faq";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ProblemSolution />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Pricing />
      <Blog />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
