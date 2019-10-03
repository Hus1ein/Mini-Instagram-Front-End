import React, { Component } from 'react';
import "./Login.css";
import "./loader.css";
import LoginView from './LoginView';
import axios from "../../Enviroments/axiosDev";
import { Redirect } from "react-router-dom";

class Login extends Component {

    state = {
        'username': undefined,
        'password': undefined,
        'errors': undefined
    };

    onLoginClickHandler = (event) => {
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        if (username !== undefined && username !== "" && password !== undefined && password !== ""
            && username.indexOf(" ") === -1 && password.indexOf(" ") === -1){

            this.setState({'errors': undefined});
            let self = this;
            //document.getElementById("login-view-main").hidden = true;
            //document.getElementsByClassName("lds-roller")[0].hidden = false;


            // Connect to server

            axios.loginAndSignUp.post("login", {
                "username": username,
                "password": password
            }).then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('id', response.data.id);
                this.props.changeAuthentication(true);
                this.props.history.push("/main");
                window.location.reload();
            }).catch(error => {
                this.setState({'errors': "Error: Check inputs and try again."});
            });


            /*try {
                const user = await app
                    .auth()
                    .signInWithEmailAndPassword(this.state.username, this.state.password);
                //document.getElementById("login-view-main").hidden = false;
                //document.getElementsByClassName("lds-roller")[0].hidden = true;
                console.log(user);
                this.props.history.push("/dashboard/all-orders");
            } catch (error) {
                console.log(error);
                document.getElementById("login-view-main").hidden = false;
                document.getElementsByClassName("lds-roller")[0].hidden = true;
                this.setState({'errors': "Error: Try again."});
            }*/

        }else {
            this.setState({'errors': "Enter valid username and password, don't use white space."});
        }

    };

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

    componentDidMount() {
        //document.getElementsByClassName("lds-roller")[0].hidden = true;
    }

    render() {

        return (
            <div id="login-main">
                {/*<div className="lds-roller" hidden>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>*/}
                <LoginView
                    onUsernameChangeHandler={this.onUsernameChangeHandler}
                    onPasswordChangeHandler={this.onPasswordChangeHandler}
                    onLoginclickHandler={this.onLoginClickHandler}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

export default Login;
