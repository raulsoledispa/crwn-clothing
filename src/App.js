import './App.css';
import { Home } from "./pages/home/home.component";
import { Routes, Route} from "react-router-dom";
import  ShopPage from "./pages/shop/shop.component";
import  { SigninAndSignupPage } from "./pages/signin-and-sigup/signin-and-signup.component";
import Header from "./components/header/header.component";
import React from "react";
import {auth, createUser} from "./firebase/firebase.util";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";


class App extends React.Component{

    unSubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if(user){
                const userRef = await createUser(user);
                userRef.onSnapshot(snapshot => {
                    /*this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })*/

                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })

                console.log(this.props)


            }else{
                setCurrentUser(user);
            }

        });
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
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

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null,mapDispatchToProps)(App);
