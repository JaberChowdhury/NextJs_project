"use client";
import { useTheme } from "next-themes";
import utils from "@/lib/colorUtils/main";
import { MagicCard } from "@/ui/magic-card";
import AnimatedCircularProgressBar from "@/ui/animated-circular-progress-bar";

type propsType = {
  main: string;
  opposite: string;
};

const ColorCode = ({ color }: { color: string }) => {
  return (
    <div className="w-full grid grid-cols-7 justify-center items-center">
      {color.split("").map((digit) => (
        <div className="border p-1 text-sm text-center">{digit}</div>
      ))}
    </div>
  );
};

function Card({ main, opposite }: propsType) {
  const { theme } = useTheme();
  const colorUtils = new utils(main);
  const lightness = colorUtils.generateHSL().main.l;

  return (
    <div className={"flex m-2 flex-col"}>
      <MagicCard
        className="min-w-40 min-h-40 p-2 flex justify-center items-center cursor-pointer relative overflow-hidden  shadow-2xl whitespace-nowrap text-xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <div className="w-40 flex justify-between items-center gap-x-4 relative">
          <div
            className="w-full h-9 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${main} 50%, ${opposite} 50%)`,
            }}
          ></div>
          <AnimatedCircularProgressBar
            value={100 - Math.round(lightness)}
            gaugePrimaryColor="#000000"
            gaugeSecondaryColor={opposite}
            className="size-14 text-xl"
          />
        </div>
        <ColorCode color={main} />
        <ColorCode color={opposite} />
      </MagicCard>
    </div>
  );
}
export default Card;
