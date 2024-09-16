import React from "react";
import '../css/Dashboard.css';
import search from '../images/search.svg';
import filter from '../images/filter.svg';
import notifications from '../images/notifications.svg';
import profile from '../images/profile.svg';

function DashboardHeader() {
    return (
        <>
        <div className="op">
            <input type="search" className="frame-9" placeholder="Search here..." />
            <img className="icons" src={search} />
            <img className="tune" src={filter} />            
        </div>

        <div className="frame-3043">
            <img className="notifications" src={notifications} />
            <div className="hello-femi-welcome">Hello Femi Welcome!</div>
            <img className="ellipse-1" src={profile} />
        </div>
        </>
    )
}

export default DashboardHeader;