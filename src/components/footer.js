import React from "react";
import "./footer.sass";
import logo from "./img/logo-heart.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <FooterContainer />
      </div>
    );
  }
}

class FooterContainer extends React.Component {
  render() {
    return (
      <div className="footer__container">
        <FooterMenu />
        <FooterButtons />
        <FooterLogo />
      </div>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
      <div className="footer__menu">
        <a className="footer__item" href = "#">Знакомства</a>
        <a className="footer__item" href = "#">Поиск</a>
        <a className="footer__item" href = "#">Лучшие</a>
        <a className="footer__item" href = "#">О нас</a>
      </div>
    );
  }
}

class FooterButtons extends React.Component {
 render() {
   return (
     <div className="footer__allbuttons">
       <button className="footer__button">Наверх</button>
       <button className="footer__button">Вход</button>
       <button className="footer__button">Связаться с нами</button>
     </div>
   );
 }
}

class FooterLogo extends React.Component {
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



export default Footer;