import React from "react";
import utils from "@/lib/colorUtils/main";
import Card from "@/components/custom/Card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Codehighlighter from "@/components/custom/ColorHighlight";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

const page = async () => {
  const colorUtils = new utils();
  const colors = colorUtils.generateColors(10);

  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      {colors.map((data, id: number) => {
        return (
          <HoverCard key={id}>
            <HoverCardTrigger>
              <Card main={data.main.color} opposite={data.opposite.color} />
            </HoverCardTrigger>
            <HoverCardContent>
              <Codehighlighter code={JSON.stringify(data, null, 2)} />
              <InteractiveHoverButton text="More" />
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </div>
  );
};

export default page;
