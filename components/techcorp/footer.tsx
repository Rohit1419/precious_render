"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  ArrowUp,
} from "lucide-react";

export default function TechCorpFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 flex items-center justify-center bg-blue-600 text-white rounded-md mr-2">
                  <span className="font-bold text-xl">T</span>
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                  TechCorp
                </span>
              </div>

              <p className="text-slate-400 mb-6">
                We build scalable, secure technology solutions for enterprises
                worldwide. Our expertise spans custom software, AI integration,
                and cloud services.
              </p>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#home"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Enterprise Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Cloud & DevOps
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Mobile Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-slate-400">1234 Tech Avenue, Suite 500</li>
                <li className="text-slate-400">San Francisco, CA 94105</li>
                <li className="text-slate-400">United States</li>
                <li>
                  <a
                    href="mailto:info@techcorp.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    info@techcorp.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+11234567890"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TechCorp. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-24 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
