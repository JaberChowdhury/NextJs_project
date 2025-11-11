"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 50,
}: TypewriterTextProps) {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0.3, delay },
      });

      // Simulate typewriter effect
      await controls.start((i) => ({
        opacity: 1,
        transition: {
          duration: speed / 1000,
          delay: i * (speed / 1000) + delay,
        },
      }));
    };

    sequence();
  }, [controls, delay, speed]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={controls}
      style={{ display: "inline-block" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          custom={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: i * 0.02 + delay,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
