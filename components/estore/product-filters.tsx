"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, X, Sliders, Filter } from "lucide-react";

// Filter data
const filterData = {
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#00FF00" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Purple", value: "#800080" },
    { name: "Pink", value: "#FFC0CB" },
  ],
  priceRanges: [
    { name: "Under $25", min: 0, max: 25 },
    { name: "$25 - $50", min: 25, max: 50 },
    { name: "$50 - $100", min: 50, max: 100 },
    { name: "$100 - $200", min: 100, max: 200 },
    { name: "Over $200", min: 200, max: Infinity },
  ],
  materials: [
    "Cotton",
    "Polyester",
    "Wool",
    "Silk",
    "Linen",
    "Denim",
    "Leather",
    "Cashmere",
  ],
};

export default function EstoreProductFilters() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    sizes: [],
    colors: [],
    priceRanges: [],
    materials: [],
  });
  const [expandedSections, setExpandedSections] = useState({
    sizes: true,
    colors: true,
    priceRanges: true,
    materials: false,
  });

  // Toggle filter sections
  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }));
  };

  // Toggle filter item
  const toggleFilter = (
    category: string,
    value: string,
    isColorFilter = false
  ) => {
    setActiveFilters((prev) => {
      const currentFilters = [...prev[category]];
      const valueToUse = isColorFilter ? value : value;

      if (currentFilters.includes(valueToUse)) {
        return {
          ...prev,
          [category]: currentFilters.filter((item) => item !== valueToUse),
        };
      } else {
        return {
          ...prev,
          [category]: [...currentFilters, valueToUse],
        };
      }
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({
      sizes: [],
      colors: [],
      priceRanges: [],
      materials: [],
    });
  };

  // Count active filters
  const activeFilterCount = Object.values(activeFilters).reduce(
    (count, filters) => count + filters.length,
    0
  );

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filter button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 font-medium"
            >
              <Filter size={18} />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Sidebar filters (desktop) */}
          <motion.div
            className={`w-full md:w-64 lg:w-72 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden ${
              isFilterOpen ? "block" : "hidden md:block"
            }`}
            initial={{ height: isFilterOpen ? "auto" : 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders size={18} className="text-purple-600" />
                <h2 className="font-medium text-lg">Filters</h2>
              </div>
              <div className="flex items-center gap-2">
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="md:hidden text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 max-h-[70vh] md:max-h-[calc(100vh-200px)] overflow-y-auto">
              {/* Size filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection("sizes")}
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                >
                  <span>Size</span>
                  {expandedSections.sizes ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {expandedSections.sizes && (
                  <div className="grid grid-cols-3 gap-2">
                    {filterData.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleFilter("sizes", size)}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          activeFilters.sizes.includes(size)
                            ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                            : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                        } hover:border-purple-600 transition-colors`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Color filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection("colors")}
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                >
                  <span>Color</span>
                  {expandedSections.colors ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {expandedSections.colors && (
                  <div className="grid grid-cols-4 gap-2">
                    {filterData.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() =>
                          toggleFilter("colors", color.value, true)
                        }
                        className={`flex flex-col items-center gap-1`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full border-2 ${
                            activeFilters.colors.includes(color.value)
                              ? "border-purple-600"
                              : "border-slate-300 dark:border-slate-600"
                          } ${color.value === "#FFFFFF" ? "bg-white" : ""}`}
                          style={{ backgroundColor: color.value }}
                        ></div>
                        <span className="text-xs text-slate-600 dark:text-slate-400">
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection("priceRanges")}
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                >
                  <span>Price Range</span>
                  {expandedSections.priceRanges ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {expandedSections.priceRanges && (
                  <div className="flex flex-col gap-2">
                    {filterData.priceRanges.map((range) => (
                      <button
                        key={range.name}
                        onClick={() => toggleFilter("priceRanges", range.name)}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          activeFilters.priceRanges.includes(range.name)
                            ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
                            : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                        } hover:border-purple-600 transition-colors text-left`}
                      >
                        {range.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Material filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection("materials")}
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                >
                  <span>Material</span>
                  {expandedSections.materials ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {expandedSections.materials && (
                  <div className="flex flex-col gap-2">
                    {filterData.materials.map((material) => (
                      <label
                        key={material}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={activeFilters.materials.includes(material)}
                          onChange={() => toggleFilter("materials", material)}
                          className="rounded border-slate-300 dark:border-slate-600 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {material}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Apply filters button (mobile only) */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 md:hidden">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>

          {/* Product grid (placeholder) */}
          <div className="flex-1">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <Sliders size={48} className="text-purple-600 mb-4" />
                <h3 className="text-xl font-medium mb-2">Advanced Filtering</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md">
                  This component demonstrates the filter UI. In a real
                  application, it would be connected to a product grid and would
                  filter products based on the selected criteria.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {activeFilterCount > 0 ? (
                    Object.entries(activeFilters).flatMap(
                      ([category, values]) =>
                        values.map((value) => (
                          <div
                            key={`${category}-${value}`}
                            className="flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                          >
                            <span>
                              {category === "colors"
                                ? filterData.colors.find(
                                    (c) => c.value === value
                                  )?.name || value
                                : value}
                            </span>
                            <button
                              onClick={() =>
                                toggleFilter(
                                  category,
                                  value,
                                  category === "colors"
                                )
                              }
                              className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))
                    )
                  ) : (
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      No filters applied
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
