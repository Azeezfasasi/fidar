import React from "react";
import { Helmet } from "react-helmet";
import '../assets/css/Login.css';
import welcomeicon from '../assets/images/welcomeicon.svg';
import google from '../assets/images/google.svg';
import facebook from '../assets/images/facebook.svg';
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
        <Helmet>
            <title>Reset Password - Fidar</title>
        </Helmet>
        <div className="login-page">
            <Link to="/"><img className="group-28-1" src={welcomeicon} /></Link>
            <div className="sign-in-container">
                <div className="Sign-up-contents">
                    <div className="frame-8">
                    <div className="forgotten-password-title">Forgotten Password?</div>
                        <div className="get-reset-container">
                            <div className="get-reset-wrapper">
                                <div className="get-reset-link-with-your-email">Get reset link with your email</div>
                            </div>
                        </div>
                        <div className="reset-input-box">
                            <div className="reset-input-container">
                                <div className="reset-input">
                                    <input type="email" className="reset-input-open" placeholder="Type in your email"/>
                                </div>
                            </div>
                            <div className="frame-5">
                            </div>
                        </div>
                        <button className="reset-btn-box">
                            <div className="button4">Get Link</div>
                        </button>
                    </div>
                </div>
                <Link to="/pages/login" className="remember-your-password-log-in">Remember your password? Log In</Link>
            </div>
        </div>

        </>
    )
}

export default Login;