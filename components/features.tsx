"use client";

import { motion } from "framer-motion";
import {
  Zap, Gem, ShoppingBag, Sparkles, CheckCircle, Video,
  Camera, Rotate3d, Clapperboard, User, Star, Award,
  type LucideIcon,
} from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { useRef, useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";
import type { FeaturesData } from "@/lib/sanity/types";
import { CTAButton } from "./CTAButon";

interface FeaturesProps {
  data?: FeaturesData | null;
}

const ICON_MAP: Record<string, LucideIcon> = {
  zap: Zap,
  gem: Gem,
  "shopping-bag": ShoppingBag,
  sparkles: Sparkles,
  "check-circle": CheckCircle,
  video: Video,
  camera: Camera,
  "rotate-3d": Rotate3d,
  clapperboard: Clapperboard,
  user: User,
  star: Star,
  award: Award,
};

const DEFAULT_FEATURES = [
  { icon: "zap", title: "Lightning-Fast Turnaround", description: "Multi-PC rendering farm enables us to deliver 5000+ SKU renders on time without compromising quality or detail." },
  { icon: "gem", title: "Jewelry Rendering Specialists", description: "Over 3 years of dedicated experience in jewelry-specific workflows, ultra-realistic materials, gemstones, and lighting setups." },
  { icon: "shopping-bag", title: "E-commerce Ready", description: "360° turntable videos and photorealistic jewelry renders optimized for e-commerce, social media, and online catalogs" },
  { icon: "sparkles", title: "Photorealistic Quality", description: "Hyper-realistic materials, studio lighting, and advanced rendering techniques that make your jewelry look better than photography." },
  { icon: "check-circle", title: "Consistent Quality", description: "Standardized material libraries and automated workflows ensure every render maintains the same exceptional quality across thousands of SKUs." },
  { icon: "video", title: "Creative Marketing Videos", description: "Eye-catching motion graphics and cinematic animations designed specifically for social media, digital screens, and advertising campaigns." },
];

export default function Features({ data }: FeaturesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const sectionTitle = data?.sectionTitle ?? "Why Choose Precious Render";
  const sectionDescription = data?.sectionDescription ?? "We deliver photorealistic jewelry renders with exceptional detail, speed, and customer service to help you sell more.";
  const ctaLabel = data?.ctaLabel ?? "Get Started";
  const ctaHref = data?.ctaHref ?? "https://wa.me/8087881239??text=Hello%20I%20want%20to%20know%20more%20about%20your%20services";
  const features = data?.features?.length ? data.features : DEFAULT_FEATURES;

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
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
                  {sectionTitle}
                </TextAnimate>
              </h2>
            </div>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => {
            const IconComponent = ICON_MAP[feature.icon] ?? Zap;
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
                          <div className="relative bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full p-3 shadow-lg">
                            <IconComponent className="h-6 w-6 md:h-10 md:w-10 text-white" />
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

       
{/* CTA button section */}
        <div className="text-center mt-10 max-w-3xl mx-auto">

          <CTAButton href={ctaHref}>
            {ctaLabel}
          </CTAButton>
        </div>
        
      </div>
    </section>
  );
}
