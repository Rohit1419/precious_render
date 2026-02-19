"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface AnimatedBeamProps {
  className?: string;
  children?: React.ReactNode;
  beamColor?: string;
  beamOpacity?: number;
  beamClassName?: string;
  containerClassName?: string;
  size?: number;
  containerRef?: React.RefObject<HTMLDivElement | null>;
  fromRef?: React.RefObject<HTMLDivElement | null>;
  toRef?: React.RefObject<HTMLDivElement | null>;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  speed?: number;
  backgroundColor?: string;
}

export const AnimatedBeam = ({
  className,
  children,
  beamColor = "#10b981",
  beamOpacity = 0.4,
  beamClassName,
  containerClassName,
  size = 100,
  containerRef,
  fromRef,
  toRef,
  gradientStartColor,
  gradientStopColor,
  delay = 0,
  speed = 5,
  backgroundColor,
}: AnimatedBeamProps) => {
  const localContainerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [line, setLine] = useState<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    width: number;
    height: number;
    angle: number;
  } | null>(null);

  useEffect(() => {
    if (!localContainerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!localContainerRef.current) return;
      const rect = localContainerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!containerRef || !fromRef || !toRef) return;

    const updateLinePosition = () => {
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;

      if (!container || !from || !to) return;

      const containerRect = container.getBoundingClientRect();
      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
      const x2 = toRect.left + toRect.width / 2 - containerRect.left;
      const y2 = toRect.top + toRect.height / 2 - containerRect.top;

      const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

      setLine({
        x1,
        y1,
        x2,
        y2,
        width: length,
        height: 2,
        angle,
      });
    };

    window.addEventListener("resize", updateLinePosition);
    updateLinePosition();

    return () => {
      window.removeEventListener("resize", updateLinePosition);
    };
  }, [containerRef, fromRef, toRef]);

  if (!containerRef || !fromRef || !toRef) {
    return (
      <div
        ref={localContainerRef}
        className={cn("relative overflow-hidden", containerClassName)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div
          className={cn(
            "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0",
            beamClassName
          )}
          style={{
            background: `radial-gradient(${size}px circle at ${
              cursorPosition.x
            }px ${
              cursorPosition.y
            }px, ${beamColor} ${beamOpacity}, transparent ${beamOpacity * 2})`,
          }}
        />
        <div className={cn("relative z-10", className)}>{children}</div>
      </div>
    );
  }

  return (
    <>
      {line && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay, duration: 0.5 }}
        >
          <div
            style={{
              position: "absolute",
              top: line.y1,
              left: line.x1,
              width: line.width,
              height: line.height,
              transformOrigin: "0 0",
              transform: `rotate(${line.angle}deg)`,
              background:
                gradientStartColor && gradientStopColor
                  ? `linear-gradient(90deg, ${gradientStartColor}, ${gradientStopColor})`
                  : beamColor,
              opacity: 0.4,
            }}
          />
        </motion.div>
      )}
    </>
  );
};
