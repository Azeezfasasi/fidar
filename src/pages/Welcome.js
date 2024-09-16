import React from "react";
import welcomeicon from '../assets/images/welcomeicon.svg';
import '../assets/css/Welcome.css';
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <>
        <div class="welcome-page">
            <Link to="/pages/login">
                <img class="welcome-icon" src={welcomeicon} />
            </Link>
        </div>

        </>
    )
}

export default Welcome;