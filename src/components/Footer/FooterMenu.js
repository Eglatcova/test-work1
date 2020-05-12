import React from "react";
import MenuItem from "./MenuItem";

class FooterMenu extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      buttonNavigation: [
        { name: "Знакомства", href: "/" },
        { name: "Поиск", href: "/" },
        { name: "Лучшие", href: "/" },
        { name: "О нас", href: "/" },
      ],
    };
  }
  render() {
    const navigationButtons = this.state.buttonNavigation.map((obj, index) => (
      <MenuItem
        key={index}
        className="footer__item"
        name={obj.name}
        href={obj.href}
      />
    ));
    return <div className="footer__menu">{navigationButtons}</div>;
  }
}

export default FooterMenu;
