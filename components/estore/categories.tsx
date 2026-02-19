"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Define category data
const categories = [
  {
    id: 1,
    name: "Tops",
    image:
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1800&auto=format&fit=crop",
    itemCount: 124,
    href: "/estore/category/tops",
  },
  {
    id: 2,
    name: "Bottoms",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1800&auto=format&fit=crop",
    itemCount: 83,
    href: "/estore/category/bottoms",
  },
  {
    id: 3,
    name: "Dresses",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1800&auto=format&fit=crop",
    itemCount: 96,
    href: "/estore/category/dresses",
  },
  {
    id: 4,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1800&auto=format&fit=crop",
    itemCount: 156,
    href: "/estore/category/accessories",
  },
  {
    id: 5,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1800&auto=format&fit=crop",
    itemCount: 72,
    href: "/estore/category/shoes",
  },
];

// Season filter buttons
const seasons = ["All", "Spring", "Summer", "Fall", "Winter"];

export default function EstoreCategories() {
  const [selectedSeason, setSelectedSeason] = useState("All");
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore our curated collections of high-quality clothing and
            accessories for every style and occasion.
          </p>

          {/* Season filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {seasons.map((season) => (
              <button
                key={season}
                onClick={() => setSelectedSeason(season)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSeason === season
                    ? "bg-purple-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {season}
              </button>
            ))}
          </div>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: category.id * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-square">
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredCategory === category.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all group-hover:opacity-90"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {category.itemCount} Products
                  </p>

                  <Link
                    href={category.href}
                    className="inline-flex items-center gap-2 text-white font-medium opacity-90 hover:opacity-100 transition-all"
                  >
                    <span>View Products</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <Link
            href="/estore/categories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-medium transition-all"
          >
            <span>View All Categories</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
