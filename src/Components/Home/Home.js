import React, { Component } from 'react';
import Post from "./Post/Post";

class Home extends Component {

    state = {
        posts: []
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
                {this.state.posts}
            </div>
        );
    }

    componentDidMount() {
        //The best place to connect to server and get data for first time.
        this.getPosts();
    }
}

export default Home;
