"use client";

import { motion } from "framer-motion";
import { MagicCard } from "@/components/ui/magic-card";
import { Camera, Rotate3d, Clapperboard, User } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export default function Services() {
  const services = [
    {
      title: "Photo-Realistic Product Images",
      description:
        "High-resolution static renders of your jewelry pieces. Perfect for product catalogs, websites, and marketing materials. Showcase every detail with studio-quality lighting and material accuracy.",
      icon: <Camera className="w-10 h-10 text-emerald-500 mb-4" />,
      features: [
        "White background images",
        "Multiple angle shots",
        "High-resolution PNG/JPG",
        "Consistent lighting setup",
      ],
    },
    {
      title: "Classic 360° Turntable Animations",
      description:
        "Cinematic rotating videos that let customers view jewelry from every angle. Perfect for e-commerce sites, product pages, and digital catalogs. Increases customer confidence and engagement.",
      icon: <Rotate3d className="w-10 h-10 text-emerald-500 mb-4" />,
      features: [
        "360° full rotation videos",
        "Multiple viewing speeds",
        "MP4 format (e-commerce ready)",
        "Loop-friendly animations",
      ],
    },
    {
      title: "Creative Marketing Animations",
      description:
        "Eye-catching cinematic animations designed to captivate your audience. Perfect for Instagram Reels, TikTok, product launches, and digital advertising campaigns. Stand out with luxury motion graphics.",
      icon: <Clapperboard className="w-10 h-10 text-emerald-500 mb-4" />,
      features: [
        "Social media optimized formats",
        "Cinematic motion graphics",
        "Custom animations & transitions",
        "Brand integration & text overlays",
      ],
    },
    {
      title: "On-Body Jewelry Visualization",
      description:
        "Realistic on-model renders and composites that show how jewelry looks when worn. Increases customer confidence, reduces returns, and boosts conversions for online stores.",
      icon: <User className="w-10 h-10 text-emerald-500 mb-4" />,
      features: [
        "Motion tracking & compositing",
        "Diverse model selection",
        "Natural hand & body poses",
        "Lifestyle photography integration",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Jewelry Rendering Solutions Tailored to Your Brand
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            From single product renders to complete catalog production, we provide comprehensive 3D visualization services to help your jewelry business thrive online and offline.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <AnimatedBeam
                beamColor="#10b981"
                beamOpacity={0.2}
                size={200}
                containerClassName="h-full"
              >
                <MagicCard className="h-full">
                  <div className="flex flex-col items-start p-6 h-full">
                    {service.icon}
                    <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mt-auto">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MagicCard>
              </AnimatedBeam>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="text-center mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg transition-shadow"
          >
            Get Started
          </motion.a>
        </div>*/}
      </div>
    </section>
  );
}
