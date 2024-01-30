import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import PathConstants from "../routes/PathConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faCircleUser, faAngleRight, faX, faFilePen } from "@fortawesome/free-solid-svg-icons";
import "./MobileMenu.css";

export default function MobileMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    function displayMenu() {
        setShowMenu(!showMenu)
    }

    function searchMenu() {
        setShowSearch(!showSearch)
    }

    return (
      <>
        <nav className="mobile-header">
          <div className="mobile-header-content">
            <button
              type="button"
              className="mobile-menu-button"
              onClick={displayMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <SearchBar showSearch={showSearch} searchMenu={searchMenu} />
            <div className="mobile-indicator">
              <Link className="mobile-indicator-link">
                <button
                  onClick={searchMenu}
                  type="button"
                  className="mobile-indicator-button"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <span className="mobile-indicator-text">Search</span>
                </button>
              </Link>
              <NavLink className="mobile-indicator-link" to={PathConstants.LOGIN}>
                <button type="button" className="mobile-indicator-button">
                  <FontAwesomeIcon icon={faCircleUser} />
                  <span className="mobile-indicator-text">Log In</span>
                </button>
              </NavLink>
              <NavLink className="mobile-indicator-link" to={PathConstants.SIGNUP}>
                <button type="button" className="mobile-indicator-button">
                  <FontAwesomeIcon icon={faFilePen} />
                  <span className="mobile-indicator-text">Sign Up</span>
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
        {showMenu && (
          <div className="mobile-overlay">
            <div className="mobile-menu">
              <div className="mobile-menu-header">
                <h2 className="mobile-menu-title">Menu</h2>
                <button type="button" className="mobile-menu__close">
                  <FontAwesomeIcon
                    className="mobile-menu-indicator-icon"
                    icon={faX}
                    onClick={displayMenu}
                  />
                </button>
              </div>
              <ul className="mobile-menu-indicators">
                <li>
                  <NavLink
                    className="mobile-menu-indicator-link"
                    onClick={displayMenu}
                    to={PathConstants.SIGNUP}
                  >
                    <FontAwesomeIcon
                      className="mobile-menu-indicator-icon"
                      icon={faFilePen}
                    />
                    <span className="mobile-menu-indicator-text">Sign Up</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="mobile-menu-indicator-link"
                    onClick={displayMenu}
                    to={PathConstants.LOGIN}
                  >
                    <FontAwesomeIcon
                      className="mobile-menu-indicator-icon"
                      icon={faCircleUser}
                    />
                    <span className="mobile-menu-indicator-text">Log In</span>
                  </NavLink>
                </li>
              </ul>
              <ul className="mobile-menu-links">
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.HOME}
                  >
                    <span className="mobile-menu-text">Home</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.CAR_SEARCH}
                  >
                    <span className="mobile-menu-text">Car Search</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.LISTINGS_DEALER}
                  >
                    <span className="mobile-menu-text">Dealer Search</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.REVIEWS}
                  >
                    <span className="mobile-menu-text">Reviews</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.SELL_CAR}
                  >
                    <span className="mobile-menu-text">Sell Your Car</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.CAR_SHOWS}
                  >
                    <span className="mobile-menu-text">Car Shows</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
                <li className="mobile-menu-item">
                  <NavLink
                    className="mobile-menu-link"
                    onClick={displayMenu}
                    to={PathConstants.CALCULATOR}
                  >
                    <span className="mobile-menu-text">Calculator</span>
                    <FontAwesomeIcon
                      className="mobile-menu-right"
                      icon={faAngleRight}
                    />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </>
    );
}