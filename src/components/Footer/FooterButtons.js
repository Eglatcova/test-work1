import React from "react";
import FooterButton from "./FooterButton";

const FooterButtons = () => {
  const buttonFooter = [
    { name: "Наверх", to: "/home" },
    { name: "Вход", to: "/home" },
    { name: "Заполнить анкету", to: "/profile" },
  ];

  const navigationButtons = buttonFooter.map((obj, index) => (
    <FooterButton
      key={index}
      className="footer__button"
      name={obj.name}
      to={obj.to}
    />
  ));

  return <div className="footer__allbuttons">{navigationButtons}</div>;
};

export default FooterButtons;
