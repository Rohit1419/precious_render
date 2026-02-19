"use client";

import { useRef } from "react";
// import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";
import { TextAnimate } from "@/components/ui/text-animate";
import { AuroraText } from "@/components/ui/aurora-text";
import { WordRotate } from "@/components/ui/word-rotate";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = [
    "Jewelry Renders",
    "Virtual Inventory Solutions",
    "360° Product Videos",
    "Marketing Animations",
    "CAD to Catalog Workflows",
    "E-commerce Visuals",
  ];

  return (
    <div
      ref={ref}
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden min-h-[100vh] flex flex-col justify-center"
    >
      {/* Enhanced background with RetroGrid */}
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/Precious render.mp4" type="video/mp4" />
      </video>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* <div className="inline-flex items-center px-3 py-1 mb-6 md:mb-8 text-sm font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            <span className="flex h-2 w-2 mr-2 rounded-full bg-emerald-500" />
            Premium Web Development Solutions
          </div> */}

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight flex flex-col items-center gap-2">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-neutral-900 dark:text-white"
            >
              Premium Jewelry
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-neutral-900 dark:text-white"
              delay={0.5}
            >
              Rendering Services for
            </TextAnimate>
          </h1>

          <div className="mb-4 md:mb-6">
            <AuroraText
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-emerald-500"
              colors={["#10b981", "#06b6d4", "#0ea5e9", "#10b981"]}
            >
              Modern Jewelers
            </AuroraText>
          </div>

          {/* <div className="mb-6 md:mb-8">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white"
            ></TextAnimate>
          </div> */}

          <div className="text-lg md:text-xl font-medium mb-8 md:mb-10 text-neutral-700 dark:text-neutral-300 h-24 md:h-20">
            We create beautiful{" "}
            <WordRotate
              words={words}
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
              Request a Quote
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
              View Portfolio
            </motion.a>
          </div>

          {/* Browser mockup with website preview */}
          {/* <div className="relative w-full max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <div className="bg-neutral-100 dark:bg-neutral-800 p-2 sm:p-3 flex items-center space-x-2 border-b border-neutral-200 dark:border-neutral-700">
              <div className="flex space-x-1">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-white dark:bg-neutral-900 rounded-md h-5 sm:h-6 flex items-center justify-center text-xs text-neutral-500 dark:text-neutral-400">
                preciousrender.com
              </div>
            </div>
            <div className="w-full aspect-[16/9] relative bg-white dark:bg-neutral-900">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Precious Render preview"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}
