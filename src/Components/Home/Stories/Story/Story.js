import React, { Component } from 'react';
import './story.css';
import photo from "../../../../Photos/photo.jpeg";

class Story extends Component {
    render() {
        return (
            <div className="story-body">
                <div className="story-left-side">
                    <img src={photo} width="40px" height="40px" className="rounded-img story-photo" id="side-bar-profile-image"/>
                </div>
                <div className="story-right-side">
                    <p className="story-username">Ahmed Hodzic</p>
                    <p className="story-created-at">21 MINUTES AGO</p>
                </div>
                <div className="story-delete-float"/>
            </div>
        );
    }
}

export default Story;
