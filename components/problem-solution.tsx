"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Hourglass, FlaskConical, BarChart3, Layers, AlertCircle, DollarSign, Package, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
import { CompareSlider } from "@/components/ui/compare-slider";
import { TextAnimate } from "@/components/ui/text-animate";

export default function ProblemSolution() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-neutral-950">
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

                {/* Pain Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {/* Pain Point 1 */}
                    <MagicCard className="p-8 rounded-2xl border-t-4 border-red-500 bg-red-50/50 dark:bg-red-900/10 h-full">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center mb-4 text-red-600 dark:text-red-400">
                                <DollarSign className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-bold">High Upfront Costs</h3>
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300 mb-6 flex-grow">
                                Manufacturing 1000 jewelry pieces costs ₹50L-₹2Cr before your first sale. That capital is locked in metal and stones.
                            </p>
                            <div className="flex items-start text-red-600 dark:text-red-400 font-medium text-sm mt-auto">
                                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                                <span>Risk: Unsold inventory becomes dead capital</span>
                            </div>
                        </div>
                    </MagicCard>

                    {/* Pain Point 2 */}
                    <MagicCard className="p-8 rounded-2xl border-t-4 border-red-500 bg-red-50/50 dark:bg-red-900/10 h-full">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center mb-4 text-red-600 dark:text-red-400">
                                <Package className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-bold">Storage & Insurance</h3>
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300 mb-6 flex-grow">
                                Storing finished inventory requires security and insurance cost-adding ₹2-5L annually to your overhead.
                            </p>
                            <div className="flex items-start text-red-600 dark:text-red-400 font-medium text-sm mt-auto">
                                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                                <span>Risk: Theft, damage, or degradation of precious materials</span>
                            </div>
                        </div>
                    </MagicCard>

                    {/* Pain Point 3 */}
                    <MagicCard className="p-8 rounded-2xl border-t-4 border-red-500 bg-red-50/50 dark:bg-red-900/10 h-full">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center mb-4 text-red-600 dark:text-red-400">
                                <Clock className="w-8 h-8 mr-3" />
                                <h3 className="text-xl font-bold">Slow Market Response</h3>
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300 mb-6 flex-grow">
                                Spotted a trending design on Instagram? By the time you manufacture 500 pieces, the trend has moved on.
                            </p>
                            <div className="flex items-start text-red-600 dark:text-red-400 font-medium text-sm mt-auto">
                                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                                <span>Risk: Overproduction of unpopular designs</span>
                            </div>
                        </div>
                    </MagicCard>
                </div>

                {/* The Smart Way */}
                <div className="mb-24 relative">
                    <div className="absolute inset-0 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-3xl -z-10 transform -rotate-1"></div>
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 p-8 md:p-12 shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="max-w-3xl mx-auto mb-10">
                                <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-semibold text-sm mb-6">
                                    The Virtual Inventory Revolution
                                </div>
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                                        <Layers className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white text-left">
                                        From CAD to Catalog - Without Stock
                                    </h2>
                                </div>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                    What if you could showcase 1000+ jewelry designs to customers without manufacturing a single piece? With photorealistic 3D rendering, your entire catalog exists digitally-ready to be produced only when customers place orders.
                                </p>
                            </div>

                            <div className="w-full max-w-5xl mx-auto h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-10">
                                <CompareSlider
                                    beforeImage="/before.png"
                                    afterImage="/after.png"
                                    beforeLabel="CAD"
                                    afterLabel="Render"
                                    className="h-full w-full"
                                />
                            </div>

                            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-emerald-500/20">
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {/* Benefit 1 */}
                    <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors group">
                        <div className="flex items-center gap-3 mb-4 flex-nowrap">
                            <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white min-w-0">Infinite Showcase</h3>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Display 5000 designs on your website using 360° renders and videos-customers see every detail as if the piece was already made.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors group">
                        <div className="flex items-center gap-3 mb-4 flex-nowrap">
                            <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white min-w-0">Zero Capital Lock-In</h3>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Instead of investing ₹50L in inventory, spend ₹2-5L on renders. Manufacture only confirmed orders. Save 70-90% upfront costs.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors group">
                        <div className="flex items-center gap-3 mb-4 flex-nowrap">
                            <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <FlaskConical className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white min-w-0">Test Before Manufacturing</h3>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Launch new collections virtually. Track engagement and pre-orders. Manufacture only winning designs based on real customer interest.
                        </p>
                    </div>
                </div>

                {/* Case Study */}
                <div className="mb-24 max-w-5xl mx-auto">
                    <ShineBorder className="rounded-2xl p-1 bg-white dark:bg-neutral-900" shineColor={["#10b981", "#06b6d4"]}>
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 md:p-12 rounded-xl">
                            <div className="flex flex-col md:flex-row gap-10 items-center">
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">Real Results</div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
                                        Mumbai Jeweler Cuts Inventory by 80%
                                    </h3>
                                    <blockquote className="text-lg italic text-neutral-700 dark:text-neutral-300 mb-6 border-l-4 border-emerald-500 pl-4">
                                        &quot;We used to manufacture 500 pieces per collection and pray they&apos;d sell. Now we render 2000 designs, customers pre-order their favorites, and we manufacture on-demand. Our working capital freed up by ₹45 lakhs.&quot;
                                    </blockquote>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700 mr-3"></div>
                                        <div>
                                            <div className="font-bold text-neutral-900 dark:text-white">Rajesh Sharma</div>
                                            <div className="text-sm text-neutral-500">Diamond Palace</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 w-full md:w-auto min-w-[300px]">
                                    <ul className="space-y-4">
                                        <li className="flex items-center text-neutral-700 dark:text-neutral-300 font-medium">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                                            80% reduction in inventory costs
                                        </li>
                                        <li className="flex items-center text-neutral-700 dark:text-neutral-300 font-medium">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                                            300% increase in design variety
                                        </li>
                                        <li className="flex items-center text-neutral-700 dark:text-neutral-300 font-medium">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                                            28-day faster time-to-market
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ShineBorder>
                </div>

                {/* Process Comparison */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">The Process Comparison</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Traditional Model */}
                        <div className="bg-red-50/30 dark:bg-red-900/10 rounded-2xl p-8 border border-red-100 dark:border-red-900/20">
                            <h3 className="text-2xl font-bold mb-6 text-red-700 dark:text-red-400 text-center">Traditional Model</h3>
                            <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-8 overflow-hidden relative">
                                <Image
                                    src="/images/image%20(4).png"
                                    alt="Traditional jewelry showcase with physical inventory"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 text-sm font-bold flex items-center justify-center mr-3">1</span>
                                    Design 50 pieces
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 text-sm font-bold flex items-center justify-center mr-3">2</span>
                                    Manufacture all upfront (₹50L)
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 text-sm font-bold flex items-center justify-center mr-3">3</span>
                                    Store & insure inventory
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 text-sm font-bold flex items-center justify-center mr-3">4</span>
                                    Hope customers buy
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 text-sm font-bold flex items-center justify-center mr-3">5</span>
                                    Liquidate unsold stock at loss
                                </li>
                            </ul>
                            <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-800 dark:text-red-200 font-bold text-center">
                                Result: 30-40% unsold inventory
                            </div>
                        </div>

                        {/* Virtual Inventory Model */}
                        <div className="bg-emerald-50/30 dark:bg-emerald-900/10 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-900/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                            <h3 className="text-2xl font-bold mb-6 text-emerald-700 dark:text-emerald-400 text-center">Virtual Inventory Model</h3>
                            <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-8 overflow-hidden relative">
                                <Image
                                    src="/images/e61edaea-7a28-4ae4-9eac-33a58c09fcf9.png"
                                    alt="Digital virtual jewelry catalog on computer screen"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-sm font-bold flex items-center justify-center mr-3">1</span>
                                    Design 5000+ CAD files
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-sm font-bold flex items-center justify-center mr-3">2</span>
                                    Render photorealistic images (₹2.5L)
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-sm font-bold flex items-center justify-center mr-3">3</span>
                                    Upload to website/Instagram
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-sm font-bold flex items-center justify-center mr-3">4</span>
                                    Customers order specific designs
                                </li>
                                <li className="flex items-center text-neutral-700 dark:text-neutral-300">
                                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-sm font-bold flex items-center justify-center mr-3">5</span>
                                    Manufacture confirmed orders only
                                </li>
                            </ul>
                            <div className="mt-6 p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-800 dark:text-emerald-200 font-bold text-center">
                                Result: 0% unsold stock, 100% profit
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transition to Your Services */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">
                        Ready to Build Your<br />Virtual Jewelry Showroom?
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10">
                        We specialize in creating photorealistic 3D renders that look identical to finished jewelry-so realistic, customers can&apos;t tell the difference.
                        <br className="block mt-4" />
                        Here&apos;s how we help you transition to virtual inventory:
                    </p>
                    <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>

            </div>
        </section>
    );
}
