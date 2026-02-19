"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
  Home,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EstoreHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  // Enhanced scroll handling for better UX
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide header based on scroll direction
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down - hide header
          setShowHeader(false);
        } else {
          // Scrolling up - show header
          setShowHeader(true);
        }
      } else {
        setShowHeader(true);
      }

      // Change header style when scrolled
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm"
          : "bg-white dark:bg-slate-900"
      } z-50 transition-all duration-300 ${
        showHeader ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        {/* Back to Home Button */}
        <div className="absolute left-4 md:left-8 top-4 z-10">
          <Link
            href="/"
            className="flex items-center text-sm font-medium py-2 px-3 md:px-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm transition-all"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="inline sm:hidden">Home</span>
          </Link>
        </div>

        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex justify-start md:justify-center">
            <Link href="/estore" className="flex items-center ml-14 md:ml-0">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                STYLISH
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Men", "Women", "New Arrivals", "Sale", "Blog", "About"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/estore/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium text-slate-700 hover:text-purple-600 dark:text-slate-200 dark:hover:text-purple-400 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
            <button
              aria-label="Search"
              className="p-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              <Search size={20} />
            </button>
            <button
              aria-label="Favorites"
              className="p-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors relative"
            >
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
            <button
              aria-label="Shopping Cart"
              className="p-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            <button
              aria-label="Account"
              className="p-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              <User size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              aria-label="Shopping Cart"
              className="p-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            <button
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
              className="p-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {["Men", "Women", "New Arrivals", "Sale", "Blog", "About"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`/estore/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-base font-medium text-slate-700 hover:text-purple-600 dark:text-slate-200 dark:hover:text-purple-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  )
                )}
              </nav>
              <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  aria-label="Search"
                  className="p-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
                >
                  <Search size={20} />
                </button>
                <button
                  aria-label="Favorites"
                  className="p-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors relative"
                >
                  <Heart size={20} />
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    2
                  </span>
                </button>
                <button
                  aria-label="Account"
                  className="p-2 text-slate-700 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
                >
                  <User size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
