"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { statItemVariants, sectionVariants } from "@/lib/motion"; // Added sectionVariants

interface StatItem {
  label: string;
  target: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedStats({ stats }: { stats: StatItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [values, setValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const durations = stats.map(() => 2 + Math.random() * 0.5);
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = (currentTime - startTime) / 1000;
        const newValues = stats.map((stat, index) => {
          const progress = Math.min(elapsed / durations[index], 1);
          // Ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          return Math.floor(stat.target * eased);
        });

        setValues(newValues);

        if (elapsed < Math.max(...durations)) {
          requestAnimationFrame(animate);
        } else {
          setValues(stats.map((stat) => stat.target));
        }
      };

      requestAnimationFrame(animate);
      controls.start("animate");
    }
  }, [isInView, stats, controls]);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-3 gap-4 md:gap-8 mt-8"
      initial="initial"
      animate={controls}
      variants={sectionVariants}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          variants={statItemVariants}
          custom={index}
        >
          <motion.div className="text-3xl md:text-4xl font-bold text-primary font-mono">
            {stat.prefix || ""}
            {values[index].toLocaleString()}
            {stat.suffix || ""}
          </motion.div>
          <motion.div className="text-sm md:text-base text-muted-foreground mt-1">
            {stat.label}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
