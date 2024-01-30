import React from "react";
import { Link } from "react-router-dom";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import HeroSection from "../components/HeroSection";
import SearchGrid from "../components/SearchGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./CarSearch.css";

export default function CarSearch() {
    return (
      <>
        <HeroSection />
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/"> 
            <img
              className="banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <SearchGrid />
        <div className="car-search-section">
          <h3 className="car-search-dropdown-title">Search By:</h3>
          <ul className="car-search-dropdown-list">
            <li className="car-search-dropdown-list-item">
              <button className="car-search-dropdown">
                <h5 className="car-search-dropdown-subtitle">Make</h5>
                <FontAwesomeIcon className="car-search-dropdown-icon" icon={faAngleDown} />
              </button>
            </li>
            <li className="car-search-dropdown-list-item">
              <button className="car-search-dropdown">
                <h5 className="car-search-dropdown-subtitle">Model</h5>
                <FontAwesomeIcon className="car-search-dropdown-icon" icon={faAngleDown} />
              </button>
            </li>
            <li className="car-search-dropdown-list-item">
              <button className="car-search-dropdown">
                <h5 className="car-search-dropdown-subtitle">Price</h5>
                <FontAwesomeIcon className="car-search-dropdown-icon" icon={faAngleDown} />
              </button>
            </li>
            <li className="car-search-dropdown-list-item">
              <button className="car-search-dropdown">
                <h5 className="car-search-dropdown-subtitle">City</h5>
                <FontAwesomeIcon className="car-search-dropdown-icon" icon={faAngleDown} />
              </button>
            </li>
            <li className="car-search-dropdown-list-item">
              <button className="car-search-dropdown">
                <h5 className="car-search-dropdown-subtitle">Fuel Type</h5>
                <FontAwesomeIcon className="car-search-dropdown-icon" icon={faAngleDown} />
              </button>
            </li>
          </ul>
        </div>
        <div className="car-search-section">
          <h3 className="car-search-calculator-title">Finance Calculator</h3>
          <h3 className="car-search-calculator-rate">7.2%</h3>
          <p className="car-search-calculator-subtitle">Average interest rate</p>
          <p className="car-search-calculator-disclaimer">*Current interest rate provided by interestrate.com.</p>
        </div>
        <div className="car-search-section">
          <h3 className="car-search-dropdown-title">FAQ</h3>
          <ul className="car-search-dropdown-list">
          <li className="car-search-dropdown-list-item">
              <button className="car-search-dropdown">
                <h5 className="car-search-dropdown-subtitle">How do I buy a car?</h5>
                <FontAwesomeIcon className="car-search-dropdown-icon" icon={faAngleDown} />
              </button>
          </li>
          <li className="car-search-dropdown-list-item">
              <button className="car-search-dropdown">
                <h5 className="car-search-dropdown-subtitle">What price should I pay?</h5>
                <FontAwesomeIcon className="car-search-dropdown-icon" icon={faAngleDown} />
              </button>
          </li>
          <li className="car-search-dropdown-list-item">
              <button className="car-search-dropdown">
                <h5 className="car-search-dropdown-subtitle">Does my car come with a warranty?</h5>
                <FontAwesomeIcon className="car-search-dropdown-icon" icon={faAngleDown} />
              </button>
          </li>
          <li className="car-search-dropdown-list-item">
              <button className="car-search-dropdown">
                <h5 className="car-search-dropdown-subtitle">What financing options are available?</h5>
                <FontAwesomeIcon className="car-search-dropdown-icon" icon={faAngleDown} />
              </button>
          </li>
          </ul>
        </div>
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/"> 
            <img
              className="banner-ad-image"
              src={FordBanner}
              alt="placeholder"
            />
          </Link>
        </div>
      </>
    );
}