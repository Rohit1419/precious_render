import TechCorpHeader from "@/components/techcorp/header";
import TechCorpHero from "@/components/techcorp/hero";
import TechCorpAbout from "@/components/techcorp/about";
import TechCorpServices from "@/components/techcorp/services";
import TechCorpCaseStudies from "@/components/techcorp/case-studies";
import TechCorpBlog from "@/components/techcorp/blog";
import TechCorpTestimonials from "@/components/techcorp/testimonials";
import TechCorpTechStack from "@/components/techcorp/tech-stack";
import TechCorpWhyChooseUs from "@/components/techcorp/why-choose-us";
import TechCorpContact from "@/components/techcorp/contact";
import TechCorpNewsletter from "@/components/techcorp/newsletter";
import TechCorpFooter from "@/components/techcorp/footer";
import BackToHome from "@/components/techcorp/back-to-home";

export default function TechCorpPage() {
  return (
    <main className="min-h-screen">
      <BackToHome />
      <TechCorpHeader />
      <TechCorpHero />
      <TechCorpAbout />
      <TechCorpServices />
      <TechCorpCaseStudies />
      <TechCorpBlog />
      <TechCorpTestimonials />
      <TechCorpTechStack />
      <TechCorpWhyChooseUs />
      <TechCorpContact />
      <TechCorpNewsletter />
      <TechCorpFooter />
    </main>
  );
}
