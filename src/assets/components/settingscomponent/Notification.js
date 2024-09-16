import React, { useState } from "react";

function Notification() {
    // useState hook to manage the on/off state
  const [isInboxOn, setIsInboxOn] = useState(false);
  const [isChatOn, setIsChatOn] = useState(false);
  const [isInvetoryOn, setIsInvetoryOn] = useState(false);
  const [isTrackOn, setIsTrackOn] = useState(false);

  // Function to toggle the state
  const handleInboxToggle = () => {
    setIsInboxOn(!isInboxOn);
  };
  const handleChatToggle = () => {
    setIsChatOn(!isChatOn);

  };
  const handleInvetoryToggle = () => {
    setIsInvetoryOn(!isInvetoryOn);

  };
  const handleTrackToggle = () => {
    setIsTrackOn(!isTrackOn);
  };

    return (
        <>
        <div className="notification-title">Notification</div>
        <div className="notification-sub-title">Click the toggle to enable your preferred notifications</div>

        <div className="notification-toggle-box">
            <div className="togle-label">Inbox</div>
            <div className="bar-switch" onClick={handleInboxToggle}>
                <div className={`bar ${isInboxOn ? "on" : "off"}`}>
                    <div className="slider-bar"></div>
                </div>
                <span className="bar-label">{isInboxOn ? "On" : "Off"}</span>
            </div>
        </div>
        <div className="notification-toggle-box">
            <div className="togle-label">Chat</div>
            <div className="bar-switch" onClick={handleChatToggle}>
                <div className={`bar ${isChatOn ? "on" : "off"}`}>
                    <div className="slider-bar"></div>
                </div>
                <span className="bar-label">{isChatOn ? "On" : "Off"}</span>
            </div>
        </div>
        <div className="notification-toggle-box">
            <div className="togle-label">Inventory</div>
            <div className="bar-switch" onClick={handleInvetoryToggle}>
                <div className={`bar ${isInvetoryOn ? "on" : "off"}`}>
                    <div className="slider-bar"></div>
                </div>
                <span className="bar-label">{isInvetoryOn ? "On" : "Off"}</span>
            </div>
        </div>
        <div className="notification-toggle-box">
            <div className="togle-label">Track Recorded</div>
            <div className="bar-switch" onClick={handleTrackToggle}>
                <div className={`bar ${isTrackOn ? "on" : "off"}`}>
                    <div className="slider-bar"></div>
                </div>
                <span className="bar-label">{isTrackOn ? "On" : "Off"}</span>
            </div>
        </div>


        </>
    )
}

export default Notification;