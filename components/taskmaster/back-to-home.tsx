"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackToHome() {
  return (
    <div className="fixed top-25 left-6 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
