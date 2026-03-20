import React from "react";

const NavbarMenu = ({ menu }) => {
  return (
    <li className="list-none  cursor-pointer ">
      <a href={menu.path}></a>
      {menu.name}
    </li>
  );
};

export default NavbarMenu;
