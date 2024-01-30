import React from "react";
import { Link } from "react-router-dom";
import "./Listing.css";

export default function ListingConfirmation() {
    return (
      <>
        <h1 className="listing-title">You're all done!</h1>
        <h4 className="listing-subtitle">
          We are reviewing your details and your vehicle will be lised shortly!
        </h4>
        <p className="listing-confirmation-text">
          You can visit your{" "}
          <Link className="listing-confirmation-link" to="/garage">
            Garage
          </Link>{" "}
          to view the status of your listing.
        </p>
        <p className="listing-confirmation-text">
          Feel free to visit our{" "}
          <Link className="listing-confirmation-link">Resource Center</Link> for
          answers on any questions you may have after you have listed your
          vehicle.
        </p>
      </>
    );
}