"use client";
import React from "react";
import { HEXADECIMAL } from "@/lib/colorUtils/TYPES";
import { useQuery } from "@tanstack/react-query";
import { getColors } from "@/constant/colorsData";
import Card from "./custom/Card";
import Loader from "./custom/Loader";

const Colors = () => {
  const { data: colors, isLoading } = useQuery<HEXADECIMAL[]>({
    queryKey: ["colors"],
    queryFn: getColors,
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

export default Colors;
