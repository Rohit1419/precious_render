"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

interface AnimatedSubscribeButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  defaultLabel?: string;
  loadingLabel?: string;
  submittedLabel?: string;
  isSubmitting?: boolean;
  isSubmitted?: boolean;
}

export function AnimatedSubscribeButton({
  onClick,
  children,
  className = "",
  defaultLabel = "Subscribe",
  loadingLabel = "Subscribing...",
  submittedLabel = "Subscribed!",
  isSubmitting = false,
  isSubmitted = false,
}: AnimatedSubscribeButtonProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
    "idle"
  );

  useEffect(() => {
    if (isSubmitting) {
      setStatus("submitting");
    } else if (isSubmitted) {
      setStatus("submitted");
    } else {
      setStatus("idle");
    }
  }, [isSubmitting, isSubmitted]);

  const handleClick = () => {
    if (status === "idle" && onClick) {
      onClick();
      setStatus("submitting");

      // Simulate submission if not controlled externally
      if (!isSubmitting && !isSubmitted) {
        setTimeout(() => {
          setStatus("submitted");

          // Reset after 3 seconds
          setTimeout(() => {
            setStatus("idle");
          }, 3000);
        }, 1500);
      }
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={status !== "idle"}
      className={`relative overflow-hidden ${className}`}
      whileHover={status === "idle" ? { scale: 1.02 } : {}}
      whileTap={status === "idle" ? { scale: 0.98 } : {}}
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center"
          >
            {children || defaultLabel}
          </motion.span>
        )}

        {status === "submitting" && (
          <motion.span
            key="submitting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center"
          >
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
            {loadingLabel}
          </motion.span>
        )}

        {status === "submitted" && (
          <motion.span
            key="submitted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center text-green-500"
          >
            <Check className="mr-2 h-4 w-4" />
            {submittedLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
