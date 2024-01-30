import React, { useState } from "react";
import Reviews from "../components/Reviews";
import { Accordion } from "../components/Accordion";
import { SellCarQuestions } from "../faq/SellCarQuestions";
import "./SellCar.css";

export default function SellCar() {
    const [mileage, setMileage] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [email, setEmail] = useState("");

    const changeMileage = (e) => {
      const number = e.target.value.replace(/\D/g, "");
      setMileage(Number(number))
    };

    const changeZipCode = (e) => {
      const number = e.target.value.replace(/\D/g, "");
      setZipCode(Number(number))
    };

    const changeEmail = (e) => {
      const input = e.target.value;
      setEmail(input)
    };

    return (
      <>
        <h1 className="sell-car-title">Sell Your Car</h1>
        <h3 className="sell-car-subtitle">
          Get an estimate of your car's value!
        </h3>
        <div className="sell-car-form-wrapper">
          <form className="sell-car-form">
            <div className="sell-car-row-wrapper">
              <div className="sell-car-input-wrapper">
                <label className="sell-car-label">Year</label>
                <select className="sell-car-select">
                  <option>Select</option>
                </select>
              </div>
              <div className="sell-car-input-wrapper">
                <label className="sell-car-label">Make</label>
                <select className="sell-car-select">
                  <option>Select</option>
                </select>
              </div>
              <div className="sell-car-input-wrapper">
                <label className="sell-car-label">Model</label>
                <select className="sell-car-select">
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="sell-car-row-wrapper">
            <div className="sell-car-input-wrapper">
                <label className="sell-car-label">Mileage</label>
                <input className="sell-car-input" value={mileage} onChange={changeMileage} />
              </div>
              <div className="sell-car-input-wrapper">
              <label className="sell-car-label">Zip Code</label>
              <input className="sell-car-input" value={zipCode} onChange={changeZipCode} maxLength={5} />
            </div>
            <div className="sell-car-input-wrapper">
              <label className="sell-car-label">E-mail</label>
              <input className="sell-car-input" value={email} onChange={changeEmail} />
            </div>
            </div>
          <div className="sell-car-button-wrapper">
            <button className="sell-car-button">Submit</button>
          </div>
          </form>
        </div>
        <Reviews />
        <div className="sell-car-dropdown-section">
          <h3 className="sell-car-dropdown-title">FAQ</h3>
          <Accordion item={SellCarQuestions} keepOpen={true} />
        </div>
      </>
    );
}