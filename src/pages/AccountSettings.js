import React from "react";
import Navigation from "../components/Navigation";
import "./Account.css";

export default function AccountSettings() {
    return(
        <>
            <h1 className="account-title">Account Settings</h1>
            <div className="account-page">
                <Navigation />
                <div className="account-content">
                    <ul className="settings-list">
                        <li className="settings-list-item">
                            <h4 className="settings-title">Name:</h4>
                            <p className="settings-text">Joe Smith</p>
                        </li>
                        <li className="settings-list-item">
                            <h4 className="settings-title">E-mail:</h4>
                            <p className="settings-text">email@email.com</p>
                        </li>
                        <li className="settings-list-item">
                            <h4 className="settings-title">Password:</h4>
                            <p className="settings-text">********</p>
                        </li>
                        <li className="settings-list-item">
                            <h4 className="settings-title">Zip Code:</h4>
                            <p className="settings-text">60525</p>
                        </li>
                    </ul>
                    <div className="settings-button-wrapper">
                        <button className="settings-button">Update Info</button>
                    </div>
                </div>
            </div>
        </>
    )
}