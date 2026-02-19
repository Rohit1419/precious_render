"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Award, Users, Target, Clock } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

export default function TechCorpAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const timelineItems = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "TechCorp was established with a vision to transform enterprise technology.",
    },
    {
      year: "2017",
      title: "First Major Client",
      description:
        "Secured our first Fortune 500 client and expanded our team to 50 employees.",
    },
    {
      year: "2019",
      title: "International Expansion",
      description: "Opened offices in Europe and Asia to serve global clients.",
    },
    {
      year: "2021",
      title: "AI Division Launch",
      description:
        "Launched dedicated AI solutions division to meet growing market demands.",
    },
    {
      year: "2025",
      title: "Industry Recognition",
      description:
        "Named as a leader in Gartner's Magic Quadrant for Enterprise Solutions.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            <TextReveal>About TechCorp</TextReveal>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            We&apos;re a team of passionate technologists dedicated to solving
            complex business challenges through innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Our Mission
            </h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 mb-6">
              <Target className="h-10 w-10 text-blue-500 mb-4" />
              <p className="text-slate-700 dark:text-slate-300">
                To empower enterprises with cutting-edge technology solutions
                that drive innovation, efficiency, and sustainable growth in the
                digital era.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Our Vision
            </h3>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
              <Award className="h-10 w-10 text-blue-500 mb-4" />
              <p className="text-slate-700 dark:text-slate-300">
                To be the global leader in enterprise technology solutions,
                recognized for our innovation, expertise, and commitment to
                client success.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Core Values
            </h3>
            <motion.ul
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {[
                "Innovation at the core of everything we do",
                "Client success is our success",
                "Integrity and transparency in all interactions",
                "Continuous learning and improvement",
                "Collaborative and inclusive work environment",
              ].map((value, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {value}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-10 text-center text-slate-900 dark:text-white">
            <TextReveal>Our Team</TextReveal>
          </h3>
          <div className="flex justify-center items-center mb-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 max-w-2xl text-center">
              <Users className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Our diverse team of 200+ experts includes software engineers,
                data scientists, UX designers, and business consultants working
                together to deliver exceptional results.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                With offices in North America, Europe, and Asia, we provide
                global coverage with local expertise.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-10 text-center text-slate-900 dark:text-white">
            <TextReveal>Company Timeline</TextReveal>
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "ml-auto pl-8" : "pr-8"
                    }`}
                  >
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                      <div className="text-blue-500 font-bold mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
