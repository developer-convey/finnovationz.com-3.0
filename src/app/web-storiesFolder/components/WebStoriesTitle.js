import React from "react";
import '../styles/webstoriestitle.css';

const WebStoriesTitle = () => {
    return (
        <div className="web-story-container">
            <div className="web-story-header">
                <div className="web-story-logo">
                    <img src="/webstories_prasad.png" alt="Web Story Logo" className="web-story-image" />
                </div>
                <div className="web-story-title">
                    <div>
                        <span>Web Stories</span>
                    </div>
                    <div>
                        <p>
                        FinnovationZ is a finance awareness company whose mission about making India financially
                        aware. FinnovationZ has been the finance education industry ever since the last 10 years, 
                        Our mission is to financially educate 10 crore people. For continuous finance education 
                        and insights, follow our web story.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebStoriesTitle;