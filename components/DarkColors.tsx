import React from "react";
import Card from "./custom/Card";
import { useQuery } from "@tanstack/react-query";
import { getDarkColors } from "@/constant/colorsData";
import { HEXADECIMAL } from "@/lib/colorUtils/TYPES";
import { Loader } from "lucide-react";

const DarkColors = () => {
  const { data: colors, isLoading } = useQuery<HEXADECIMAL[]>({
    queryKey: ["darkcolors"],
    queryFn: getDarkColors,
  });

  if (isLoading) return <Loader />;

  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      {colors &&
        colors.map((data, id: number) => {
          return (
            <Card
              id={id}
              key={id}
              main={data.main.color}
              opposite={data.opposite.color}
            />
          );
        })}
    </div>
  );
};

export default DarkColors;
