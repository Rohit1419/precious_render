"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQSection } from "@/lib/sanity/types";

interface FAQProps {
  data: FAQSection | null;
}

export default function FAQ({ data }: FAQProps) {
  // Fallback data
  const fallbackData = {
    sectionTitle: "Frequently Asked Questions",
    sectionDescription: "Find answers to common questions about our web development services.",
    faqs: [
      {
        question: "What is the Virtual Inventory Model?",
        answer: "Digital 3D renders showcase your entire catalog without physical inventory. Customers browse and order specific pieces-you manufacture only what's sold.",
      },
      {
        question: "How long does it take to complete a project?",
        answer: "Test renders in 24-48 hours. Full projects (50-500 SKUs) in 2-4 weeks. Rush delivery available for additional fee.",
      },
    ],
  };

  const content = data || fallbackData;

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
            {content.sectionTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            {content.sectionDescription}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {content.faqs.map((faq, index) => (
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
      </div>
    </section>
  );
}