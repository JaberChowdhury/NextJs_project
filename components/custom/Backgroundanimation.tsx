"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/ui/particles";
import colorutils from "@/lib/colorUtils/main";

type propsType = {
  component?: React.ReactNode;
};

function ParticlesDemo({ component }: propsType) {
  const utils = new colorutils();

  const { resolvedTheme } = useTheme();
  const darkColor = utils.generateDarkColorVariant(1);
  const [color, setColor] = useState(darkColor[0].main.color);

  useEffect(() => {
    // setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    setColor(resolvedTheme === "dark" ? color : color);
  }, [resolvedTheme, color]);

  return (
    <div className=" flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      {component}
      <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}

export default ParticlesDemo;
