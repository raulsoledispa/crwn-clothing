import React from "react";
import "./checkout.styles.scss"
import {connect} from "react-redux";
import {removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem: { name , quantity, price, imageUrl, id}, removeItem}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <span className="remove" onClick={() => removeItem({id})}>X</span>
    </div>
)


const mapDispatchToProps = (dispatch) => ({
    removeItem: (item) => dispatch(removeItem(item))
})


export default  connect(null, mapDispatchToProps)(CheckoutItem);