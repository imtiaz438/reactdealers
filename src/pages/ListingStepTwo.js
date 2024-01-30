import React from "react";
import { Link } from "react-router-dom";
import "./Listing.css";

export default function ListingStepTwo() {
    return(
        <>
            <h1 className="listing-title">List Your Car Today!</h1>
            <h4 className="listing-subtitle">Fill in the details below to list your vehicle with us!</h4>
            <div className="listing-form-wrapper">
            <form className="listing-form">
                <h4 className="listing-form-step">Step 2 of 6</h4>
                <div className="listing-input-wrapper">
                <select className="listing-input-select">
                    <option className="listing-input-option">Drivetrain</option>
                </select>
                </div>
                <div className="listing-input-wrapper">
                <select className="listing-input-select">
                    <option>Transmission</option>
                </select>
                </div>
                <div className="listing-input-wrapper">
                <select className="listing-input-select">
                    <option>Engine</option>
                </select>
                </div>
                <div className="listing-button-wrapper">
                    <Link to="/listing-step-one">
                    <button className="listing-button-prev">Prev Step</button>
                    </Link>
                    <Link to="/listing-step-three">
                    <button className="listing-button-next">Next Step</button>
                    </Link>
                </div>
            </form>
            </div>
        </>
    )
}