import Flexbox from "./Flexbox";
import Image from "next/image";
import img1 from "../assets/photos/pngwing 6.png";
import img2 from "../assets/photos/pngwing 5.png";
import img3 from "../assets/photos/pngwing 7.png";
import { cn } from "@/lib/utils";

interface propstype {
  url: typeof img1;
  className: string;
}
const Flowerbox = ({ url, className }: propstype) => {
  return (
    <div>
      <div
        className={cn(
          "h-[538px] w-[464px] flex justify-center items-end bg-slate-300 rounded-lg rounded-t-full",
          className
        )}
      >
        <Image width={310} height={428} src={url} alt="url" />
      </div>
      <p className="text-center underline font-semibold my-6 text-[#272727]/[0.6]">
        Pink Flower Tree
      </p>
    </div>
  );
};

const Featured = () => {
  return (
    <Flexbox className="flex-col gap-y-3">
      <Flexbox className="flex-col gap-y-6">
        <p className="text-4xl font-extrabold text-center">
          Our Featured Flowers
        </p>
        <p className="text-lg w-[594px] text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </Flexbox>
      <Flexbox className=" w-full justify-between flex-wrap relative">
        <Flowerbox className="bg-[#A72162]/[0.15]" url={img1} />
        <Flowerbox className="bg-[#0597A0]/[0.15]" url={img2} />
        <Flowerbox className="bg-[#477D11]/[0.15]" url={img3} />
      </Flexbox>
    </Flexbox>
  );
};

export default Featured;
