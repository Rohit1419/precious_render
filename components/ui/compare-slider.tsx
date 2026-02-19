"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";

interface CompareSliderProps {
    beforeImage: string;
    afterImage: string;
    className?: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export const CompareSlider = ({
    beforeImage,
    afterImage,
    className,
    beforeLabel = "Before",
    afterLabel = "After",
}: CompareSliderProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback(
        (event: MouseEvent | TouchEvent) => {
            if (!isDragging || !containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const clientX =
                "touches" in event ? event.touches[0].clientX : event.clientX;

            const position =
                ((clientX - containerRect.left) / containerRect.width) * 100;

            setSliderPosition(Math.min(Math.max(position, 0), 100));
        },
        [isDragging]
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMove);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchmove", handleMove);
            window.addEventListener("touchend", handleMouseUp);
        } else {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("touchend", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [isDragging, handleMove, handleMouseUp]);

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full overflow-hidden select-none group cursor-ew-resize",
                className
            )}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
        >
            {/* After Image (Background) */}
            <div className="relative w-full h-full">
                <Image
                    src={afterImage}
                    alt="After"
                    fill
                    className="object-cover"
                    priority
                />
                {afterLabel && (
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium pointer-events-none z-10">
                        {afterLabel}
                    </div>
                )}
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div
                className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src={beforeImage}
                        alt="Before"
                        fill
                        className="object-cover"
                        priority
                    />
                    {beforeLabel && (
                        <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs font-medium pointer-events-none z-10">
                            {beforeLabel}
                        </div>
                    )}
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-neutral-800">
                    <GripVertical size={16} />
                </div>
            </div>
        </div>
    );
};
