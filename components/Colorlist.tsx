"use client";

import Link from "next/link";
import Addcolor from "@/components/Addcolor";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  colorsSelector,
  updateColors,
} from "@/lib/features/colors/colorsSlice";

const Colorslist = () => {
  const { colors } = useAppSelector(colorsSelector);
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(updateColors())} className="btn glass">
        Generate more
      </button>
      <div className="w-full z-10 min-h-screen grid grid-cols-2 md:grid-cols-4">
        {colors.map((color) => (
          <div
            key={color.id}
            className="w-[150px] h-10 border border-slate-100 flex justify-between items-center m-auto my-2 rounded overflow-hidden relative"
          >
            <div
              className="w-6 h-full absolute left-0 "
              style={{
                backgroundColor: color.hexa.main.string,
              }}
            />
            <Link
              className="ml-7"
              href={`/more/colors/${color.hexa.main.r + color.hexa.main.g + color.hexa.main.b}`}
            >
              {color.hexa.main.string.toUpperCase()}
            </Link>
            <Addcolor
              data={{
                color: color.hexa.main.string,
                id: crypto.randomUUID(),
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Colorslist;
