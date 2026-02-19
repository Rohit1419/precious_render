"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

export default function FoodFastHero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/80 to-white dark:from-slate-950 dark:to-slate-900"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-300/30 dark:bg-orange-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-300/20 dark:bg-red-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              <TextReveal className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-500 to-orange-500">
                Hot food delivery with just one tap
              </TextReveal>
            </h1>

            <p className="text-xl mb-8 text-slate-700 dark:text-slate-300 max-w-xl">
              Choose your dish – Place your order – Get it delivered to your
              door in 30 minutes
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#menu"
                className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all flex items-center gap-2 group"
              >
                Start Ordering
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#menu"
                className="px-6 py-3 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium transition-all"
              >
                Browse Menu
              </Link>
            </div>

            <div className="flex items-center mt-8 gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-orange-500">300+</span>{" "}
                orders delivered today
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-2xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Food delivery"
                width={500}
                height={500}
                className="relative z-10 object-cover rounded-full"
                priority
              />

              {/* Floating elements */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -10 }}
                transition={{
                  yoyo: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 right-10 bg-white dark:bg-slate-800 shadow-lg rounded-lg p-3 z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Delivery status
                    </p>
                    <p className="font-semibold text-sm">On the way</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 10 }}
                transition={{
                  yoyo: Infinity,
                  duration: 1.8,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute -bottom-4 left-10 bg-white dark:bg-slate-800 shadow-lg rounded-lg p-3 z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🔥</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Special offer
                    </p>
                    <p className="font-semibold text-sm">20% off today</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
