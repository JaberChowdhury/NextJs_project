import React from "react";
import utils from "@/lib/colorUtils/main";
import Card from "@/components/custom/Card";
import Link from "next/link";
import ShinyButton from "@/ui/shiny-button";

const page = async () => {
  const colorUtils = new utils();
  const limit = 500;
  const colors = colorUtils.generateLightColorVariant(limit);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center my-5 gap-2">
        <Link href="/colors/dark">
          <ShinyButton className="border-2">Dark ColorS</ShinyButton>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center flex-wrap">
        {colors.map((data, id: number) => {
          return (
            <Link
              href={`/colors/info/${data.main.color.replace("#", "")}`}
              key={id}
            >
              <Card main={data.main.color} opposite={data.opposite.color} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
