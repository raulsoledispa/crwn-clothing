import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss"
import {toggleHidden} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selector";

const CartIcon = ({ toggle , itemCount}) => (
    <div className="cart-icon" onClick={toggle}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(toggleHidden())
})

const mapStateToProps = (state) =>({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)