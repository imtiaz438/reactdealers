import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "src/routes/PathConstants";
import "./Register.css";

export default function LogIn() {
    return (
      <>
        <h1 className="register-title">Log-In</h1>
        <p className="register-subtitle">
          Don't have an account? <Link className="register-link" to={PathConstants.SIGNUP}>Create an account here.</Link>
        </p>
        <div className="register-form-wrapper">
        <form className="register-form">
        <div className="register-input-wrapper">
          <label className="register-label">E-mail Address</label>
          <input className="register-input" />
        </div>
        <div className="register-input-wrapper">
          <label className="register-label">Password</label>
          <input className="register-input" />
        </div>
        <div className="register-button-wrapper">
            <Link to="/account-settings"><button className="register-button">Log In</button></Link>
            <p className="register-disclaimer">*By signing into your account, you agree to our <Link className="register-link" to={PathConstants.PRIVACY_POLICY}>Privacy Policy</Link> and <Link className="register-link" to={PathConstants.TERMS_OF_USE}>Terms of Service</Link>.</p>
        </div>
        </form>
        </div>
      </>
    );
}