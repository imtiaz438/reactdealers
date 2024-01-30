import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { wishlistThunk, deleteWishlist } from "../store/savedCarSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { savedController } from "../store/savedCarSlice";
import NoImage from "../images/VehicleNoImage.png";
import "./GridItem.css";

export default function GridItem({ item }) {
    const dispatch = useDispatch();
    const selected = useSelector(state => state?.savedCar[item.vin]);
  
    const addToList = React.useCallback((key) => {
        dispatch(wishlistThunk(key, true));
        return () => {
          savedController.abort()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, wishlistThunk, item])

    const removeFromList = React.useCallback((vin) => {
        dispatch(deleteWishlist(vin));
        return () => {
          savedController.abort()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item, dispatch, deleteWishlist])

    return (
      <>
        <div className="grid-card">
          <Link className="grid-image-wrapper" to={`/vehicle/${item.vin}`}>
            <img className="grid-image" src={item.pictures.split(",")[0] !== "" ? item.pictures.split(",")[0] : NoImage} alt="grid" />
          </Link>
          <div className="grid-info-section">
            <h4 className="grid-title">{item.make}{" "}{item.model}</h4>
            <p className="grid-text"><span className="grid-text-title">Year:{" "}</span>{item.year}</p>
            <p className="grid-text"><span className="grid-text-title">Mileage:{" "}</span>{item.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles</p>
            <ul className="grid-list-wrapper">
              <li className="grid-list-item">
                <p className="grid-price">${item.internetPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              </li>
              <li className="grid-list-item">
                {selected?.wishlist ? (
                  <button
                    onClick={() => removeFromList(item.vin)}
                    className="grid-wishlist active"
                  >
                    <FontAwesomeIcon className="grid-wishlist-icon" icon={faHeart} />
                  </button>
                ) : (
                  <button
                    onClick={() => addToList(item.vin)}
                    className="grid-wishlist"
                  >
                    <FontAwesomeIcon className="grid-wishlist-icon" icon={faHeart} />
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}