"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children: React.ReactNode;
}

export const ShimmerButton = ({
  shimmerColor = "#ffffff",
  shimmerSize = "0.1em",
  shimmerDuration = "2s",
  borderRadius = "0.5rem",
  background = "linear-gradient(135deg, #ff5722 0%, #ff9800 100%)",
  className,
  children,
  ...props
}: ShimmerButtonProps) => {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--shimmer-duration": shimmerDuration,
          "--border-radius": borderRadius,
          "--button-background": background,
        } as React.CSSProperties
      }
      className={cn(
        "relative inline-flex h-10 items-center justify-center overflow-hidden whitespace-nowrap px-6 py-2 font-medium text-white",
        "before:absolute before:inset-0 before:bg-[var(--button-background)]",
        "after:absolute after:inset-0 after:-translate-x-full after:animate-[shimmer_var(--shimmer-duration)_infinite] after:bg-gradient-to-r after:from-transparent after:via-[var(--shimmer-color)] after:to-transparent after:opacity-30",
        "rounded-[var(--border-radius)]",
        "hover:shadow-md transition-shadow duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
