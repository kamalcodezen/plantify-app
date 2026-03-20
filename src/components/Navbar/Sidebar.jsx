import React from "react";

const Sidebar = ({ open, setOpen, navMenuData }) => {
  return (
    <div
      className={`md:hidden fixed inset-0  transition-all duration-300
      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      ></div>

      {/* SIDEBAR */}
      <div
        className={`absolute top-0 left-0 h-full w-[260px]
        bg-black/70 backdrop-blur-xl
        p-6 border-r border-white/10
        transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-xl font-bold mb-6 text-green-400">
          🌿 Green Earth
        </h2>

        <ul className="flex flex-col gap-5 text-gray-200">
          {navMenuData.map((menu) => (
            <li
              key={menu.id}
              className="hover:text-green-400 transition cursor-pointer"
            >
              {menu.name}
              
            </li>
          ))}
        </ul>

        <button className="mt-6 px-4 py-2 rounded-full bg-green-400 text-black font-semibold">
          Plant a Tree
        </button>
      </div>
    </div>
  );
};

export default Sidebar;