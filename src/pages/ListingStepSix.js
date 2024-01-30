import React from "react";
import { Link } from "react-router-dom";
import BlackSedan from "../images/Black-Sedan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import "./Listing.css";

export default function ListingStepSix() {
    return (
      <>
        <h1 className="listing-title">List Your Car Today!</h1>
        <h4 className="listing-subtitle">Please confirm the details below to list your vehicle with us!</h4>
        <div className="listing-form-wrapper">
        <form className="listing-form">
        <h4 className="listing-form-step">Step 6 of 6</h4>
            <div className="listing-recap-image-box">
            <img className="listing-recap-image" src={BlackSedan} alt="sedan" />
            <div className="listing-recap-icon-wrapper">
            <FontAwesomeIcon className="listing-recap-icon" icon={faCamera} />
            </div>
            </div>
            <div className="listing-recap-text-wrapper">
                <p className="listing-recap-text">Used</p>
                <p className="listing-recap-text">2019 Toyota Corolla SE</p>
                <p className="listing-recap-text">30,000 miles</p>
            </div>
                <h5 className="listing-recap-amount">$30,000</h5>
            <div className="listing-features-wrapper">
                <h5 className="listing-features-title">Features</h5>
                <ul className="listing-features-list">
                    <li className="listing-features-list-item">
                        <p className="listing-features-item-title">Exterior Color</p>
                        <p className="listing-features-item-text">Black</p>
                    </li>
                    <li className="listing-features-list-item">
                        <p className="listing-features-item-title">Interior Color</p>
                        <p className="listing-features-item-text">Gray</p>
                    </li>
                    <li className="listing-features-list-item">
                        <p className="listing-features-item-title">Drivetrain</p>
                        <p className="listing-features-item-text">Front-wheel drive</p>
                    </li>
                    <li className="listing-features-list-item">
                        <p className="listing-features-item-title">Fuel Type</p>
                        <p className="listing-features-item-text">Gasoline</p>
                    </li>
                    <li className="listing-features-list-item">
                        <p className="listing-features-item-title">Transmission</p>
                        <p className="listing-features-item-text">M/T</p>
                    </li>
                    <li className="listing-features-list-item">
                        <p className="listing-features-item-title">Engine</p>
                        <p className="listing-features-item-text">4 Cylinder</p>
                    </li>
                    <li className="listing-features-list-item">
                        <p className="listing-features-item-title">VIN</p>
                        <p className="listing-features-item-text">88888QQQQQ</p>
                    </li>
                    <li className="listing-features-list-item">
                        <p className="listing-features-item-title">Mileage</p>
                        <p className="listing-features-item-text">30,000</p>
                    </li>
                </ul>
            </div>
            <div className="listing-button-wrapper">
            <Link to="/listing-step-five">
              <button className="listing-button-prev">Prev Step</button>
            </Link>
            <Link to="/listing-confirmation">
              <button className="listing-button-next">Create Listing</button>
            </Link>
          </div>
        </form>
        </div>
      </>
    );
}