"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { TextReveal } from "@/components/ui/text-reveal";

export default function EstoreHero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white dark:from-slate-950 dark:to-slate-900"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-100/30 dark:bg-purple-900/10 blur-3xl rounded-l-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-100/30 dark:bg-blue-900/10 blur-3xl rounded-r-full"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
              New Collection 2024
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <TextReveal className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Be Bold. Be You.
              </TextReveal>
            </h1>

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-xl">
              Discover the latest trends that define your unique style. Premium
              quality, sustainable fashion for the modern individual.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/estore/collections/new"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-all flex items-center gap-2 group"
              >
                Shop Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/estore/collections"
                className="px-6 py-3 border border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-medium rounded-lg transition-all"
              >
                Explore Collection
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center flex-wrap gap-3">
                <div className="flex items-center">
                  <Tag size={16} className="text-purple-600 mr-1" />
                  <span className="text-purple-600 font-medium">
                    Free Shipping
                  </span>
                </div>
                <span className="text-slate-600 dark:text-slate-400">•</span>
                <div className="flex items-center">
                  <Tag size={16} className="text-purple-600 mr-1" />
                  <span className="text-purple-600 font-medium">
                    Easy Returns
                  </span>
                </div>
                <span className="text-slate-600 dark:text-slate-400">•</span>
                <div className="flex items-center">
                  <Tag size={16} className="text-purple-600 mr-1" />
                  <span className="text-purple-600 font-medium">
                    Express Delivery
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-xl border-2 border-purple-500/30"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl">
                <motion.img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Fashion Collection 2024"
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white dark:bg-slate-900 shadow-md backdrop-blur-sm text-purple-600 dark:text-purple-400 font-bold py-1.5 px-4 rounded-full text-sm flex items-center">
                  <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                  NEW IN
                </div>

                {/* Floating Discount */}
                <motion.div
                  className="absolute -right-5 top-1/4 transform rotate-12"
                  animate={{
                    rotate: [12, 8, 12],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 3,
                  }}
                >
                  <div className="relative p-0.5 rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center relative z-10">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        30% OFF
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Limited time offer
                      </div>
                    </div>
                  </div>
                  {/* Decorator elements */}
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-pink-500 animate-ping opacity-75"></div>
                  <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-purple-500 animate-ping opacity-60 delay-300"></div>
                </motion.div>
              </div>
            </div>

            {/* Shadow effect */}
            <div className="absolute inset-0 blur-3xl -z-10 bg-purple-500/20 dark:bg-purple-500/10 rounded-full transform translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
