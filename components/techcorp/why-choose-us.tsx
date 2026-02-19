"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Clock,
  Award,
  Users,
  Zap,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";

export default function TechCorpWhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    {
      value: 98.5,
      label: "Client Satisfaction",
      icon: <Award className="h-10 w-10 text-blue-500" />,
      suffix: "%",
    },
    {
      value: 200,
      label: "Completed Projects",
      icon: <CheckCircle className="h-10 w-10 text-blue-500" />,
      suffix: "+",
    },
    {
      value: 15,
      label: "Years Experience",
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      suffix: "+",
    },
    {
      value: 99.9,
      label: "Uptime SLA",
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      suffix: "%",
    },
  ];

  const comparisonItems = [
    {
      feature: "Enterprise-grade Security",
      us: true,
      others: false,
    },
    {
      feature: "24/7 Support & Monitoring",
      us: true,
      others: false,
    },
    {
      feature: "Dedicated Success Manager",
      us: true,
      others: false,
    },
    {
      feature: "Customized Solutions",
      us: true,
      others: true,
    },
    {
      feature: "Agile Development",
      us: true,
      others: true,
    },
    {
      feature: "Post-Launch Support",
      us: true,
      others: false,
    },
    {
      feature: "Transparent Pricing",
      us: true,
      others: false,
    },
    {
      feature: "Comprehensive Documentation",
      us: true,
      others: false,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 bg-white dark:bg-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            <TextReveal>Why Choose TechCorp</TextReveal>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            We deliver exceptional value through our expertise, commitment to
            quality, and client-focused approach.
          </p>
        </div>

        <div className="mb-20">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-md text-center h-full">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="flex items-center justify-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                      <NumberTicker
                        value={stat.value}
                        duration={2}
                        easing="easeOutExpo"
                      />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 mt-2">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Our Competitive Advantage
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                    Enterprise-Grade Security
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Our solutions adhere to the highest security standards,
                    ensuring your data and systems are protected.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                    Expert Team
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Our team consists of industry veterans with deep expertise
                    across various technologies and domains.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                    Timely Delivery
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    We pride ourselves on delivering projects on time and within
                    budget, without compromising on quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <AnimatedCircularProgressBar
                  value={95}
                  strokeWidth={8}
                  size={120}
                  color="#3b82f6"
                  duration={2}
                />
                <p className="mt-2 text-sm text-center text-slate-700 dark:text-slate-300">
                  Client Retention Rate
                </p>
              </div>

              <div className="flex flex-col items-center">
                <AnimatedCircularProgressBar
                  value={90}
                  strokeWidth={8}
                  size={120}
                  color="#3b82f6"
                  duration={2}
                />
                <p className="mt-2 text-sm text-center text-slate-700 dark:text-slate-300">
                  Projects Delivered On Time
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              TechCorp vs. Competitors
            </h3>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-3 gap-4 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                <div className="font-medium text-slate-900 dark:text-white">
                  Feature
                </div>
                <div className="font-medium text-blue-600 dark:text-blue-400 text-center">
                  TechCorp
                </div>
                <div className="font-medium text-slate-600 dark:text-slate-400 text-center">
                  Competitors
                </div>
              </div>

              <div className="space-y-3">
                {comparisonItems.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 py-2 border-b border-slate-200 dark:border-slate-700 last:border-0"
                  >
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      {item.feature}
                    </div>
                    <div className="flex justify-center">
                      {item.us ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.others ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
