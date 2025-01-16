import React from "react";
import Flexbox from "./Flexbox";
import Image from "next/image";
import img from "../assets/photos/Rectangle 9.png";
const Latestdeal = () => {
  return (
    <Flexbox className="relative">
      <div className="absolute">
        <div className="text-center">
          <p className="font-extrabold text-4xl my-6">Get The Latest Deals</p>
          <p className="text-lg text-[#272727]/[0.6]">
            $30 coupon for first shopping
          </p>
        </div>
        <Flexbox className="gap-x-7 my-10">
          <input className="w-[700px] p-4 rounded" placeholder="Enter your email here" type="text" name="" id="" />
          <button className="text-xl w-[189px] py-3 px-[43px] bg-[#E55473] rounded-lg text-white">
            Subscribe
          </button>
        </Flexbox>
      </div>
      <Image width={1440} height={449} src={img} alt="bg image" />
    </Flexbox>
  );
};

export default Latestdeal;
