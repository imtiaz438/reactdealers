import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { wishlistThunk, deleteWishlist } from "../store/savedCarSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import NoImage from "../images/VehicleNoImage.png";
import "./TableItem.css";

export default function TableItem({ item }) {
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
      <div className="table-card">
        <Link className="table-card-left-wrapper" to={`/vehicle/${item?.vin}`}>
          <div className="table-card-image-wrapper">
            <img className="table-card-image" src={item?.pictures?.split(",")[0] !== "" ? item?.pictures?.split(",")[0] : NoImage} alt="grid" />
          </div>
          <div className="table-info-section">
            <h5 className="table-card-title">{item?.make}{" "}{item?.model}</h5>
            <div className="table-card-text-wrapper">
            <p className="table-card-text"><span className="table-card-text-title">Year:{" "}</span>{item?.year}</p>
            <p className="table-card-text"><span className="table-card-text-title">Mileage:{" "}</span>{item?.mileage?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles</p>
          </div>
          </div>
        </Link>
        <div className="table-card-right-wrapper">
          <div className="table-price">${item?.internetPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          {selected?.wishlist ? (
            <button
              onClick={() => removeFromList(item?.vin)}
              className="table-wishlist active"
            >
              <FontAwesomeIcon className="table-wishlist-icon" icon={faHeart} />
            </button>
          ) : (
            <button
              onClick={() => addToList(item?.vin)}
              className="table-wishlist"
            >
              <FontAwesomeIcon className="table-wishlist-icon" icon={faHeart} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}