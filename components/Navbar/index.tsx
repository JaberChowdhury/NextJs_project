import { MdMenu } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa6";
import Navlist from "./Navlist";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar z-[300] flex justify-between items-center bg-base-100 sticky shadow-md top-0">
      <div className="navbar-start w-full">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content w-full flex justify-between items-center relative">
            <div className="flex justify-between items-center gap-x-2">
              <label htmlFor="my-drawer-2" className="drawer-button">
                <MdMenu className="text-2xl" />
              </label>
              <Link href="/" className="font-bold">
                Color web
              </Link>
            </div>
            <Link href="https://github.com/JaberChowdhury">
              <FaGithubAlt className="text-2xl" />
            </Link>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <Navlist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
