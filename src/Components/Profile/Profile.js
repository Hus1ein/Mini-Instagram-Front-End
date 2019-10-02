import React, {Component} from "react";
import styles from "./Profile.module.css";
import defaultPhoto from "../../Photos/user_default.png";
import photo from "../../Photos/photo.jpeg";
import axios from "../../Enviroments/axiosDev";

class Profile extends Component{

    state = {
        user: {},
        currentUserId: this.props.match.params.id,
        userPosts: []
    };

    componentDidMount() {
        this.getUserData();
        this.getUserPosts();
    }

    getUserPosts = () => {
        axios.otherRequest.get('posts/' + this.state.currentUserId).then(result => {
            console.log(result.data);
            this.setState({
                userPosts: result.data
            });
        }).catch(error => {
            console.log(error)
        });
    };

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

    render() {

        let posts = [];
        let token = localStorage.getItem('token');
        for (let i = 0; i < this.state.userPosts.length; i++) {
            let picture = 'http://localhost:8080/test/images/public/' + this.state.userPosts[i].picture + '?token=' + token;
            posts.push(
                <div className={`${"col-sm-4"} ${styles.post}`}>
                    <img src={picture} width="100%" height="300px"/>
                </div>
            )
        }

        let profilePhoto = defaultPhoto;
        let username = "No username";
        let about = "No description";
        let followersNumber = 0;
        let followingNumber = 0;
        let postsNumber = 0;

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

            followersNumber = this.state.user.followersNumber;
            followingNumber = this.state.user.followingNumber;
            postsNumber = this.state.user.postsNumber;

        }



        return (
            <div className={styles.body}>
                <div className={styles.main}>
                    <header className={styles.header}>
                        <div className={styles.headerLeft}>
                            <img src={profilePhoto} width="130px" height="130px" className={styles.userPhoto}/>
                        </div>
                        <div className={styles.headerRight}>
                            <p className={styles.username}>{username}</p>
                            <div className={styles.postsFollowersFollowings}>
                                <div className={styles.postsNumber}>
                                    <p>{postsNumber} posts</p>
                                </div>
                                <div className={styles.followersNumber}>
                                    <p>{followersNumber} followers</p>
                                </div>
                                <div className={styles.followingsNumber}>
                                    <p>{followingNumber} following</p>
                                </div>
                                <div className={styles.removeFloat}></div>
                            </div>
                            <div className={styles.userDescription}>
                                <p>{about}</p>
                            </div>
                        </div>
                        <div className={styles.removeFloat}/>
                    </header>

                    <div className={styles.postsAndSaved}>
                        <div className="row">
                            <div className="col-sm-6">
                                <button className={`${styles.postsAndSavedButtons} ${"btn"} ${"btn-success"}`}>Posts</button>
                            </div>
                            <div className="col-sm-6">
                                <button className={`${styles.postsAndSavedButtons} ${"btn"} ${"btn-info"}`}>Saved</button>
                            </div>
                        </div>
                    </div>

                    {/*Posts section*/}
                    <section className={styles.posts}>
                        <div className="row">
                            {posts}
                        </div>
                    </section>
                </div>
            </div>
        );
    }

}

export default Profile;