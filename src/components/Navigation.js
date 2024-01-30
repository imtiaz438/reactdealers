import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import './Navigation.css';

export default function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const website = location.pathname;

    return (
      <>
        <div className="navigation-wrapper">
          <ul className="navigation-list">
            <li className="navigation-list-item">
              <Link
                className={
                  location.pathname === PathConstants.ACCOUNT_SETTINGS
                    ? "navigation-link active"
                    : "navigation-link"
                }
                to={PathConstants.ACCOUNT_SETTINGS}
              >
                Account Settings
              </Link>
            </li>
            <li className="navigation-list-item">
              <Link
                className={
                  location.pathname === PathConstants.SAVED_CARS
                    ? "navigation-link active"
                    : "navigation-link"
                }
                to={PathConstants.SAVED_CARS}
              >
                Saved Cars
              </Link>
            </li>
            {/*<li className="navigation-list-item">
              <Link
                className={
                  location.pathname === PathConstants.SAVED_SEARCHES
                    ? "navigation-link active"
                    : "navigation-link"
                }
                to={PathConstants.SAVED_SEARCHES}
              >
                Saved Searches
              </Link>
              </li>*/}
            {/*<li className="navigation-list-item">
              <Link
                className={
                  location.pathname === PathConstants.GARAGE
                    ? "navigation-link active"
                    : "navigation-link"
                }
                to={PathConstants.GARAGE}
              >
                Garage
              </Link>
            </li>*/}
            <li className="navigation-list-item">
              <Link className={location.pathname === PathConstants.EMAIL_NOTIFICATIONS ? "navigation-link active" : "navigation-link"} to={PathConstants.EMAIL_NOTIFICATIONS}>E-mail Notifications</Link>
            </li>
          </ul>
        </div>
        <select className="navigation-dropdown" defaultValue={website}>
          <option
            value={PathConstants.ACCOUNT_SETTINGS}
            onClick={() => navigate(PathConstants.ACCOUNT_SETTINGS)}
          >
            Account Settings
          </option>
          <option value={PathConstants.SAVED_CARS} onClick={() => navigate(PathConstants.SAVED_CARS)}>
            Saved Cars
          </option>
          {/*<option
            value={PathConstants.SAVED_SEARCHES}
            onClick={() => navigate(PathConstants.SAVED_SEARCHES)}
          >
            Saved Searches
          </option>*/}
          {/*<option
            className="navigation-dropdown-option"
            value={PathConstants.GARAGE}
            onClick={() => navigate(PathConstants.GARAGE)}
          >
            Garage
        </option>*/}
          <option value={PathConstants.EMAIL_NOTIFICATIONS} onClick={() => navigate(PathConstants.EMAIL_NOTIFICATIONS)}>E-mail Notifications</option>
        </select>
      </>
    );
}