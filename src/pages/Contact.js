import React from "react";
import HeroImage from "../images/Contact-Hero-Image.png";
import { Accordion } from "../components/Accordion";
import { ContactQuestions } from "../faq/ContactQuestions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faQuestion } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

export default function Contact() {
    return (
      <>
        <div className="contact-hero-section">
          <img className="contact-hero-image" src={HeroImage} alt="agent" />
          <div className="contact-title-wrapper">
            <h1 className="contact-title">Contact Us</h1>
          </div>
        </div>
        <div className="contact-assist-section">
            <div className="contact-assist-section-wrapper">
          <div className="contact-assist-wrapper">
            <h3 className="contact-assist-title">
              How may we assist you today?
            </h3>
          </div>
          <div className="contact-assist-wrapper">
            <FontAwesomeIcon className="contact-assist-icon" icon={faQuestion} />
            <h5 className="contact-assist-subtitle">FAQ</h5>
          </div>
          <div className="contact-assist-wrapper">
            <FontAwesomeIcon className="contact-assist-icon" icon={faEnvelopeOpenText} />
            <h5 className="contact-assist-subtitle">Message Us</h5>
          </div>
          </div>
        </div>
        <h3 className="contact-dropdown-title">FAQ</h3>
          <Accordion item={ContactQuestions} keepOpen={true} />
        <div className="contact-form-wrapper">
        <form className="contact-form">
          <h3 className="contact-form-title">Send Us a Message</h3>
          <div className="contact-input-wrapper">
            <label className="contact-label">Name</label>
            <input className="contact-input" />
          </div>
          <div className="contact-input-wrapper">
            <label className="contact-label">E-mail</label>
            <input className="contact-input" />
          </div>
          <div className="contact-input-wrapper">
            <label className="contact-label">Subject</label>
            <input className="contact-input" />
          </div>
          <textarea className="contact-textarea" placeholder="Enter message..."></textarea>
          <div className="contact-button-wrapper">
          <button className="contact-button-submit" type="submit">Send Message</button>
          </div>
        </form>
        </div>
      </>
    );
}