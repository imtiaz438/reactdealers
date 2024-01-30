import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./Listing.css";

export default function ListingStepThree() {
    return(
        <>
            <h1 className="listing-title">List Your Car Today!</h1>
            <h4 className="listing-subtitle">Fill in the details below to list your vehicle with us!</h4>
            <div className="listing-form-wrapper">
            <form className="listing-form">
                <h4 className="listing-form-title">Step 3 of 6</h4>
                <div className="listing-value-box">
                    <FontAwesomeIcon className="listing-value-icon" icon={faDollarSign} />
                    <h5 className="listing-value-title">Estimated Value</h5>
                    <h3 className="listing-value-amount">$25,000 - $30,000</h3>
                    <p className="listing-value-explainer">Market value is based on your location and the information you have entered.</p>
                </div>
                <div className="listing-input-wrapper">
                    <label className="listing-label">Your Listing Price</label>
                    <input className="listing-input" placeholder="Enter Listing Price"/>
                </div>
                <div className="listing-button-wrapper">
                    <Link to="/listing-step-two">
                    <button className="listing-button-prev">Prev Step</button>
                    </Link>
                    <Link to="/listing-step-four">
                    <button className="listing-button-next">Next Step</button>
                    </Link>
                </div>
            </form>
            </div>
        </>
    )
}