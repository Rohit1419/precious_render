"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  MessageCircle,
  Mail,
  Heart,
} from "lucide-react";

export default function TaskMasterFooter() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Integrations", href: "#integrations" },
        { name: "Pricing", href: "#pricing" },
        { name: "Changelog", href: "#" },
        { name: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#blog" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Community", href: "#" },
        { name: "API Reference", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact us", href: "#contact" },
        { name: "Status", href: "#" },
        { name: "Security", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: <Twitter size={18} />, href: "#" },
    { name: "Facebook", icon: <Facebook size={18} />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "#" },
    { name: "Instagram", icon: <Instagram size={18} />, href: "#" },
    { name: "GitHub", icon: <Github size={18} />, href: "#" },
    { name: "YouTube", icon: <Youtube size={18} />, href: "#" },
  ];

  const contactMethods = [
    {
      name: "Chat with us",
      description: "Talk to our friendly team",
      icon: <MessageCircle className="h-5 w-5 text-indigo-500" />,
      href: "#",
    },
    {
      name: "Email us",
      description: "hello@taskmaster.com",
      icon: <Mail className="h-5 w-5 text-indigo-500" />,
      href: "mailto:hello@taskmaster.com",
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 flex items-center justify-center bg-indigo-600 text-white rounded-md mr-2">
                <span className="font-bold text-xl">TM</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
                TaskMaster
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              TaskMaster helps teams of all sizes streamline their workflows,
              improve collaboration, and deliver projects on time.
            </p>

            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <Link
                  key={i}
                  href={method.href}
                  className="flex items-start group"
                >
                  <div className="mr-3">{method.icon}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {method.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {method.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section, i) => (
            <div key={i} className="col-span-1 md:col-span-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center mb-2 md:mb-0">
                <span>Made by Precious Render Team</span>
              </div>
              <span className="hidden md:inline mx-2">•</span>
              <span>
                &copy; {new Date().getFullYear()} TaskMaster. All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
