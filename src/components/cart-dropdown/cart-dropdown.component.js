import React from "react";
import {CustomButton} from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";

const CartDropdown = ({ cartItems }) => {
    const navigate = useNavigate();

    return (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems?.map(item => <CartItem key={item.id} item={item} />)
            }
        </div>
        <CustomButton onClick={() => navigate("/checkout")}>GO TO CHECKOUT</CustomButton>
    </div>
)}
const mapStateToProps = ({cart : { cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)