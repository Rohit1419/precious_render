"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export default function FoodFastContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="support" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/50 to-white dark:from-slate-900/50 dark:to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
            Customer Support
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            We&apos;re here to help! Reach out to our team for assistance with
            your orders or any questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Phone Support
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      <a
                        href="tel:+1800123456"
                        className="hover:text-orange-500 transition-colors"
                      >
                        +1 (800) 123-4567
                      </a>
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      For order issues and general inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Email
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      <a
                        href="mailto:support@foodfast.com"
                        className="hover:text-orange-500 transition-colors"
                      >
                        support@foodfast.com
                      </a>
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Live Chat
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      Available in our mobile app
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Fastest way to get support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Hours of Operation
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      Monday - Friday: 8am - 10pm
                      <br />
                      Weekends: 9am - 9pm
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      All times are in EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 shrink-0 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Headquarters
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      123 Food Street
                      <br />
                      Delivery City, DC 10001
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      For business inquiries only
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-medium text-slate-900 dark:text-white mb-4">
                  Connect With Us
                </h4>
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Follow us on social media for special offers, food
                    inspiration, and updates!
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                      </div>
                      <span className="font-medium">Facebook</span>
                    </a>

                    <a
                      href="#"
                      className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </div>
                      <span className="font-medium">Twitter</span>
                    </a>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                        </svg>
                      </div>
                      <span className="font-medium">Instagram</span>
                    </a>

                    <a
                      href="#"
                      className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.53.02C13.84 0 15.14.01 16.44.02c1.72.02 3.42.05 5.1.38a8.428 8.428 0 0 1 3.14 1.23 8.362 8.362 0 0 1 2.13 2.1c.55.8.94 1.7 1.18 2.65.36 1.49.39 3.12.4 4.77.04 2.51.02 5.02.01 7.53-.01 1.72-.04 3.46-.35 5.13-.22.98-.55 1.92-1.04 2.78-.93 1.63-2.38 2.9-4.2 3.6-1.7.62-3.55.64-5.35.64-2.77.01-5.53-.01-8.3-.02-1.71-.01-3.45-.04-5.11-.35-.98-.19-1.92-.51-2.8-.98a8.278 8.278 0 0 1-3.63-4.24c-.4-1.025-.63-2.1-.71-3.21-.15-2.63-.14-5.28-.12-7.92.01-1.59.06-3.2.34-4.76a8.588 8.588 0 0 1 1.18-2.98A8.274 8.274 0 0 1 3.27.99C4.93.38 6.71.33 8.46.3c1.35-.03 2.71-.03 4.07-.02z M18.888 5.82a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88zM12 7.37a4.63 4.63 0 1 0 0 9.26 4.63 4.63 0 0 0 0-9.26zm0 1.74a2.89 2.89 0 1 1 0 5.78 2.89 2.89 0 0 1 0-5.78z"></path>
                        </svg>
                      </div>
                      <span className="font-medium">TikTok</span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm text-slate-900 dark:text-white">
                        Join our community
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Get exclusive offers and updates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 text-green-800 dark:text-green-300 rounded-lg p-4 mb-6"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">
                        Message sent successfully!
                      </h3>
                      <div className="mt-2 text-sm">
                        <p>
                          Thank you for reaching out. Our team will get back to
                          you shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      />
                    </div>
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
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="order-issue">Order Issue</option>
                      <option value="delivery-problem">Delivery Problem</option>
                      <option value="account-help">Account Help</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
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
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
