"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { Confetti, ConfettiRef } from "@/components/ui/confetti";

export default function ContactForm() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const confettiRef = useRef<ConfettiRef>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormState("success");
      confettiRef.current?.fire({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 1500);
  };

  const resetForm = () => {
    setFormState("idle");
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900 relative"
    >
      <Confetti ref={confettiRef} options={{ disableForReducedMotion: true }} />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 dark:text-neutral-400"
            >
              Have a jewelry collection to visualize? Let&apos;s discuss how we can help
              bring your designs to life with photorealistic renders.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 md:p-8"
          >
            {formState === "success" ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  Thank you for reaching out. We&apos;ll get back to you as soon
                  as possible.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                      placeholder="Your name"
                      disabled={formState === "submitting"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                      placeholder="your.email@example.com"
                      disabled={formState === "submitting"}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    placeholder="Your company name"
                    disabled={formState === "submitting"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 resize-none"
                    placeholder="Tell us about your project..."
                    disabled={formState === "submitting"}
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-md font-medium transition-colors flex items-center justify-center"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 size={20} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Email Us</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                contact@preciousrender.com
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Call Us</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                +91 XXXXX-XXXXX
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
