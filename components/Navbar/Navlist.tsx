import fileSystem from "fs";
import Link from "next/link";
import path from "path";

const location = path.join(__dirname, "../../app/tools");
const fs = fileSystem.promises;

const Navlist = async () => {
  const toolsData = await fs.readdir(location);
  const tools = await toolsData.filter((data) => {
    return data !== "page.tsx";
  });

  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <Link href={"/tools"}>Tools</Link>
      </li>
      {tools.map((tool, index) => (
        <li key={index}>
          <Link href={`/tools/${tool}`}>{tool.toUpperCase()}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlist;
