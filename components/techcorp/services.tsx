"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  BarChart,
  Shield,
  Smartphone,
} from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";
import { MagicCard } from "@/components/ui/magic-card";

export default function TechCorpServices() {
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

  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your specific business requirements and challenges.",
      icon: <Code className="h-10 w-10 text-blue-500" />,
      features: [
        "Enterprise applications",
        "Web & mobile solutions",
        "API integration",
        "Legacy system modernization",
      ],
    },
    {
      title: "Enterprise Systems",
      description:
        "Comprehensive enterprise systems that streamline operations and improve business efficiency.",
      icon: <Database className="h-10 w-10 text-blue-500" />,
      features: [
        "ERP solutions",
        "CRM implementation",
        "Business process automation",
        "Data management systems",
      ],
    },
    {
      title: "AI & Machine Learning",
      description:
        "Advanced AI solutions that provide intelligent insights and automate complex processes.",
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      features: [
        "Predictive analytics",
        "Natural language processing",
        "Computer vision",
        "AI-powered automation",
      ],
    },
    {
      title: "Cloud & DevOps",
      description:
        "Cloud infrastructure and DevOps practices that ensure scalability, reliability, and continuous delivery.",
      icon: <Cloud className="h-10 w-10 text-blue-500" />,
      features: [
        "Cloud migration",
        "Infrastructure as Code",
        "CI/CD pipelines",
        "Microservices architecture",
      ],
    },
    {
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your data, applications, and infrastructure.",
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      features: [
        "Security assessments",
        "Compliance solutions",
        "Threat detection",
        "Identity management",
      ],
    },
    {
      title: "Mobile Solutions",
      description:
        "Cross-platform mobile applications that deliver exceptional user experiences.",
      icon: <Smartphone className="h-10 w-10 text-blue-500" />,
      features: [
        "iOS & Android apps",
        "Progressive web apps",
        "Mobile backend",
        "IoT integration",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            <TextReveal>Our Services</TextReveal>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            We offer a comprehensive range of technology services to help your
            business thrive in the digital age.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MagicCard className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
