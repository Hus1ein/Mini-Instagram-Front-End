import React, { Component } from 'react';
import styles from './Post.module.css';
import photo from '../../../Photos/photo.jpeg';
import photo1 from '../../../Photos/photo1.jpg';
import photo2 from '../../../Photos/photo2.jpg';
import photo3 from '../../../Photos/photo3.jpg';

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

        return (
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <img src={photo} width="40px" height="40px" className={styles.postHeaderPhoto} id="side-bar-profile-image"/>
                    <p className={styles.postHeaderUsername}>{this.props.postData.user.username}</p>
                </div>
                <img className={styles.postPhoto} src={photos[Math.floor(Math.random() * 4)]}/>
                <div>
                    <div className={styles.postLikeIcon} onClick={this.onLikeClickHandler}>{this.state.likeIcon}</div>
                    <div className={styles.postCommentIcon}><i className="far fa-comment"/></div>
                    <div className={styles.postDeleteFloat}></div>
                </div>
                <div>
                    <p className={styles.postLikesNumber}>151 Likes</p>
                    <p className={styles.postDescription}>
                        <span className={styles.postDescriptionUsername}>{this.props.postData.user.username}</span>
                        This is my first post
                    </p>
                    <p className={styles.postCreatedAt}>{this.props.postData.lastModified.toDateString()}</p>
                    <hr className={styles.postHorizontalLine}/>
                    <textarea className={styles.postNewComment} placeholder="Add a comment..."/>
                </div>
            </div>
        );
    }
}

export default Post;
