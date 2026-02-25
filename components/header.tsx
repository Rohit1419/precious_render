"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import type { SiteSettings } from "@/lib/sanity/types";

interface HeaderProps {
  data?: SiteSettings | null;
}

const DEFAULT_MENU_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ data }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = data?.navItems?.length ? data.navItems : DEFAULT_MENU_ITEMS;
  const logoSrc = data?.logoUrl ?? "/Precious Render.png";
  const siteName = data?.siteName ?? "Precious Render";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <div className="relative">
              <Image
                src={logoSrc}
                alt={`${siteName} Logo`}
                width={280}
                height={100}
                className="h-10 md:h-14 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
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
                  key={item.label}
                  href={item.href}
                  onClick={toggleMenu}
                  className="px-3 py-3 text-neutral-700 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </MagicCard>
        </motion.div>
      )}
    </header>
  );
}
