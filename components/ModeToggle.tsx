"use client";

import {useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ModeToggle = () => {
  const { setTheme } = useTheme();
  const [on, setOn] = useState(true)
  
  const handleClick = () => {
    setOn(!on)
    setTheme(on ? "light" : "dark")
  }

  return (
    <Button onClick={handleClick}>
      {on ? <MoonIcon /> : <SunIcon />}
   </Button>
    );
};

export default ModeToggle;
