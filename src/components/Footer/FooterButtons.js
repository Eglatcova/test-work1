import React from "react";
import { Link } from "react-router-dom";
import FooterButton from "./FooterButton"

class FooterButtons extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      buttonFooter: [
        { name: "Наверх", as: {Link}, to: "/" },
        { name: "Вход", as: {Link}, to: "/" },
        { name: "Заполнить анкету", as: {Link}, to: "/profile" },
      ],
    };
  }
  render() {
    const navigationButtons = this.state.buttonFooter.map((obj, index) => (
      <FooterButton
        key={index}
        className="footer__button"
        name={obj.name}
        as={Link}
        to={obj.to}
      />
    ));

    return <div className="footer__allbuttons">{navigationButtons}</div>;
  }
}

export default FooterButtons;

