"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

const orderSteps = [
  {
    icon: "📱",
    title: "Choose Your Favorites",
    description:
      "Browse through our extensive menu and select your favorite dishes",
  },
  {
    icon: "📍",
    title: "Enter Your Address",
    description: "Tell us where to deliver your order by entering your address",
  },
  {
    icon: "💳",
    title: "Pay Online",
    description: "Securely pay using your preferred payment method",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Sit back and relax as your food arrives at your doorstep",
  },
];

export default function FoodFastOrderProcess() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="process" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
            How It Works
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Ordering your favorite food is simple and straightforward with our
            easy 4-step process
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {/* Steps Desktop Progress Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>

          {/* Steps */}
          {orderSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                },
              }}
              initial="hidden"
              animate={controls}
              className="relative flex flex-col items-center"
            >
              {/* Step Number */}
              <motion.div
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.2 + 0.3,
                    },
                  },
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center mb-6 relative z-10"
              >
                <span className="text-3xl">{step.icon}</span>
                <div className="absolute -right-1 -bottom-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </motion.div>

              {/* Step Info */}
              <h3 className="text-xl font-semibold mb-2 text-center text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-center text-slate-600 dark:text-slate-400">
                {step.description}
              </p>

              {/* Mobile Step Connector */}
              {index < orderSteps.length - 1 && (
                <div className="md:hidden flex justify-center mt-6">
                  <ChevronRight className="h-6 w-6 text-orange-500 transform rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 1.2,
              },
            },
          }}
          initial="hidden"
          animate={controls}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2">
            Start Ordering Now
            <ChevronRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Average delivery time: 25-35 minutes, depending on your location
          </p>
        </motion.div>
      </div>
    </section>
  );
}
