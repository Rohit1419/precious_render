"use client";

import { motion } from "framer-motion";
import { Zap, Gem, ShoppingBag, Sparkles, CheckCircle, Video } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { useRef, useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";
import type { Features as FeaturesType } from "@/lib/sanity/types";

interface FeaturesProps {
  data: FeaturesType | null;
}

const iconMap = {
  zap: Zap,
  gem: Gem,
  shoppingBag: ShoppingBag,
  sparkles: Sparkles,
  checkCircle: CheckCircle,
  video: Video,
};

export default function Features({ data }: FeaturesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  // Fallback data
  const fallbackData = {
    sectionTitle: "Why Choose Precious Render",
    sectionDescription: "We deliver photorealistic jewelry renders with exceptional detail, speed, and customer service to help you sell more.",
    features: [
      {
        icon: "zap",
        title: "Lightning-Fast Turnaround",
        description: "Multi-PC rendering farm enables us to deliver 5000+ SKU renders on time without compromising quality or detail.",
      },
      {
        icon: "gem",
        title: "Jewelry Rendering Specialists",
        description: "Over 3 years of dedicated experience in jewelry-specific workflows, ultra-realistic materials, gemstones, and lighting setups.",
      },
      {
        icon: "shoppingBag",
        title: "E-commerce Ready",
        description: "360° turntable videos and photorealistic jewelry renders optimized for e-commerce, social media, and online catalogs",
      },
      {
        icon: "sparkles",
        title: "Photorealistic Quality",
        description: "Hyper-realistic materials, studio lighting, and advanced rendering techniques that make your jewelry look better than photography.",
      },
      {
        icon: "checkCircle",
        title: "Consistent Quality",
        description: "Standardized material libraries and automated workflows ensure every render maintains the same exceptional quality across thousands of SKUs.",
      },
      {
        icon: "video",
        title: "Creative Marketing Videos",
        description: "Eye-catching motion graphics and cinematic animations designed specifically for social media, digital screens, and advertising campaigns.",
      },
    ],
  };

  const content = data || fallbackData;

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="features" className="py-10 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="text-center mb-10 md:mb-14 relative">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-xl"></div>
              <h2 className="relative text-neutral-900 dark:text-white">
                <TextAnimate
                  animation="blurInUp"
                  by="word"
                  className="text-3xl md:text-5xl font-bold"
                >
                  {content.sectionTitle}
                </TextAnimate>
              </h2>
            </div>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            {content.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {content.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Zap;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
                className="relative h-full"
              >
                <MagicCard className="w-full h-full rounded-2xl">
                  <ShineBorder
                    className="w-full h-full rounded-2xl"
                    borderWidth={2}
                    duration={2000}
                    isActive={activeFeature === index}
                    borderRadius="1rem"
                  >
                    <div className="bg-white/80 dark:bg-neutral-800/90 backdrop-blur-sm p-6 rounded-2xl h-full shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="relative mr-4">
                          <div
                            className="relative bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full p-3 shadow-lg"
                          >
                            <Icon className="h-6 w-6 md:h-10 md:w-10 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  </ShineBorder>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </section>
  );
}