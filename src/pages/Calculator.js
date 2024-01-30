import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import Reviews from "../components/Reviews";
import { CalculatorQuestions } from "../faq/CalculatorQuestions";
import { Accordion } from "../components/Accordion";
import "./Calculator.css";

const creditRatings = {
  "FICO Score (781 - 850)": {
    new: .0561,
    used: .0743
  },
  "FICO Score (661 - 780)": {
    new: .0688,
    used: .0933
  },
  "FICO Score (601 - 660)": {
    new: .0929,
    used: .1353
  },
  "FICO Score (501 - 600)": {
    new: .1186,
    used: .1839
  },
  "FICO Score (300 - 500)": {
    new: .1417,
    used: .2118
  }
}

const validTerms = new Set([
  36,
  48,
  60,
  72
])

export default function Calculator() {
  const [price, setPrice] = useState(50000);
  const [carType, setCarType] = useState("new");
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeIn, setTradeIn] = useState(10000);
  const loanAmount = price - downPayment - tradeIn;
  const [interestRate, setInterestRate] = useState(.0507);
  const [creditScoreCategory, setCreditScoreCategory] = useState("FICO Score (781 - 850)");
  const [term, setTerm] = useState(36);
  const monthlyPayment = Math.round((loanAmount * ( interestRate / 12) * (Math.pow((1 + (interestRate / 12)), term)) / ((Math.pow((1 + (interestRate / 12)), term)) - 1)));
  const interestPlusLoanAmount = monthlyPayment * term;
  const interestAmount = interestPlusLoanAmount - loanAmount;

  const changePrice = (e) => {
    const number = e.target.value.replace(/\D/g, "");
    setPrice((number * 1))
    }

  const changeDownPayment = (e) => {
    const number = e.target.value.replace(/\D/g, "");
    setDownPayment((number * 1));
  };

  const changeTradeIn = (e) => {
    const number = e.target.value.replace(/\D/g, "");
    setTradeIn((number * 1));
  };

  const onCarConditionChange = React.useCallback((e, c) => {
    e.preventDefault();
    setCarType(c);
  }, [])

const onCreditCategoryChange = React.useCallback((e) => {
    e.preventDefault();
    const creditScoreCategory = e?.target?.value;
    setCreditScoreCategory(creditScoreCategory)
}, [])

const onTermChange = React.useCallback((e, length) => {
  e.preventDefault();
  if (!validTerms.has(length * 1)) {
    return ; 
  }
  setTerm(length * 1)
}, [])

