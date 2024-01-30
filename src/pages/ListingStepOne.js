import React from "react";
import { Link } from "react-router-dom";
import "./Listing.css";

export default function ListingStepOne() {

    return (
      <>
        <h1 className="listing-title">List Your Car Today!</h1>
        <h4 className="listing-subtitle">
          Fill in the details below to list your vehicle with us!
        </h4>
        <div className="listing-form-wrapper">
          <form className="listing-form">
            <h4 className="listing-form-step">Step 1 of 6</h4>
            <div className="listing-input-wrapper">
              <label className="listing-label">Mileage</label>
              <input className="listing-input" />
            </div>
            <div className="listing-input-wrapper">
              <label className="listing-label">Zip Code</label>
              <input className="listing-input" />
            </div>
            <div className="listing-input-wrapper">
              <label className="listing-label">Exterior Color</label>
              <input className="listing-input" />
            </div>
            <div className="listing-input-wrapper">
              <label className="listing-label">Interior Color</label>
              <input className="listing-input" />
            </div>
            <div className="listing-input-wrapper">
              <label className="listing-label">
                Has this car ever been in an accident?
              </label>
              <div className="listing-form-button-wrapper">
                <button className="listing-form-button">Yes</button>
                <button className="listing-form-button active">No</button>
              </div>
            </div>
            <div className="listing-input-wrapper">
              <label className="listing-label">
                Are you the original owner of this vehicle?
              </label>
              <div className="listing-form-button-wrapper">
                <button className="listing-form-button active">Yes</button>
                <button className="listing-form-button">No</button>
              </div>
            </div>
            <h5 className="listing-form-title">Car Seller Info</h5>
            <div className="listing-input-wrapper">
              <label className="listing-label">First Name</label>
              <input className="listing-input" />
            </div>
            <div className="listing-input-wrapper">
              <label className="listing-label">Last Name Name</label>
              <input className="listing-input" />
            </div>
            <div className="listing-input-wrapper">
              <label className="listing-label">Phone Number</label>
              <input className="listing-input" />
              <p className="listing-input-disclaimer">* We will not display your phone number with your listing.</p>
            </div>
            <div className="listing-button-wrapper">
              <Link to="/listing-step-two">
                <button className="listing-button-next">Next Step</button>
              </Link>
            </div>
          </form>
        </div>
      </>
    );
}