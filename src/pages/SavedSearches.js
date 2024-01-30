import React from "react";
import Navigation from "../components/Navigation";
import BlackSedan from "../images/Black-Sedan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "./Account.css";

export default function SavedSearches() {
    return (
      <>
        <h1 className="account-title">Saved Searches</h1>
        <div className="account-page">
          <Navigation />
          <div className="account-content">
            <ul className="saved-search-list">
              <li className="saved-search-list-item">
                <img
                  className="saved-search-item-image"
                  src={BlackSedan}
                  alt="car"
                />
                <div className="saved-search-item-right">
                  <div className="saved-search-item-top">
                    <h4 className="saved-search-title">
                      New Mazda Mazda3 for Sale
                    </h4>
                    <button className="saved-search-delete-button">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                  <div className="saved-search-text-wrapper">
                    <p className="saved-search-text">13 available cars</p>
                    <p className="saved-search-text">
                      Within 20 miles of 60525
                    </p>
                  </div>
                </div>
              </li>
              <li className="saved-search-list-item">
                <img
                  className="saved-search-item-image"
                  src={BlackSedan}
                  alt="car"
                />
                <div className="saved-search-item-right">
                  <div className="saved-search-item-top">
                    <h4 className="saved-search-title">
                      New Honda Accord Hybrid for Sale
                    </h4>
                    <button className="saved-search-delete-button">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                  <div className="saved-search-text-wrapper">
                    <p className="saved-search-text">21 available cars</p>
                    <p className="saved-search-text">
                      Within 15 miles of 60525
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <button className="saved-search-search-button">Start a New Search</button>
          </div>
        </div>
      </>
    );
}