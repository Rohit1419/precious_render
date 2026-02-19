"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AvatarCircles } from "@/components/ui/avatar-circles";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export default function TaskMasterTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jessica Chen",
      role: "Product Manager",
      company: "Acme Inc",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
      quote:
        "TaskMaster has completely transformed how our team manages projects. The intuitive interface and powerful features have boosted our productivity by 35%. I especially love the customizable workflows and real-time collaboration capabilities.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Development Lead",
      company: "GlobalTech",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
      quote:
        "After trying numerous project management tools, TaskMaster stands out for its seamless integration with our development workflow. The Kanban boards and sprint planning features are exactly what we needed. The time saved on admin tasks alone makes it worth every penny.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "DesignHub",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&auto=format&fit=crop",
      quote:
        "As a creative agency, we needed a flexible tool that could adapt to our unique processes. TaskMaster delivers exactly that, plus the visual design of the platform itself is beautifully crafted. Our clients love the transparency it provides into our workflow.",
      rating: 4,
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  const avatarVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const avatarUrls = testimonials.map((testimonial) => ({
    imageUrl: testimonial.image,
    profileUrl: "#",
  }));

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(120,119,198,0.1),transparent)] dark:bg-[radial-gradient(circle_at_60%_70%,rgba(120,119,198,0.05),transparent)]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Loved by teams everywhere
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Join thousands of satisfied teams who rely on TaskMaster to
              streamline their workflow and boost productivity.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial carousel */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="p-8 md:p-12"
                >
                  {/* Rating stars */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <Star
                          className={`w-5 h-5 ${
                            i < testimonials[currentTestimonial].rating
                              ? "text-yellow-400"
                              : "text-slate-300 dark:text-slate-700"
                          }`}
                          fill={
                            i < testimonials[currentTestimonial].rating
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-xl md:text-2xl font-medium text-slate-800 dark:text-white mb-8 leading-relaxed"
                  >
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </motion.blockquote>

                  {/* User info */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-100 dark:border-indigo-900"
                    >
                      <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/30 animate-pulse" />
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover relative z-10"
                      />
                    </motion.div>
                    <div>
                      <motion.h4
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="font-medium text-slate-900 dark:text-white"
                      >
                        {testimonials[currentTestimonial].name}
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-slate-600 dark:text-slate-400 text-sm"
                      >
                        {testimonials[currentTestimonial].role} at{" "}
                        {testimonials[currentTestimonial].company}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Avatar circles */}
            <div className="mt-12 flex justify-center">
              <AvatarCircles
                avatarUrls={avatarUrls}
                className="justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
