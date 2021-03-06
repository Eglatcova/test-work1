import React from "react";
import MenuItem from "./MenuItem";
import {connect} from "react-redux"
const FooterMenu = ({navButtons}) => {
  /* const buttonNavigation = [
    { name: "Знакомства", href: "/" },
    { name: "Поиск", href: "/" },
    { name: "Лучшие", href: "/" },
    { name: "О нас", href: "/" },
  ]; */
 
  const navigationButtons = navButtons.map((obj, index) => (
    <MenuItem
      key={index}
      className="footer__item"
      name={obj.name}
      href={obj.href}
    />
  ));

  return <div className="footer__menu">{navigationButtons}</div>;
};

const mapStateToProps = state =>{
  return {
    navButtons: state.footer.buttonNavigation
  }
}


export default connect(mapStateToProps,null)(FooterMenu);
