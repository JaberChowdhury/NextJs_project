"use client";
import { useTheme } from "next-themes";
import utils from "@/lib/colorUtils/main";
import { MagicCard } from "@/ui/magic-card";
import AnimatedCircularProgressBar from "@/ui/animated-circular-progress-bar";
import BlurFade from "../ui/blur-fade";
import Link from "next/link";
import { EllipsisVertical, Heart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type propsType = {
  main: string;
  opposite: string;
  id?: number;
};

const ColorCode = ({ color }: { color: string }) => {
  return (
    <div className="w-full grid grid-cols-7 justify-center items-center">
      {color.split("").map((digit, id) => (
        <div key={id} className="border p-1 text-sm text-center">
          {digit}
        </div>
      ))}
    </div>
  );
};

function Card({ main, opposite, id = 1 }: propsType) {
  const { theme } = useTheme();
  const colorUtils = new utils(main);
  const lightness = colorUtils.generateHSL().main.l;

  return (
    <div className="mx-2 my-2">
      <BlurFade delay={0.25 + (id / 5) * 0.05}>
        <MagicCard
          className="min-w-40 min-h-40 p-2 flex justify-center items-center cursor-pointer relative overflow-hidden  shadow-2xl whitespace-nowrap text-xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="w-full my-1 flex justify-between items-center ">
            <Heart />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Tools</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Add to Beaker</DropdownMenuItem>
                <DropdownMenuItem>Send to lab</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link
            href={`/colors/info/${main.replace("#", "")}`}
            className={"flex flex-col"}
          >
            <div className="w-40 flex justify-between items-center gap-x-4 relative">
              <div
                className="w-full h-9 rounded-full"
                style={{
                  background: `linear-gradient(45deg, ${main} 70%, ${opposite} 30%)`,
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
          </Link>
        </MagicCard>
      </BlurFade>
    </div>
  );
}
export default Card;
