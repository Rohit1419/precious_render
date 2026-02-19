"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { TextReveal } from "@/components/ui/text-reveal";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export default function TaskMasterPricing() {
  const [annualBilling, setAnnualBilling] = useState(true);

  const pricingTiers: PricingTier[] = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic Kanban boards",
        "1 GB storage",
        "Up to 3 collaborators",
        "Email support",
        "Mobile app access",
        "24-hour activity history",
      ],
      cta: "Get started",
    },
    {
      name: "Pro",
      price: annualBilling ? "12" : "15",
      description: "Ideal for teams and growing businesses",
      features: [
        "Unlimited projects",
        "Advanced Kanban & Gantt views",
        "10 GB storage",
        "Unlimited collaborators",
        "Priority support",
        "Advanced reporting",
        "Time tracking",
        "Custom fields",
        "Unlimited activity history",
        "Advanced integrations",
        "Team analytics dashboard",
      ],
      cta: "Start free trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: annualBilling ? "35" : "45",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "SSO & advanced security",
        "24/7 dedicated support",
        "Custom onboarding",
        "Enterprise API access",
        "Admin controls & permissions",
        "Compliance features",
        "Dedicated account manager",
        "Custom integrations",
        "Performance SLAs",
        "Priority feature requests",
      ],
      cta: "Contact sales",
    },
  ];

  const cardVariants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1 + 0.2,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent)]" />
        <AnimatedBeam
          className="opacity-40 dark:opacity-30"
          size={400}
          speed={3}
          backgroundColor="transparent"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Choose the plan that works best for your team. All plans include a
              14-day free trial with no credit card required.
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <span
                className={`text-sm ${
                  !annualBilling
                    ? "font-medium text-slate-900 dark:text-white"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setAnnualBilling(!annualBilling)}
                className="relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none"
                style={{
                  backgroundColor: annualBilling
                    ? "rgb(99, 102, 241)"
                    : "rgb(203, 213, 225)",
                }}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
                    annualBilling ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="flex items-center gap-1.5">
                <span
                  className={`text-sm ${
                    annualBilling
                      ? "font-medium text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  Annual
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-0.5 rounded-full">
                  20% off
                </span>
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <MagicCard
                className={`relative h-full p-6 pt-8 pb-10 rounded-xl overflow-hidden ${
                  tier.popular
                    ? "border-2 border-indigo-500 dark:border-indigo-600"
                    : "border border-slate-200 dark:border-slate-800"
                }`}
                spotlight={tier.popular}
                spotlightColor="rgba(99, 102, 241, 0.15)"
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 px-3 py-1 bg-indigo-500 text-white text-xs font-medium text-center">
                    Most Popular
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline mb-1">
                      <span className="text-4xl font-bold text-slate-900 dark:text-white">
                        ${tier.price}
                      </span>
                      {tier.price !== "0" && (
                        <span className="ml-1 text-slate-600 dark:text-slate-400">
                          /month{annualBilling ? ", billed annually" : ""}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mr-2 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {tier.popular ? (
                    <ShimmerButton className="w-full py-3 font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
                      {tier.cta}
                    </ShimmerButton>
                  ) : (
                    <button
                      className={`w-full py-3 font-medium rounded-lg transition-colors ${
                        tier.name === "Free"
                          ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-700"
                          : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50"
                      }`}
                    >
                      {tier.cta}
                    </button>
                  )}
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400"
        >
          <p>
            All plans include core features: kanban boards, task management,
            file storage, mobile apps (iOS & Android)
          </p>
          <p className="mt-2">
            <a
              href="#faq"
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              Have questions? View our FAQ
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto bg-gradient-to-r from-indigo-100 via-purple-100 to-violet-100 dark:from-indigo-950/40 dark:via-purple-950/40 dark:to-violet-950/40 rounded-2xl p-8 md:p-12 shadow-md dark:shadow-indigo-950/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Need a custom solution?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                We offer custom solutions for large organizations with unique
                requirements. Get personalized onboarding, dedicated support,
                and custom features.
              </p>
              <ul className="space-y-2 mb-8 md:mb-0">
                {[
                  "Custom user roles & permissions",
                  "Advanced security features",
                  "Dedicated server options",
                  "Custom integrations",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                    <span className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <button className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
                Contact our sales team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
