"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        budget: "",
      });

      // Reset submitted state after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Start Your Project Today
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Ready to transform your web presence? Fill out the form below and
            we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 border border-neutral-200 dark:border-neutral-800 h-full">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
                Contact Information
              </h3>
              <p className="mb-8 text-neutral-600 dark:text-neutral-400">
                Have questions or ready to start your project? Reach out to us
                through any of these channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:contact@preciousrender.com"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      contact@preciousrender.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white mb-1">
                      WhatsApp/Call Us
                    </p>
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                    >
                      +91 XXXXX-XXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white mb-1">
                      Studio Location
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="font-medium text-neutral-900 dark:text-white mb-4">
                  Follow Us
                </p>
                <div className="flex space-x-4">
                  {["twitter", "facebook", "instagram", "linkedin"].map(
                    (social) => (
                      <a
                        key={social}
                        href={`https://${social}.com/`}
                        className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="w-5 h-5 bg-current rounded-sm opacity-70" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 p-4 rounded-lg text-center"
                >
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      >
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                      >
                        Company Name (optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Budget Range (optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    >
                      <option value="">Select budget range</option>
                      <option value="less-than-1000">Less than $1,000</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-plus">$10,000+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium flex items-center justify-center hover:shadow-lg transition-shadow disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </div>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
