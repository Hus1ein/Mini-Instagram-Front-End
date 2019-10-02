
import React from 'react';
import styles from "../App.module.css";
import {Link, Route} from "react-router-dom";
import Home from "./Home/Home";
import Explore from "./Explore/Explore";
import Profile from "./Profile/Profile";
import axios from "../Enviroments/axiosDev";
import Settings from "./Settings/Settings";

class Main extends React.Component {



    render() {
        let savedId = localStorage.getItem('id');

        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className={styles.menuMargin}>
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>
                                <div className={`${"navbar-brand"} ${styles.navBarAppName}`}><Link to="/">Mini Instagram</Link></div>
                            </div>


                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/explore">Explore</Link></li>
                                    <li><Link to={"/profile/" + savedId}>Profile</Link></li>
                                    <li><Link to="/settings">Settings</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>


                <div className={styles.belowMenuSection}>
                    <Route path="/" exact component={Home}/>
                    <Route path="/explore" exact component={Explore}/>
                    <Route path="/profile/:id" exact component={Profile}/>
                    <Route path="/settings" exact component={Settings}/>
                </div>

            </div>
        );
    }


}

export default Main;