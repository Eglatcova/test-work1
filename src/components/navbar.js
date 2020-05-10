import React from "react";
import "./navbar.sass";
import logo from "./img/logo-heart.png";
//import ReactDOM from 'react-dom';
//import { render } from '@testing-library/react';

/**
 * Шапка сайта
 *
 * @module Navbar
 * @version 1.0.0
 * @author [Катерина Глаткова](https://github.com/Eglatcova)
 */
const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarContainer />
    </div>
  )
}

class NavbarContainer extends React.Component {
  render() {
    return (
      <div className="navbar__container">
        <LogoContainer />
        <Menu />
        <Telephone />
      </div>
    );
  }
}

class LogoContainer extends React.Component {
  render() {
    return (
      <div className="logo__container">
        <Logo />
        <LogoName />
      </div>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <div className="navbar__logo-wrap">
        <img className="navbar__logo" src={logo} alt="Привет" />
      </div>
    );
  }
}

class LogoName extends React.Component {
  render() {
    return (
      <div className="logo__name">
        Never alone
      </div>
    );
  }
}

class Menu extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      buttonNavigation: [
        {name: "Знакомства", href: "/"},
        {name: "Поиск", href: "/"},
        {name: "Лучшие", href: "/"},
        {name: "О нас", href: "/"}
      ]
    }
  }
  render() {
    const navigationButtons = this.state.buttonNavigation.map((obj, index) =>
      <MenuItem key={index} className="navbar__item" name={obj.name} href={obj.href} />
    );
    return (
      <div className="navbar__allmenu">
        {navigationButtons}
      </div>
    );
  }
}

class MenuItem extends React.Component {
  render() {
    return <a className={this.props.className} href={this.props.href}>{this.props.name}</a>;
  }
}

class Telephone extends React.Component {
  render() {
    return (
      <div>
        <a className="navbar__telephone" href="/">+7(999)2223333</a>
      </div>
    );
  }
}



export default Navbar;

/* ReactDOM.render(
  <Navbar />,
  document.getElementById('root')
) */
