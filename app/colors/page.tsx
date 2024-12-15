"use client";
import React from "react";
import utils from "@/lib/colorUtils/main";
import Card from "@/components/custom/Card";

const page = () => {
  const colorUtils = new utils();

  const colors = colorUtils.generateColors(100);

  return (
    <div className="w-full min-h-screen flex justify-center items-center relative flex-wrap">
      {colors.map((data, id) => {
        return <Card key={id} />;
      })}
    </div>
  );
};

export default page;
