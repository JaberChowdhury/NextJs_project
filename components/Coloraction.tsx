"use client";
import { ImInfo } from "react-icons/im";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import useColor from "@/lib/useColor";
import Highlighter from "@/components/Highlighter";

interface ColorinfoProps {
  color: string;
}

export const Colorinfo = ({ color }: ColorinfoProps) => {
  const utils = new useColor(color);
  const data = JSON.stringify(utils.getHexadecimalColor(), null, 2);

  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex justify-center items-center relative p-1">
          <ImInfo />
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-full max-h-screen overflow-y-scroll">
        <DrawerHeader>
          <Highlighter code={data} />
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export const Coloradd = () => {
  return (
    <div className="flex justify-center items-center relative p-1">
      <IoIosAddCircleOutline />
    </div>
  );
};
