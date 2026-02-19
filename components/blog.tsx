"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

export default function Blog() {
    const posts = [
        {
            title: "Complete Guide: Virtual Jewelry Inventory for Modern Jewelers",
            category: "Guide",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "CAD to Catalog: How to Launch 1000 Designs Without Manufacturing",
            category: "Workflow",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Reduce Jewelry Inventory Costs by 70%: Case Study",
            category: "Case Study",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "On-Demand Jewelry Manufacturing: The Future of Jewelry Business",
            category: "Industry",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop",
        },
        {
            title: "Zero-Stock Jewelry Business Model: Implementation Guide",
            category: "Strategy",
            readTime: "12 min read",
            image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2087&auto=format&fit=crop",
        },
        {
            title: "Best 3D Rendering for E-commerce Jewelry Stores",
            category: "Technology",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Photorealistic Jewelry Renders vs Photography: ROI Analysis",
            category: "Analysis",
            readTime: "9 min read",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop",
        },
    ];

    return (
        <section id="blog" className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
                        Latest Insights & Resources
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Expert guides, case studies, and industry trends to help you master the virtual jewelry business.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <MagicCard className="h-full overflow-hidden group cursor-pointer">
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-emerald-500 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium mt-4">
                                        Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </MagicCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
