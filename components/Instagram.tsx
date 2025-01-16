import React from "react";
import Flexbox from "./Flexbox";
import Image from "next/image";
import img1 from "../assets/photos/Flower 01.png";
import img2 from "../assets/photos/Rectangle 4.png";
import img3 from "../assets/photos/Rectangle 5.png";
import img4 from "../assets/photos/Rectangle 6.png";

const Instagram = () => {
  return (
    <Flexbox className="flex-col">
      <Flexbox className="text-center gap-y-8 flex-col">
        <p className="  text-4xl font-extrabold">Instagram</p>
        <p className="text-lg w-[594px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </Flexbox>
      <Flexbox className="justify-between my-6">
        <Image width={342} height={396} src={img1} alt="image" />
        <Image width={342} height={396} src={img2} alt="image" />
        <Image width={342} height={396} src={img3} alt="image" />
        <Image width={342} height={396} src={img4} alt="image" />
      </Flexbox>
    </Flexbox>
  );
};

export default Instagram;
