"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Food Blogger",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    comment:
      "The delivery was incredibly fast, and the food arrived hot and fresh. The packaging is eco-friendly, which I really appreciate. Will definitely order again!",
  },
  {
    id: 2,
    name: "David Chen",
    position: "Regular Customer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    rating: 4,
    comment:
      "FoodFast has transformed my busy weeknights. Their app is so easy to use, and I love the real-time tracking feature. The selection of restaurants is impressive too.",
  },
  {
    id: 3,
    name: "Amanda Rodriguez",
    position: "Working Professional",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    comment:
      "I've tried many food delivery services, but FoodFast stands out with their customer service. When my order was slightly delayed, they immediately offered compensation.",
  },
  {
    id: 4,
    name: "Michael Taylor",
    position: "Fitness Trainer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    rating: 5,
    comment:
      "As someone who's conscious about nutrition, I love that FoodFast includes detailed information about ingredients and allows for easy customization of orders.",
  },
  {
    id: 5,
    name: "Emma Wilson",
    position: "Student",
    avatar:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=256&auto=format&fit=crop",
    rating: 4,
    comment:
      "The student discounts and special offers make FoodFast perfect for my budget. The food quality is great, and their delivery people are always friendly.",
  },
];

export default function FoodFastTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (autoplay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/30 to-white dark:from-slate-900/30 dark:to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Don&apos;t just take our word for it-see what real customers are
            saying about their FoodFast experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div
            className="p-6 md:p-12 rounded-2xl bg-white dark:bg-slate-800 shadow-xl"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-orange-500">
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={`${testimonials[activeIndex].name}'s profile picture`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-orange-500 font-medium">
                      {testimonials[activeIndex].position}
                    </p>
                    <div className="flex mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonials[activeIndex].rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-slate-300 dark:text-slate-600"
                              }`}
                          />
                        ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 italic">
                  &quot;{testimonials[activeIndex].comment}&quot;
                </blockquote>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-orange-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600 dark:text-slate-300" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${activeIndex === index
                        ? "w-6 bg-orange-500"
                        : "bg-slate-300 dark:bg-slate-600"
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-orange-100 dark:hover:bg-slate-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-slate-600 dark:text-slate-300" />
              </button>
            </div>
          </div>

          {/* Rating Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                rating: "4.9",
                label: "App Store Rating",
                total: "1,234+ reviews",
              },
              {
                rating: "4.8",
                label: "Google Play Rating",
                total: "2,415+ reviews",
              },
              {
                rating: "98%",
                label: "Satisfaction Rate",
                total: "Based on surveys",
              },
              { rating: "15k+", label: "Daily Orders", total: "And growing" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-orange-500">
                  {stat.rating}
                </div>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">{stat.total}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
