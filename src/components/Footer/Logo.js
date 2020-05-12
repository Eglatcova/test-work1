import React from "react";
import logo from "./img/logo-heart.png";

const Logo = () => {
  return (
    <div className="navbar__logo-wrap">
      <img className="navbar__logo" src={logo} alt="Привет" />
    </div>
  );
};

export default Logo;
