"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Layout,
  CalendarDays,
  BarChart3,
  Settings,
  Users,
  Plus,
  Search,
} from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Safari } from "@/components/ui/safari";
import { MagicCard } from "@/components/ui/magic-card";
import { Particles } from "@/components/ui/particles";

const tabs = [
  { id: "board", label: "Board View", icon: <Layout className="w-4 h-4" /> },
  {
    id: "calendar",
    label: "Calendar",
    icon: <CalendarDays className="w-4 h-4" />,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <BarChart3 className="w-4 h-4" />,
  },
];

const projects = [
  { id: "p1", name: "Website Redesign", active: true },
  { id: "p2", name: "Mobile App Development" },
  { id: "p3", name: "Marketing Campaign" },
  { id: "p4", name: "Product Launch" },
];

const taskStatuses = [
  {
    id: "todo",
    name: "To Do",
    color: "bg-slate-200 dark:bg-slate-700",
    count: 6,
  },
  {
    id: "inprogress",
    name: "In Progress",
    color: "bg-blue-200 dark:bg-blue-900/30",
    count: 4,
  },
  {
    id: "review",
    name: "Review",
    color: "bg-amber-200 dark:bg-amber-900/30",
    count: 2,
  },
  {
    id: "done",
    name: "Done",
    color: "bg-green-200 dark:bg-green-900/30",
    count: 8,
  },
];

interface Task {
  id: string;
  title: string;
  status: string;
  priority: "low" | "medium" | "high";
  assignee: string;
  dueDate?: string;
  tags?: string[];
}

// Generate deterministic tasks based on status
const generateTasks = (status: string, count: number): Task[] => {
  const tasks: Task[] = [];

  const titles = [
    "Update homepage design",
    "Fix navigation responsiveness",
    "Create new logo variations",
    "Write API documentation",
    "Implement authentication",
    "Design mobile mockups",
    "Set up analytics",
    "Create content guidelines",
    "Research competitors",
    "Finalize color palette",
    "Develop pricing page",
    "Create user onboarding flow",
    "Define success metrics",
    "QA testing plan",
    "SEO optimization",
    "Email template design",
  ];

  const assignees = [
    "Alex Kim",
    "Sarah Johnson",
    "David Chen",
    "Maria Rodriguez",
  ];
  const tags = ["Design", "Frontend", "Backend", "Marketing", "Content", "UX"];
  const priorities = ["low", "medium", "high"];

  for (let i = 0; i < count; i++) {
    const titleIndex =
      (parseInt(status.charCodeAt(0).toString()) + i) % titles.length;
    const assigneeIndex =
      (parseInt(status.charCodeAt(0).toString()) + i) % assignees.length;
    const priorityIndex =
      (parseInt(status.charCodeAt(0).toString()) + i) % priorities.length;

    const task: Task = {
      id: `${status}-${i}`,
      title: titles[titleIndex],
      status,
      priority: priorities[priorityIndex] as "low" | "medium" | "high",
      assignee: assignees[assigneeIndex],
      tags: [tags[i % tags.length]],
    };

    if (
      Math.floor((parseInt(status.charCodeAt(0).toString()) + i) / 2) % 2 ===
      0
    ) {
      const today = new Date();
      const futureDate = new Date();
      futureDate.setDate(today.getDate() + 3 + i);
      task.dueDate = futureDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }

    tasks.push(task);
  }

  return tasks;
};

