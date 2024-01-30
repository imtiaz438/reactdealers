import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <div className="not-found-wrapper">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
          <Link className="not-found-link" to={PathConstants.HOME}>
            <button className="not-found-button">
                Back to Homepage
            </button>
          </Link>
      </div>
    </>
  );
}