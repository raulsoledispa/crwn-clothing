import React from "react";
import {FormInput} from "../form-input/form-input.component";
import {CustomButton} from "../custom-button/custom-button.component";
import {auth,createUser} from "../../firebase/firebase.util";
import "./sign-up.styles.scss"

export default class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }


    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, password, email } = this.state;

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user)
            await createUser(user, { displayName})


            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }catch (e) {
            console.log(e)
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value});
    }

    render() {
        const { displayName, password, confirmPassword, email } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput required type="text" name="displayName" label="Display Name"
                               onChange={this.handleChange} value={displayName}/>

                    <FormInput required type="email" name="email" label="Email"
                               onChange={this.handleChange} value={email}/>

                    <FormInput required type="password" name="password" label="Enter password"
                               onChange={this.handleChange} value={password}/>

                    <FormInput required type="password" name="confirmPassword" label="Repeat Password"
                               onChange={this.handleChange} value={confirmPassword}/>

                    <CustomButton type="submit"> SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}


