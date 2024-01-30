import React from "react";
import HeroImage from "../images/FAQ-Hero-Image.png";
import { Accordion } from "../components/Accordion";
import { FaqQuestions } from "../faq/FaqQuestions";
import "./Faq.css";

export default function Faq() {
    return (
      <>
        <div className="faq-hero-section">
          <img className="faq-hero-image" src={HeroImage} alt="typing" />
          <div className="faq-hero-wrapper">
            <div className="faq-title-wrapper">
              <h1 className="faq-title">Frequently Asked Questions</h1>
            </div>
          </div>
        </div>
        <div className="faq-dropdown-section">
          <h3 className="faq-dropdown-title">FAQ</h3>
            <Accordion item={FaqQuestions} keepOpen={true} />
        </div>
      </>
    );
}