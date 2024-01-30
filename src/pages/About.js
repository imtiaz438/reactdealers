import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../images/About-Hero-Image.png";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import "./About.css";

export default function About() {
    return (
      <>
        <div className="about-hero-section">
          <img className="about-hero-image" src={HeroImage} alt="car-lot" />
          <div className="about-title-wrapper">
            <h1 className="about-title">About</h1>
          </div>
        </div>
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/">
            <img
              className="banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <div className="about-content-wrapper">
          <div className="about-vertical-ad-wrapper">
            <Link>
              <img src={ToyotaVertical} alt="ad" />
            </Link>
          </div>
          <div className="about-middle-section">
            <p className="about-text">
              Car shopping in Chicagoland and NW Indiana couldn't be easier
              thanks to DriveChicago.com, the area's most comprehensive, local
              online source for researching and purchasing new and used cars.
            </p>
            <p className="about-text">
              DriveChicago.com is owned and operated by the Chicago Automobile
              Trade Association, producers of the Chicago Auto Show. With more
              than 100,000 new and used vehicles, it is Chicagoland's largest
              local inventory listing.
            </p>
            <p className="about-text">
              DriveChicago.com is fueled by the new and used vehicle inventories
              of more than 400 Chicagoland dealerships. You'll find virtually
              every vehicle in town from virtually every dealer in town!
            </p>
            <p className="about-text">
              DriveChicago.com is also on the radio. Listen as DriveChicago.com
              General Manager Mark Bilek and Chicago Auto Show Director of
              Marketing Jim OBrill are joined by host Robert Martier on the
              DriveChicago radio show on WLS AM890 Saturday mornings at 8 AM.
            </p>
            <p className="about-text">
              We like to think of ourselves as relentlessly local. After all,
              Chicago area automotive shoppers want a local selection and we've
              got the largest! Unlike national sites, our focus is on local
              comparisons and local contacts, and when you decide to take that
              new car for spin, it's waiting for you just down the street. We
              hope you enjoy the search. It's the CLICK and EASY way to buy a
              vehicle because DriveChicago.com has virtually every vehicle in
              town.
            </p>
          </div>
          <div className="about-vertical-ad-wrapper">
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