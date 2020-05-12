import React from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
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
        className="navbar__item"
        name={obj.name}
        href={obj.href}
      />
    ));
    return <div className="navbar__allmenu">{navigationButtons}</div>;
  }
}

export default Menu;
