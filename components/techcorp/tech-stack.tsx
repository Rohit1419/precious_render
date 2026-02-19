"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { TextReveal } from "@/components/ui/text-reveal";
import { IconCloud } from "@/components/ui/icon-cloud";

export default function TechCorpTechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const techCategories = [
    {
      name: "Frontend",
      technologies: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "Angular", icon: "/icons/angular.svg" },
        { name: "Vue.js", icon: "/icons/vue.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      ],
    },
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "Java", icon: "/icons/java.svg" },
        { name: "C#", icon: "/icons/csharp.svg" },
        { name: "Go", icon: "/icons/go.svg" },
        { name: "PHP", icon: "/icons/php.svg" },
      ],
    },
    {
      name: "Database",
      technologies: [
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "Redis", icon: "/icons/redis.svg" },
        { name: "Elasticsearch", icon: "/icons/elasticsearch.svg" },
        { name: "DynamoDB", icon: "/icons/dynamodb.svg" },
      ],
    },
    {
      name: "DevOps & Cloud",
      technologies: [
        { name: "AWS", icon: "/icons/aws.svg" },
        { name: "Azure", icon: "/icons/azure.svg" },
        { name: "Google Cloud", icon: "/icons/gcp.svg" },
        { name: "Docker", icon: "/icons/docker.svg" },
        { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
        { name: "Terraform", icon: "/icons/terraform.svg" },
      ],
    },
  ];

  // For the 3D icon cloud
  const cloudItems = [
    { id: 1, name: "React", url: "#", icon: "/icons/react.svg" },
    { id: 2, name: "Next.js", url: "#", icon: "/icons/nextjs.svg" },
    { id: 3, name: "Node.js", url: "#", icon: "/icons/nodejs.svg" },
    { id: 4, name: "Python", url: "#", icon: "/icons/python.svg" },
    { id: 5, name: "AWS", url: "#", icon: "/icons/aws.svg" },
    { id: 6, name: "Azure", url: "#", icon: "/icons/azure.svg" },
    { id: 7, name: "Docker", url: "#", icon: "/icons/docker.svg" },
    { id: 8, name: "Kubernetes", url: "#", icon: "/icons/kubernetes.svg" },
    { id: 9, name: "TypeScript", url: "#", icon: "/icons/typescript.svg" },
    { id: 10, name: "MongoDB", url: "#", icon: "/icons/mongodb.svg" },
    { id: 11, name: "PostgreSQL", url: "#", icon: "/icons/postgresql.svg" },
    { id: 12, name: "GraphQL", url: "#", icon: "/icons/graphql.svg" },
    { id: 13, name: "TensorFlow", url: "#", icon: "/icons/tensorflow.svg" },
    { id: 14, name: "Java", url: "#", icon: "/icons/java.svg" },
    { id: 15, name: "Go", url: "#", icon: "/icons/go.svg" },
  ];

  return (
    <section
      id="tech-stack"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            <TextReveal>Our Technology Stack</TextReveal>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            We leverage cutting-edge technologies to build scalable, secure, and
            high-performance solutions.
          </p>
        </div>

        <div className="mb-16 h-64 md:h-80">
          <IconCloud
            items={cloudItems}
            options={{
              depth: 1.5,
              imageScale: 2,
              initialVelocityX: 0.1,
              initialVelocityY: 0.1,
              dragControl: true,
            }}
          />
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md h-full">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                  {category.name}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-full mb-2 p-2">
                        {tech.icon && (
                          <div className="relative w-8 h-8 flex items-center justify-center">
                            <img
                              src={tech.icon}
                              alt={`${tech.name} icon`}
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-center text-slate-700 dark:text-slate-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
