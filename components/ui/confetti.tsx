"use client";

import { useImperativeHandle, forwardRef } from "react";
import confetti from "canvas-confetti";

export interface ConfettiProps {
  className?: string;
  options?: {
    disableForReducedMotion?: boolean;
  };
}

export interface ConfettiRef {
  fire: (options?: confetti.Options) => void;
  fireCustom: (options?: CustomConfettiOptions) => void;
}

export interface CustomConfettiOptions extends confetti.Options {
  particleCount?: number;
  spread?: number;
  angle?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  drift?: number;
  ticks?: number;
  origin?: {
    x?: number;
    y?: number;
  };
  colors?: string[];
  shapes?: ("square" | "circle")[];
  scalar?: number;
  zIndex?: number;
  disableForReducedMotion?: boolean;
}

export const Confetti = forwardRef<ConfettiRef, ConfettiProps>((props, ref) => {
  const fire = (options?: confetti.Options) => {
    if (
      props.options?.disableForReducedMotion &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const defaultOptions = {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    };
    confetti({
      ...defaultOptions,
      ...options,
    });
  };

  const fireCustom = (options?: CustomConfettiOptions) => {
    if (
      props.options?.disableForReducedMotion &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const defaultOptions: CustomConfettiOptions = {
      particleCount: 50,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors: ["#10b981", "#3b82f6", "#8b5cf6", "#ef4444", "#f59e0b"],
      ticks: 100,
      gravity: 1.5,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["square", "circle"],
      scalar: 1,
    };

    confetti({
      ...defaultOptions,
      ...options,
    });
  };

  useImperativeHandle(ref, () => ({
    fire,
    fireCustom,
  }));

  return null;
});

Confetti.displayName = "Confetti";
