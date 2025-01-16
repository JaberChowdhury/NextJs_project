import React from "react";
import Flexbox from "./Flexbox";

const Footer = () => {
  return (
    <Flexbox className="flex-col bg-black text-white gap-y-8 text-center p-24">
      <p className=" font-extrabold text-5xl">
        <span className="text-[#E55473]">Flower</span>Shop
      </p>
      <p className="w-[625px] text-lg">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <p className="text-base text-white/[0.6]">@2020-2023, FlowerShop.com. All rights reserved.</p>
    </Flexbox>
  );
};

export default Footer;
