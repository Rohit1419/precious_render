"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollProgressProps {
  color?: string;
  height?: number;
  position?: "top" | "bottom";
  easing?: number;
  zIndex?: number;
}

export function ScrollProgress({
  color = "#10b981",
  height = 4,
  position = "top",
  easing = 0.5,
  zIndex = 50,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.01);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed left-0 right-0 origin-left"
      style={{
        top: position === "top" ? 0 : "auto",
        bottom: position === "bottom" ? 0 : "auto",
        height,
        backgroundColor: color,
        scaleX,
        opacity: isVisible ? 1 : 0,
        zIndex,
        transformOrigin: "left",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
