import React from "react";
import LogoContainer from "./LogoContainer";
import Menu from "./Menu";
import Telephone from "./Telephone";

const NavbarContainer = () => {
  return (
    <div className="navbar__container">
      <LogoContainer />
      <Menu />
      <Telephone />
    </div>
  );
};

export default NavbarContainer;
