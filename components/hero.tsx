"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { TextAnimate } from "@/components/ui/text-animate";
import { AuroraText } from "@/components/ui/aurora-text";
import { WordRotate } from "@/components/ui/word-rotate";
import type { Hero as HeroType } from "@/lib/sanity/types";

interface HeroProps {
  data: HeroType | null;
}

export default function Hero({ data }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Fallback data
  const fallbackData = {
    title: "Premium Jewelry",
    subtitle: "Rendering Services for",
    highlightText: "Modern Jewelers",
    rotatingWords: [
      "Jewelry Renders",
      "Virtual Inventory Solutions",
      "360° Product Videos",
      "Marketing Animations",
      "CAD to Catalog Workflows",
      "E-commerce Visuals",
    ],
    ctaPrimary: "Request a Quote",
    ctaSecondary: "View Portfolio",
    backgroundVideoUrl: "/Precious render.mp4",
  };

  const content = data || fallbackData;

  return (
    <div
      ref={ref}
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden min-h-[100vh] flex flex-col justify-center"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src={content.backgroundVideoUrl || "/Precious render.mp4"} type="video/mp4" />
      </video>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight flex flex-col items-center gap-2">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-neutral-900 dark:text-white"
            >
              {content.title}
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-neutral-900 dark:text-white"
              delay={0.5}
            >
              {content.subtitle}
            </TextAnimate>
          </h1>

          <div className="mb-4 md:mb-6">
            <AuroraText
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-500"
              colors={["#10b981", "#06b6d4", "#0ea5e9", "#10b981"]}
            >
              {content.highlightText}
            </AuroraText>
          </div>

          <div className="text-lg md:text-xl font-medium mb-8 md:mb-10 text-neutral-700 dark:text-neutral-300 h-24 md:h-20">
            We create beautiful{" "}
            <WordRotate
              words={content.rotatingWords}
              className="text-emerald-500 font-semibold"
              duration={2000}
              motionProps={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10 md:mb-14">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium flex items-center justify-center hover:shadow-lg transition-shadow overflow-hidden"
            >
              {content.ctaPrimary}
              <ArrowRight size={16} className="ml-2" />
              <BorderBeam
                duration={3}
                size={100}
                colorFrom="#ffffff"
                colorTo="#a3ffec"
              />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-white text-neutral-900 font-bold flex items-center justify-center hover:bg-neutral-100 transition-colors overflow-hidden shadow-lg"
            >
              {content.ctaSecondary}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}