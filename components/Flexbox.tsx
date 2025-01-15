import { cn } from "@/lib/utils";
import React from "react";

interface propsType {
  className?: string;
  children: React.ReactNode;
}
const Flexbox = ({ className, children }: propsType) => {
  return (
    <div
      className={cn(
        "w-full flex justify-center items-center relative",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Flexbox;
