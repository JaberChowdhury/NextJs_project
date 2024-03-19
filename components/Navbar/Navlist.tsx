import Link from "next/link";
import tools from "@/constant/tools";
import type { TOOL } from "@/constant/tools";
import more from "@/constant/more";

const Navlist = () => {
  const pathList: TOOL[] = [...tools, ...more];

  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      {pathList.map((tool: TOOL, index: number) => (
        <li key={index}>
          <Link href={tool.path}>{tool.title.toUpperCase()}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlist;
