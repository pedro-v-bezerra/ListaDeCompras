import React from 'react';
import Logo from '../assets/imgs/LogoCompleta.svg';
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" />
    </header>
  );
};

export default Header;
