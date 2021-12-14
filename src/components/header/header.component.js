import React from "react";
import {NavLink} from "react-router-dom";
import "./header.styles.scss"
import { ReactComponent as Logo} from "../../assets/crown.svg";

const Header = () => (
    <div className="header">
        <NavLink to="/">
            <Logo className="logo" />
        </NavLink>
        <div className="options">
            <NavLink className="option" to="/shop">
                SHOP
            </NavLink>
            <NavLink className="option" to="/shop">
                CONTACT
            </NavLink>
        </div>
    </div>
)

export { Header };