import Link from "next/link";
import tools from "@/constant/tools";
import more from "@/constant/more";

const Navlist = () => {
  const pathList = [...tools, ...more];

  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <Link href={"/tools"}>Tools</Link>
      </li>
      {pathList.map((tool, index) => (
        <li key={index}>
          <Link href={`/tools/${tool}`}>{tool.toUpperCase()}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlist;
