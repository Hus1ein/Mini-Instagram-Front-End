import React from 'react';
import styles from './App.module.css';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Explore from "./Components/Explore/Explore";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import Main from "./Components/Main";
import {Redirect} from "react-router";
import Login from "./Components/Login/Login";
import axios from "./Enviroments/axiosDev";
import SignUp from "./Components/SignUp/SignUp";

class App extends React.Component{

    state = {
        authenticated: false
    };

    componentWillMount() {
        let savedToken = localStorage.getItem('token');
        console.log(savedToken);
        if (savedToken != null) {
            this.setState({
                authenticated: true
            })
        }
    }

    changeAuthenticationHandler = (status) => {
        this.setState({
            authenticated: status
        })
    };

    render = () => {

        return (
            <BrowserRouter>

                <PrivateRoute
                    path="/main"
                    component={Main}
                    authenticated={this.state.authenticated}
                />

                <Route exact path="/login" render={(props) => {
                    if (this.state.authenticated) {
                        return (<Redirect to="/main" />);
                    }   else {
                        return (<Login {...props} changeAuthentication={this.changeAuthenticationHandler}/>);
                    }
                }} />

                <Route exact path="/register" render={(props) => {
                    if (this.state.authenticated) {
                        return (<Redirect to="/main" />);
                    }   else {
                        return (<SignUp {...props}/>);
                    }
                }} />

            </BrowserRouter>
        );
    };

}

export default App;
