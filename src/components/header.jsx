import React from 'react';
import Logo from '../icons/logo.png';
import Basket from '../icons/basket.svg';

const Header = () =>
  <div className="header">
    <div className="header__topBar">
      <img src={Logo} alt=""/>
    </div>
    <div className="header__bottomBar">
      <img src={Basket} alt="" />
    </div>
  </div>

export default Header;
