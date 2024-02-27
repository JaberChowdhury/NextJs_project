"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { setTheme } = useTheme();
  const [on, setOn] = useState(true);

  const handleClick = () => {
    setOn(!on);
    setTheme(on ? "light" : "dark");
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: 0.5 },
      }}
    >
      <div onClick={handleClick}>{on ? <MoonIcon /> : <SunIcon />}</div>
    </motion.div>
  );
};

export default ModeToggle;
const PathTransition = () => {
  const path1 = "M0,0 L100,0 L100,100 L0,100 Z";
  const path2 = "M0,0 L50,0 L100,50 L50,100 L0,100 Z";

  return (
    <motion.svg width="100" height="100" viewBox="0 0 100 100">
      <motion.path
        d={path1}
        animate={{ d: path2 }}
        transition={{ duration: 1 }}
      />
    </motion.svg>
  );
};
