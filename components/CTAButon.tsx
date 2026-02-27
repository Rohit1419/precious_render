import { ArrowRight } from "lucide-react";
import React from "react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ href, children, className = "" }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 w-5 h-5" />
    </a>
  );
}