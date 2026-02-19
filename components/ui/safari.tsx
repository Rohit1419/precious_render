"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SafariProps {
  url?: string;
  children: ReactNode;
  className?: string;
  tabClassName?: string;
}

export function Safari({
  url = "preciousrender.com",
  children,
  className,
  tabClassName,
}: SafariProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950",
        className
      )}
    >
      {/* Safari Header */}
      <header className="relative flex h-10 items-center justify-center border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 px-3">
        {/* Window Controls */}
        <div className="absolute left-3 flex space-x-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
          <div className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
          <div className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
        </div>

        {/* URL Bar */}
        <div
          className={cn(
            "flex h-6 w-80 items-center justify-center rounded-md bg-neutral-200 dark:bg-neutral-700 text-xs text-neutral-500 dark:text-neutral-400 px-2",
            tabClassName
          )}
        >
          {url}
        </div>
      </header>

      {/* Content */}
      <div className="overflow-auto">{children}</div>
    </div>
  );
}
