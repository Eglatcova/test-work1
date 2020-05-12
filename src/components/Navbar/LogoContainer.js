import React from "react";
import Logo from "./Logo";
import LogoName from "./LogoName";

const LogoContainer = () => {
  return (
    <div className="logo__container">
      <Logo />
      <LogoName />
    </div>
  );
};

export default LogoContainer;
