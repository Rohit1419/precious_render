"use client";

import { motion } from "framer-motion";
import { Clock, Check, HeadphonesIcon, Smartphone } from "lucide-react";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";

const features = [
  {
    title: "Fast Delivery",
    description:
      "We deliver your food within 30 minutes, or your next order gets a 30% discount.",
    icon: Clock,
    color: "#FF5722",
    value: 92,
    label: "of orders delivered on time",
    additional: "Average delivery time: 25 mins",
  },
  {
    title: "Fresh Ingredients",
    description:
      "All our ingredients are sourced daily from local farms and suppliers for maximum freshness.",
    icon: Check,
    color: "#4CAF50",
    value: 100,
    label: "fresh ingredients",
    additional: "Locally sourced from 25+ farms",
  },
  {
    title: "24/7 Support",
    description:
      "Our customer service team is available around the clock to help with any issues.",
    icon: HeadphonesIcon,
    color: "#2196F3",
    value: 98,
    label: "satisfaction rating",
    additional: "2.5 min average response time",
  },
  {
    title: "User-Friendly App",
    description:
      "Track your order, customize your meals, and earn rewards with our easy-to-use mobile app.",
    icon: Smartphone,
    color: "#9C27B0",
    value: 89,
    label: "app store rating",
    additional: "50,000+ active users daily",
  },
];

export default function FoodFastWhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-orange-50/80 to-transparent dark:from-slate-950/80 dark:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="h-1 w-12 rounded-full bg-orange-500 mr-2"></span>
            <span className="text-2xl md:text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500 uppercase tracking-wider">
              Why choose us
            </span>
            <span className="h-1 w-12 rounded-full bg-orange-500 ml-2"></span>
          </div>
          {/* <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
            Why Choose Us
          </h2> */}
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Four key reasons why FoodFast is the preferred choice for food
            delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-slate-100 dark:border-slate-700 relative"
            >
              <div className="px-6 pt-6">
                {/* Header with icon */}
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon
                      style={{ color: feature.color }}
                      className="h-6 w-6"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {feature.description}
                </p>

                {/* Additional info */}
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-6 flex items-center">
                  <span
                    className="inline-block w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: feature.color }}
                  ></span>
                  {feature.additional}
                </div>
              </div>

              {/* Progress visualization */}
              <div className="px-6 pb-6 mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    Performance
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: feature.color }}
                  >
                    {feature.value}%
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: feature.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${feature.value}%` }}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                  ></motion.div>
                </div>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  {feature.value}% {feature.label}
                </p>
              </div>

              {/* Hover indicator */}
              <div
                className="absolute bottom-0 left-0 w-full h-1 transition-transform duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"
                style={{ backgroundColor: feature.color }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">
              Our Numbers Speak for Themselves
            </h3>
            <div className="h-1 w-20 bg-white/30 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "30k+", label: "Customers", icon: "👥" },
              { value: "150+", label: "Restaurant Partners", icon: "🍽️" },
              { value: "95%", label: "Satisfaction Rate", icon: "⭐" },
              { value: "12", label: "Cities Served", icon: "🏙️" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center relative"
              >
                <div className="text-5xl font-bold mb-2 flex items-center justify-center">
                  <span className="mr-2">{stat.icon}</span>
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 w-12 bg-white/30 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
