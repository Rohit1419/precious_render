"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  className?: string;
  title: string;
  description: string;
  header?: ReactNode;
  icon?: ReactNode;
  col?: number;
  row?: number;
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  col,
  row,
  ...props
}: BentoGridItemProps & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-neutral-200 dark:border-neutral-800",
        className,
        col && `md:col-span-${col}`,
        row && `md:row-span-${row}`
      )}
      {...props}
    >
      <div className="flex items-start">
        {icon && (
          <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50">
            {icon}
          </div>
        )}
        <div>
          <div className="flex items-center justify-between">
            <p className="text-neutral-600 dark:text-neutral-200 font-medium mb-1">
              {title}
            </p>
          </div>
          <p className="text-neutral-500 text-sm">{description}</p>
        </div>
      </div>
      {header && <div className="mt-4">{header}</div>}
    </motion.div>
  );
}
