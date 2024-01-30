import { Link, useLocation } from "react-router-dom";
import Mazda from "../images/2024-Mazda.png";
import Subaru from "../images/2024-Subaru.png";
import Nissan from "../images/2023-Nissan.png";
import Toyota from "../images/2023-Toyota.png";
import './Reviews.css';

export default function Reviews() {
    const location = useLocation();

    return (
      <>
        <div className={location.pathname === "/" ? "reviews-section home" : "reviews-section reviews"}>
          <h2 className="reviews-title">{location.pathname === "/" ? `Latest Reviews` : `Get Expert Advice`}</h2>
          <ul className="reviews-wrapper">
            <li className="review-list-item">
              <img className="review-image" src={Mazda} alt="Mazda" />
              <div className="review-info-section">
                <h5 className="review-name">2024 Mazda CX-90</h5>
                <div className="review-author">
                  <p className="review-description">Dave Boe</p>
                  <p className="review-description">DriveChicago.com</p>
                </div>
              </div>
              <div className="review-overlay">
                <Link className="review-overlay-link" to="/article">
                  <h3>2024 Mazda CX-90</h3>
                </Link>
              </div>
            </li>
            <li className="review-list-item">
              <img className="review-image" src={Subaru} alt="Subaru" />
              <div className="review-info-section">
              <h5 className="review-name">2024 Subaru Crosstrek</h5>
              <div className="review-author">
                <p className="review-description">Mark Bilek</p>
                <p className="review-description">DriveChicago.com</p>
              </div>
              </div>
              <div className="review-overlay">
                <Link className="review-overlay-link" to="/article">
                  <h3>2024 Subaru Crosstrek</h3>
                </Link>
              </div>
            </li>
            <li className="review-list-item">
              <img className="review-image" src={Nissan} alt="Nissan" />
              <div className="review-info-section">
              <h5 className="review-name">2023 Nissan Z</h5>
              <div className="review-author">
              <p className="review-description">Jim O'Brill</p>
              <p className="review-description">DriveChicago.com</p>
              </div>
              </div>
              <div className="review-overlay">
                <Link className="review-overlay-link" to="/article">
                  <h3>2023 Nissan Z</h3>
                </Link>
              </div>
            </li>
            <li className="review-list-item">
              <img className="review-image" src={Toyota} alt="Toyota" />
              <div className="review-info-section">
              <h5 className="review-name">2023 Toyota Corolla Cross Hybrid</h5>
              <div className="review-author">
              <p className="review-description">Dave Boe</p>
              <p className="review-description">DriveChicago.com</p>
              </div>
              </div>
              <div className="review-overlay">
                <Link className="review-overlay-link" to="/article">
                  <h3>2023 Toyota Corolla Cross Hybrid</h3>
                </Link>
              </div>
            </li>
          </ul>
          <div className="review-link-wrapper">
          <Link className="review-link" to="/reviews">See All</Link>
          </div>
        </div>
      </>
    );
}