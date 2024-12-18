"use client";
import React from "react";
import utils from "@/lib/colorUtils/main";
import Card from "@/components/custom/Card";

const page = () => {
  const colorUtils = new utils();

  const colors = colorUtils.generateColors(100);

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative flex-wrap">
      {colors.map((data, id: number) => {
        return <Card main="#123442" opposite="#534785" key={id} />;
      })}
    </div>
  );
};

export default page;
