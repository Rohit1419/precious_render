"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

export default function TechCorpBlog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const blogPosts = [
    {
      title: "The Future of Enterprise AI: Trends to Watch in 2025",
      excerpt:
        "Explore the emerging AI technologies that are reshaping how enterprises operate and deliver value to customers.",
      date: "May 15, 2025",
      readTime: "8 min read",
      category: "AI Trends",
      image:
        "https://images.unsplash.com/photo-1610954424460-822d4f151ae9?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "AI visualization",
    },
    {
      title: "Building Resilient Cloud Infrastructure for Global Operations",
      excerpt:
        "Learn best practices for designing cloud architectures that ensure business continuity across international markets.",
      date: "April 22, 2025",
      readTime: "6 min read",
      category: "DevOps",
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Cloud servers",
    },
    {
      title: "Cybersecurity in the Age of Remote Work",
      excerpt:
        "Discover strategies to protect your enterprise data and systems in distributed work environments.",
      date: "March 10, 2025",
      readTime: "5 min read",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Cybersecurity concept",
    },
    {
      title: "The ROI of Digital Transformation: Measuring Success",
      excerpt:
        "How to quantify the business impact of your digital initiatives and ensure continued stakeholder support.",
      date: "February 28, 2025",
      readTime: "7 min read",
      category: "Digital Strategy",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Business analytics",
    },
  ];

  const categories = [
    "All",
    "AI Trends",
    "DevOps",
    "Security",
    "Digital Strategy",
    "UI/UX",
  ];

  return (
    <section id="blog" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            <TextReveal>Insights & Articles</TextReveal>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Stay updated with the latest trends, best practices, and insights in
            enterprise technology.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                    {post.title}
                  </h3>

                  <p className="text-slate-700 dark:text-slate-300 mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    Read more
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
          >
            View all articles
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
