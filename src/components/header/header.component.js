import React from "react";
import {NavLink} from "react-router-dom";
import "./header.styles.scss"
import { ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.util";
import {connect} from "react-redux";

const Header = (props) => (
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
            {
                props.currentUser ? (<div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>)
                    : (<NavLink className="option" to="/signIn">
                    SIGN IN
                    </NavLink>)
            }
        </div>
    </div>
)


const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)