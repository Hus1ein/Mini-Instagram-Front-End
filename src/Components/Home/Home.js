import React, { Component } from 'react';
import Post from "./Post/Post";
import styles from "./Home.module.css";
import photo from "../../Photos/photo.jpeg";
import Stories from "./Stories/Stories";
import CreatePostModal from "../Modal/CreatePost/CreatePostModal";
import axios from "../../Enviroments/axiosDev";

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

    createPost = (image, text) => {
        this.setState({
            "show": false
        });
        let self = this;

        var formData = new FormData();
        formData.append("upload", image);
        axios.otherRequest.post('test/images?type=POST', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(result => {
            axios.otherRequest.post('posts/', {
                content: text,
                picture: result.data.id
            })
                .then(function (response) {
                    let posts = self.state.posts;
                    console.log(posts);
                    posts.unshift(<Post key={response.data.id}
                        postData={response.data}
                    />);
                    console.log(posts);
                    self.setState({
                        posts: posts
                    })
                    console.log(self.state.posts);
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
        })

    };

    getPosts = () => {

        axios.otherRequest.get('posts/').then(result => {
            console.log(result.data);
            let posts = [];
            for (let i = 0; i < result.data.length; i++) {
                let post = (
                    <Post key={result.data[i].id}
                        postData={result.data[i]}
                    />
                );
                posts.push(post);
            }

            this.setState({
                posts: posts
            });
        }).catch(error => {
            console.log(error)
        });

        /*let postObject= {
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
        });*/


    };

    render() {
        return (
            <div>

                <CreatePostModal className={styles.modal} show={this.state.show} cancel={this.closeDialog} submit={this.createPost}/>

                <div className={styles.posts}>
                    <button className={`${styles.newPostButton} ${"btn"} ${"btn-default"}`} onClick={this.openDialog}>Create post</button>
                    {this.state.posts}
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
