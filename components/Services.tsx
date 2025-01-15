import React from "react";
import Flexbox from "./Flexbox";
import Image from "next/image";
import img1 from "../assets/photos/Group 57.png";
import img2 from "../assets/photos/Group 58.png";
import img3 from "../assets/photos/Group 59.png";

const Services = () => {
  return (
    <div className="grid grid-cols-3 bg-[#272727]/[0.06] w-full p-20">
      <div className="flex justify-center items-center flex-col gap-y-6">
        <Image
          className="m-auto"
          width={88}
          height={88}
          src={img1}
          alt="img1"
        />
        <p className="text-center">Same Day Delivery. Click & Collect.</p>
      </div>
      <div className="flex justify-center items-center flex-col gap-y-6">
        <Image
          className="m-auto"
          width={88}
          height={88}
          src={img2}
          alt="img2"
        />
        <p className="text-center">Fresh Flowers. Local Growers.</p>
      </div>
      <div className="flex justify-center items-center flex-col gap-y-6">
        <Image
          className="m-auto"
          width={88}
          height={88}
          src={img3}
          alt="img3"
        />
        <p className="text-center">24/7 Free Support.</p>
      </div>
    </div>
  );
};

export default Services;
