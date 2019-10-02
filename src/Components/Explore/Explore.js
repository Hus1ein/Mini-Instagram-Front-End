import React, {Component} from 'react';
import styles from './Explore.module.css';
import UserRow from "./UserRow/UserRow";
import axios from "../../Enviroments/axiosDev";
import {Link} from "react-router-dom";

class Explore extends Component {

    state = {
        users: []
    };

    onSearchHandler = (event) => {
        let input = event.target.value;

        if (input === '' || input == null) {
            this.setState(
                {
                    users: []
                }
            )
        } else {
            axios.otherRequest.get('users/search?username=' + input)
                .then(result => {
                    this.setState(
                        {users: result.data}
                    )
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    };

    onFollowClickHandler = (followingId) => {
        axios.otherRequest.get('users/follow?followingId=' + followingId)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {

        let users = [];
        for(let i = 0; i < this.state.users.length; i++) {
            users.push(
                <Link to={"/profile/" + this.state.users[i].id} key={this.state.users[i].id}>
                    <div>
                        <UserRow data={this.state.users[i]} onFollowClickHandler={this.onFollowClickHandler}/>
                    </div>
                </Link>
            );
        }

        return (
            <div className={styles.main}>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-addon"><i className="fa fa-search"/></div>
                        <input className="form-control" type="text"  placeholder="Search for user..." maxLength="60" onChange={this.onSearchHandler}/>
                    </div>
                    <div>
                        {users}
                    </div>
                </div>
            </div>
        );
    }


}

export default Explore;