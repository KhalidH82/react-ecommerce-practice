import React from "react";
import { ReactComponent as Shop } from "../../assets/shop.svg";
import "./cart-icon.styles.scss";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <Shop className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispachToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispachToProps)(CartIcon);