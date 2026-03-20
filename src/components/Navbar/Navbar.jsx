import React, { useEffect, useState } from "react";
import { Logs, X } from "lucide-react";
import "./NavBar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [navMenuData, setNavMenuData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/navbarApiData.json")
      .then((res) => res.json())
      .then((data) => setNavMenuData(data));
  }, []);

  return (
    <nav>
      <div className="relative max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LEFT */}
        <div className="flex items-center gap-4 cursor-pointer">
          <span
            onClick={() => setOpen(!open)}
            className="md:hidden text-green-400"
          >
            {open ? <X></X> : <Logs></Logs>}
          </span>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,1)] animate-pulse">
            🌿 Green Earth
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navMenuData.map((menu) => (
            <li key={menu.id} className="relative cursor-pointer group text-sm">
              <span className="group-hover:text-green-400 transition">
                {menu.name}
              </span>

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(34,197,94,1)]"></span>
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <button className="hidden sm:flex px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-lime-400 text-black font-semibold shadow-[0_0_20px_rgba(34,197,94,0.7)] hover:scale-105 transition duration-300 cursor-pointer">
          Plant a Tree
        </button>
      </div>

  {/* SIDEBAR CALL */}
      <Sidebar open={open} setOpen={setOpen} navMenuData={navMenuData} />

    </nav>
  );
};

export default Navbar;