React.useEffect(() => {
    const rate = creditRatings[creditScoreCategory][carType];
    setInterestRate(rate);
}, [carType, creditScoreCategory])

    return (
      <>
        <h1 className="calculator-title">Finance Calculator</h1>
        <h3 className="calculator-subtitle">
          Use our built-in finance calculator to help determine your automobile
          needs.
        </h3>
        <div className="calculator-section">
            <form className="calculator-app">
              <h3 className="calculator-section-title">Estimate Your Monthly Payment</h3>
              <div className="calculator-section-wrapper">
                <label className="calculator-section-label">Price</label>
                <input className="calculator-section-input" maxLength={7} type="text" value={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} onChange={changePrice} placeholder="$50,000" />
              </div>
              <div className="calculator-section-wrapper">
                <label className="calculator-section-label">Is This a New or Used Car?</label>
                <ul className="calculator-section-list">
                  <li>
                    <button className={carType === "new" ? "calculator-section-item-button active" : "calculator-section-item-button"} name="car" onClick={(e) => {onCarConditionChange(e, "new")}}>New Car</button>
                  </li>
                  <li>
                    <button className={carType === "used" ? "calculator-section-item-button active" : "calculator-section-item-button"} name="car" onClick={(e) => {onCarConditionChange(e, "used")}}>Used Car</button>
                  </li>
                </ul>
              </div>
              <div className="calculator-section-wrapper">
                <label className="calculator-section-label">Credit Rating</label>
                <select className="calculator-section-select" onChange={onCreditCategoryChange}>
                  <option value="FICO Score (781 - 850)">FICO Score (781 - 850)</option>
                  <option value="FICO Score (661 - 780)">FICO Score (661 - 780)</option>
                  <option value="FICO Score (601 - 660)">FICO Score (601 - 660)</option>
                  <option value="FICO Score (501 - 600)">FICO Score (501 - 600)</option>
                  <option value="FICO Score (300 - 500)">FICO Score (300 - 500)</option>
                </select>
              </div>
              <div className="calculator-section-wrapper">
                <label className="calculator-section-label">Down Payment (optional)</label>
                <input className="calculator-section-input" maxLength={7} value={downPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} onChange={changeDownPayment} placeholder="$5,000" />
              </div>
              <div className="calculator-section-wrapper">
                <label className="calculator-section-label">Trade-in Value (optional)</label>
                <input className="calculator-section-input" maxLength={7} value={tradeIn.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} onChange={changeTradeIn} placeholder="$10,000" />
              </div>
              <div className="calculator-section-wrapper">
                <label className="calculator-section-label">Length of Loan (in months)</label>
                <ul className="calculator-section-list">
                  <li>
                    <button className={term === 36 ? "calculator-section-item-button active" : "calculator-section-item-button"} name="length" onClick={(e) => onTermChange(e, 36)}>36</button>
                  </li>
                  <li>
                    <button className={term === 48 ? "calculator-section-item-button active" : "calculator-section-item-button"} name="length" onClick={(e) => onTermChange(e, 48)}>48</button>
                  </li>
                  <li>
                    <button className={term === 60 ? "calculator-section-item-button active" : "calculator-section-item-button"} name="length" onClick={(e) => onTermChange(e, 60)}>60</button>
                  </li>
                  <li>
                    <button className={term === 72 ? "calculator-section-item-button active" : "calculator-section-item-button"} name="length" onClick={(e) => onTermChange(e, 72)}>72</button>
                  </li>
                </ul>
              </div>
              <div className="calculator-section-wrapper">
                <p className="calculator-display-disclaimer">*Rates based on Experian's State of the Automotive Finance Market Report: Q3 2023</p>
              </div>
            </form>
            <div className="calculator-display">
              <h3 className="calculator-section-title">Your Estimated Payment</h3> 
              <h2 className="calculator-display-amount">${monthlyPayment <= 0 ? "0" : monthlyPayment.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / month</h2>
              <div className="calculator-section-wrapper">
              <p className="calculator-display-disclaimer">*Based on {parseFloat((interestRate * 100).toFixed(2))}% APR</p>
              </div>
              <h3 className="calculator-details-title">Loan Details</h3>
              <ul className="calculator-details-list">
                <li className="calculator-details-list-item">
                  <p className="calculator-details-text">Car Price</p>
                  <p className="calculator-details-text">${price <= 0 ? "0" : price.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
                <li className="calculator-details-list-item">
                  <p className="calculator-details-text">Down Payment</p>
                  <p className="calculator-details-text">-${downPayment <= 0 ? "0" : downPayment.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
                <li className="calculator-details-list-item">
                  <p className="calculator-details-text">Trade-in Value</p>
                  <p className="calculator-details-text">-${tradeIn <= 0 ? "0" : tradeIn.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
              </ul>
              <div className="calculator-section-wrapper">
                <p className="calculator-display-disclaimer">*Additional fees and sales tax not included in estimations</p>
              </div>
                <hr className="calculator-details-line" />
              <ul className="calculator-details-list">
                <li className="calculator-details-list-item">
                  <p className="calculator-details-text bold">Total Loan Amount</p>
                  <p className="calculator-details-text bold">${loanAmount <= 0 ? "0" : loanAmount.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
                <li className="calculator-details-list-item">
                  <p className="calculator-details-text bold">Total Interest</p>
                  <p className="calculator-details-text bold">${interestAmount <= 0 ? "0" : interestAmount.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
                <li className="calculator-details-list-item">
                  <p className="calculator-details-text bold">Total Loan & Interest</p>
                  <p className="calculator-details-text bold">${interestPlusLoanAmount <= 0 ? "0" : interestPlusLoanAmount.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
                <li className="calculator-details-list-item">
                  <p className="calculator-details-text bold">Monthly Payment</p>
                  <p className="calculator-details-text bold">${monthlyPayment <= 0 ? "0" : monthlyPayment.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </li>
              </ul>
              <div className="calculator-details-button-wrapper">
              <button className="calculator-details-button">Shop Cars</button>
              </div>
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
        <Reviews />
        <div className="calculator-dropdown-section">
          <h3 className="calculator-dropdown-title">FAQ</h3>
            <Accordion item={CalculatorQuestions} keepOpen={true} />
        </div>
      </>
    );
}