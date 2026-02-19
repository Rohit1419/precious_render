"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "40s";
      case "normal":
        return "60s";
      case "slow":
        return "80s";
      default:
        return "60s";
    }
  };

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    // Set up the scroller by duplicating items to ensure endless scroll
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });

    setStart(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative max-w-full overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: getSpeed(),
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-neutral-200 dark:border-neutral-800 px-8 py-6 md:w-[450px] bg-white dark:bg-neutral-950"
            key={idx}
          >
            <div className="relative h-full">
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {item.image && (
                  <div className="h-10 w-10 rounded-full overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
