"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FoodFastFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Delivery Areas", href: "#" },
        { name: "Delivery Times", href: "#" },
        { name: "Order Tracking", href: "#" },
        { name: "Restaurant Partners", href: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Customer Support", href: "#support" },
        { name: "FAQs", href: "#" },
        { name: "Contact Us", href: "#support" },
        { name: "Payment Methods", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookies Policy", href: "#" },
        { name: "Accessibility", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center mb-6">
              <div className="relative h-10 w-10 flex items-center justify-center bg-orange-500 text-white rounded-full mr-2">
                <span className="font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
                FoodFast
              </span>
            </Link>
            <p className="mb-6 text-slate-400">
              Delicious food delivered fast to your doorstep. Order from your
              favorite restaurants and enjoy hot meals in minutes.
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram", "tiktok"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium text-white mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-sm text-slate-400">
            <p>© {currentYear} FoodFast. All rights reserved.</p>
            <p className="mt-2">
              Designed by Precious Render Team for food lovers everywhere.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <img
              src="/images/foodfast/payment-visa.svg"
              alt="Visa"
              className="h-8 w-auto bg-white rounded p-1"
            />
            <img
              src="/images/foodfast/payment-mastercard.svg"
              alt="Mastercard"
              className="h-8 w-auto bg-white rounded p-1"
            />
            <img
              src="/images/foodfast/payment-amex.svg"
              alt="American Express"
              className="h-8 w-auto bg-white rounded p-1"
            />
            <img
              src="/images/foodfast/payment-paypal.svg"
              alt="PayPal"
              className="h-8 w-auto bg-white rounded p-1"
            />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between">
          <div>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Sitemap
            </Link>
            {" | "}
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Accessibility Statement
            </Link>
          </div>
          <div>
            <span>App v2.3.0 | Last Updated: October 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
