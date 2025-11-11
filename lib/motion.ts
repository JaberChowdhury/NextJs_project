import { Variants } from "framer-motion";

// Page transition variants
export const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// Hero section variants
export const heroVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

export const textRevealVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Floating icons variants
export const floatingVariants: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: (custom: number) => ({
    opacity: [0, 0.15, 0.1],
    scale: [0, 1.2, 1],
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      opacity: { duration: 2, delay: custom * 0.3, ease: "easeInOut" },
      scale: { duration: 2, delay: custom * 0.3, ease: "easeInOut" },
      x: {
        duration: 20 + custom * 5,
        repeat: Infinity,
        ease: "linear",
        delay: custom * 0.5,
      },
      y: {
        duration: 15 + custom * 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom * 0.5,
        repeatType: "reverse",
      },
    },
  }),
};

// Stats counter variants
export const statItemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1 + 0.5,
      ease: "easeOut",
    },
  }),
};

// Code editor variants
export const codeEditorVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Tab animation
export const tabVariants: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Profile card variants
export const profileCardVariants: Variants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

// Section reveal variants
export const sectionVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Button hover variants
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

// ✅ Add slide variants for CodeExamples.tsx
export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 20 : -20,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -20 : 20,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.3 },
  }),
};
