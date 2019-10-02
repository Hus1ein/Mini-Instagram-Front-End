import React, { Component } from 'react';
import styles from './Post.module.css';
import photo from '../../../Photos/photo.jpeg';
import photo1 from '../../../Photos/photo1.jpg';
import photo2 from '../../../Photos/photo2.jpg';
import photo3 from '../../../Photos/photo3.jpg';
import defaultPhoto from "../../../Photos/user_default.png";

class Post extends Component {
    state = {
        "likeIcon": <i className="far fa-heart"></i>
    };

    onLikeClickHandler = () => {
        this.setState({
            "likeIcon": <i className="far fa-heart post-heart-red" aria-hidden="true"></i>
        });
    };

    render() {

        let photos = [photo, photo1, photo2, photo3];

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
                    <p className={styles.postHeaderUsername}>{this.props.postData.user.name}</p>
                </div>
                <img className={styles.postPhoto} src={picture}/>
                <div>
                    <div className={styles.postLikeIcon} onClick={this.onLikeClickHandler}><i className="fa fa-heart-o"/></div>
                    <div className={styles.postDeleteFloat}></div>
                </div>
                <div>
                    <p className={styles.postLikesNumber}>{this.props.postData.likedBy.length} Likes</p>
                    <p className={styles.postDescription}>
                        <span className={styles.postDescriptionUsername}>{this.props.postData.user.name} </span>
                        {this.props.postData.content}
                    </p>
                    <p className={styles.postCreatedAt}>{date.toUTCString()}</p>
                    <hr className={styles.postHorizontalLine}/>
                    <textarea className={styles.postNewComment} placeholder="Add a comment..."/>
                </div>
            </div>
        );
    }
}

export default Post;
