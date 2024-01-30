import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
// import ReviewAvatar from "../images/avatar-1-42x42.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast, faPhoneVolume, faLock, faMoneyCheckDollar, faAngleLeft, faAngleRight, faMobilePhone, faPhone } from "@fortawesome/free-solid-svg-icons";
import CarouselDisplay from "../components/CarouselDisplay";
import "./Vehicle.css";

export default function Vehicle() {
  const [basics, setBasics] = useState(true);
//  const [features, setFeatures] = useState(false);
  const [description, setDescription] = useState(false)
//  const [reviews, setReviews] = useState(false);
  const [contact, setContact] = useState(false);
  const { data: cars } = useSelector(state => state.cars);
  const { vin } = useParams();
  const selectedVehicle = useMemo(() => cars?.filter(car => car?.vin === vin), [vin, cars]);
  const sampleArray = useMemo(() => selectedVehicle?.map((car) => car?.pictures.split(",").map((image, i) => ({
    id: i,
    value: image,
  }))), [selectedVehicle]);
  const photoArray = useMemo(() => sampleArray[0], [sampleArray]);
  const [bigImage, setBigImage] = useState(photoArray[0].value);
  const [currentIndex, setCurrentIndex] = useState(1)
  const totalImages = Math.ceil(photoArray.length / 4);
  const indexOfLastImage = currentIndex * 4;
  const indexOfFirstImage = indexOfLastImage - 4;
  const currentCars = photoArray?.slice(indexOfFirstImage, indexOfLastImage);


  function prevImageIndex(e) {
    e.preventDefault()
    if (currentIndex > 1) {setCurrentIndex(currentIndex - 1)}
  }
  
  function clickImage(index) {
    const mainImage = photoArray[index].value;
    setBigImage(mainImage);
  }

  function nextImageIndex(e) {
    e.preventDefault();
    if (currentIndex !== totalImages) {setCurrentIndex(currentIndex + 1)}
  }

  function changeBasics() {
    setBasics(true);
//    setFeatures(false);
    setDescription(false)
//    setReviews(false);
    setContact(false);
  }

//  function changeFeatures() {
//    setBasics(false);
//    setFeatures(true);
//    setReviews(false);
//    setAnalogs(false);
//  }

  function changeDescription() {
      setBasics(false);
      setDescription(true);
      setContact(false)
  }

//  function changeReviews() {
//    setBasics(false);
//    setFeatures(false);
//    setReviews(true);
//    setAnalogs(false);
//  }

  function changeContact() {
    setBasics(false);
//    setFeatures(false);
    setDescription(false)
//    setReviews(false);
    setContact(true);
  }

  const displayImage = (photoArray) => {
    return (
      <ul className="product-image-list">
        <li className="product-image-list-item">
          <button className="product-image-button" onClick={(e) => prevImageIndex(e)}><FontAwesomeIcon icon={faAngleLeft}/></button>
        </li>
        {photoArray?.map((car) => {
          return (
            <li className="product-image-list-item" key={car?.id}>
              <img
                onClick={() => clickImage(car?.id)}
                className={
                  bigImage === car?.value
                    ? "product-small-image active"
                    : "product-small-image"
                }
                src={car?.value}
                alt="car"
                height="70"
                width="70"
              />
            </li>
          );
        })}
        <li className="product-image-list-item">
          <button className="product-image-button" onClick={(e) => nextImageIndex(e)}><FontAwesomeIcon icon={faAngleRight} /></button>
        </li>
      </ul>
    );
  }

    return (
      <>
        <div className="product-page">
          <div className="product-banner-ad-wrapper">
          <Link className="product-banner-ad" to="/">
            <img
              className="product-banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
          </div>
          {selectedVehicle?.map(car => {
            return(
              <div className="product-body">
              <div className="product-image-wrapper">
                <img
                  className="product-main-image"
                  src={bigImage}
                  alt="big"
                />
                  {displayImage(currentCars)}
              </div>
              <div className="product-header">
                <h1 className="product-title">{car?.year}{" "}{car?.make}{" "}{car?.model}</h1>
                <h3 className="product-main-price">${car?.internetPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                {/*<ul className="product-rating-wrapper">
                  <li className="product-star-rating">
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="product-star active"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="product-star active"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="product-star active"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="product-star active"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faStar} className="product-star" />
                    </span>
                  </li>
                  <li className="product-star-rating">
                    <p className="product-rating-text">4 stars on 23 reviews</p>
                  </li>
                </ul>*/}
              </div>
              <div className="product-main">
                <h5 className="product-main-title">Key Features</h5>
                <ul className="product-main-wrapper">
                  <li className="product-main-list-item">
                    <p className="product-main-text">{car?.trans} Transmission</p>
                  </li>
                  <li className="product-main-list-item">
                    <p className="product-main-text">{car?.engine}</p>
                  </li>
                  <li className="product-main-list-item">
                    <p className="product-main-text">{car?.color}</p>
                  </li>
                  <li className="product-main-list-item">
                    <p className="product-main-text">{car?.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles</p>
                  </li>
                </ul>
                {/*<div className="product-main-link-wrapper">
                  <Link className="product-main-link">See All Features</Link>
              </div>*/}
              </div>
              <div className="product-info">
                <form className="product-info-contact-form">
                  <h3 className="product-info-title">Contact Seller</h3>
                  <Link className="product-info-phone-link">(888) 888-8888</Link>
                  <div className="product-tab-phone-wrapper hidden">
                        <button className="product-tab-phone-button">
                          <FontAwesomeIcon className="product-tab-phone-icon" icon={faPhone} />
                          Call Seller
                        </button>
                        <button className="product-tab-phone-button">
                          <FontAwesomeIcon className="product-tab-phone-icon" icon={faMobilePhone} />
                          Text Seller
                        </button>
                      </div>
                  <div className="product-info-input-wrapper">
                    <input
                      className="product-info-input"
                      placeholder="First Name"
                    />
                    <input
                      className="product-info-input"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="product-info-input-wrapper">
                    <input className="product-info-input" placeholder="E-mail" />
                    <input
                      className="product-info-input"
                      placeholder="Phone Number"
                    />
                  </div>
                  <textarea
                    className="product-info-textarea"
                    defaultValue={`I'd like to discuss the availability of the ${car?.year}${" "}${car?.make}${" "}${car?.model} listed at $${car?.internetPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} on DriveChicago.com.`}
                  />
                  <div className="product-info-button-wrapper">
                    <button className="product-info-button">
                      Contact Seller
                    </button>
                  </div>
                </form>
                <div className="product-features-section">
                  <ul className="product-features-wrapper">
                    <li className="product-features-item">
                      <FontAwesomeIcon
                        className="home-icon"
                        icon={faShippingFast}
                      />
                      <div className="product-features-info">
                        <h4 className="product-features-info-title">
                          Free Shipping
                        </h4>
                        <p className="product-features-info-subtitle">
                          For orders from $50
                        </p>
                      </div>
                    </li>
                    <li className="product-features-item">
                      <FontAwesomeIcon
                        className="home-icon"
                        icon={faPhoneVolume}
                      />
                      <div className="product-features-info">
                        <h4 className="product-features-info-title">
                          Support 24/7
                        </h4>
                        <p className="product-features-info-subtitle">
                          Call us anytime
                        </p>
                      </div>
                    </li>
                    <li className="product-features-item">
                      <FontAwesomeIcon className="home-icon" icon={faLock} />
                      <div className="product-features-info">
                        <h4 className="product-features-info-title">
                          100% Safety
                        </h4>
                        <p className="product-features-info-subtitle">
                          Only secure payments
                        </p>
                      </div>
                    </li>
                    <li className="product-features-item">
                      <FontAwesomeIcon
                        className="home-icon"
                        icon={faMoneyCheckDollar}
                      />
                      <div className="product-features-info">
                        <h4 className="product-features-info-title">Car Deals</h4>
                        <p className="product-features-info-subtitle">
                          Below Market Value
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-tab-section">
                <ul className="product-tab-list">
                  <li className="product-tab-list-item">
                    <Link
                      onClick={changeBasics}
                      className={
                        basics ? "product-tab-link active" : "product-tab-link"
                      }
                    >
                      Basics
                    </Link>
                  </li>
                  {/*<li className="product-tab-list-item">
                    <Link
                      onClick={changeFeatures}
                      className={
                        features ? "product-tab-link active" : "product-tab-link"
                      }
                    >
                      Features
                    </Link>
                  </li>*/}
                  <li className="product-tab-list-item">
                    <Link
                      onClick={changeDescription}
                      className={
                        description ? "product-tab-link active" : "product-tab-link"
                      }
                    >
                      Description
                    </Link>
                  </li>
                  {/*<li className="product-tab-list-item">
                    <Link
                      onClick={changeReviews}
                      className={
                        reviews ? "product-tab-link active" : "product-tab-link"
                      }
                    >
                      Reviews
                    </Link>
                  </li>*/}
                  <li className="product-tab-list-item">
                    <Link
                      onClick={changeContact}
                      className={
                        contact ? "product-tab-link active" : "product-tab-link"
                      }
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="product-tab-content">
                  {basics && (
                    <div className="basics">
                      <div className="basics__section">
                        <h4 className="basics__section-title">General</h4>
                        <div className="basics__row">
                          <div className="basics__name">Exterior Color</div>
                          <div className="basics__value">{car?.color}</div>
                        </div>
                        <div className="basics__row">
                          <div className="basics__name">Interior Color</div>
                          <div className="basics__value">{car?.intColor}</div>
                        </div>
                        {/*<div className="basics__row">
                          <div className="basics__name">Drivetrain</div>
                          <div className="basics__value">Front-wheel Drive</div>
                        </div>
                        <div className="basics__row">
                          <div className="basics__name">MPG</div>
                          <div className="basics__value">-</div>
                        </div>
                        <div className="basics__row">
                          <div className="basics__name">Fuel Type</div>
                          <div className="basics__value">Gasoline</div>
                  </div>*/}
                        <div className="basics__row">
                          <div className="basics__name">Transmission</div>
                          <div className="basics__value">{car?.trans}</div>
                        </div>
                        <div className="basics__row">
                          <div className="basics__name">Engine</div>
                          <div className="basics__value">
                            {car.engine}
                          </div>
                        </div>
                        <div className="basics__row">
                          <div className="basics__name">VIN</div>
                          <div className="basics__value">{car?.vin}</div>
                        </div>
                        <div className="basics__row">
                          <div className="basics__name">Stock #</div>
                          <div className="basics__value">{car?.stockNumber}</div>
                        </div>
                        <div className="basics__row">
                          <div className="basics__name">Mileage</div>
                          <div className="basics__value">{car?.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                        </div>
                      </div>
                      {/*<div className="basics__disclaimer">
                        Information on technical characteristics, the delivery
                        set, the country of manufacture and the appearance of the
                        goods is for reference only and is based on the latest
                        information available at the time of publication.
                </div>*/}
                    </div>
                  )}
                  {/*features && (
                    <div className="features">
                      <ul className="features__section">
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">4-Wheel Disc Brakes</p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">Air Conditioning</p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">Brake Assist</p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">
                            Dual Front Impact Airbags
                          </p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">
                            Exterior Parking Camera Rear
                          </p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">
                            Fully Automatic Headlights
                          </p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">Leather Steering Wheel</p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">Panic Alarm</p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">Power Steering</p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">Power Windows</p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">Remote Keyless Entry</p>
                        </li>
                        <li className="features__row">
                          <FontAwesomeIcon
                            className="features__icon"
                            icon={faCheck}
                          />
                          <p className="features__text">Speed Control</p>
                        </li>
                      </ul>
                      <div className="features__link-wrapper">
                        <Link className="features__link">View All Features</Link>
                      </div>
                    </div>
                  )*/}
                  {description && (
                    <div>
                      <p className="description-text">{car?.description}</p>
                    </div>
                  )}
                  {/*reviews && (
                    <div>
                      <ol className="reviews-list__content">
                        <li>
                          <div className="reviews-list__top-wrapper">
                            <div className="reviews-list__top-left">
                              <img
                                className="reviews-avatar"
                                src={ReviewAvatar}
                                alt="avatar"
                              />
                              <div className="reviews-text-wrapper">
                                <h5 className="reviews-author">Samantha Smith</h5>
                                <p className="reviews-date">March 23, 2023</p>
                              </div>
                            </div>
                            <div className="rating__body">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="reviews-content">
                              {" "}
                              Phasellus id mattis nulla. Mauris velit nisi,
                              imperdiet vitae sodales in, maximus ut lectus.
                              Vivamus commodo scelerisque lacus, at porttitor dui
                              iaculis id. Curabitur imperdiet ultrices fermentum.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="reviews-list__top-wrapper">
                            <div className="reviews-list__top-left">
                              <img
                                className="reviews-avatar"
                                src={ReviewAvatar}
                                alt="avatar"
                              />
                              <div className="reviews-text-wrapper">
                                <h5 className="reviews-author">Adam Taylor</h5>
                                <p className="reviews-date">February 17, 2023</p>
                              </div>
                            </div>
                            <div className="rating__body">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="reviews-content">
                              {" "}
                              Aenean non lorem nisl. Duis tempor sollicitudin
                              orci, eget tincidunt ex semper sit amet. Nullam
                              neque justo, sodales congue feugiat ac, facilisis a
                              augue. Donec tempor sapien et fringilla facilisis.
                              Nam maximus consectetur diam. Nulla ut ex mollis,
                              volutpat tellus vitae, accumsan ligula.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="reviews-list__top-wrapper">
                            <div className="reviews-list__top-left">
                              <img
                                className="reviews-avatar"
                                src={ReviewAvatar}
                                alt="avatar"
                              />
                              <div className="reviews-text-wrapper">
                                <h5 className="reviews-author">Maria Garcia</h5>
                                <p className="reviews-date">January 29, 2023</p>
                              </div>
                            </div>
                            <div className="rating__body">
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star active"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                className="rating__star"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="reviews-content">
                              Duis ac lectus scelerisque quam blandit egestas.
                              Pellentesque hendrerit eros laoreet suscipit
                              ultrices.
                            </p>
                          </div>
                        </li>
                      </ol>
                      <div className="reviews-pagination">
                        <button className="reviews-pagination-button">
                          <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button className="reviews-pagination-button">1</button>
                        <button className="reviews-pagination-button">2</button>
                        <button className="reviews-pagination-button">3</button>
                        <button className="reviews-pagination-button">4</button>
                        <p className="reviews-pagination-dots">...</p>
                        <button className="reviews-pagination-button">9</button>
                        <button className="reviews-pagination-button">
                          <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                      </div>
                      <form className="product-reviews-form">
                        <h3 className="product-reviews-title">Write A Review</h3>
                        <div className="product-reviews-row">
                          <div className="product-reviews-group stars">
                            <label htmlFor="review-stars">Review Stars</label>
                            <select id="review-stars" className="form-control">
                              <option>5 Stars Rating</option>
                              <option>4 Stars Rating</option>
                              <option>3 Stars Rating</option>
                              <option>2 Stars Rating</option>
                              <option>1 Stars Rating</option>
                            </select>
                          </div>
                          <div className="product-reviews-group name">
                            <label htmlFor="product-reviews-author">
                              Your Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="review-author"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="product-reviews-group email">
                            <label htmlFor="review-email">Email Address</label>
                            <input
                              type="text"
                              className="form-control"
                              id="review-email"
                              placeholder="Email Address"
                            />
                          </div>
                          <div className="product-reviews-group text">
                            <label htmlFor="review-text">Your Review</label>
                            <textarea
                              className="form-control"
                              id="review-text"
                              rows="6"
                            ></textarea>
                          </div>
                        </div>
                        <div className="product-reviews-submit-wrapper">
                          <button
                            type="submit"
                            className="product-reviews-submit"
                          >
                            Post Your Review
                          </button>
                        </div>
                      </form>
                    </div>
                  )*/}
                  {contact && (
                    <form className="product-tab-contact-form">
                      <h3 className="product-tab-contact-title">Contact Seller</h3>
                      <div className="product-tab-phone-wrapper">
                        <button className="product-tab-phone-button">
                          <FontAwesomeIcon className="product-tab-phone-icon" icon={faPhone} />
                          Call Seller
                        </button>
                        <button className="product-tab-phone-button">
                          <FontAwesomeIcon className="product-tab-phone-icon" icon={faMobilePhone} />
                          Text Seller
                        </button>
                      </div>
                      <div className="product-tab-contact-input-wrapper">
                        <input
                          className="product-tab-contact-input"
                          placeholder="First Name"
                        />
                        <input
                          className="product-tab-contact-input"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="product-tab-contact-input-wrapper">
                        <input
                          className="product-tab-contact-input"
                          placeholder="E-mail"
                        />
                        <input
                          className="product-tab-contact-input"
                          placeholder="Phone Number"
                        />
                      </div>
                      <textarea
                        className="product-tab-textarea"
                        defaultValue={`I'd like to discuss the availability of the ${car.year}${" "}${car.make}${" "}${car.model} listed at $${car.internetPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} on DriveChicago.com.`}
                      />
                      <div className="product-tab-contact-button-wrapper">
                        <button className="product-tab-contact-button">
                          Contact Seller
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
            )
          })}
          <div className="similar-section">
            <div className="similar-header">
              <h2 className="similar-title">Similar Vehicles</h2>
            </div>
            <CarouselDisplay />
          </div>
        </div>
      </>
    );
}