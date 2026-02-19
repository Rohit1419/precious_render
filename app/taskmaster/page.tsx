import TaskMasterHeader from "@/components/taskmaster/header";
import TaskMasterHero from "@/components/taskmaster/hero";
import TaskMasterFeatures from "@/components/taskmaster/features";
import TaskMasterAppDemo from "@/components/taskmaster/app-demo";
import TaskMasterPricing from "@/components/taskmaster/pricing";
import TaskMasterTestimonials from "@/components/taskmaster/testimonials";
import TaskMasterIntegrations from "@/components/taskmaster/integrations";
import TaskMasterAuthPreview from "@/components/taskmaster/auth-preview";
import TaskMasterFooter from "@/components/taskmaster/footer";
import BackToHome from "@/components/taskmaster/back-to-home";

export default function TaskMasterPage() {
  return (
    <main className="min-h-screen">
      <BackToHome />
      <TaskMasterHeader />
      <TaskMasterHero />
      <TaskMasterFeatures />
      <TaskMasterAppDemo />
      <TaskMasterTestimonials />
      <TaskMasterIntegrations />
      <TaskMasterPricing />
      <TaskMasterAuthPreview />
      <TaskMasterFooter />
    </main>
  );
}
