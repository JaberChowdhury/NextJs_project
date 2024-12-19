import React from "react";
import utils from "@/lib/colorUtils/main";
import Card from "@/components/custom/Card";
import Link from "next/link";
import ShinyButton from "@/ui/shiny-button";

const page = async () => {
  const colorUtils = new utils();
  const colors = colorUtils.generateColors(50);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center my-5 gap-2">
        <Link href="/colors/dark">
          <ShinyButton className="border-2">Dark ColorS</ShinyButton>
        </Link>{" "}
        <Link href="/colors/light">
          <ShinyButton className="border-2">Light ColorS</ShinyButton>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center flex-wrap">
        {colors.map((data, id: number) => {
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
    </div>
  );
};

export default page;
