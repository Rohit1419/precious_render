"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TypingAnimationProps = {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
};

export const TypingAnimation = ({
  words,
  className = "",
  cursorClassName = "inline-block h-5 w-[3px] animate-blink bg-emerald-500",
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 1500,
}: TypingAnimationProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[wordIndex];

    if (!isDeleting && text === currentWord) {
      // Word completed, wait and then delete
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setIsBlinking(false);
      }, delayBetweenWords);
    } else if (isDeleting && text === "") {
      // Word deleted, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setIsBlinking(true);
    } else {
      // Calculate typing/deleting speed
      const speed = isDeleting ? deletingSpeed : typingSpeed;

      // Set timeout for next character update
      timeout = setTimeout(() => {
        setText((prev) => {
          if (isDeleting) {
            return prev.substring(0, prev.length - 1);
          } else {
            return currentWord.substring(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className={className}>
      {text}
      <motion.span
        className={cursorClassName}
        animate={{ opacity: isBlinking ? [0, 1] : 1 }}
        transition={{
          duration: 0.8,
          repeat: isBlinking ? Infinity : 0,
          repeatType: "reverse",
        }}
      />
    </span>
  );
};
