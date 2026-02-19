"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagicCard } from "../ui/magic-card";
import {
  Calendar,
  MessageSquare,
  Trello,
  Github,
  FileText,
  Zap,
  Clock,
  Mail,
  ArrowRight,
} from "lucide-react";

interface Integration {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  delay: number;
  gridSpan: string;
}

export default function TaskMasterIntegrations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const integrations: Integration[] = [
    {
      title: "Google Calendar",
      description:
        "Sync tasks with your Google Calendar to view deadlines and events in one place.",
      icon: <Calendar className="h-8 w-8" />,
      bgColor: "bg-red-50 dark:bg-red-950/30",
      iconColor: "text-red-500",
      delay: 0.1,
      gridSpan: "md:col-span-1",
    },
    {
      title: "Slack",
      description:
        "Get notified about task updates and collaborate with your team without leaving Slack.",
      icon: <MessageSquare className="h-8 w-8" />,
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      iconColor: "text-purple-500",
      delay: 0.2,
      gridSpan: "md:col-span-1",
    },
    {
      title: "Trello",
      description:
        "Import your Trello boards and maintain your workflow seamlessly within TaskMaster.",
      icon: <Trello className="h-8 w-8" />,
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      iconColor: "text-blue-500",
      delay: 0.3,
      gridSpan: "md:col-span-1",
    },
    {
      title: "GitHub",
      description:
        "Link tasks to GitHub issues and track development progress directly from TaskMaster.",
      icon: <Github className="h-8 w-8" />,
      bgColor: "bg-slate-50 dark:bg-slate-950/30",
      iconColor: "text-slate-700 dark:text-slate-300",
      delay: 0.4,
      gridSpan: "md:col-span-1",
    },
    {
      title: "Google Drive",
      description:
        "Attach Google Drive files to tasks and access documents without switching contexts.",
      icon: <FileText className="h-8 w-8" />,
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
      iconColor: "text-yellow-600",
      delay: 0.5,
      gridSpan: "md:col-span-2",
    },
    {
      title: "Zapier",
      description:
        "Connect TaskMaster to 3,000+ apps with Zapier for unlimited workflow automation possibilities.",
      icon: <Zap className="h-8 w-8" />,
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      iconColor: "text-orange-500",
      delay: 0.6,
      gridSpan: "md:col-span-2",
    },
    {
      title: "Time Doctor",
      description:
        "Track time spent on tasks and analyze productivity data with Time Doctor integration.",
      icon: <Clock className="h-8 w-8" />,
      bgColor: "bg-green-50 dark:bg-green-950/30",
      iconColor: "text-green-500",
      delay: 0.7,
      gridSpan: "md:col-span-1",
    },
    {
      title: "Mailchimp",
      description:
        "Sync marketing tasks with your email campaigns for streamlined project tracking.",
      icon: <Mail className="h-8 w-8" />,
      bgColor: "bg-teal-50 dark:bg-teal-950/30",
      iconColor: "text-teal-500",
      delay: 0.8,
      gridSpan: "md:col-span-1",
    },
  ];

  const cardVariants = {
    default: { scale: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.03, y: -5, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    default: { scale: 1, rotate: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="integrations"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.05),transparent)]" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Seamless integrations
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              TaskMaster works with your favorite tools, so you can focus on
              your work, not switching between apps.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: integration.delay }}
              className={integration.gridSpan}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <MagicCard
                className="h-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800"
                spotlight={hoveredIndex === i}
                spotlightColor="rgba(99, 102, 241, 0.1)"
              >
                <motion.div
                  className="p-6 h-full flex flex-col"
                  variants={cardVariants}
                  initial="default"
                  animate={hoveredIndex === i ? "hover" : "default"}
                >
                  <div className="flex items-start">
                    <motion.div
                      className={`flex items-center justify-center rounded-xl ${integration.bgColor} ${integration.iconColor} w-12 h-12`}
                      variants={iconVariants}
                    >
                      {integration.icon}
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg text-slate-800 dark:text-white">
                        {integration.title}
                      </h3>
                      <p className="mt-1 text-slate-600 dark:text-slate-400 text-sm">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end"
                    >
                      <span
                        className={`flex items-center text-sm font-medium ${integration.iconColor}`}
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </MagicCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl px-8 py-10 max-w-3xl mx-auto shadow-sm">
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Can&apos;t find what you need?
              </span>{" "}
              TaskMaster offers an open API and webhooks for custom
              integrations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              Talk to our integration specialists
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
