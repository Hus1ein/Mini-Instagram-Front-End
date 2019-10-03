import React, { Component } from 'react';

import axios from "../../Enviroments/axiosDev";
import { Redirect } from "react-router-dom";
import SignUpView from "./SignUpView";

class SignUp extends Component {

    state = {
        'username': undefined,
        'password': undefined,
        'name': undefined,
        'errors': undefined
    };

    onSignUp = (event) => {
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        let name = this.state.name;
        if (username !== undefined && username !== "" && password !== undefined && password !== ""
            && username.indexOf(" ") === -1 && password.indexOf(" ") === -1 && name !== undefined && name !== "" && name.indexOf(" ") === -1){

            this.setState({'errors': undefined});
            let self = this;
            //document.getElementById("login-view-main").hidden = true;
            //document.getElementsByClassName("lds-roller")[0].hidden = false;


            // Connect to server

            axios.loginAndSignUp.post("register", {
                "username": username,
                "password": password,
                "name": name
            }).then(response => {
                this.props.history.push("/login");
            }).catch(error => {
                this.setState({'errors': "Error: Check inputs and try again."});
            });

        }else {
            this.setState({'errors': "Enter valid username, name and password, don't use white space."});
        }
    }

    onUsernameChangeHandler = (event) => {
        let username = event.target.value;
        this.setState ({
            'username': username.trim()
        });
    };

    onPasswordChangeHandler = (event) => {
        let password = event.target.value;
        this.setState ({
            'password': password.trim()
        });
    };

    onNameChangeHandler = (event) => {
        let name = event.target.value;
        this.setState ({
            'name': name.trim()
        });
    };

    componentDidMount() {
        //document.getElementsByClassName("lds-roller")[0].hidden = true;
    }

    render() {

        return (
            <div id="login-main">
                <SignUpView
                    onUsernameChangeHandler={this.onUsernameChangeHandler}
                    onPasswordChangeHandler={this.onPasswordChangeHandler}
                    onNameChangeHandler={this.onNameChangeHandler}
                    onSignUp={this.onSignUp}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

export default SignUp;