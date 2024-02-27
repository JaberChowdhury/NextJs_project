"use client";
import { motion } from "framer-motion";

const BoxAnimation = () => {
  const data = "g".repeat(20).split("");

  return (
    <>
      {data.map((d: string, id: number) => (
        <motion.div
          key={id}
          className="absolute border-2 border-slate-800/50 z-[-1]"
          initial={{
            width: "0%",
            height: "0px",
            borderRadius: "50%",
            transform: "rotate(0deg)",
          }}
          animate={{
            width: "80%",
            borderRadius: "0%",
            height: "400px",
            transform: `rotate(${id * 18}deg)`,
            transition: { delay: 0.2 * id },
          }}
        />
      ))}
    </>
  );
};

export default BoxAnimation;
