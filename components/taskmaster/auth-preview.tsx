"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { Github, Mail, User, Lock, ArrowRight } from "lucide-react";

export default function TaskMasterAuthPreview() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <section
      id="auth-preview"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(120,119,198,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_80%,rgba(120,119,198,0.03),transparent)]" />
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
              Get started in minutes
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Sign up for free and start managing your projects like never
              before.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white dark:bg-slate-900 shadow-xl dark:shadow-slate-900/10 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-2 p-0 bg-transparent border-b border-slate-200 dark:border-slate-800">
                <TabsTrigger
                  value="login"
                  id="auth-login"
                  className="py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 dark:data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 font-medium"
                >
                  Log in
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  id="auth-signup"
                  className="py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 dark:data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 dark:data-[state=active]:text-indigo-400 font-medium"
                >
                  Sign up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-col space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          className="pl-10 w-full py-2 px-3 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <div className="flex justify-between">
                        <label
                          htmlFor="password"
                          className="text-sm font-medium text-slate-700 dark:text-slate-300"
                        >
                          Password
                        </label>
                        <a
                          href="#"
                          className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          id="password"
                          type="password"
                          className="pl-10 w-full py-2 px-3 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>

                  <AnimatedSubscribeButton className="w-full justify-center">
                    Log in
                  </AnimatedSubscribeButton>

                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white dark:bg-slate-900 px-2 text-slate-500 dark:text-slate-400">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center py-2 px-4 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </button>
                    <button className="flex items-center justify-center py-2 px-4 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-col space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          id="name"
                          type="text"
                          className="pl-10 w-full py-2 px-3 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label
                        htmlFor="signup-email"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          id="signup-email"
                          type="email"
                          className="pl-10 w-full py-2 px-3 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label
                        htmlFor="signup-password"
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          id="signup-password"
                          type="password"
                          className="pl-10 w-full py-2 px-3 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="Create a password"
                        />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Must be at least 8 characters
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                    />
                    <label
                      htmlFor="terms"
                      className="text-xs text-slate-600 dark:text-slate-400"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <AnimatedSubscribeButton className="w-full justify-center">
                    Create account
                  </AnimatedSubscribeButton>

                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white dark:bg-slate-900 px-2 text-slate-500 dark:text-slate-400">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center py-2 px-4 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </button>
                    <button className="flex items-center justify-center py-2 px-4 border border-slate-300 dark:border-slate-700 rounded-md shadow-sm text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#app-demo"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium text-sm"
            >
              Want to see the app first? Check out our interactive demo
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
