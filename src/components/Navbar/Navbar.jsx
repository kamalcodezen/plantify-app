import React, { use, useState } from "react";
import NavbarMenu from "./NavbarMenu";
import { Logs, X } from "lucide-react";

const Navbar = ({ navbarMenuFetch }) => {
  const navMenuData = use(navbarMenuFetch);
  const [open, setOpen] = useState(false);

  const link = navMenuData.map((menu) => (
    <NavbarMenu key={menu.id} menu={menu}></NavbarMenu>
  ));

  return (
    <nav className="flex  justify-between items-center py-3 ">
      <div className="flex gap-4 md:gap-0 items-center">
        <span onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden cursor-pointer"></X>
          ) : (
            <Logs className="md:hidden cursor-pointer "></Logs>
          )}
          {
            <ul
              className={`md:hidden absolute px-30 p-2 space-y-2 rounded-xl w-[50%] flex flex-col justify-center items-center backdrop-blur-lg bg-green-600/70 border border-white/20 shadow-2xl transform transition-all duration-1000 origin-top -left-[2px] rounded-tl-none cursor-pointer z-10
                text-yellow-200
            ${
              open
                ? "scale-100 translate-y-3.5 "
                : "-scale-x-150 opacity-0 -translate-y-100"
            } `}
            >
              {link}
            </ul>
          }
        </span>

        <h1 className="text-xl font-semibold">Green Earth</h1>
      </div>

      <ul className="gap-4 hidden md:flex text-sm ">{link}</ul>

    <button className="relative px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-lime-400 text-black font-semibold shadow-[0_0_20px_rgba(34,197,94,0.7)] hover:scale-105 transition duration-300">
            Plant a Tree
          </button>
    </nav>
  );
};

export default Navbar;
