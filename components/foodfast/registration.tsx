"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function FoodFastRegistration() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate form submission
    setError("");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section id="signup" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/50 to-white dark:from-slate-900/50 dark:to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                  Join Our Food Community
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Sign up to receive exclusive offers, new restaurant
                  announcements, and personalized recommendations
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="yourname@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        error
                          ? "border-red-500"
                          : "border-slate-300 dark:border-slate-700"
                      } bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all`}
                    />
                    {error && (
                      <p className="mt-1 text-sm text-red-500">{error}</p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-slate-300 rounded"
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 block text-sm text-slate-600 dark:text-slate-400"
                    >
                      I agree to receive marketing emails and accept the{" "}
                      <a href="#" className="text-orange-500 hover:underline">
                        Terms of Service
                      </a>
                    </label>
                  </div>

                  <div>
                    <AnimatedSubscribeButton
                      onClick={() => {}}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg"
                      defaultLabel={submitted ? "Subscribed!" : "Subscribe Now"}
                      isSubmitting={false}
                      isSubmitted={submitted}
                    />
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    We respect your privacy. We will never spam you or sell your
                    information.
                  </p>
                </form>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 md:p-12 flex flex-col justify-center text-white">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
                  <div className="h-1 w-16 bg-white/30 rounded-full"></div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Send className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Weekly Food Deals</h4>
                      <p className="text-sm text-white/80">
                        Exclusive offers every week
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7 3.49998C7 3.22383 7.22386 2.99998 7.5 2.99998C7.77614 2.99998 8 3.22383 8 3.49998V7.49998C8 7.77612 7.77614 7.99998 7.5 7.99998C7.22386 7.99998 7 7.77612 7 7.49998V3.49998ZM7 9.49998C7 9.22383 7.22386 8.99998 7.5 8.99998C7.77614 8.99998 8 9.22383 8 9.49998V10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5V9.49998Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Early Access</h4>
                      <p className="text-sm text-white/80">
                        Be the first to try new features
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 0C5.77614 0 6 0.223858 6 0.5V2.5C6 2.77614 5.77614 3 5.5 3C5.22386 3 5 2.77614 5 2.5V0.5C5 0.223858 5.22386 0 5.5 0ZM9.5 0C9.77614 0 10 0.223858 10 0.5V2.5C10 2.77614 9.77614 3 9.5 3C9.22386 3 9 2.77614 9 2.5V0.5C9 0.223858 9.22386 0 9.5 0ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Birthday Rewards</h4>
                      <p className="text-sm text-white/80">
                        Special treats on your birthday
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/80">Subscribers</p>
                      <div className="text-2xl font-bold flex items-center gap-1">
                        <NumberTicker value={28} />
                        <span>,</span>
                        <NumberTicker value={549} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-white/80">Daily Signups</p>
                      <div className="text-2xl font-bold">
                        <NumberTicker value={127} />
                        <span>+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
