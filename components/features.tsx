"use client";

import { motion } from "framer-motion";
import { Zap, Gem, ShoppingBag, Sparkles, CheckCircle, Video } from "lucide-react";
// import { AnimatedBeam } from "@/components/ui/animated-beam";
import { TextAnimate } from "@/components/ui/text-animate";
import { useRef, useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";
// import { RetroGrid } from "@/components/ui/retro-grid";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const feature1Ref = useRef<HTMLDivElement>(null);
  const feature2Ref = useRef<HTMLDivElement>(null);
  const feature3Ref = useRef<HTMLDivElement>(null);
  const feature4Ref = useRef<HTMLDivElement>(null);
  const feature5Ref = useRef<HTMLDivElement>(null);
  const feature6Ref = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Zap className="h-6 w-6 md:h-10 md:w-10 text-white" />,
      title: "Lightning-Fast Turnaround",
      description:
        "Multi-PC rendering farm enables us to deliver 5000+ SKU renders on time without compromising quality or detail.",
      ref: feature1Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
    {
      icon: <Gem className="h-6 w-6 md:h-10 md:w-10 text-white" />,
      title: "Jewelry Rendering Specialists",
      description:
        "Over 3 years of dedicated experience in jewelry-specific workflows, ultra-realistic materials, gemstones, and lighting setups.",
      ref: feature2Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
    {
      icon: <ShoppingBag className="h-6 w-6 md:h-10 md:w-10 text-white" />,
      title: "E-commerce Ready",
      description:
        "360° turntable videos and photorealistic jewelry renders optimized for e-commerce, social media, and online catalogs",
      ref: feature3Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
    {
      icon: <Sparkles className="h-6 w-6 md:h-10 md:w-10 text-white" />,
      title: "Photorealistic Quality",
      description:
        "Hyper-realistic materials, studio lighting, and advanced rendering techniques that make your jewelry look better than photography.",
      ref: feature4Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
    {
      icon: <CheckCircle className="h-6 w-6 md:h-10 md:w-10 text-white" />,
      title: "Consistent Quality",
      description:
        "Standardized material libraries and automated workflows ensure every render maintains the same exceptional quality across thousands of SKUs.",
      ref: feature5Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
    {
      icon: <Video className="h-6 w-6 md:h-10 md:w-10 text-white" />,
      title: "Creative Marketing Videos",
      description:
        "Eye-catching motion graphics and cinematic animations designed specifically for social media, digital screens, and advertising campaigns.",
      ref: feature6Ref,
      gradient: "from-emerald-500 to-cyan-400",
    },
  ];

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
      {/* <RetroGrid
        className="absolute inset-0 z-0 opacity-15 dark:opacity-10"
        lightLineColor="rgba(16, 185, 129, 0.2)"
        darkLineColor="rgba(6, 182, 212, 0.1)"
      /> */}

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
                  Why Choose Precious Render
                </TextAnimate>
              </h2>
            </div>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            We deliver photorealistic jewelry renders with exceptional detail, speed, and customer service to help you sell more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div
            ref={centerRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none"
          />

          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={feature.ref}
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
                        {/* <div
                          className={`absolute -inset-1 rounded-full bg-gradient-to-r ${feature.gradient} opacity-90 blur-sm`}
                        ></div> */}
                        <div
                          className={`relative bg-gradient-to-r ${feature.gradient} rounded-full p-3 shadow-lg`}
                        >
                          {feature.icon}
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
          ))}

          {/* Animated beams connecting features - more subtle */}
          {/* {activeFeature === null && (
            <>
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature1Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={0.5}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature2Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={0.7}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature3Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={0.9}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature4Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={1.1}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature5Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={1.3}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={feature6Ref}
                gradientStartColor="rgba(16, 185, 129, 0.3)"
                gradientStopColor="rgba(6, 182, 212, 0.1)"
                delay={1.5}
              />
            </>
          )} */}
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
