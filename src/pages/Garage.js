import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordSquare from "../images/Square-Ad-Ford.jpg";
import BlackSedan from "../images/Black-Sedan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";
import "./Account.css";

export default function Garage() {
    const [details, setDetails] = useState(false)

    function showDetails() {
        setDetails(!details);
    }

    return (
      <>
        <h1 className="account-title">Garage</h1>
        <div className="account-page">
          <Navigation />
          <div className="garage-content">
            <div className="garage-card-wrapper">
              <div className="garage-card">
                <div>
                  <img
                    className="garage-card-image"
                    src={BlackSedan}
                    alt="sedan"
                  />
                  <h3 className="garage-card-title">2019 Toyota Corolla SE</h3>
                </div>
                <div className="garage-card-button-wrapper">
                  <button className="garage-card-button" onClick={showDetails}>
                    View Vehicle Details{" "}
                    <FontAwesomeIcon icon={details ? faAngleUp : faAngleDown} />
                  </button>
                  <button className="garage-card-button">
                    Delete <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
                {details && (
                  <ul className="garage-card-list">
                    <h4 className="garage-card-list-title">Features</h4>
                    <li className="garage-card-list-item">
                      <div className="garage-card-text-wrapper">
                        <h4 className="garage-card-item-title">
                          Exterior Color
                        </h4>
                        <p className="garage-card-item-text">Underground</p>
                      </div>
                    </li>
                    <li className="garage-card-list-item">
                      <div className="garage-card-text-wrapper">
                        <h4 className="garage-card-item-title">
                          Interior Color
                        </h4>
                        <p className="garage-card-item-text">Moonstone</p>
                      </div>
                    </li>
                    <li className="garage-card-list-item">
                      <div className="garage-card-text-wrapper">
                        <h4 className="garage-card-item-title">Drivetrain</h4>
                        <p className="garage-card-item-text">
                          Front-wheel Drive
                        </p>
                      </div>
                    </li>
                    <li className="garage-card-list-item">
                      <div className="garage-card-text-wrapper">
                        <h4 className="garage-card-item-title">MPG</h4>
                        <p className="garage-card-item-text">-</p>
                      </div>
                    </li>
                    <li className="garage-card-list-item">
                      <div className="garage-card-text-wrapper">
                        <h4 className="garage-card-item-title">Fuel Type</h4>
                        <p className="garage-card-item-text">Gasoline</p>
                      </div>
                    </li>
                    <li className="garage-card-list-item">
                      <div className="garage-card-text-wrapper">
                        <h4 className="garage-card-item-title">Transmission</h4>
                        <p className="garage-card-item-text">Automatic CVT</p>
                      </div>
                    </li>
                    <li className="garage-card-list-item">
                      <div className="garage-card-text-wrapper">
                        <h4 className="garage-card-item-title">Engine</h4>
                        <p className="garage-card-item-text">
                          2.0L I4 16V PDI DOHC
                        </p>
                      </div>
                    </li>
                    <li className="garage-card-list-item">
                      <div className="garage-card-text-wrapper">
                        <h4 className="garage-card-item-title">VIN</h4>
                        <p className="garage-card-item-text">
                          5QQQ5QQQ5QQ555555
                        </p>
                      </div>
                    </li>
                  </ul>
                )}
              </div>
              <div className="garage-card inactive">
                <div>
                  <img
                    className="garage-card-image"
                    src={BlackSedan}
                    alt="sedan"
                  />
                  <h3 className="garage-card-title">2019 Toyota Corolla SE</h3>
                </div>
                <div className="garage-card-button-wrapper">
                  <button className="garage-card-button">
                    View Vehicle Details <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <button className="garage-card-button">
                    Delete <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
              </div>
            </div>
            <div className="garage-listing-wrapper">
              <div className="garage-listing">
                <h2 className="garage-listing-title">Listings</h2>
                <ul className="garage-listing-list">
                  <li className="garage-listing-list-item">
                    <h4 className="garage-listing-car">
                      2019 Toyota Corolla SE
                    </h4>
                    <div className="garage-listing-text-wrapper">
                      <h5 className="garage-listing-status">Status:</h5>
                      <p className="garage-listing-text">Pending</p>
                    </div>
                    <div className="garage-listing-button-wrapper">
                      <button className="garage-listing-button">
                        Edit <FontAwesomeIcon icon={faPencil} />
                      </button>
                      <button className="garage-listing-button">
                        Delete <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </li>
                  <li className="garage-listing-list-item">
                    <h4 className="garage-listing-car">
                      2019 Toyota Corolla SE
                    </h4>
                    <div className="garage-listing-text-wrapper">
                      <h5 className="garage-listing-status">Status:</h5>
                      <p className="garage-listing-text">Listed</p>
                    </div>
                    <div className="garage-listing-button-wrapper">
                      <button className="garage-listing-button">
                        Edit <FontAwesomeIcon icon={faPencil} />
                      </button>
                      <button className="garage-listing-button">
                        Delete <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </li>
                </ul>
                <div className="garage-listing-create-wrapper">
                  <Link to="/listing-step-one">
                  <button className="garage-listing-create">Create Listing</button>
                  </Link>
                </div>
              </div>
              <div className="garage-ad-wrapper">
                <Link className="garage-square-ad" to="/">
                  <img
                    className="garage-square-ad-image"
                    src={FordSquare}
                    alt="square"
                  />
                </Link>
              </div>
              <div className="garage-banner-ad-wrapper">
                <Link className="garage-banner-ad" to="/">
                  <img
                    className="garage-banner-ad-image"
                    src={ToyotaBanner}
                    alt="placeholder"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}