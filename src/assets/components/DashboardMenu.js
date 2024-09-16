import React, { useState} from "react";
import '../css/Dashboard.css';
import dashboard from '../images/dashboard.svg';
import indentdecrease from '../images/indentdecrease.svg';
import fidarlogo from '../images/fidarlogo.svg';
import inbox from '../images/inbox.svg';
import outbox from '../images/outbox.svg';
import draft from '../images/drafts.svg';
import grade from '../images/grade.svg';
import analytics from '../images/analytics.svg';
import folder from '../images/folder.svg';
import upload from '../images/upload.svg';
import folderopen from '../images/folderopen.svg';
import chat from '../images/chat.svg';
import folderdelete from '../images/folderdelete.svg';
import settings from '../images/settings.svg';
import help from '../images/help.svg';
import { Link, NavLink } from "react-router-dom";

function Dashboard() {
     // State to control whether the menu is open or closed
     const [isMenuOpen, setIsMenuOpen] = useState(true);

     // Function to toggle the menu
     const toggleMenu = () => {
         setIsMenuOpen(!isMenuOpen);
     };

    return (
        <>
        <div className={`dashboard-menu ${isMenuOpen ? 'open' : 'closed'}`}>
            <div className="logo">
                <img className="group-1" src={fidarlogo} />
                <NavLink to="/" className="fidar">FIDAR</NavLink>
                <img 
                    className="indent-decrease" 
                    src={indentdecrease} 
                    alt="Toggle Menu" 
                    onClick={toggleMenu} 
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <NavLink 
                to="/pages/dashboard" 
                className="list2" 
                activeClassName="active-link"
            >
                <img className="dashboard" src={dashboard} />
                {isMenuOpen && <div className="dashboard2">Dashboard</div>}
            </NavLink>
            <NavLink 
                to="/pages/inbox" 
                className="list2" 
                activeClassName="active-link"
            >
                <img className="move-to-inbox" src={inbox} />
                {isMenuOpen && <div className="inbox">Inbox</div>}
            </NavLink>
            <NavLink 
                to="/pages/outbox" 
                className="list2" 
                activeClassName="active-link"
            >
                <img className="outbox" src={outbox} />
                {isMenuOpen && <div className="inbox">Outbox</div>}
            </NavLink>
            <NavLink 
                to="/pages/draft" 
                className="list2" 
                activeClassName="active-link"
            >
                <img className="drafts" src={draft} />
                {isMenuOpen && <div className="draft">Draft</div>}
            </NavLink>
            <NavLink 
                to="/pages/starred" 
                className="list2" 
                activeClassName="active-link"
            >
                <img className="grade" src={grade} />
                {isMenuOpen && <div className="starred">Starred</div>}
            </NavLink>
            {/* Other menu items remain unchanged */}
            <div className="seun">
                <div className="inventory">Inventory</div>
                <img className="vector" src="vector0.svg" />
            </div>
            <div className="list2">
                <img className="analytics" src={analytics} />
                <div className="tracked-record">Tracked Record</div>
            </div>
            <div className="list2">
                <img className="folder" src={folder} />
                <div className="team-folder">Team Folder</div>
            </div>
            <div className="list2">
                <img className="upload" src={upload} />
                <div className="my-upload">My Upload</div>
            </div>
            <div className="list2">
                <img className="folder-open" src={folderopen} />
                <div className="public-folder">Public Folder</div>
            </div>
            <div className="list2">
                <img className="chat" src={chat} />
                <div className="instant-chat">Instant Chat</div>
            </div>
            <div className="list2">
                <img className="folder-delete" src={folderdelete} />
                <div className="trash">Trash</div>
            </div>
            {/* <div className="section">
                <div className="admin">ADMIN</div>
            </div> */}
            <NavLink 
                to="/pages/settings" 
                className="list2"
                activeClassName="active-link"
                >
                <img className="settings" src={settings} />
                {isMenuOpen && <div className="inbox">Settings</div>}
            </NavLink>
            <NavLink 
                to="/pages/help" 
                className="list2" 
                activeClassName="active-link"
            >
                <img className="outbox" src={help} />
                {isMenuOpen && <div className="inbox">Help</div>}
            </NavLink>
        </div>
        </>
    );
}

export default Dashboard;
