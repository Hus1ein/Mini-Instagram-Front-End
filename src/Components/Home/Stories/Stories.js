import React, { Component } from 'react';
import './stories.css';
import Story from "./Story/Story";

class Stories extends Component {
    render() {
        let stories = [];
        for (let i = 0; i < 5; i++) {
            stories.push(<Story/>);
        }
        return (
            <div className="stories-body">
                <p className="stories-title">Stories</p>
                <div className="stories-scroll">
                    {stories}
                </div>
            </div>
        );
    }
}

export default Stories;
