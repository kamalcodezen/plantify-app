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
          {open ? <Logs className="md:hidden cursor-pointer "></Logs> : <X className="md:hidden cursor-pointer"></X>}
          {
            <ul
              className={`md:hidden absolute px-30 p-2 space-y-2 rounded-xl w-[50%] flex flex-col justify-center items-center backdrop-blur-lg bg-green-600/30 border border-white/30 shadow-2xl transform transition-all duration-1000 origin-top -left-[2px] rounded-tl-none cursor-pointer z-10
            ${
              open
                ? "-scale-x-150 opacity-0 -translate-y-100"
                : "scale-100 translate-y-3.5 "
            } `}
            >
              {link}
            </ul>
          }
        </span>

        <h1 className="text-xl font-semibold">Green Earth</h1>
      </div>

      <ul className="gap-4 hidden md:flex text-sm ">{link}</ul>

      <a className="bg-amber-300  text-green-700 py-1 px-4 rounded-4xl" href="/button">Plant a Tree</a>
    </nav>
  );
};

export default Navbar;
