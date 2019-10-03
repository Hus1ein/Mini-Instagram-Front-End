import React, { Component } from 'react';
import styles from './Post.module.css';
import defaultPhoto from "../../../Photos/user_default.png";
import axios from "../../../Enviroments/axiosDev";
import {Link} from "react-router-dom";

class Post extends Component {
    state = {
        likeIcon:  <i className="fa fa-heart-o"/>,
        liked: false,
        likesNumber: this.props.postData.likedBy.length
    };

    componentWillMount() {
        let userId = localStorage.getItem("id");

        for (let i=0; i < this.props.postData.likedBy.length; i++) {
            if (this.props.postData.likedBy[i] === userId) {

                this.setState({
                    likeIcon:  <i className="fa fa-heart"/>,
                    liked: true
                });
                break;
            }
        }
    }

    onLikeClickHandler = () => {
        let likesNum =  this.state.likesNumber;
        if (this.state.liked === false) {
            this.setState({
                likeIcon:  <i className="fa fa-heart"/>,
                liked: true,
                likesNumber: likesNum + 1
            });

            axios.otherRequest.get('posts/like?postId=' + this.props.postData.id);

        } else {
            this.setState({
                likeIcon:  <i className="fa fa-heart-o"/>,
                liked: false,
                likesNumber: likesNum -1
            });

            axios.otherRequest.get('posts/remove-like?postId=' + this.props.postData.id);
        }
    };

    render() {


        let date = new Date(this.props.postData.lastModified);
        let userPhoto = defaultPhoto;

        let token = localStorage.getItem('token');
        if (this.props.postData.user.photo != null) {
            userPhoto = 'http://localhost:8080/test/images/public/' + this.props.postData.user.photo + '?token=' + token;
        }

        let picture = 'http://localhost:8080/test/images/public/' + this.props.postData.picture + '?token=' + token;

        return (
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <img src={userPhoto} width="40px" height="40px" className={styles.postHeaderPhoto} id="side-bar-profile-image"/>
                    <Link to={"/main/profile/" + this.props.postData.user.id}><p className={styles.postHeaderUsername}>{this.props.postData.user.name}</p></Link>
                </div>
                <img className={styles.postPhoto} src={picture}/>
                <div>
                    <div className={styles.postLikeIcon} onClick={this.onLikeClickHandler}>{this.state.likeIcon}</div>
                    <div className={styles.postDeleteFloat}></div>
                </div>
                <div>
                    <p className={styles.postLikesNumber}>{this.state.likesNumber} Likes</p>
                    <p className={styles.postDescription}>
                        <span className={styles.postDescriptionUsername}>{this.props.postData.user.name} </span>
                        {this.props.postData.content}
                    </p>
                    <p className={styles.postCreatedAt}>{date.toUTCString()}</p>
                    {/*<hr className={styles.postHorizontalLine}/>
                    <textarea className={styles.postNewComment} placeholder="Add a comment..."/>*/}
                </div>
            </div>
        );
    }
}

export default Post;
