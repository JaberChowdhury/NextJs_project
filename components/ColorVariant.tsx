import Utils from "@/lib/colorUtils/main";
import React from "react";
import Card from "./custom/Card";

const ColorVariant = async ({ color }: { color: string }) => {
  const colorUtils = new Utils("#" + color);
  const data = colorUtils.getColor();
  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      {data.variant.map((colorVariant, id) => (
        <Card
          key={id}
          id={id}
          main={colorVariant.main.color}
          opposite={colorVariant.opposite.color}
        />
      ))}
    </div>
  );
};

export default ColorVariant;
