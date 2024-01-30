import React from "react";
import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import Convertible from "../images/Black-Convertible.png";
import Hatchback from "../images/Black-Hatchback.png";
import Minivan from "../images/Black-Minivan.png";
import Suv from "../images/Black-SUV.png";
import Coupe from "../images/Black-Coupe.png";
import Pickup from "../images/Black-Pickup.png";
import Sedan from "../images/Black-Sedan.png";
import Wagon from "../images/Black-Wagon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./ReviewsPage.css";

export default function ReviewsPage() {
    return (
      <>
        <div className="reviews-page-top-ad">
          <div className="banner-ad-wrapper">
            <Link className="banner-ad" to="/">
              <img
                className="banner-ad-image"
                src={ToyotaBanner}
                alt="placeholder"
              />
            </Link>
          </div>
        </div>
        <div className="reviews-page-section">
          <h2 className="reviews-page-title">Search for Car Reviews</h2>
          <div className="reviews-page-search-wrapper">
            <input
              className="reviews-page-search-input"
              placeholder="Enter Make and Model..."
            />
            <button className="reviews-page-search-button">Search</button>
          </div>
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
        <Reviews />
        <div className="reviews-page-section compare">
          <h3 className="reviews-page-title">Side-by-Side Comparison</h3>
          <ul className="reviews-page-dropdown-list">
            <li className="reviews-page-dropdown-list-item">
              <button className="reviews-page-dropdown">
                <div className="reviews-page-text-wrapper">
                  <h5 className="reviews-page-dropdown-subtitle">
                    Convertible
                  </h5>
                  <img
                    className="reviews-page-dropdown-image"
                    src={Convertible}
                    alt="convertible"
                  />
                </div>
                <FontAwesomeIcon
                  className="reviews-page-dropdown-icon"
                  icon={faAngleDown}
                />
              </button>
            </li>
            <li className="reviews-page-dropdown-list-item">
              <button className="reviews-page-dropdown">
                <div className="reviews-page-text-wrapper">
                  <h5 className="reviews-page-dropdown-subtitle">Hatchback</h5>
                  <img
                    className="reviews-page-dropdown-image"
                    src={Hatchback}
                    alt="hatchback"
                  />
                </div>
                <FontAwesomeIcon
                  className="reviews-page-dropdown-icon"
                  icon={faAngleDown}
                />
              </button>
            </li>
            <li className="reviews-page-dropdown-list-item">
              <button className="reviews-page-dropdown">
                <div className="reviews-page-text-wrapper">
                  <h5 className="reviews-page-dropdown-subtitle">Minivan</h5>
                  <img
                    className="reviews-page-dropdown-image"
                    src={Minivan}
                    alt="minivan"
                  />
                </div>
                <FontAwesomeIcon
                  className="reviews-page-dropdown-icon"
                  icon={faAngleDown}
                />
              </button>
            </li>
            <li className="reviews-page-dropdown-list-item">
              <button className="reviews-page-dropdown">
                <div className="reviews-page-text-wrapper">
                  <h5 className="reviews-page-dropdown-subtitle">SUV</h5>
                  <img
                    className="reviews-page-dropdown-image"
                    src={Suv}
                    alt="SUV"
                  />
                </div>
                <FontAwesomeIcon
                  className="reviews-page-dropdown-icon"
                  icon={faAngleDown}
                />
              </button>
            </li>
            <li className="reviews-page-dropdown-list-item">
              <button className="reviews-page-dropdown">
                <div className="reviews-page-text-wrapper">
                  <h5 className="reviews-page-dropdown-subtitle">Coupe</h5>
                  <img
                    className="reviews-page-dropdown-image"
                    src={Coupe}
                    alt="coupe"
                  />
                </div>
                <FontAwesomeIcon
                  className="reviews-page-dropdown-icon"
                  icon={faAngleDown}
                />
              </button>
            </li>
            <li className="reviews-page-dropdown-list-item">
              <button className="reviews-page-dropdown">
                <div className="reviews-page-text-wrapper">
                  <h5 className="reviews-page-dropdown-subtitle">Pickup</h5>
                  <img
                    className="reviews-page-dropdown-image"
                    src={Pickup}
                    alt="pickup"
                  />
                </div>
                <FontAwesomeIcon
                  className="reviews-page-dropdown-icon"
                  icon={faAngleDown}
                />
              </button>
            </li>
            <li className="reviews-page-dropdown-list-item">
              <button className="reviews-page-dropdown">
                <div className="reviews-page-text-wrapper">
                  <h5 className="reviews-page-dropdown-subtitle">Sedan</h5>
                  <img
                    className="reviews-page-dropdown-image"
                    src={Sedan}
                    alt="sedan"
                  />
                </div>
                <FontAwesomeIcon
                  className="reviews-page-dropdown-icon"
                  icon={faAngleDown}
                />
              </button>
            </li>
            <li className="reviews-page-dropdown-list-item">
              <button className="reviews-page-dropdown">
                <div className="reviews-page-text-wrapper">
                  <h5 className="reviews-page-dropdown-subtitle">Wagon</h5>
                  <img
                    className="reviews-page-dropdown-image"
                    src={Wagon}
                    alt="wagon"
                  />
                </div>
                <FontAwesomeIcon
                  className="reviews-page-dropdown-icon"
                  icon={faAngleDown}
                />
              </button>
            </li>
          </ul>
        </div>
      </>
    );
}