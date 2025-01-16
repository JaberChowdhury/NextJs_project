import React from "react";
import Flexbox from "./Flexbox";
import Image from "next/image";
import img1 from "../assets/photos/pngwing 8.png";
const Hotdeal = () => {
  return (
    <Flexbox className="justify-around bg-[#E55473]/[0.06]">
      <div className="flex flex-col items-center justify-center gap-y-10">
        <p className="text-4xl font-extrabold text-center">
          Hot Deal ! Sale Up To 25% <span className="text-red-600">off</span>
        </p>
        <p className="text-lg w-[594px] text-center text-[#272727]/[0.6] ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button className="text-xl w-[189px] py-5 px-[43px] bg-[#E55473] rounded-lg text-white">
          Sign Up
        </button>
      </div>
      <div>
        <Image width={310} height={428} src={img1} alt="url" />
      </div>
    </Flexbox>
  );
};

export default Hotdeal;
