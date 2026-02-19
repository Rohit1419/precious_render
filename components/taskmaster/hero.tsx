"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Safari } from "@/components/ui/safari";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export default function TaskMasterHero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* Background gradient with animated effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.25),transparent)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent)]" />
        <AnimatedBeam
          className="opacity-50 dark:opacity-30"
          size={400}
          speed={10}
          backgroundColor="transparent"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-medium rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 mb-4">
                  Project management reimagined
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">
                  Efficient project management.
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-violet-500">
                    Real-time collaboration.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
                  Streamline your workflow, assign tasks, track progress, and
                  collaborate with your team in real-time. The all-in-one
                  project management solution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
              >
                <ShimmerButton className="w-full sm:w-auto px-8 py-3 rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                  Start free trial
                </ShimmerButton>
                <Link
                  href="#video-demo"
                  className="flex items-center gap-2 px-5 py-3 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <div className="flex-shrink-0 bg-white dark:bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center shadow-md group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                    <Play
                      size={14}
                      className="text-indigo-600 dark:text-indigo-400 ml-0.5 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="font-medium">Watch demo</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-6"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Trusted by teams at:
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
                  {[
                    "Acme Inc",
                    "GlobalTech",
                    "Innovate",
                    "FutureCorp",
                    "ZetaWorks",
                  ].map((company, index) => (
                    <span
                      key={index}
                      className="text-slate-400 dark:text-slate-600 font-semibold"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Light effect behind the app UI */}
              <div className="absolute -inset-4 bg-indigo-500/10 dark:bg-indigo-500/5 blur-xl rounded-2xl"></div>

              <Safari
                url="app.taskmaster.com"
                className="w-full shadow-2xl relative"
              >
                <div className="bg-white dark:bg-slate-800 h-[400px] rounded-b-lg overflow-hidden">
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-[200px] bg-slate-100 dark:bg-slate-900 p-4 hidden sm:block">
                      <div className="flex flex-col space-y-1">
                        <div className="h-8 w-full rounded bg-indigo-600/20 mb-4"></div>
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="h-8 w-full rounded bg-slate-200 dark:bg-slate-700"
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="h-8 w-48 bg-slate-200 dark:bg-slate-700 rounded"></div>
                        <div className="h-8 w-24 bg-indigo-500 rounded"></div>
                      </div>

                      {/* Kanban board mock */}
                      <div className="flex gap-4 overflow-x-auto pb-4">
                        {["To Do", "In Progress", "Review", "Complete"].map(
                          (column, i) => (
                            <div
                              key={i}
                              className="min-w-[220px] bg-slate-100 dark:bg-slate-900 rounded-lg p-3"
                            >
                              <div className="text-sm font-medium mb-2">
                                {column}
                              </div>
                              <div className="space-y-2">
                                {[...Array(i === 1 ? 4 : 3)].map((_, j) => (
                                  <div
                                    key={j}
                                    className={`p-3 rounded-md bg-white dark:bg-slate-800 shadow-sm 
                                    ${
                                      i === 1 && j === 0
                                        ? "border-l-4 border-indigo-500"
                                        : ""
                                    }`}
                                  >
                                    <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
                                    <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                    {i === 1 && j === 0 && (
                                      <div className="mt-2 flex justify-between">
                                        <div className="h-5 w-5 bg-indigo-100 dark:bg-indigo-900 rounded-full"></div>
                                        <div className="h-5 w-16 bg-indigo-100 dark:bg-indigo-900 rounded-full"></div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Safari>

              {/* Status indicator dots */}
              <div className="absolute -right-3 -bottom-3 flex space-x-1">
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                <span
                  className="h-3 w-3 bg-indigo-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></span>
                <span
                  className="h-3 w-3 bg-violet-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
