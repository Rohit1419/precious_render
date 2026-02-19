"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { TextAnimate } from "@/components/ui/text-animate";
import { AuroraText } from "@/components/ui/aurora-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";

export default function TechCorpHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      id="home"
      ref={ref}
      className="relative pt-32 pb-20 md:pt-36 md:pb-32 overflow-hidden"
    >
      {/* Enhanced background with RetroGrid */}
      <RetroGrid
        opacity={0.3}
        angle={60}
        lightLineColor="#3b82f6"
        darkLineColor="#3b82f6"
      />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 mb-6 md:mb-8 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
            <span className="flex h-2 w-2 mr-2 rounded-full bg-blue-500" />
            Enterprise Technology Solutions
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-slate-900 dark:text-white"
            >
              We Build Scalable, Secure
            </TextAnimate>
          </h1>

          <div className="mb-4 md:mb-6">
            <AuroraText
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              colors={["#3b82f6", "#60a5fa", "#93c5fd", "#3b82f6"]}
            >
              Tech Solutions
            </AuroraText>
          </div>

          <p className="text-lg md:text-xl mb-8 md:mb-10 text-slate-700 dark:text-slate-300 max-w-3xl">
            Empowering enterprises with cutting-edge technology solutions that
            drive innovation, efficiency, and sustainable growth in the digital
            era.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium flex items-center justify-center hover:shadow-lg transition-shadow overflow-hidden"
            >
              View Services
              <ArrowRight size={16} className="ml-2" />
              <BorderBeam
                duration={3}
                size={100}
                colorFrom="#ffffff"
                colorTo="#bfdbfe"
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors overflow-hidden"
            >
              Contact Us
              <ShineBorder
                borderWidth={1}
                duration={10}
                shineColor={["#3b82f6", "#60a5fa"]}
              >
                <div></div>
              </ShineBorder>
            </motion.a>
          </div>

          {/* 3D Abstract Tech Visual */}
          {/* <div className="relative w-full max-w-4xl mx-auto">
            <div className="aspect-[16/9] bg-gradient-to-br from-blue-600/20 to-blue-400/20 dark:from-blue-900/30 dark:to-blue-600/30 rounded-xl overflow-hidden shadow-xl border border-blue-200 dark:border-blue-800/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-blue-600 dark:text-blue-400 text-lg font-semibold">
                  3D Tech Visualization
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}
