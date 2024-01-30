import React from "react";
import { Link } from "react-router-dom";
import "./Listing.css";

export default function ListingStepFive() {
    return (
      <>
        <h1 className="listing-title">List Your Car Today!</h1>
        <h4 className="listing-subtitle">Fill in the details below to list your vehicle with us!</h4>
        <div className="listing-form-wrapper">
        <form className="listing-form">
        <h4 className="listing-form-step">Step 5 of 6</h4>
        <p className="listing-details-text">Please describe what makes your vehicle special. Let prospective buyers know why they should buy your car.</p>
        <textarea className="listing-details-textarea"></textarea>
        <div className="listing-button-wrapper">
            <Link to="/listing-step-four">
              <button className="listing-button-prev">Prev Step</button>
            </Link>
            <Link to="/listing-step-six">
              <button className="listing-button-next">Next Step</button>
            </Link>
          </div>
        </form>
        </div>
      </>
    );
}