export default function TaskMasterAppDemo() {
  const [activeTab, setActiveTab] = useState("board");
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);

  // Generate tasks for each status
  const allTasks: Record<string, Task[]> = {};
  taskStatuses.forEach((status) => {
    allTasks[status.id] = generateTasks(status.id, status.count);
  });

  const taskVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    hover: {
      y: -5,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 },
    },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.2 } },
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "medium":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      case "low":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  return (
    <section id="app-demo" className="py-20 relative overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={50}
          color="#6366f1"
          vy={0.05}
          vx={0.05}
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
              <AnimatedShinyText>
                Powerful, flexible, intuitive
              </AnimatedShinyText>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              See how TaskMaster makes project management simple and efficient
              with its powerful features and intuitive interface.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-6xl"
        >
          <MagicCard
            className="rounded-2xl overflow-hidden"
            spotlight
            spotlightColor="rgba(99, 102, 241, 0.05)"
          >
            <Safari
              url="app.taskmaster.com/projects/website-redesign"
              className="w-full shadow-2xl"
            >
              <div className="bg-white dark:bg-slate-900 h-[600px] overflow-hidden">
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div className="w-48 lg:w-56 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-shrink-0 p-4">
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center mr-2">
                        <span className="text-white font-bold text-sm">TM</span>
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        TaskMaster
                      </h3>
                    </div>

                    <div className="space-y-1 mb-6">
                      <div className="flex items-center px-3 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium text-sm">
                        <Layout className="w-4 h-4 mr-2" />
                        <span>Projects</span>
                      </div>
                      <div className="flex items-center px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg text-sm">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        <span>Analytics</span>
                      </div>
                      <div className="flex items-center px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        <span>Team</span>
                      </div>
                      <div className="flex items-center px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg text-sm">
                        <Settings className="w-4 h-4 mr-2" />
                        <span>Settings</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 px-3">
                        Projects
                      </h4>
                      <div className="space-y-1">
                        {projects.map((project) => (
                          <div
                            key={project.id}
                            className={`flex items-center px-3 py-2 rounded-lg text-sm ${
                              project.active
                                ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium"
                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                            }`}
                          >
                            <span className="truncate">{project.name}</span>
                            {project.active && (
                              <ChevronRight className="w-4 h-4 ml-auto" />
                            )}
                          </div>
                        ))}
                        <div className="flex items-center px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg text-sm">
                          <Plus className="w-4 h-4 mr-1" />
                          <span>New Project</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="h-16 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold text-slate-800 dark:text-white mr-4">
                          Website Redesign
                        </h2>
                        <div className="flex">
                          <div className="flex -space-x-2">
                            {[
                              "bg-pink-500",
                              "bg-blue-500",
                              "bg-amber-500",
                              "bg-green-500",
                            ].map((color, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.3 }}
                                className={`w-7 h-7 rounded-full ${color} flex items-center justify-center text-white text-xs font-medium border-2 border-white dark:border-slate-900`}
                              >
                                {["AK", "SJ", "DC", "MR"][i]}
                              </motion.div>
                            ))}
                          </div>
                          <button className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 text-xs ml-1">
                            +2
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            placeholder="Search tasks..."
                            className="pl-10 pr-4 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 border-none rounded-lg w-48 focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>
                        <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg flex items-center">
                          <Plus className="w-4 h-4 mr-1" />
                          New Task
                        </button>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-slate-200 dark:border-slate-800 px-6 flex items-center">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 ${
                            activeTab === tab.id
                              ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400"
                              : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300"
                          }`}
                          onClick={() => setActiveTab(tab.id)}
                        >
                          {tab.icon}
                          <span className="ml-2">{tab.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Board view content */}
                    <div className="flex-1 overflow-auto p-6">
                      <AnimatePresence>
                        {activeTab === "board" && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex h-full space-x-4"
                          >
                            {taskStatuses.map((status) => (
                              <div
                                key={status.id}
                                className="w-72 flex-shrink-0"
                              >
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center">
                                    <div
                                      className={`w-3 h-3 rounded-full ${status.color} mr-2`}
                                    ></div>
                                    <h3 className="font-medium text-slate-800 dark:text-white text-sm">
                                      {status.name}
                                    </h3>
                                  </div>
                                  <span className="text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full">
                                    {status.count}
                                  </span>
                                </div>

                                <div className="space-y-3">
                                  {allTasks[status.id].map((task, index) => (
                                    <motion.div
                                      key={task.id}
                                      initial="initial"
                                      animate="animate"
                                      exit="exit"
                                      whileHover="hover"
                                      variants={taskVariants}
                                      transition={{ delay: index * 0.05 }}
                                      onMouseEnter={() =>
                                        setHoveredTask(task.id)
                                      }
                                      onMouseLeave={() => setHoveredTask(null)}
                                      className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm"
                                    >
                                      <div className="flex items-center justify-between mb-2">
                                        <span
                                          className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(
                                            task.priority
                                          )}`}
                                        >
                                          {task.priority
                                            .charAt(0)
                                            .toUpperCase() +
                                            task.priority.slice(1)}
                                        </span>
                                        {task.dueDate && (
                                          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                                            <CalendarDays className="w-3 h-3 mr-1" />
                                            {task.dueDate}
                                          </span>
                                        )}
                                      </div>
                                      <h4 className="text-sm font-medium text-slate-800 dark:text-white mb-2">
                                        {task.title}
                                      </h4>
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                          <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs font-medium text-indigo-800 dark:text-indigo-300">
                                            {task.assignee
                                              .split(" ")
                                              .map((name) => name[0])
                                              .join("")}
                                          </div>
                                          {task.tags &&
                                            task.tags.length > 0 && (
                                              <span className="ml-2 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-full">
                                                {task.tags[0]}
                                              </span>
                                            )}
                                        </div>
                                        {hoveredTask === task.id && (
                                          <motion.button
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center"
                                          >
                                            <ChevronRight className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                                          </motion.button>
                                        )}
                                      </div>
                                    </motion.div>
                                  ))}
                                  <button className="w-full py-2 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm rounded-lg flex items-center justify-center transition-colors">
                                    <Plus className="w-4 h-4 mr-1" />
                                    Add Task
                                  </button>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}

                        {activeTab === "calendar" && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col"
                          >
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 h-full">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-medium text-slate-800 dark:text-white">
                                  July 2023
                                </h3>
                                <div className="flex space-x-2">
                                  <button className="p-1.5 rounded-md bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                                    <ChevronRight className="w-4 h-4 text-slate-600 dark:text-slate-400 rotate-180" />
                                  </button>
                                  <button className="p-1.5 rounded-md bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                                    <ChevronRight className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                  </button>
                                </div>
                              </div>
                              <div className="grid grid-cols-7 gap-2">
                                {[
                                  "Mon",
                                  "Tue",
                                  "Wed",
                                  "Thu",
                                  "Fri",
                                  "Sat",
                                  "Sun",
                                ].map((day) => (
                                  <div
                                    key={day}
                                    className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 py-2"
                                  >
                                    {day}
                                  </div>
                                ))}
                                {Array.from(
                                  { length: 31 },
                                  (_, i) => i + 1
                                ).map((day) => (
                                  <div
                                    key={day}
                                    className={`aspect-square bg-white dark:bg-slate-800 rounded-lg border ${
                                      day === 15
                                        ? "border-indigo-300 dark:border-indigo-700 ring-1 ring-indigo-500"
                                        : "border-slate-200 dark:border-slate-700"
                                    } p-1.5 flex flex-col`}
                                  >
                                    <span
                                      className={`text-xs ${
                                        day === 15
                                          ? "font-medium text-indigo-600 dark:text-indigo-400"
                                          : "text-slate-600 dark:text-slate-400"
                                      }`}
                                    >
                                      {day}
                                    </span>
                                    {day % 5 === 0 && (
                                      <div className="mt-1 p-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded truncate">
                                        {day % 10 === 0
                                          ? "Team meeting"
                                          : "Deadline"}
                                      </div>
                                    )}
                                    {day % 7 === 0 && (
                                      <div className="mt-1 p-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded truncate">
                                        Review
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeTab === "dashboard" && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full grid grid-cols-2 gap-4"
                          >
                            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                              <h3 className="text-sm font-medium text-slate-800 dark:text-white mb-4">
                                Task Status Overview
                              </h3>
                              <div className="flex flex-col space-y-2">
                                {taskStatuses.map((status) => (
                                  <div
                                    key={status.id}
                                    className="flex items-center"
                                  >
                                    <div
                                      className={`w-3 h-3 rounded-full ${status.color} mr-2`}
                                    ></div>
                                    <span className="text-sm text-slate-600 dark:text-slate-400 mr-2">
                                      {status.name}
                                    </span>
                                    <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{
                                          width: `${
                                            (status.count / 20) * 100
                                          }%`,
                                        }}
                                        transition={{
                                          duration: 1,
                                          ease: "easeOut",
                                        }}
                                        className={`h-full ${
                                          status.id === "todo"
                                            ? "bg-slate-400 dark:bg-slate-500"
                                            : status.id === "inprogress"
                                            ? "bg-blue-500 dark:bg-blue-600"
                                            : status.id === "review"
                                            ? "bg-amber-500 dark:bg-amber-600"
                                            : "bg-green-500 dark:bg-green-600"
                                        }`}
                                      />
                                    </div>
                                    <span className="ml-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                                      {status.count}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                              <h3 className="text-sm font-medium text-slate-800 dark:text-white mb-4">
                                Team Activity
                              </h3>
                              <div className="space-y-3">
                                {[
                                  {
                                    user: "Sarah Johnson",
                                    action: "completed task",
                                    target: "Update homepage design",
                                    time: "5m ago",
                                  },
                                  {
                                    user: "David Chen",
                                    action: "added comment on",
                                    target: "API documentation",
                                    time: "1h ago",
                                  },
                                  {
                                    user: "Alex Kim",
                                    action: "moved task",
                                    target: "Create new logo variations",
                                    time: "2h ago",
                                  },
                                  {
                                    user: "Maria Rodriguez",
                                    action: "assigned task to",
                                    target: "David Chen",
                                    time: "3h ago",
                                  },
                                ].map((activity, i) => (
                                  <div key={i} className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs font-medium text-indigo-800 dark:text-indigo-300 mr-2 mt-0.5">
                                      {activity.user
                                        .split(" ")
                                        .map((name) => name[0])
                                        .join("")}
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-xs text-slate-600 dark:text-slate-400">
                                        <span className="font-medium text-slate-700 dark:text-slate-300">
                                          {activity.user}
                                        </span>{" "}
                                        {activity.action}{" "}
                                        <span className="font-medium text-slate-700 dark:text-slate-300">
                                          {activity.target}
                                        </span>
                                      </p>
                                      <p className="text-xs text-slate-500 dark:text-slate-500">
                                        {activity.time}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </Safari>
          </MagicCard>
        </motion.div>
      </div>
    </section>
  );
}
