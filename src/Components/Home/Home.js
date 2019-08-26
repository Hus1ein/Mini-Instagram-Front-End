import React, { Component } from 'react';
import Post from "./Post/Post";
import styles from "./Home.module.css";
import photo from "../../Photos/photo.jpeg";
import Stories from "./Stories/Stories";
import CreatePostModal from "../Modal/CreatePost/CreatePostModal";

class Home extends Component {

    state = {
        posts: [],
        "show": false
    };

    openDialog = () => {
        this.setState({
            "show": true
        });
    };

    closeDialog = () => {
        this.setState({
            "show": false
        });
    };

    createPost = () => {
        this.setState({
            "show": false
        });
    };

    getPosts = () => {
        let postObject= {
            id: "12345",
            userId: "12345678",
            user: {
                username: "Hussain Abdel-ilah",
                userPhoto: "https://www.get-instagram.herokuapp.com"
            },
            content: "This is my first post, it's just test",
            picture: "https://www.get-instagram.herokuapp.com",
            createdAt: new Date(),
            lastModified: new Date(),
            likedBy: [
                "123", "1231", "43423423"
            ]
        };

        let posts = [];
        for (let i = 0; i < 5; i++) {
            let post = (
                <Post
                    postData={postObject}
                />
            );
            posts.push(post);
        }

        this.setState({
            posts: posts
        });
    };

    render() {
        return (
            <div>

                <CreatePostModal show={this.state.show} cancel={this.closeDialog} submit={this.createPost}/>

                <div className={styles.posts}>
                    <button className={`${styles.newPostButton} ${"btn"} ${"btn-default"}`} onClick={this.openDialog}>Create post</button>
                    {this.state.posts}
                </div>

                <div className={styles.rightSide}>
                    <div className={styles.userPhotoAndName}>
                        <img src={photo} width="50px" height="50px" className={styles.userPhoto}/>
                    </div>
                    <div className={styles.userPhotoAndName}>
                        <p className={styles.username}>husein_1abd</p>
                    </div>
                    <div className={styles.removeFloat}/>
                    <Stories/>
                </div>

                <div className={styles.removeFloat}/>

            </div>
        );
    }

    componentDidMount() {
        //The best place to connect to server and get data for first time.
        this.getPosts();
    }
}

export default Home;
