"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";
import { BorderBeam } from "@/components/ui/border-beam";

export default function TechCorpContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            <TextReveal>Get in Touch</TextReveal>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Ready to discuss your project? Contact us today for a free
            consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Contact Form
            </h3>

            {submitSuccess ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-md mb-6">
                Thank you for your message! We will get back to you shortly.
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
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
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="custom-software">
                    Custom Software Development
                  </option>
                  <option value="enterprise-systems">Enterprise Systems</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="cloud-devops">Cloud & DevOps</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="mobile">Mobile Solutions</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project or requirements..."
                ></textarea>
              </div>

              <div>
                <div className="relative">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors overflow-hidden flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Message
                      </>
                    )}
                  </motion.button>
                  <div className="absolute inset-0 pointer-events-none">
                    <BorderBeam
                      as="div"
                      duration={3}
                      size={100}
                      colorFrom="#ffffff"
                      colorTo="#bfdbfe"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                    Email Us
                  </h4>
                  <a
                    href="mailto:info@techcorp.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    info@techcorp.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                    Call Us
                  </h4>
                  <a
                    href="tel:+11234567890"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                    Visit Us
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    1234 Tech Avenue, Suite 500
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                    Schedule a Call
                  </h4>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Book a 30-minute consultation
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968870204795!2d-122.39901502393162!3d37.78992681156746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c99%3A0x3947ba9fa9deb7d0!2s1234%20Market%20St%2C%20San%20Francisco%2C%20CA%2094102!5e0!3m2!1sen!2sus!4v1688662746218!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TechCorp Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
