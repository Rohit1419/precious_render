"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

export default function TechCorpTestimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, Global Finance Corp",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      quote:
        "TechCorp's AI fraud detection system exceeded our expectations. Their team demonstrated exceptional technical expertise and a deep understanding of our industry challenges. The solution has been transformative for our business.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "VP of Technology, MediTech Healthcare",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      quote:
        "Working with TechCorp on our patient management platform was a game-changer. Their agile approach and attention to detail resulted in a system that has significantly improved our operational efficiency and patient care.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      position: "Digital Director, RetailNow Group",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      quote:
        "TechCorp delivered an omnichannel solution that seamlessly integrated our online and in-store experiences. Their team's innovative approach and commitment to our success made them an invaluable partner.",
      rating: 5,
    },
    {
      name: "David Kim",
      position: "Operations Manager, LogiTrans International",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop",
      quote:
        "The logistics management system developed by TechCorp has revolutionized our operations. Their IoT expertise and predictive analytics capabilities have given us a competitive edge in the market.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white dark:bg-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            <TextReveal>Client Testimonials</TextReveal>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Hear what our clients have to say about working with TechCorp.
          </p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white text-center">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-4">
                      {testimonials[currentIndex].position}
                    </p>
                    <div className="flex items-center">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-yellow-500"
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <blockquote>
                      <p className="text-lg italic text-slate-700 dark:text-slate-300 leading-relaxed">
                        &ldquo;{testimonials[currentIndex].quote}&rdquo;
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-blue-600"
                      : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
