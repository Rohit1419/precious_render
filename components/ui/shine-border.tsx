"use client";

import { useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ShineBorderProps {
  children: ReactNode;
  className?: string;
  borderRadius?: string;
  borderWidth?: string | number;
  borderColor?: string;
  shineBrightness?: number;
  shineWidth?: number;
  shineVelocity?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  duration?: number;
  isActive?: boolean;
  shineColor?: string | string[];
  containerClassName?: string;
  shimmerColor?: string;
}

export function ShineBorder({
  children,
  className = "",
  borderRadius = "0.5rem",
  borderWidth = "1px",
  borderColor = "rgba(147, 51, 234, 0.3)",
  shineBrightness = 0.8,
  shineWidth = 50,
  shineVelocity = 0.1,
  onMouseEnter,
  onMouseLeave,
  duration,
  isActive = false,
  shineColor,
  containerClassName,
  shimmerColor,
}: ShineBorderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  // Convert borderWidth to string if it's a number
  const borderWidthStr =
    typeof borderWidth === "number" ? `${borderWidth}px` : borderWidth;

  // If containerClassName is provided, wrap everything in a div with that class
  if (containerClassName) {
    return (
      <div className={containerClassName}>
        <div
          ref={containerRef}
          className={`relative ${className}`}
          style={{
            borderRadius,
            border: `${borderWidthStr} solid ${borderColor}`,
            overflow: "hidden",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Shine effect */}
          {(isHovered || isActive) && !isMobile && (
            <motion.div
              className="absolute pointer-events-none"
              animate={{
                x: [
                  mousePosition.x - shineWidth,
                  mousePosition.x + shineWidth * 2,
                ],
                y: [
                  mousePosition.y - shineWidth,
                  mousePosition.y + shineWidth * 2,
                ],
              }}
              transition={{
                duration: duration ? duration / 1000 : 1 / shineVelocity,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                width: `${shineWidth}px`,
                height: `${shineWidth * 2}px`,
                background: `radial-gradient(circle, ${shineColor ||
                  shimmerColor ||
                  `rgba(255, 255, 255, ${shineBrightness})`
                  } 0%, rgba(255, 255, 255, 0) 70%)`,
                borderRadius: "50%",
                filter: "blur(8px)",
                opacity: 0.8,
              }}
            />
          )}

          {/* Content */}
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        borderRadius,
        border: `${borderWidthStr} solid ${borderColor}`,
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shine effect */}
      {(isHovered || isActive) && !isMobile && (
        <motion.div
          className="absolute pointer-events-none"
          animate={{
            x: [mousePosition.x - shineWidth, mousePosition.x + shineWidth * 2],
            y: [mousePosition.y - shineWidth, mousePosition.y + shineWidth * 2],
          }}
          transition={{
            duration: duration ? duration / 1000 : 1 / shineVelocity,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            width: `${shineWidth}px`,
            height: `${shineWidth * 2}px`,
            background: `radial-gradient(circle, ${shineColor ||
              shimmerColor ||
              `rgba(255, 255, 255, ${shineBrightness})`
              } 0%, rgba(255, 255, 255, 0) 70%)`,
            borderRadius: "50%",
            filter: "blur(8px)",
            opacity: 0.8,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
