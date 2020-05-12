import React from "react";
import FooterButton from "./FooterButton"

class FooterButtons extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      buttonFooter: [
        { name: "Наверх", to: "/home" },
        { name: "Вход", to: "/home" },
        { name: "Заполнить анкету", to: "/profile" },
      ],
    };
  }
  render() {
    const navigationButtons = this.state.buttonFooter.map((obj, index) => (
      <FooterButton
        key={index}
        className="footer__button"
        name={obj.name}
        to={obj.to}
      />
    ));

    return <div className="footer__allbuttons">{navigationButtons}</div>;
  }
}

export default FooterButtons;

