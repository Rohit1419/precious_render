"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface CloudItem {
  id: number;
  name: string;
  url: string;
  icon?: string;
}

interface IconCloudOptions {
  radius?: number;
  maxSpeed?: number;
  initSpeed?: number;
  direction?: number;
  keep?: boolean;
  depth?: number;
  imageScale?: number;
  initialVelocityX?: number;
  initialVelocityY?: number;
  dragControl?: boolean;
}

interface IconCloudProps {
  items: CloudItem[];
  options?: IconCloudOptions;
  className?: string;
}

export function IconCloud({
  items,
  options = {},
  className = "",
}: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Default options
  const defaultOptions: IconCloudOptions = {
    radius: 300,
    maxSpeed: 0.05,
    initSpeed: 0.05,
    direction: 135,
    keep: true,
    depth: 0.5,
    imageScale: 1,
    initialVelocityX: 0.05,
    initialVelocityY: 0.05,
    dragControl: false,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    if (!containerRef.current) return;

    // This is a simplified version since we can't include the actual TagCloud library
    // In a real implementation, you would use a library like TagCloud

    const container = containerRef.current;
    const tags = Array.from(container.querySelectorAll(".tag-item"));

    // Position tags randomly in 3D space
    tags.forEach((tag) => {
      const element = tag as HTMLElement;
      const randomX = Math.random() * 400 - 200;
      const randomY = Math.random() * 400 - 200;
      const randomZ = Math.random() * 400 - 200;
      const scale = 0.8 + Math.random() * 0.4;

      element.style.transform = `translate3d(${randomX}px, ${randomY}px, ${randomZ}px) scale(${scale})`;
      element.style.opacity = (0.7 + Math.random() * 0.3).toString();
    });

    // Animate tags
    let animationFrame: number;
    let angle = 0;

    const animate = () => {
      angle += 0.002;

      tags.forEach((tag, index) => {
        const element = tag as HTMLElement;
        const radius = 150 + Math.sin(index) * 50;
        const tagAngle = angle + index * ((Math.PI * 2) / tags.length);

        const x = radius * Math.cos(tagAngle);
        const y = radius * Math.sin(tagAngle) * 0.5; // Flatten the y-axis for a more elliptical orbit
        const z = 50 * Math.sin(tagAngle * 2); // Add some z-axis variation

        const scale = 0.8 + (0.2 * (z + 50)) / 100; // Scale based on z position
        const opacity = 0.7 + (0.3 * (z + 50)) / 100; // Opacity based on z position

        element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
        element.style.opacity = opacity.toString();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [items]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="tag-item absolute text-slate-700 dark:text-slate-300 font-medium px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            style={{
              willChange: "transform, opacity",
              position: "absolute",
              transformStyle: "preserve-3d",
            }}
          >
            {item.icon && (
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="w-5 h-5 object-contain"
              />
            )}
            {item.name}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
