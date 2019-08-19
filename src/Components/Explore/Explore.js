import React, {Component} from 'react';
import styles from './Explore.module.css';
import photo from '../../Photos/photo.jpeg';

class Explore extends Component {

    render() {

        let posts = [];
        for(let i = 0; i < 15; i++) {
            posts.push(
                <div className={`${"col-sm-4"} ${styles.post}`}>
                    <img src={photo} width="100%" height="300px"/>
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