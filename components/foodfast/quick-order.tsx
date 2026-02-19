"use client";

import { useState } from "react";
import { Search, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

const foodCategories = ["All", "Pizza", "Burger", "Sushi", "Salad", "Dessert"];

export default function FoodFastQuickOrder() {
  const [address, setAddress] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section id="quick-order" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
            Quick Order
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Enter your location, select your preferences, and we&apos;ll show
            you the perfect food options
          </p>
        </div>

        <NeonGradientCard
          className="p-6 md:p-8 rounded-xl relative overflow-hidden"
          glowColor="hsla(20, 100%, 60%, 0.7)"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location Input */}
            <div className="relative">
              <label
                htmlFor="location"
                className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
              >
                Delivery Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
                <input
                  type="text"
                  id="location"
                  placeholder="Enter your delivery address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>
            </div>

            {/* Food Search */}
            <div className="relative">
              <label
                htmlFor="search"
                className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300"
              >
                Food Preference
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
                <input
                  type="text"
                  id="search"
                  placeholder="Search for dishes or cuisine"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>
            </div>

            {/* Find Food Button */}
            <div className="flex items-end">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                Find Food
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Popular:
            </span>
            {foodCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-100 dark:hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mini Map Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-slate-100 dark:bg-slate-800 h-60 rounded-lg overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                {/* Map styled background - simplified map visualization */}
                <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-slate-850">
                  {/* Grid lines for map */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                    {Array(36)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="border border-slate-200 dark:border-slate-700"
                        ></div>
                      ))}
                  </div>

                  {/* Main roads */}
                  <div className="absolute top-1/4 left-0 right-0 h-1 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-slate-300 dark:bg-slate-600"></div>

                  {/* Restaurant indicators */}
                  <div className="absolute top-1/5 left-[20%] w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="absolute top-1/4 left-[72%] w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="absolute top-3/5 left-[60%] w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="absolute top-[85%] left-[45%] w-3 h-3 bg-orange-500 rounded-full"></div>

                  {/* Current location indicator with pulsing animation */}
                  <div className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3">
                    <div className="absolute inset-0 bg-blue-500 rounded-full opacity-25 animate-ping"></div>
                    <div className="absolute inset-0 bg-blue-500 rounded-full opacity-75 scale-50"></div>
                    <div className="absolute inset-[30%] bg-white dark:bg-blue-200 rounded-full"></div>
                  </div>

                  {/* Delivery radius visualization */}
                  <div className="absolute top-1/2 left-1/2 w-32 h-32 -ml-16 -mt-16 rounded-full border-2 border-blue-500/30 border-dashed"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-3 right-3 bg-white dark:bg-slate-700 shadow-md rounded-md px-3 py-1.5 text-xs font-medium text-orange-500">
              Powered by FoodFast Map
            </div>
          </motion.div>
        </NeonGradientCard>
      </div>
    </section>
  );
}
