"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";
import type { SiteSettings } from "@/lib/sanity/types";

interface FooterProps {
  siteSettings?: SiteSettings | null;
}

export default function Footer({ siteSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Still Images", href: "#services" },
        { name: "360° Animations", href: "#services" },
        { name: "Marketing Videos", href: "#services" },
        { name: "On-Body Visuals", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Process", href: "#process" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ];

  const logoUrl = siteSettings?.logoUrl || "/Precious Render.png";
  const siteName = siteSettings?.siteName || "Precious Render";
  const siteDescription = siteSettings?.siteDescription || "Specializing in photorealistic jewelry renders, CAD-to-catalog workflows, and on-demand jewelry manufacturing support for brands worldwide";
  const contactEmail = siteSettings?.contactEmail || "contact@preciousrender.com";
  const contactPhone = siteSettings?.contactPhone || "+91 XXXXX-XXXXX";
  const address = siteSettings?.address || "Mumbai, Maharashtra, India";

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      href: siteSettings?.socialLinks?.instagram || "https://instagram.com/",
      name: "Instagram"
    },
    { 
      icon: <Linkedin size={20} />, 
      href: siteSettings?.socialLinks?.linkedin || "https://linkedin.com/",
      name: "LinkedIn"
    },
    { 
      icon: <MessageCircle size={20} />, 
      href: siteSettings?.socialLinks?.whatsapp || "https://whatsapp.com/",
      name: "WhatsApp"
    },
    { 
      icon: <Youtube size={20} />, 
      href: siteSettings?.socialLinks?.youtube || "https://youtube.com/",
      name: "YouTube"
    },
  ];

  return (
    <footer className="bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <div className="relative">
                <Image
                  src={logoUrl}
                  alt={`${siteName} Logo`}
                  width={320}
                  height={120}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-md">
              {siteDescription}
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-emerald-500" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-emerald-500" />
                <a
                  href={`tel:${contactPhone.replace(/\s/g, '')}`}
                  className="text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  {contactPhone}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-emerald-500" />
                <p className="text-neutral-600 dark:text-neutral-400">
                  {address}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 dark:text-neutral-500 text-sm">
            © {currentYear} {siteName}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${link.name} page`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}