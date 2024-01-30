import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import "./Account.css";

export default function EmailNotifications() {
    return (
      <>
        <h1 className="account-title">E-mail Notifications</h1>
        <div className="account-page">
          <Navigation />
          <div className="account-content">
            <p className="email-notification">
              Get notifications for: test@email.com
            </p>
            <ul className="email-subscription-list">
              <li>
                <button className="email-subscription-button">
                  <FontAwesomeIcon
                    className="email-subscription-icon"
                    icon={faCircleXmark}
                  />
                  Unsubscribe from all e-mails
                </button>
              </li>
              <li>
                <button className="email-subscription-button">
                  <FontAwesomeIcon
                    className="email-subscription-icon"
                    icon={faEnvelopeOpenText}
                  />
                  Subscribe to all e-mails
                </button>
              </li>
            </ul>
            <ul className="email-page-list">
              <li className="email-page-list-item">
                <h2 className="email-page-title">Recommendations</h2>
                <p className="email-page-subtitle">
                  We will send you recommendations based on your prior search
                  history.
                </p>
                <div className="email-checkbox-wrapper">
                  <input
                    className="email-checkbox"
                    type="checkbox"
                    defaultChecked
                  />
                  <p className="email-checkbox-text">General Recommendations</p>
                </div>
              </li>
              <li className="email-page-list-item">
                <h2 className="email-page-title">Search Updates</h2>
                <p className="email-page-subtitle">
                  We will send you new listings and price drops based on your
                  prior search history.
                </p>
                <div className="email-checkbox-wrapper">
                  <input
                    className="email-checkbox"
                    type="checkbox"
                    defaultChecked
                  />
                  <p className="email-checkbox-text">Price Drops</p>
                </div>
                <div className="email-checkbox-wrapper">
                  <input
                    className="email-checkbox"
                    type="checkbox"
                    defaultChecked
                  />
                  <p className="email-checkbox-text">New Listings</p>
                </div>
              </li>
              <li className="email-page-list-item">
                <h2 className="email-page-title">Saved Car Updates</h2>
                <p className="email-page-subtitle">
                  We will send you notifications when their are changes to your <Link to="/saved-cars">Saved Cars</Link>
                </p>
                <div className="email-checkbox-wrapper">
                  <input
                    className="email-checkbox"
                    type="checkbox"
                    defaultChecked
                  />
                  <p className="email-checkbox-text">Price Changes</p>
                </div>
                <div className="email-checkbox-wrapper">
                  <input
                    className="email-checkbox"
                    type="checkbox"
                    defaultChecked
                  />
                  <p className="email-checkbox-text">Sold Notifications</p>
                </div>
              </li>
              <li className="email-page-list-item">
                <h2 className="email-page-title">Garage Updates</h2>
                <p className="email-page-subtitle">
                  We will send you notifications for cars in your garage.
                </p>
                <div className="email-checkbox-wrapper">
                  <input
                    className="email-checkbox"
                    type="checkbox"
                    defaultChecked
                  />
                  <p className="email-checkbox-text">Messages on Your Listings</p>
                </div>
                <div className="email-checkbox-wrapper">
                  <input
                    className="email-checkbox"
                    type="checkbox"
                    defaultChecked
                  />
                  <p className="email-checkbox-text">Price Recommendations</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}