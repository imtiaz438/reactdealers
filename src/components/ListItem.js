import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PathConstants from "../routes/PathConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { wishlistThunk, deleteWishlist } from "../store/savedCarSlice";
import NoImage from "../images/VehicleNoImage.png";
import "./ListItem.css";

export default function ListItem({ item }) {
    const location = useLocation();
    const dispatch = useDispatch();
    const selected = useSelector(state => state?.savedCar[item?.vin]);

    const addToList = React.useCallback((key) => {
        dispatch(wishlistThunk(key, true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, wishlistThunk, item])

    const removeFromList = React.useCallback((vin) => {
        dispatch(deleteWishlist(vin))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item, dispatch, deleteWishlist])

    return (
      <>
        <div className={location.pathname === PathConstants.SAVED_CARS ? "list-card saved" : "list-card"}>
          <Link className="list-link" to={`/vehicle/${item?.vin}`}>
            <div className="list-image-wrapper">
              <img
                className="list-image"
                src={
                  item?.pictures?.split(",")[0] !== ""
                    ? item?.pictures?.split(",")[0]
                    : NoImage
                }
                alt="list"
              />
            </div>
            <div className="list-info-section">
              <h4 className="list-title">
                {item?.make} {item?.model}
              </h4>
              <ul className="list-info-wrapper">
                <li className="list-info-list-item">
                  <p className="list-info-text">Year: {item?.year}</p>
                </li>
                <li className="list-info-list-item">
                  <p className="list-info-text">Color: {item?.color}</p>
                </li>
                <li className="list-info-list-item">
                  <p className="list-info-text">
                    Mileage:{" "}
                    {item?.mileage
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    miles
                  </p>
                </li>
                <li className="list-info-list-item">
                  <p className="list-info-text">Transmission: {item?.trans}</p>
                </li>
              </ul>
            </div>
          </Link>
          <div className="list-card-right-wrapper">
            <button
              className={
                location.pathname === PathConstants.SAVED_CARS
                  ? "list-cart-button"
                  : "list-cart-button hidden"
              }
              onClick={() => removeFromList(item?.vin)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <p className="list-price">
              $
              {item?.internetPrice
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            {selected?.wishlist ? (
              <button
                className={
                  location.pathname === PathConstants.SAVED_CARS
                    ? "list-image-button hidden"
                    : "list-image-button"
                }
                onClick={() => removeFromList(item?.vin)}
              >
                <FontAwesomeIcon
                  className="list-wishlist active"
                  icon={faHeart}
                />{" "}
                Added!
              </button>
            ) : (
              <button
                className="list-image-button"
                onClick={() => addToList(item?.vin)}
              >
                <FontAwesomeIcon className="list-wishlist" icon={faHeart} /> Add
                to Wishlist
              </button>
            )}
          </div>
        </div>
      </>
    );
}