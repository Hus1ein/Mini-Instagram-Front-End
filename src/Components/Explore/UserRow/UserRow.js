import React from "react";
import photo from "../../../Photos/profile.jpg";
import styles from './UserRow.module.css';
import defaultPhoto from "../../../Photos/user_default.png";

class UserRow extends React.Component {

    render() {

        let profilePhoto = defaultPhoto;
        if (this.props.data.photo != null) {
            let token = localStorage.getItem('token');
            profilePhoto = 'http://localhost:8080/test/images/public/' + this.props.data.photo + '?token=' + token;
        }

        let canFollow = false;
        if (this.props.data.canFollow == false) {
            canFollow = true;
        }

        return (
            <div className={styles.main}>
                <img src={profilePhoto} width="40px" height="40px" className={styles.userPhoto}/>
                <div className={styles.username}>
                    {this.props.data.username}
                </div>
                <button disabled={canFollow} type="button" className={`${styles.follow} ${"btn"} ${"btn-success"}`} onClick={() => this.props.onFollowClickHandler(this.props.data.id)}>Follow</button>
            </div>
        );

    }


}

export default UserRow;