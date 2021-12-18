import React from "react";
import "./sign-in.styles.scss"
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";
import {signInWithGoogle, auth} from "../../firebase/firebase.util";


export default class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit= async event => {
        event.preventDefault();
        console.log(this.state)
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);

            this.setState({email: "", password: ""})
        }catch (e) {
            console.log(e.message)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput id="email" value={this.state.email}
                           onChange={this.handleChange} label="email"
                               autoComplete="email" required
                           type="email"  name="email" />

                    <FormInput id="password" type="password" required
                           onChange={this.handleChange} label="password"
                           value={this.state.password}  name="password" />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={() => signInWithGoogle()} >Sign In with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}