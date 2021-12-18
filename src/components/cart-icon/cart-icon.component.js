import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss"
import {toggleHidden} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CartIcon = ({ toggle }) => (
    <div className="cart-icon" onClick={toggle}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggleHidden())
})



export default connect(null, mapDispatchToProps)(CartIcon)