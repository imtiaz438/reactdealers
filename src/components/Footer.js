import './Footer.css';
import { NavLink } from 'react-router-dom';
import PathConstants from '../routes/PathConstants';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import YouTube from '../images/youtube.png';
import TikTok from '../images/tiktok.png';

export default function Footer() {
    return (
      <>
        <footer className="footer">
          <div className="footer-content">
        <div className="footer-column">
            <h4 className="footer-title">Information</h4>
            <ul className="footer-directory">
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.ABOUT}>
                  About
                </NavLink>
              </li>
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.CAR_SEARCH}>
                  Search for Car
                </NavLink>
              </li>
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.CAR_SHOWS}>
                  Car Shows
                </NavLink>
              </li>
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.SELL_CAR}>
                  Sell Your Car
                </NavLink>
              </li>
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.CALCULATOR}>
                  Finance Calculator
                </NavLink>
              </li>
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.REVIEWS}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Listings</h4>
            <ul className="footer-directory">
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.LISTINGS_DEALER}>
                  Dealer
                </NavLink>
              </li>
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.LISTINGS_CITY}>
                  City
                </NavLink>
              </li>
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.LISTINGS_MAKE}>
                  Make
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Terms</h4>
            <ul className="footer-directory">
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.TERMS_OF_USE}>
                  Terms of Use
                </NavLink>
              </li>
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.PRIVACY_POLICY}>
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-directory">
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.FAQ}>
                  FAQ
                </NavLink>
              </li>
              <li className="footer-directory-item">
                <NavLink className="footer-directory-link" to={PathConstants.CONTACT}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title last">Newsletter</h4>
            <p className="footer-email-text">
              Enter your e-mail address below to subscribe to our newsletter and
              keep up to date with discounts and special offers
            </p>
            <input className="email-input" placeholder="E-mail address..." />
            <button className="email-subscribe" type="submit">Subscribe</button>
            <p className="footer-email-text">Follow us on social networks</p>
            <ul className="social-wrapper">
              <li>
                <img className="social-logo" src={Facebook} alt="Facebook" />
              </li>
              <li>
                <img className="social-logo" src={Instagram} alt="Instagram" />
              </li>
              <li>
                <img className="social-logo" src={Twitter} alt="Twitter" />
              </li>
              <li>
                <img className="social-logo" src={YouTube} alt="YouTube" />
              </li>
              <li>
                <img className="social-logo" src={TikTok} alt="Tiktok" />
              </li>
            </ul>
           <p className="footer-copyright">©2024 drivechicago.com</p>
          </div>
          </div>
        </footer>
      </>
    );
}