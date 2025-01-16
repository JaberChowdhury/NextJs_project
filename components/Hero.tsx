import React from "react";
import Flexbox from "./Flexbox";
import Image from "next/image";
import flower from "../assets/photos/pngwing 10.png";

const Hero = () => {
  return (
    <Flexbox className="bg-[#E55473]/[0.1] flex-wrap p-10">
      <div className="flex flex-col justify-between gap-y-7">
        <h1 className="text-[80px] font-bold w-[708px]">
          Let&apos;s make beautiful flowers a part of your life.
        </h1>
        <p className="text-lg w-[634px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <button className="text-xl w-[189px] py-5 px-[43px] bg-[#E55473] rounded-lg text-white">
          Shop Now
        </button>
      </div>
      <Image width={635} height={800} src={flower} className="hidden lg:block" alt="awesome flower" />
    </Flexbox>
  );
};

export default Hero;
