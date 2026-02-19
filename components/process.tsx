"use client";

import { motion } from "framer-motion";
import {
  FileCode,
  Palette,
  Eye,
  Cpu,
  Download,
  LifeBuoy,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "CAD to Catalog Workflow Begins",
      description:
        "Our CAD to catalog process starts with your 3dm or matrix files-we handle the complete transformation to photorealistic jewelry renders",
      icon: <FileCode className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Material Setup & Lighting Design",
      description:
        "We apply accurate materials from our extensive library and set up studio-quality HDRI lighting customized for your jewelry type and brand aesthetic.",
      icon: <Palette className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Test Renders & Approval",
      description:
        "Within 24-48 hours, we provide test renders for your review. You can request adjustments to materials, lighting, angles, or camera position.",
      icon: <Eye className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Full Production Rendering",
      description:
        "Once approved, our multi-PC rendering farm processes your complete order using optimized settings for maximum quality and efficiency.",
      icon: <Cpu className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Final Delivery & Export",
      description:
        "Receive your high-resolution images (PNG/JPG) or 360° videos (MP4) organized by SKU, ready for immediate use on your website or marketing materials.",
      icon: <Download className="h-8 w-8 text-emerald-500" />,
    },
    {
      title: "Ongoing Support & Revisions",
      description:
        "Need material adjustments or additional angles? We maintain your project files and material libraries for quick revisions as your collection evolves.",
      icon: <LifeBuoy className="h-8 w-8 text-emerald-500" />,
    },
  ];

  return (
    <section id="process" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Our Rendering Process
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Our proven virtual jewelry inventory workflow ensures efficient delivery of photorealistic jewelry renders that exceed your expectations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <TimelineItem
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg transition-shadow"
          >
            Start Your Project
          </motion.a>
        </div> */}
      </div>
    </section>
  );
}

interface TimelineItemProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast: boolean;
}

function TimelineItem({
  step,
  title,
  description,
  icon,
  isLast,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-row mb-8 md:mb-12 last:mb-0 items-start"
    >
      {/* Step Number and Timeline */}
      <div className="mr-4 md:mr-6 flex flex-col items-center shrink-0">
        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 font-bold text-base md:text-lg border-4 border-white dark:border-neutral-900 z-10 shrink-0">
          {step}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-emerald-200 dark:bg-emerald-800/50 mt-2 min-h-[50px]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-0 md:pt-1.5">
        <div className="flex items-center mb-2">
          <div className="mr-3 shrink-0">{icon}</div>
          <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white leading-tight">
            {title}
          </h3>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
}
