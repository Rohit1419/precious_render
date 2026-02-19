"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  Clock,
  LineChart,
  MessageSquare,
  RefreshCw,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { MagicCard } from "../ui/magic-card";
import { Particles } from "../ui/particles";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function TaskMasterFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features: Feature[] = [
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Task scheduling & due dates",
      description:
        "Schedule tasks with detailed timelines, set due dates, and receive reminders for approaching deadlines.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Team collaboration & sharing",
      description:
        "Collaborate seamlessly with team members, assign tasks, share documents, and track collective progress.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Custom workflows & automation",
      description:
        "Create customized workflows that match your process and automate repetitive tasks to save time.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "Advanced analytics & reporting",
      description:
        "Generate detailed reports on productivity, task completion rates, and team performance metrics.",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Real-time comments & feedback",
      description:
        "Add comments, provide feedback, and discuss tasks in real-time without switching platforms.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      title: "Unlimited revision history",
      description:
        "Access previous versions of your tasks and projects with an unlimited revision history feature.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Time tracking & estimates",
      description:
        "Track time spent on tasks, set time estimates, and compare planned versus actual time metrics.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Secure file storage & sharing",
      description:
        "Store and share files securely with team members and clients with advanced permission controls.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Instant notifications",
      description:
        "Stay informed with real-time notifications for task updates, comments, and approaching deadlines.",
      color: "from-yellow-500 to-amber-600",
    },
  ];

  const cardVariants = {
    default: {
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      y: -10,
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
  };

  const iconVariants = {
    default: { rotate: 0, scale: 1, transition: { duration: 0.3 } },
    hover: { rotate: 10, scale: 1.25, transition: { duration: 0.4 } },
  };

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={100}
          color="#6366f1"
          vy={0.1}
          vx={0.1}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Powerful features to boost your productivity
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              TaskMaster provides all the tools you need to manage projects
              efficiently, collaborate with your team, and deliver results on
              time.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <MagicCard
                className="h-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm overflow-hidden"
                spotlight
                spotlightColor="rgba(99, 102, 241, 0.15)"
              >
                <motion.div
                  variants={cardVariants}
                  initial="default"
                  animate={hoveredFeature === index ? "hover" : "default"}
                  className="h-full flex flex-col"
                >
                  <div className="p-6 pb-0 flex-grow">
                    <div className="flex items-start gap-4 mb-5">
                      <motion.div
                        variants={iconVariants}
                        className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10`}
                      >
                        {feature.icon}
                      </motion.div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                          {feature.title}
                        </h3>
                        <div className="h-1 w-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>

                  <div className="px-6 pb-6 mt-4">
                    {hoveredFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-medium"
                      >
                        <span>Learn more</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
