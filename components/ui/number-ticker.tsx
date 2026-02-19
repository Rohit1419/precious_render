"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface NumberTickerProps {
  value: number;
  duration?: number;
  easing?:
    | "linear"
    | "easeInQuad"
    | "easeOutQuad"
    | "easeInOutQuad"
    | "easeOutExpo";
  decimals?: number;
  className?: string;
}

export function NumberTicker({
  value,
  duration = 2,
  easing = "easeOutQuad",
  decimals = 1,
  className = "",
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Unused variable removed
    // const startTimestamp: number | null = null;
    const totalFrames = duration * 60; // Assuming 60fps
    let frame = 0;

    // Easing functions
    const easingFunctions = {
      linear: (t: number) => t,
      easeInQuad: (t: number) => t * t,
      easeOutQuad: (t: number) => t * (2 - t),
      easeInOutQuad: (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      easeOutExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    };

    const animate = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const easedProgress = easingFunctions[easing](progress);

      setDisplayValue(easedProgress * value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Cleanup if needed
    };
  }, [isInView, value, duration, easing]);

  return (
    <span ref={ref} className={className}>
      {displayValue.toFixed(decimals).replace(/\.0+$/, "")}
    </span>
  );
}
