import React, { useEffect, useState } from "react";
import { Logs, X } from "lucide-react";
import "./NavBar.css"
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
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-green-400"
          >
            {open ? <X /> : <Logs />}
          </button>

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
        <button className="hidden md:block relative px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-lime-400 text-black font-semibold overflow-hidden group">
          <span className="absolute inset-0 bg-green-400 blur-xl opacity-40 group-hover:opacity-70 transition"></span>

          <span className="relative z-10 group-hover:scale-110 transition">
            Plant a Tree
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[999]">
          {/*  BACKDROP BLUR + DARK OVERLAY */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          ></div>

          {/*  MENU PANEL */}
          <div
            className="absolute top-[70px] left-0 w-full
    bg-black/40 backdrop-blur-2xl
    border-t border-white/10
    shadow-[0_20px_60px_rgba(0,0,0,0.6)]
    animate-slideDown"
          >
            {/*  GLOW LAYER */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-lime-400/20 to-green-400/20 blur-3xl opacity-50"></div>
            </div>

            <ul className="flex flex-col items-center gap-6 py-8 text-gray-200">
              {navMenuData.map((menu) => (
                <li
                  key={menu.id}
                  className="text-lg font-medium relative group cursor-pointer"
                >
                  <span className="group-hover:text-green-400 transition duration-300">
                    {menu.name}
                  </span>

                  {/* underline glow */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(34,197,94,1)]"></span>
                </li>
              ))}

              {/*  CTA BUTTON */}
              <button
                className="mt-4 px-4 py-2 rounded-full 
        bg-gradient-to-r from-green-400 to-lime-400 
        text-black font-semibold relative overflow-hidden group cursor-pointer"
              >
                <span className="absolute inset-0 bg-green-400 blur-xl opacity-40 group-hover:opacity-70 transition"></span>

                <span className="relative z-10 group-hover:scale-110 transition">
                   Plant a Tree
                </span>
              </button>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
