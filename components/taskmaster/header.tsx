"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { TextReveal } from "@/components/ui/text-reveal";

export default function TaskMasterHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Integrations", href: "#integrations" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="#home" className="flex items-center">
            <div className="relative h-10 w-10 flex items-center justify-center bg-indigo-600 text-white rounded-md mr-2">
              <span className="font-bold text-xl">TM</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
              TaskMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              <Link
                href="#auth-login"
                className="px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                Log in
              </Link>

              <Link
                href="#auth-signup"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
              >
                Sign up free
              </Link>

              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <MagicCard className="rounded-none">
            <nav className="flex flex-col py-4 px-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="px-3 py-3 text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 mt-4 px-3">
                <Link
                  href="#auth-login"
                  onClick={toggleMenu}
                  className="px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-md text-center transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="#auth-signup"
                  onClick={toggleMenu}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors text-center"
                >
                  Sign up free
                </Link>
              </div>
            </nav>
          </MagicCard>
        </motion.div>
      )}
    </header>
  );
}
