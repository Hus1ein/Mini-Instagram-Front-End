import React, {Component} from 'react';
import styles from './Explore.module.css';
import photo from '../../Photos/photo.jpeg';
import photo1 from '../../Photos/photo1.jpg';
import photo2 from '../../Photos/photo2.jpg';
import photo3 from '../../Photos/photo3.jpg';

class Explore extends Component {

    render() {

        let photos = [photo, photo1, photo2, photo3];

        let posts = [];
        for(let i = 0; i < 15; i++) {
            posts.push(
                <div className={`${"col-sm-4"} ${styles.post}`}>
                    <img src={photos[Math.floor(Math.random() * 4)]} width="100%" height="300px"/>
                </div>
            );
        }

        return (
            <div className={styles.main}>
                <div className="row">
                    {posts}
                </div>
            </div>
        );
    }


}

export default Explore;