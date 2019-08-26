import React, {Component} from "react";
import styles from "./Profile.module.css";
import profilePhoto from "../../Photos/profile.jpg";
import photo from "../../Photos/photo.jpeg";
import Story from "../Home/Stories/Story/Story";

class Profile extends Component{

    render() {

        let stories = [];
        for (let i = 0; i < 10; i++) {
            stories.push(
                <div className={styles.story}>
                    <Story/>
                </div>
            );
        }

        let posts = [];
        for (let i = 0; i < 10; i++) {
            posts.push(
                <div className={`${"col-sm-4"} ${styles.post}`}>
                    <img src={photo} width="100%" height="300px"/>
                </div>
            )
        }

        return (
            <div className={styles.body}>
                <div className={styles.main}>
                    <header className={styles.header}>
                        <div className={styles.headerLeft}>
                            <img src={profilePhoto} width="130px" height="130px" className={styles.userPhoto}/>
                        </div>
                        <div className={styles.headerRight}>
                            <p className={styles.username}>husein_1abd</p>
                            <div className={styles.postsFollowersFollowings}>
                                <div className={styles.postsNumber}>
                                    <p>10 posts</p>
                                </div>
                                <div className={styles.followersNumber}>
                                    <p>65 followers</p>
                                </div>
                                <div className={styles.followingsNumber}>
                                    <p>84 following</p>
                                </div>
                                <div className={styles.removeFloat}></div>
                            </div>
                            <div className={styles.userDescription}>
                                <p>Sarajevo, BiH <br/> Software Developer @bpuholdings</p>
                            </div>
                        </div>
                        <div className={styles.removeFloat}/>
                    </header>

                    {/*Stories section*/}
                    <section className={styles.stories}>
                        {stories}
                    </section>

                    <div className="row">
                        <div className="col-sm-6">
                            <button className={`${styles.postsAndSavedButtons} ${"btn"} ${"btn-success"}`}>Posts</button>
                        </div>
                        <div className="col-sm-6">
                            <button className={`${styles.postsAndSavedButtons} ${"btn"} ${"btn-info"}`}>Saved</button>
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