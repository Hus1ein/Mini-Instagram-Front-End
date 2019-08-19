import React from 'react';
import styles from './App.module.css';
import Home from "./Components/Home/Home";
import Stories from "./Components/Home/Stories/Stories";
import photo from "./Photos/photo.jpeg";
import Profile from "./Components/Profile/Profile";
import Explore from "./Components/Explore/Explore";

function App() {
  return (
      <div>
        <div className={styles.posts}>
          <Home/>
        </div>
        <div className={styles.stories}>
          <img src={photo} width="40px" height="40px" className="rounded-img story-photo" id="side-bar-profile-image"/>
          <Stories/>
        </div>
        {/*<Profile/>*/}
        {/*<Explore/>*/}
      </div>
  );
}

export default App;
