"use client";

import useStore from "@/store/store";
import React from "react";
import { Button } from "./ui/button";

const Model = () => {
  const { data, isOpen, setOpen } = useStore();

  return (
    <div
      style={{
        display: isOpen ? "flex" : "none",
      }}
      className=" fixed top-0 w-screen bg-slate-400/[0.4] min-h-screen flex justify-center items-center z-10"
    >
      <div className="w-[70%] h-80 p-3 flex justify-center items-center flex-col bg-teal-500">
        {data}
        <Button onClick={setOpen}>close</Button>
      </div>
    </div>
  );
};

export default Model;
