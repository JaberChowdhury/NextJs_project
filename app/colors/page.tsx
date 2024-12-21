import React from "react";
import Link from "next/link";
import ShinyButton from "@/ui/shiny-button";
import Colors from "@/components/Colors";

const page = async () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center my-5 gap-2">
        <Link href="/colors/dark">
          <ShinyButton className="border-2">Dark ColorS</ShinyButton>
        </Link>
        <Link href="/colors/light">
          <ShinyButton className="border-2">Light ColorS</ShinyButton>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center flex-wrap">
        <Colors />
      </div>
    </div>
  );
};

export default page;
