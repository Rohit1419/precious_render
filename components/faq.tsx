"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the Virtual Inventory Model?",
      answer:
        "Digital 3D renders showcase your entire catalog without physical inventory. Customers browse and order specific pieces-you manufacture only what's sold.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Test renders in 24-48 hours. Full projects (50-500 SKUs) in 2-4 weeks. Rush delivery available for additional fee.",
    },
    {
      question: "How much can I save with virtual inventory?",
      answer:
        "Reduce inventory costs by 70-90%. Instead of ₹50L upfront manufacturing, invest ₹2-5L in renders and manufacture only confirmed orders.",
    },
    {
      question: "Are the files compatible with my website?",
      answer:
        "Yes. We deliver 360° videos (MP4), high-res images (PNG/JPG), and on-body composites optimized for Shopify, WooCommerce, Amazon, and custom sites.",
    },
    {
      question: "Do I need to send physical jewelry?",
      answer:
        "Zero physical inventory. Designs exist as digital files only. Manufacture on-demand when customers order. Eliminates unsold stock, storage costs, and insurance.",
    },
    {
      question: "What file formats do you accept?",
      answer:
        "Only Rhino 3dm files are accepted. We do not accept other formats such as JewelCAD, OBJ, FBX, STL or others. However, we can create the CAD model from scratch for a fee. The turnaround time for new CAD creation is typically 2-3 business days, depending on the complexity of the design.",
    },
    {
      question: "How long does rendering take for animations?",
      answer:
        "Rendering time for Creative Marketing Animations depends on the theme’s complexity and duration, typically ranging from 1 to 3 weeks.",
    },
    {
      question: "Can you match my brand style?",
      answer:
        "Yes. Send us reference images of your existing photography style, lighting preferences, and product presentation. We'll match your aesthetic across the entire catalog.",
    },
    {
      question: "Do you offer rush services?",
      answer:
        "Yes, for an additional fee (typically 25-50% premium). Rush projects are prioritized in our render queue.",
    },
    {
      question: "What can be customized in the renders?",
      answer:
        "Material adjustments (metal finish, gemstone appearance), lighting setup (brightness, direction, reflections), camera angles, and positioning.",
    },
    {
      question: "Do you create social media content?",
      answer:
        "Yes. We create 15-60 second cinematic videos optimized for Instagram Reels, Stories, and Feed posts with animations, graphics, and text overlays.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            Find answers to common questions about our web development services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-neutral-900 dark:text-white font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        {/* 
        <div className="mt-16 text-center">
          <p className="mb-6 text-neutral-700 dark:text-neutral-300">
            Still have questions? We&apos;re here to help.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg transition-shadow"
          >
            Contact Us
          </motion.a>
        </div> */}
      </div>
    </section>
  );
}
