"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextReveal({
  children,
  className = "",
  delay = 0.2,
  duration = 0.6,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
