import { MdMenu, MdOutlineGridView } from "react-icons/md";
import Navlist from "./Navlist";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar z-[300] flex justify-between items-center bg-base-100 sticky shadow-md top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdMenu className="text-2xl" />
          </div>
          <Navlist />
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-xl flex justify-center items-center"
        >
          Color web
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <MdOutlineGridView className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
