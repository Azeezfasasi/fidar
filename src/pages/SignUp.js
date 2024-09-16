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
    const [formData, setFormData] = useState({ username: '', password: '', repeatpassword: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation or API call here
        if (formData.username && formData.password && formData.repeatpassword) {
        // Assume successful submission
        console.log('Form submitted:', formData);

        // Redirect to the dashboard page
        navigate('/pages/dashboard');
        }
    };
    return (
        <>
        <Helmet>
            <title>Sign Up - Fidar</title>
        </Helmet>
        <div className="login-page">
            <Link to="/"><img className="group-28-1" src={welcomeicon} /></Link>
            <div className="sign-up-container">
                <div className="Sign-up-contents">
                    <form className="frame-8" onSubmit={handleSubmit}>
                        <div class="sign-up-title">Sign Up</div>
                        <div className="sign-up-with-title">
                            <div className="line">
                                <div className="rectangle-2926"></div>
                            </div>
                            <div className="group-2197">
                                <div className="sign-up-with-text">Sign up with</div>
                            </div>
                        </div>
                        <div className="frame-1">
                            <div className="signin-btn-google">
                                <div className="icon-colored-google">
                                    <img className="group-3269" src={google} />
                                </div>
                                <div className="signin-btn-google-text">Sign up with Google</div>
                            </div>
                            <div className="signin-btn-google">
                                <img className="icon-colored-facebook" src={facebook} />
                                <div className="signin-btn-google-text">Sign up with Facebook</div>
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
                            {/*  */}
                            <div className="frame-141">
                                <div className="p-input">
                                    <input type="text" className="input-default-racktangle-true-large-light" name="repeatpassword" value={formData.repeatpassword} onChange={handleChange} required/>
                                    <div className="label">Password</div>
                                </div>
                                <div className="progress">
                                    <div className="rectangle-250"></div>
                                    <div className="rectangle-239"></div>
                                </div>
                                <div className="not-bad-but-you-know-you-can-do-it-better">
                                    Not bad but you know you can do it better
                                </div>
                            </div>
                                {/*  */}
                            <div className="frame-5">
                                <div class="frame-12">
                                    <div class="check-box">
                                        <input type="checkbox" class="rectangle-3036" style={{marginTop: '0px'}} required />
                                    </div>
                                    <div class="i-agree-to-terms-conditions">
                                        <span>
                                        <span class="i-agree-to-terms-conditions-span">I agree to </span>
                                        <Link class="i-agree-to-terms-conditions-span2">
                                            terms &amp; conditions
                                        </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="button3">
                            <div className="button4">Sign Up</div>
                        </button>
                    </form>
                </div>
            <Link to="/pages/login" className="already-have-account">Sign In</Link>
            </div>
        </div>

        </>
    )
}

export default Login;