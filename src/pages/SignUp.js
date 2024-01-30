import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./Register.css";

export default function register() {
    return(
        <>
            <h1 className="register-title">Sign-Up Today!</h1>
            <p className="register-subtitle">Already have an account? <Link className="register-link" to={PathConstants.LOGIN}>Sign in here.</Link></p>
            <div className="register-form-wrapper">
            <form className="register-form">
                <div className="register-multi-wrapper">
                    <div className="register-input-wrapper">
                        <label className="register-label">First Name</label>
                        <input className="register-input" />
                    </div>
                    <div className="register-input-wrapper">
                        <label className="register-label">Last Name</label>
                        <input className="register-input" />
                    </div>
                </div>
                    <div className="register-input-wrapper">
                        <label className="register-label">E-mail Address</label>
                        <input className="register-input" />
                    </div>
                    <div className="register-multi-wrapper">
                    <div className="register-input-wrapper">
                        <label className="register-label">Password</label>
                        <input className="register-input" />
                    </div>
                    <div className="register-input-wrapper">
                        <label className="register-label">Last Name</label>
                        <input className="register-input" />
                    </div>
                </div>
                <div className="register-button-wrapper">
                    <Link to="/account-settings"><button className="register-button">Sign Up</button></Link>
                    <p className="register-disclaimer">*By creating an account, you agree to our <Link className="register-link" to={PathConstants.PRIVACY_POLICY}>Privacy Policy</Link> and <Link className="register-link" to={PathConstants.TERMS_OF_USE}>Terms of Service</Link>.</p>
                </div>
            </form>
            </div>
        </>
    )
}