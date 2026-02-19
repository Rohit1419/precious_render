"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MagicCardProps {
  children?: ReactNode;
  className?: string;
  spotlightSize?: number;
  spotlight?: boolean;
  spotlightColor?: string;
}

export const MagicCard = ({
  children,
  className,
  spotlightSize = 150,
  spotlight = false,
  spotlightColor = "rgba(120, 219, 178, 0.15)",
}: MagicCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const isMobile = useIsMobile();
  const showSpotlight = spotlight && !isMobile;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 transition-colors hover:border-neutral-300 dark:hover:border-neutral-700",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity: showSpotlight ? opacity : 0,
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
