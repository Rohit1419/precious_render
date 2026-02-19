"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, Target, TrendingUp } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export default function TechCorpCaseStudies() {
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

  const caseStudies = [
    {
      client: "Global Finance Corp",
      title: "AI-Powered Fraud Detection System",
      challenge: "Rising fraud cases costing $10M+ annually",
      solution: "Machine learning system analyzing transaction patterns",
      result: "Reduced fraud by 87%, saving $8.5M in first year",
      technologies: ["Python", "TensorFlow", "AWS", "Kafka"],
      bgClass:
        "from-blue-600/20 via-blue-500/10 to-cyan-400/20 dark:from-blue-900/40 dark:via-blue-800/30 dark:to-cyan-700/40",
      accentColor: "bg-blue-500 dark:bg-blue-600",
      textColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      client: "MediTech Healthcare",
      title: "Integrated Patient Management Platform",
      challenge: "Fragmented systems causing data silos and inefficiencies",
      solution: "Unified cloud-based healthcare platform",
      result: "30% operational efficiency increase, 99.9% system uptime",
      technologies: ["React", "Node.js", "MongoDB", "Azure"],
      bgClass:
        "from-green-600/20 via-green-500/10 to-emerald-400/20 dark:from-green-900/40 dark:via-green-800/30 dark:to-emerald-700/40",
      accentColor: "bg-green-500 dark:bg-green-600",
      textColor: "text-green-600 dark:text-green-400",
      iconBg: "bg-green-100 dark:bg-green-900/30",
    },
    {
      client: "RetailNow Group",
      title: "Omnichannel Retail Solution",
      challenge: "Disconnected online and offline sales channels",
      solution:
        "Integrated e-commerce and in-store system with real-time inventory",
      result:
        "42% increase in cross-channel sales, improved customer satisfaction",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
      bgClass:
        "from-purple-600/20 via-purple-500/10 to-pink-400/20 dark:from-purple-900/40 dark:via-purple-800/30 dark:to-pink-700/40",
      accentColor: "bg-purple-500 dark:bg-purple-600",
      textColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      client: "LogiTrans International",
      title: "Smart Logistics Management System",
      challenge: "Inefficient route planning and cargo tracking",
      solution: "IoT-enabled logistics platform with predictive analytics",
      result: "Reduced fuel costs by 23%, improved delivery times by 35%",
      technologies: ["IoT", "React Native", "Python", "Google Cloud"],
      bgClass:
        "from-orange-600/20 via-orange-500/10 to-amber-400/20 dark:from-orange-900/40 dark:via-orange-800/30 dark:to-amber-700/40",
      accentColor: "bg-orange-500 dark:bg-orange-600",
      textColor: "text-orange-600 dark:text-orange-400",
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white dark:bg-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            <TextReveal>Case Studies</TextReveal>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Explore how we&apos;ve helped leading organizations overcome
            challenges and achieve their business goals.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={itemVariants}>
              <NeonGradientCard
                className="h-full overflow-hidden"
                glowColor={
                  study.textColor.includes("blue")
                    ? "rgba(59, 130, 246, 0.5)"
                    : study.textColor.includes("green")
                    ? "rgba(34, 197, 94, 0.5)"
                    : study.textColor.includes("purple")
                    ? "rgba(168, 85, 247, 0.5)"
                    : "rgba(249, 115, 22, 0.5)"
                }
              >
                <div
                  className={`h-full rounded-xl bg-gradient-to-br ${study.bgClass} border border-slate-200 dark:border-slate-800 backdrop-blur-sm overflow-hidden`}
                >
                  {/* Top accent bar */}
                  <div className={`h-1 w-full ${study.accentColor}`}></div>

                  <div className="p-6">
                    {/* Client badge */}
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${study.iconBg} ${study.textColor} mb-4`}
                    >
                      {study.client}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                      {study.title}
                    </h3>

                    {/* Challenge, Solution, Result sections */}
                    <div className="space-y-6 mb-6">
                      <div className="flex items-start">
                        <div
                          className={`${study.iconBg} p-2 rounded-full mr-3`}
                        >
                          <Target className={`h-4 w-4 ${study.textColor}`} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                            Challenge
                          </h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {study.challenge}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div
                          className={`${study.iconBg} p-2 rounded-full mr-3`}
                        >
                          <Award className={`h-4 w-4 ${study.textColor}`} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                            Solution
                          </h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div
                          className={`${study.iconBg} p-2 rounded-full mr-3`}
                        >
                          <TrendingUp
                            className={`h-4 w-4 ${study.textColor}`}
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                            Result
                          </h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {study.result}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs font-medium bg-white/70 dark:bg-slate-800/70 rounded-full text-slate-800 dark:text-slate-200 backdrop-blur-sm`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View case study button */}
                    <div className="flex justify-end">
                      <motion.a
                        href="#"
                        className={`inline-flex items-center px-4 py-2 rounded-full ${study.iconBg} ${study.textColor} text-sm font-medium hover:opacity-90 transition-all`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View case study
                        <ArrowRight size={14} className="ml-1" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </NeonGradientCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
