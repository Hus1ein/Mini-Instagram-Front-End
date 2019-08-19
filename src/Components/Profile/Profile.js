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

                <nav className="navbar navbar-default navbar-fixed-top">

                    <div className={styles.menuMargin}>
                    <div className="container-fluid">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" href="#">Mini Instagram</a>
                        </div>


                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <form className="navbar-form">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Search"/>
                                        </div>
                                        <button type="submit" className="btn btn-default">Submit</button>
                                    </form>
                                </li>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Profile</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </nav>

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