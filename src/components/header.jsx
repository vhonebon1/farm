import React from 'react';
import Logo from '../icons/logo.png';
import Basket from '../icons/basket.svg';
import { connect } from 'react-redux';

class Header extends React.Component {

  render() {
    return(
      <div className="header">
        <div className="header__topBar">
          <img src={Logo} alt=""/>
        </div>
        <div className="header__bottomBar">
          <img src={Basket} alt="" />
          <h1>{this.props.cart.length}</h1>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Header);
