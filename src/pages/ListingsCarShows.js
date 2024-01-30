import React from "react";
import { Link } from "react-router-dom";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import "./ListingsCarShows.css";

export default function ListingsCarShows() {
    return (
      <>
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/">
            <img
              className="banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <div className="car-show-listing-content">
          <div className="car-show-listing-vertical-ad-wrapper">
            <Link>
              <img src={ToyotaVertical} alt="ad" />
            </Link>
          </div>
          <div className="car-show-listing-form-wrapper">
            <h1 className="car-show-listing-title">
              Chicagoland Car Show and Cruise Night Calendar Submission
            </h1>
            <p className="car-show-listing-text">
              We are pleased you have selected the DriveChicago Car Show and
              Cruise Night calendar to promote your event. Tell us about your
              car show, Cruise night, road rally or automotive event and we'll
              post it right here on DriveChicago.com; the place to shop for new
              or used cars in Chicago. There is no charge for our listings even
              though our calendar has extraordinary traffic and will bring a
              crowd! We need some basic information to construct your listing.
              Below is a form to assist and make sure everything is included.
              You are welcome to also attach a pdf file (See Additional Helpful
              Information section below)
            </p>
            <p className="car-show-listing-text">
              First we could use a little bit of information about the
              individual/organization submitting this listing request. This info
              would only be used to contact you in case there is a question or
              problem with your listing. It will not be in the listing.
            </p>
            <form className="car-show-listing-form">
              <div className="car-show-listing-input-wrapper">
                <label className="car-show-listing-label">
                  What type of listing is this?
                </label>
                <div className="car-show-radio-options">
                <div className="car-show-radio-wrapper">
                  <input className="car-show-radio" type="radio" name="listing" />
                  <label className="car-show-listing-label">Car Show</label>
                </div>
                <div className="car-show-radio-wrapper">
                  <input className="car-show-radio" type="radio" name="listing" />
                  <label className="car-show-listing-label">Cruise Night</label>
                </div>
                </div>
              </div>
              <div className="car-show-listing-row">
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Name of Contact Person
                  </label>
                  <input className="car-show-listing-input" />
                </div>
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Phone Number of Contact Person
                  </label>
                  <input className="car-show-listing-input" />
                </div>
              </div>
              <div className="car-show-listing-row">
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    E-mail of Contact Person
                  </label>
                  <input className="car-show-listing-input" />
                </div>
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Upload A Flier
                  </label>
                  <input className="car-show-listing-input" />
                </div>
              </div>
              <div className="car-show-listing-row">
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Event Start Date
                  </label>
                  <input className="car-show-listing-input" />
                </div>
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Event End Date
                  </label>
                  <input className="car-show-listing-input" />
                </div>
              </div>
              <div className="car-show-listing-row">
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">Address</label>
                  <input className="car-show-listing-input" />
                </div>
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">City</label>
                  <input className="car-show-listing-input" />
                </div>
              </div>
              <div className="car-show-listing-row">
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Day of Week (For Cruise Nights)
                  </label>
                  <select className="car-show-listing-select">
                    <option>Select Day</option>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                  </select>
                </div>
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Name of Location
                  </label>
                  <input className="car-show-listing-input" />
                </div>
              </div>
              <div className="car-show-listing-row">
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Name of Event
                  </label>
                  <input className="car-show-listing-input" />
                </div>
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Duration (i.e. 10AM-4PM)
                  </label>
                  <input className="car-show-listing-input" />
                </div>
              </div>
              <div className="car-show-listing-row">
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Phone Number for Listing (Optional)
                  </label>
                  <input className="car-show-listing-input" />
                </div>
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    E-mail for Listing (Optional)
                  </label>
                  <input className="car-show-listing-input" />
                </div>
              </div>
              <div className="car-show-listing-row">
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Name of Benefit Cause or Group
                  </label>
                  <input className="car-show-listing-input" />
                </div>
                <div className="car-show-listing-input-wrapper">
                  <label className="car-show-listing-label">
                    Website URL (Optional)
                  </label>
                  <input className="car-show-listing-input" />
                </div>
              </div>
              <div className="car-show-listing-textarea-row">
                  <label className="car-show-listing-label">
                    Describe Your Event (Include rain date, food, entertainment,
                    special events, personalitities, etc.)
                  </label>
                  <textarea className="car-show-listing-description" />
              </div>
              <div className="car-show-listing-disclaimer-wrapper">
                <p className="car-show-listing-disclaimer">
                  Corrections or cancellations should be sent to{" "}
                  <Link className="car-show-listing-disclaimer-link">carshows@drivechicago.com</Link>
                  <br />
                  Generally items are posted as received, but more current shows
                  may have priority and be posted ASAP
                  <br />
                  Listings are at the discretion of DriveChicago.com and may be
                  modified or rejected entirely.
                  <br />
                  Events associated with a Chicago Automobile Trade Assocition
                  member will be included in the Featured section.
                  <br />
                  Information is not available by phone. Please email all info
                  and questions to <Link className="car-show-listing-disclaimer-link">carshows@drivechicago.com</Link>
                </p>
              </div>
              <div className="car-show-listing-button-wrapper">
                <button className="car-show-listing-button">Submit</button>
              </div>
            </form>
          </div>
          <div className="car-show-listing-vertical-ad-wrapper">
            <Link>
              <img src={FordVertical} alt="ad" />
            </Link>
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
      </>
    );
}