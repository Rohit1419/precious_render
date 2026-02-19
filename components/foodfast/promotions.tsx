"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const promoOffers = [
  {
    id: 1,
    title: "20% Off Your First Order",
    code: "WELCOME20",
    description: "Valid for new customers. Min. order $15.",
    expiryDate: "Valid until Dec 31, 2025",
    bgColor: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    title: "Free Delivery",
    code: "FREEDEL",
    description: "Free delivery on orders over $25.",
    expiryDate: "No expiration date",
    bgColor: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free",
    code: "BOGO2025",
    description: "On selected items. See menu for details.",
    expiryDate: "Valid until Nov 30, 2025",
    bgColor: "from-green-500 to-emerald-500",
  },
];

export default function FoodFastPromotions() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);

    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <section
      id="offers"
      className="py-16 md:py-24 bg-orange-50/50 dark:bg-slate-900/50 relative"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-500">
            Special Offers & Discounts
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Take advantage of our exclusive deals and save on your favorite food
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promoOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden shadow-lg relative group`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${offer.bgColor} opacity-90`}
              ></div>

              <div className="relative p-6 text-white h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="mb-4">{offer.description}</p>

                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white/20 px-3 py-2 rounded font-mono text-lg font-bold">
                      {offer.code}
                    </div>
                    <button
                      onClick={() => handleCopyCode(offer.code)}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded transition-colors"
                    >
                      {copiedCode === offer.code ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm opacity-80">{offer.expiryDate}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured promotion banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Limited Time Offer
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                Weekday Special: 30% Off Entire Order
              </h3>
              <p className="mb-6 text-slate-700 dark:text-slate-300">
                Order Monday through Thursday between 2-5pm and get 30% off your
                entire order. Perfect for late lunch or early dinner!
              </p>

              <div className="flex gap-4 flex-wrap">
                <ShimmerButton>
                  <span className="font-medium px-4">Get WEEKDAY30 Code</span>
                </ShimmerButton>
                <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg transition-colors font-medium">
                  View Details
                </button>
              </div>
            </div>
            <div className="bg-orange-100 dark:bg-slate-700 flex items-center justify-center p-8">
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-bold text-orange-500">
                  30% OFF
                </div>
                <svg
                  className="animate-spin-slow"
                  viewBox="0 0 100 100"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M 50 50 m -40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeDasharray="1 8"
                    className="text-orange-300 dark:text-orange-700"
                  ></path>
                  <path
                    d="M 50 50 m -35 0 a 35 35 0 1 0 70 0 a 35 35 0 1 0 -70 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeDasharray="1 8"
                    className="text-orange-400 dark:text-orange-600"
                    strokeDashoffset="20"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
