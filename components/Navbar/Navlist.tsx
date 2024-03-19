"use client";

import Link from "next/link";
import tools from "@/constant/tools";
import type { TOOL } from "@/constant/tools";
import more from "@/constant/more";

import { useAppSelector } from "@/lib/hooks";
import { colorstoreSelector } from "@/lib/features/colorstore/colorstoreSlice";

const Navlist = () => {
  const pathList: TOOL[] = [...tools, ...more];

  const { colors } = useAppSelector(colorstoreSelector);

  return (
    <ul
      tabIndex={0}
      className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
    >
      {pathList.map((tool: TOOL, index: number) => (
        <li key={index}>
          <Link href={tool.path}>{tool.title.toUpperCase()}</Link>
        </li>
      ))}

      <b>Selected colors</b>
      {colors.map((color) => (
        <div
          key={color.id}
          className="w-[150px] h-10 border border-slate-100 m-2 flex justify-between items-center rounded overflow-hidden relative"
        >
          <div
            className="w-6 h-full absolute left-0 "
            style={{
              backgroundColor: color.color,
            }}
          />
          <Link className="ml-7" href={`/more/colors/`}>
            {color.color.toUpperCase()}
          </Link>
        </div>
      ))}
    </ul>
  );
};

export default Navlist;
