import FoodFastHeader from "@/components/foodfast/header";
import FoodFastHero from "@/components/foodfast/hero";
import FoodFastQuickOrder from "@/components/foodfast/quick-order";
import FoodFastPopularMenu from "@/components/foodfast/popular-menu";
import FoodFastWhyUs from "@/components/foodfast/why-us";
import FoodFastPromotions from "@/components/foodfast/promotions";
import FoodFastAppDownload from "@/components/foodfast/app-download";
import FoodFastOrderProcess from "@/components/foodfast/order-process";
import FoodFastTestimonials from "@/components/foodfast/testimonials";
import FoodFastRegistration from "@/components/foodfast/registration";
import FoodFastContact from "@/components/foodfast/contact";
import FoodFastFooter from "@/components/foodfast/footer";
import BackToHome from "@/components/techcorp/back-to-home";

export default function FoodFastPage() {
  return (
    <main className="min-h-screen">
      <BackToHome />
      <FoodFastHeader />
      <FoodFastHero />
      <FoodFastQuickOrder />
      <FoodFastPopularMenu />
      <FoodFastWhyUs />
      <FoodFastPromotions />
      <FoodFastAppDownload />
      <FoodFastOrderProcess />
      <FoodFastTestimonials />
      <FoodFastRegistration />
      <FoodFastContact />
      <FoodFastFooter />
    </main>
  );
}
