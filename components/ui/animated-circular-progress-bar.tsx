"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimatedCircularProgressBarProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function AnimatedCircularProgressBar({
  value,
  size = 100,
  strokeWidth = 10,
  color = "#3b82f6",
  bgColor = "#e5e7eb",
  duration = 1.5,
  delay = 0.2,
  className = "",
}: AnimatedCircularProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Center position
  const center = size / 2;

  useEffect(() => {
    if (isInView) {
      // Animate the progress value
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / (duration * 1000), 1);

        setProgress(value * progress);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      // Start the animation after delay
      const timer = setTimeout(() => {
        window.requestAnimationFrame(step);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, duration, delay]);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background circle */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="rotate-[-90deg]"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={strokeWidth}
          className="opacity-20"
        />

        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference.toString()}
          strokeDashoffset={strokeDashoffset.toString()}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.1s ease",
          }}
        />
      </svg>

      {/* Display percentage in the middle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-slate-900 dark:text-white">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
