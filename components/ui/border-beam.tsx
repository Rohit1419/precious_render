"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface BorderBeamProps {
  className?: string;
  containerClassName?: string;
  duration?: number;
  size?: number;
  delay?: number;
  children?: React.ReactNode;
  as?: React.ElementType;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam = React.forwardRef<HTMLDivElement, BorderBeamProps>(
  (
    {
      className,
      containerClassName,
      children,
      duration = 2.5,
      delay = 0,
      size = 100,
      as: Component = "div",
      borderWidth = 1,
      colorFrom = "theme(colors.emerald.500)",
      colorTo = "transparent",
      ...props
    },
    ref
  ) => {
    const borderRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (!borderRef.current) return;
      const handleMouseMove = (e: MouseEvent) => {
        if (!isHovered) return;
        const rect = borderRef.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        borderRef.current!.style.setProperty("--x", `${x}px`);
        borderRef.current!.style.setProperty("--y", `${y}px`);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [isHovered]);

    return (
      <div
        className={cn(
          "relative p-[1px] overflow-hidden rounded-[--radius] [--radius:theme(borderRadius.md)] group/beam",
          containerClassName
        )}
        ref={borderRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={
          {
            "--duration": `${duration}s`,
            "--delay": `${delay}s`,
            "--size": `${size}px`,
            "--border-width": `${borderWidth}px`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            "absolute inset-0 overflow-hidden [mask:linear-gradient(white,transparent_50%)] z-0"
          )}
        >
          <div
            className={cn(
              "absolute top-[calc(var(--y)-var(--size)/2)] left-[calc(var(--x)-var(--size)/2)] h-[--size] w-[--size] opacity-0 group-hover/beam:opacity-100 transition-opacity duration-500 ease-in-out blur-sm"
            )}
            style={
              {
                "--x": "0px",
                "--y": "0px",
                background: `radial-gradient(var(--size) circle at center, var(--color-from, theme(colors.emerald.500)), var(--color-to, transparent) 50%)`,
              } as React.CSSProperties
            }
          />
        </div>
        <div
          className={cn(
            "absolute inset-[--border-width] rounded-[calc(var(--radius)-var(--border-width))] z-10 bg-neutral-950/60 backdrop-blur-xl"
          )}
        />
        <Component
          className={cn(
            "relative z-20 bg-transparent rounded-[--radius] text-neutral-200",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Component>
      </div>
    );
  }
);

BorderBeam.displayName = "BorderBeam";
