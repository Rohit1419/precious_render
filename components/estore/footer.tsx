"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react";

const EstoreFooter = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Stay up to date with our latest offers
              </h3>
              <p className="text-white/80">
                Subscribe to our newsletter and get 10% off your first purchase
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-white text-purple-600 font-medium px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/estore" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                STYLISH
              </span>
            </Link>

            <p className="text-slate-400 mb-6 max-w-md">
              Discover the latest trends in fashion with STYLISH. We bring you
              carefully curated collections that combine style, quality, and
              affordability.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-purple-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-purple-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-purple-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-purple-600 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              {["Men", "Women", "New Arrivals", "Accessories", "Sale"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/estore/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-slate-400 hover:text-purple-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              {[
                "FAQ",
                "Shipping & Returns",
                "Contact Us",
                "Track Order",
                "Store Locator",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/estore/support/${item
                      .toLowerCase()
                      .replace(/[&\s]/g, "-")}`}
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-purple-400 transition-colors flex items-start"
                >
                  <MapPin size={18} className="mr-3 flex-shrink-0 mt-1" />
                  <span>123 Fashion Street, New York, NY 10001, USA</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-slate-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <Phone size={18} className="mr-3 flex-shrink-0" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@stylish.com"
                  className="text-slate-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <Mail size={18} className="mr-3 flex-shrink-0" />
                  <span>hello@stylish.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="border-t border-slate-800 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-sm text-slate-500 mb-2">
                Accepted Payment Methods
              </div>
              <div className="flex space-x-4">
                <img src="/icons/visa.svg" alt="Visa" className="h-8" />
                <img
                  src="/icons/mastercard.svg"
                  alt="Mastercard"
                  className="h-8"
                />
                <img
                  src="/icons/amex.svg"
                  alt="American Express"
                  className="h-8"
                />
                <img src="/icons/paypal.svg" alt="PayPal" className="h-8" />
              </div>
            </div>
            <div className="text-sm text-slate-500">
              <div>© {currentYear} STYLISH. All rights reserved.</div>
              <div className="mt-1">
                <span className="inline-flex items-center">
                  Made by Precious Render Team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="border-t border-slate-800 pt-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <div className="mb-4 md:mb-0">
              <Link
                href="/estore/privacy-policy"
                className="hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="mx-2">•</span>
              <Link
                href="/estore/terms-of-service"
                className="hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </Link>
              <span className="mx-2">•</span>
              <Link
                href="/estore/accessibility"
                className="hover:text-purple-400 transition-colors"
              >
                Accessibility
              </Link>
            </div>
            <div>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Change Region
              </a>
              <span className="mx-2">•</span>
              <span>English / USD $</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EstoreFooter;
