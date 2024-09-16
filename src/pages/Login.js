import React from "react";
import { Helmet } from "react-helmet";
import '../assets/css/Login.css';
import welcomeicon from '../assets/images/welcomeicon.svg';
import google from '../assets/images/google.svg';
import facebook from '../assets/images/facebook.svg';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login() {
    const [isRememberOn, setIsRememberOn] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: ''});
    const navigate = useNavigate();

    const handleRemenberToggle = () => {
        setIsRememberOn(!isRememberOn);
      };

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation or API call here
        if (formData.username && formData.password) {
        // Assume successful submission
        console.log('Form submitted:', formData);

        // Redirect to the dashboard page
        navigate('/pages/dashboard');
        }
    };
    return (
        <>
        <Helmet>
            <title>Login - Fidar</title>
        </Helmet>
        <div className="login-page">
            <Link to="/"><img className="group-28-1" src={welcomeicon} /></Link>
            <div className="sign-in-container">
                <div className="Sign-up-contents">
                    <form className="frame-8" onSubmit={handleSubmit}>
                        <div class="sign-in-title">Sign In</div>
                            <div className="sign-in-with-title">
                                <div className="line">
                                    <div className="rectangle-2926"></div>
                                </div>
                                <div className="group-2197">
                                    <div className="sign-in-with-text">Sign in with</div>
                                </div>
                            </div>
                            <div className="frame-1">
                                <div className="signin-btn-google">
                                    <div className="icon-colored-google">
                                        <img className="group-3269" src={google} />
                                    </div>
                                    <div className="signin-btn-google-text">Sign in with Google</div>
                                </div>
                                <div className="signin-btn-google">
                                    <img className="icon-colored-facebook" src={facebook} />
                                    <div className="signin-btn-google-text">Sign in with Facebook</div>
                                </div>
                            </div>
                            <div className="frame-2">
                                <div className="line2">
                                    <div className="rectangle-29262"></div>
                                </div>
                                <div className="or">Or</div>
                                <div className="line2">
                                    <div className="rectangle-29262"></div>
                                </div>
                            </div>
                            <div className="frame-6">
                                <div className="frame-3">
                                    <div className="input">
                                        <input type="text" className="input-default-racktangle-true-large-light" name="username" value={formData.username} onChange={handleChange} required/>
                                        <div className="label">Name</div>
                                    </div>
                                    <div className="input">
                                        <input type="text" className="input-default-racktangle-true-large-light" name="password" value={formData.password} onChange={handleChange} required/>
                                        <div className="label2">Password</div>
                                    </div>
                                </div>
                                <div className="frame-5">
                                    <div className="frame-4">
                                        {/* <div className="toggle">
                                            <div className="toggle-on">
                                                <div className="rectangle-348"></div>
                                                <div className="ellipse-141"></div>
                                            </div>
                                        </div> */}
                                        <div className="bar-switch" onClick={handleRemenberToggle}>
                                            <div className={`bar ${isRememberOn ? "on" : "off"}`}>
                                                <div className="slider-bar"></div>
                                            </div>
                                            <span className="bar-label">{isRememberOn ? "" : ""}</span>
                                        </div>
                                        <div className="group-2194">
                                            <Link to="/" className="remember-me">Remember Me</Link>
                                        </div>
                                    </div>
                                    <div className="group-2200">
                                    <Link to="/pages/resetpassword" className="forgot-password">Forgot Password?</Link>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="button3">
                                <div className="button4">Sign In</div>
                            </button>
                    </form>
                </div>
                <Link to="/pages/signup" className="create-an-account">Create an account</Link>
            </div>
        </div>

        </>
    )
}

export default Login;