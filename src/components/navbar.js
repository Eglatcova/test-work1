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
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavbarContainer />
      </div>
    );
  }
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
        <img className="navbar__logo" src={logo} />
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
  render() {
    return (
      <div className="navbar__allmenu">
        <MenuItem className="navbar__item" name="Знакомства" href="#" />
        <MenuItem className="navbar__item" name="Поиск" href="#" />
        <MenuItem className="navbar__item" name="Лучшие" href="#" />
        <MenuItem className="navbar__item" name="О нас" href="#" />
      </div>
    );
  }
}

class MenuItem extends React.Component {
  render() {
    return <a className={this.props.className}href={this.props.href}>{this.props.name}</a>;
  }
}

class Telephone extends React.Component {
  render() {
    return (
      <div>
        <a className="navbar__telephone" href="#">+7(999)2223333</a>
      </div>
    );
  }
}



export default Navbar;

/* ReactDOM.render(
  <Navbar />,
  document.getElementById('root')
) */
