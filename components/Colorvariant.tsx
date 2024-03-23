"use client";
import lib from "@/lib/utils";
import Link from "next/link";
import Addcolor from "@/components/Addcolor";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  colorsSelector,
  updateColors,
} from "@/lib/features/colors/colorsSlice";

const Colorvariant = ({ color }: { color: string }) => {
  const { colors } = useAppSelector(colorsSelector);
  const dispatch = useAppDispatch();
  const utils = new lib(color);
  const colorsVariant = utils.getVariant();

  const colorsArray = [...colorsVariant.main, ...colorsVariant.opposite].flat(
    2,
  );
  return (
    <div className="w-full">
      <div>
        <b className="underline text-2xl">Colorvariant:</b>
      </div>
      <div className="w-full z-10 min-h-screen grid grid-cols-2 md:grid-cols-4">
        {colorsArray.map((data) => (
          <div
            key={crypto.randomUUID()}
            className="w-[150px] h-10 border border-slate-100 flex justify-between items-center m-auto my-2 rounded overflow-hidden relative"
          >
            <div
              className="w-6 h-full absolute left-0 "
              style={{
                backgroundColor: data,
              }}
            />
            <Link
              className="ml-7"
              href={`/more/colors/${data.replace("#", "")}`}
            >
              {data}
            </Link>
            <Addcolor
              data={{
                color: data,
                id: crypto.randomUUID(),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colorvariant;
