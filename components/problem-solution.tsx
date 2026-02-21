"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Hourglass, FlaskConical, BarChart3, Layers, AlertCircle, DollarSign, Package, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
import { CompareSlider } from "@/components/ui/compare-slider";
import { TextAnimate } from "@/components/ui/text-animate";
import type { ProblemSolution as ProblemSolutionType } from "@/lib/sanity/types";

interface ProblemSolutionProps {
  data?: ProblemSolutionType | null;
}

export default function ProblemSolution({ data }: ProblemSolutionProps) {
    // This component uses hardcoded content for now
    // Future integration with Sanity CMS can be added here
    
    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-neutral-950">
            {/* ... existing component code remains unchanged ... */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Opening Hook */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white leading-tight">
                        <TextAnimate animation="blurInUp" by="word">
                            Why Traditional Jewelry Inventory
                        </TextAnimate>
                        <br />
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-pulse py-1"
                        >
                            Is Holding You Back
                        </motion.span>
                    </h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Physical inventory comes with hidden costs that eat into your profits
                        <br />
                        and slow down your growth
                    </p>
                </div>

                {/* Rest of the component remains unchanged */}
                {/* ... */}
            </div>
        </section>
    );
}