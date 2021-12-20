import React from "react";
import "./cart-item.styles.scss";
import {selectCartItemsCount} from "../../redux/cart/cart.selector";
import {connect} from "react-redux";

const CartItem = ( { item: { imageUrl, price, name, quantity}, itemCount}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{`${itemCount} X ${price}`}</span>
        </div>
    </div>
)


const mapStateToProps = (state) =>({
    itemCount: selectCartItemsCount(state)
})


export default connect(mapStateToProps)(CartItem)