"use client";

import { useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface NeonGradientCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string;
  intensity?: number;
}

export function NeonGradientCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.5)",
  borderRadius = "0.75rem",
  intensity = 0.15,
}: NeonGradientCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        borderRadius,
      }}
    >
      {/* Glow effect */}
      {isHovered && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${
              mousePosition.y
            }px, ${glowColor}, transparent ${intensity * 100}%)`,
            borderRadius,
            opacity: 0.8,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Border glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          borderRadius,
          boxShadow: isHovered ? `0 0 15px ${glowColor}` : "none",
          opacity: isHovered ? 0.7 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
