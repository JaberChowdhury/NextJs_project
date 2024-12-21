import React from "react";
import Link from "next/link";
import ShinyButton from "@/ui/shiny-button";
import DarkColors from "@/components/DarkColors";

const page = async () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center my-5 gap-2">
        <Link href="/colors/light">
          <ShinyButton className="border-2">Light ColorS</ShinyButton>
        </Link>
      </div>
      <div>
        <DarkColors />
      </div>
    </div>
  );
};

export default page;
