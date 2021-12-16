import './App.css';
import { Home } from "./pages/home/home.component";
import { Routes, Route} from "react-router-dom";
import  ShopPage from "./pages/shop/shop.component";
import  { SigninAndSignupPage } from "./pages/signin-and-sigup/signin-and-signup.component";
import {Header} from "./components/header/header.component";
import React from "react";
import {auth} from "./firebase/firebase.util";


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unSubscribeFromAuth = null

    componentDidMount() {
        console.log("componentDidMount")
        this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser : user})
            console.log(user)
        });
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/shop" element={<ShopPage/>} />
                    <Route exact path="/signIn" element={<SigninAndSignupPage/>} />
                    <Route exact path="*" element={<div>NOT FOUND</div>} />
                </Routes>
            </div>
        )
    }


}

export default App;
