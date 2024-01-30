import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast, faPhoneVolume, faLock, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import "./Features.css";

export default function Features() {
    return (
      <>
        <ul className="features-wrapper">
          <li className="features-item">
            <FontAwesomeIcon className="home-icon" icon={faShippingFast} />
            <div className="features-info">
              <h4 className="features-info-title">Free Shipping</h4>
              <p className="features-info-subtitle">For orders from $50</p>
            </div>
          </li>
          <li className="features-item">
            <FontAwesomeIcon className="home-icon" icon={faPhoneVolume} />
            <div className="features-info">
              <h4 className="features-info-title">Support 24/7</h4>
              <p className="features-info-subtitle">Call us anytime</p>
            </div>
          </li>
          <li className="features-item">
            <FontAwesomeIcon className="home-icon" icon={faLock} />
            <div className="features-info">
              <h4 className="features-info-title">100% Safety</h4>
              <p className="features-info-subtitle">Only secure payments</p>
            </div>
          </li>
          <li className="features-item">
            <FontAwesomeIcon className="home-icon" icon={faMoneyCheckDollar} />
            <div className="features-info">
              <h4 className="features-info-title">Car Deals</h4>
              <p className="features-info-subtitle">Below Market Value</p>
            </div>
          </li>
        </ul>
      </>
    );
}