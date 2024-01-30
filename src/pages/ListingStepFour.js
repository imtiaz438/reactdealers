import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import "./Listing.css";

export default function ListingStepFour() {
    return (
      <>
        <h1 className="listing-title">List Your Car Today!</h1>
        <h4 className="listing-subtitle">Fill in the details below to list your vehicle with us!</h4>
        <div className="listing-form-wrapper">
        <form className="listing-form">
          <h4 className="listing-form-step">Step 4 of 6</h4>
          <p className="listing-photo-instructions">
            Add at least 1 photo to showcase your vehicle to potential buyers.
            Use original photos to display the interior, exterior, or any
            features about your vehicle which you feel are worth showing.
          </p>
          <div className="listing-photo-box">
            <FontAwesomeIcon className="listing-photo-icon" icon={faCamera} />
            <span className="listing-photo-text">Upload Photo</span>
          </div>
          <p className="listing-photo-size">Upload PNG or JPG file. Max upload size is 5MB.</p>
          <div className="listing-button-wrapper">
            <Link to="/listing-step-three">
              <button className="listing-button-prev">Prev Step</button>
            </Link>
            <Link to="/listing-step-five">
              <button className="listing-button-next">Next Step</button>
            </Link>
          </div>
        </form>
        </div>
      </>
    );
}