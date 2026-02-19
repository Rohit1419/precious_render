"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { BorderBeam } from "@/components/ui/border-beam";

export default function TechCorpNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  return (
    <section className="py-16 bg-blue-600 dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with TechCorp
            </h2>
            <p className="text-blue-100">
              Subscribe to our newsletter for the latest tech insights, industry
              trends, and company updates.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
            {isSubscribed ? (
              <div className="flex flex-col items-center justify-center py-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                  <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Thank You for Subscribing!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-center">
                  You&apos;ve been added to our newsletter list. Watch your
                  inbox for tech insights and updates!
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Subscribe to Our Newsletter
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="sm:w-auto">
                    <AnimatedSubscribeButton
                      className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors overflow-hidden"
                      onClick={() => {}}
                      submittedLabel="Subscribed!"
                      loadingLabel="Subscribing..."
                      defaultLabel="Subscribe"
                      isSubmitting={false}
                      isSubmitted={false}
                    />
                  </div>
                </form>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from TechCorp.
                </p>
              </>
            )}
          </div>

          <div className="mt-8 text-center">
            <div className="relative inline-block">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center px-6 py-3 rounded-md bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors overflow-hidden"
              >
                Download Our Tech Insights E-Book
              </motion.a>
              <div className="absolute inset-0 pointer-events-none">
                <BorderBeam
                  as="div"
                  duration={3}
                  size={100}
                  colorFrom="#3b82f6"
                  colorTo="#93c5fd"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
