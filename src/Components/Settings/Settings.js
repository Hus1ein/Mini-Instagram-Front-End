import React, {Component} from "react";
import styles from "./Settings.module.css";
import profilePhoto from "../../Photos/profile.jpg";
import axios from "../../Enviroments/axiosDev";
import defaultPhoto from "../../Photos/user_default.png";

class Profile extends Component{

    state = {
        user: {},
        currentUserId: localStorage.getItem('id')
    };

    componentDidMount() {
        this.getUserData();
    }

    getUserData = () => {
        axios.otherRequest.get('users/' + this.state.currentUserId).then(result => {
            console.log(result.data);
            this.setState({
                user: result.data
            });
        }).catch(error => {
            console.log(error)
        });
    };

    onImageChange = (event) => {
        let image = event.target.files[0];
        this.setState({
            image: image
        })
    };

    onNameChange = (event) => {
        let name = event.target.value;
        this.setState({
            name: name
        });
    };

    onDescriptionChange = (event) => {
        let about = event.target.value;
        this.setState({
            about: about
        });
    };

    updateUserData = () => {

        let self = this;

        if (this.state.image != null) {
            var formData = new FormData();
            formData.append("upload", this.state.image);
            axios.otherRequest.post('test/images?type=PROFILE', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(result => {

                if (this.state.name !== this.state.user.name || this.state.about !== this.state.user.about) {
                    axios.otherRequest.put('users/', {
                        id: this.state.currentUserId,
                        name: this.state.name,
                        about: this.state.about,
                        photo: result.data.id
                    })
                        .then(function (response) {
                            console.log(response);
                            self.props.history.push("/main");
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }

            })
        } else {
            if (this.state.name !== this.state.user.name || this.state.about !== this.state.user.about) {
                axios.otherRequest.put('users/', {
                    id: this.state.currentUserId,
                    name: this.state.name,
                    about: this.state.about
                })
                    .then(function (response) {
                        console.log(response);
                        self.props.history.push("/main");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }

    };

    render() {

        let profilePhoto = defaultPhoto;
        let username = "No username";
        let about = "No description";

        if (this.state.user != null) {

            if (this.state.user.photo != null) {
                let token = localStorage.getItem('token');
                profilePhoto = 'http://localhost:8080/test/images/public/' + this.state.user.photo + '?token=' + token;
            }

            if (this.state.user.name != null) {
                username = this.state.user.name;
            }

            if (this.state.user.about != null) {
                about = this.state.user.about;
            }


        }

        return (
            <div>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <img src={profilePhoto} width="130px" height="130px" className={styles.userPhoto}/>
                        <div className="form-group">
                            <input type="file" id="exampleInputFile" onChange={this.onImageChange}/>
                        </div>
                    </div>
                    <div className={styles.headerRight}>
                        <div className="form-group" id={styles.username}>
                            <div className="input-group">
                                <input id="username" className="form-control input-lg" type="text" placeholder={username} maxLength="30" onChange={this.onNameChange}/>
                            </div>
                        </div>
                        <div className={styles.userDescription}>
                            <textarea className="form-control" placeholder={about} rows="4" onChange={this.onDescriptionChange}/>
                        </div>
                    </div>
                    <div className={styles.removeFloat}/>
                </header>
                <button type="button" className={`${styles.saveButton} ${"btn"} ${"btn-success"}`} onClick={this.updateUserData}>Save changes</button>
            </div>
        );
    }

}

export default Profile;
