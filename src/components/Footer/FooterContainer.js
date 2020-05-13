import React from "react";
import FooterMenu from "./FooterMenu";
import FooterButtons from "./FooterButtons";
import FooterLogo from "../Navbar/LogoContainer";

const FooterContainer = () => {
  return (
    <div className="footer__container">
      <FooterMenu />
      <FooterButtons />
      <FooterLogo />
    </div>
  );
};

export default FooterContainer;
