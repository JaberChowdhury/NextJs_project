"use client";

import { motion } from "framer-motion";
import { Code, Trophy, Terminal, Zap } from "lucide-react";
import { floatingVariants } from "@/lib/motion";

const icons = [
  { Icon: Code, color: "var(--primary)", size: 32 },
  { Icon: Trophy, color: "var(--secondary)", size: 28 },
  { Icon: Terminal, color: "var(--accent)", size: 30 },
  { Icon: Zap, color: "var(--primary)", size: 26 },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, color, size }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            left: `${10 + index * 20}%`,
            top: `${15 + index * 15}%`,
          }}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          custom={index}
        >
          <Icon size={size} style={{ color }} strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Additional icons for density */}
      {icons.map(({ Icon, color, size }, index) => (
        <motion.div
          key={`second-${index}`}
          className="absolute opacity-10"
          style={{
            left: `${60 + index * 10}%`,
            top: `${60 + index * 8}%`,
          }}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          custom={index + 4}
        >
          <Icon size={size * 0.8} style={{ color }} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
