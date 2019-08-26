import React from 'react';
import styles from './App.module.css';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Explore from "./Components/Explore/Explore";
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends React.Component{

    render () {
        return (
            <BrowserRouter>

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
                                      <li>
                                          <form className="navbar-form">
                                              <div className="form-group">
                                                  <input type="text" className="form-control" placeholder="Search"/>
                                              </div>
                                              <button type="submit" className="btn btn-default">Submit</button>
                                          </form>
                                      </li>
                                      <li><Link to="/explore">Explore</Link></li>
                                      <li><Link to="/profile">Profile</Link></li>
                                  </ul>
                              </div>
                            </div>
                        </div>
                    </nav>


                    <div className={styles.belowMenuSection}>
                        <Route path="/" exact component={Home}/>
                        <Route path="/explore" exact component={Explore}/>
                        <Route path="/profile" exact component={Profile}/>
                    </div>

                </div>

            </BrowserRouter>
        );
    }
}

export default App;
