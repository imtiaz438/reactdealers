import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  APIProvider,
  Map,
  Marker
} from "@vis.gl/react-google-maps";
import { useDispatch, useSelector } from "react-redux";
import { getDealer, dealerController } from "../store/dealerSlice";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faLaptop, faCarSide } from "@fortawesome/free-solid-svg-icons";
import "./ListingsDealer.css";



export default function ListingsDealer() {
    const [zipCode, setZipCode] = useState("");
    const [validation, setValidation] = useState(true);
    const dispatch = useDispatch();
    const { data: dealer } = useSelector(state => state.dealer);

    console.log(validation)

    useEffect(() => {
        dispatch(getDealer());
        return () => dealerController.abort()
    }, [dispatch])

    const changeZipCode = (e) => {
        const number = e.target.value.replace(/\D/g, "");
        setZipCode(Number(number))
    }

    function validZipCode() {
        if (zipCode.toString().length < 5) {
            setValidation(false)
        } else {
            setValidation(true)
        }
    }

    //const [setMapLoaded] = useState(false);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=your_api_key&libraries=places,geometry`;
        script.async = true;
        script.defer = true;
        //script.onload = () => setMapLoaded(true);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const obj = [];
    const bizdata = [];
    dealer.map((item, i) => {
        //const position = { lat: Number(item.latitude), lng: Number(item.longitude) }
        //console.log(item)
        const p1 = new window.google.maps.LatLng(item.latitude, item.longitude);
        const p2 = new window.google.maps.LatLng('41.779334', '-87.866449');
        obj.push({ item, 'distance': calcDistance(p1, p2) });
        //dealer[i].distance = calcDistance(p1, p2);

        return obj
    });

    function calcDistance(p1, p2) {
        return (window.google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    }

    function compare(data, radius) {
        data.map((info, x) => {
            if (parseFloat(data[x].distance) < radius) {
                console.log(data[x])
                bizdata.push(data[x])
                return data[x]

            }

        });

    }

    compare(obj, '15');
    console.log(bizdata);

    if (bizdata !== "") {
        return (
            <>
                <div className="dealer-listings-top-ad">
                    <div className="banner-ad-wrapper">
                        <Link className="banner-ad" to="/">
                            <img
                                className="banner-ad-image"
                                src={ToyotaBanner}
                                alt="placeholder"
                            />
                        </Link>
                    </div>
                </div>
                <h1 className="dealer-listings-title">Dealer Listings</h1>
                <div className="dealer-listings-content-wrapper">
                    <div className="dealer-listings-vertical-ad-wrapper">
                        <Link>
                            <img src={ToyotaVertical} alt="ad" />
                        </Link>
                    </div>
                    <div className="dealer-listings-search-wrapper">
                        <div className="dealer-listings-box">
                            <h3 className="dealer-listings-box-title">
                                Search for Dealers by Zip Code
                            </h3>
                            <div className="dealer-listings-select-wrapper">
                                <div className="dealer-listings-input-wrapper">
                                    <label className="dealer-listings-label">Make</label>
                                    <select className="dealer-listings-input">
                                        <option>Toyota</option>
                                        <option>Scion</option>
                                    </select>
                                </div>
                                <div className="dealer-listings-input-wrapper">
                                    <label className="dealer-listings-label">Within</label>
                                    <select className="dealer-listings-input">
                                        <option>10 miles</option>
                                    </select>
                                </div>
                                <div className="dealer-listings-input-wrapper">
                                    <label className="dealer-listings-label">Zip Code</label>
                                    <input className="dealer-listings-input" type="text" value={zipCode} onChange={changeZipCode} maxLength={5} />
                                    {validation ? <div className="dealer-listings-input-validation"></div> : <div className="dealer-listings-input-validation"><span className="dealer-listings-input-validation-text">Please enter a valid zip code!</span></div>}
                                </div>
                            </div>
                            <div className="dealer-listings-box-button-wrapper">
                                <button className="dealer-listings-box-button" onClick={(e) => validZipCode(e)}>Search</button>
                            </div>
                        </div>
                        <div className="dealer-listings-search-results">
                            <h3 className="dealer-listings-search-results-title">
                                5 Dealers Found!
                            </h3>
                            <ul className="dealer-listings-search-list">
                                {bizdata.map((item, i) => {
                                    const position = { lat: Number(item.item.latitude), lng: Number(item.item.longitude) }
                                    return (
                                        <li className="dealer-listings-search-list-item" key={i}>
                                            <div className="dealer-listings-item-column left">
                                                <h5 className="dealer-listings-item-title">
                                                    {item.dealerName}
                                                </h5>
                                                <p className="dealer-listings-item-distance">{item.distance} miles</p>
                                                <p className="dealer-listings-item-address">
                                                    {item.item.addressOne}
                                                    <br />
                                                    {item.item.city}{", "}{item.item.state}{" "}{item.item.zipCode}
                                                </p>
                                                <div className="dealer-listings-item-link-wrapper">
                                                    <Link className="dealer-listings-item-link">
                                                        <FontAwesomeIcon
                                                            className="dealer-listings-item-icon"
                                                            icon={faPhoneVolume}
                                                        />
                                                        {item.item.phoneNumber.replace(/^(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
                                                    </Link>
                                                    <br />
                                                    <Link className="dealer-listings-item-link" to={item.item.websiteUrl} target="_blank">
                                                        <FontAwesomeIcon
                                                            className="dealer-listings-item-icon"
                                                            icon={faLaptop}
                                                        />
                                                        View Website
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="dealer-listings-item-column right">
                                                <Link>
                                                    <button className="dealer-listings-item-button">
                                                        <FontAwesomeIcon
                                                            className="dealer-listings-item-icon"
                                                            icon={faCarSide}
                                                        />
                                                        View Inventory
                                                    </button>
                                                </Link>
                                                <APIProvider apiKey={''}>
                                                    <div className="dealer-listings-item-map">
                                                        <Map zoom={15} center={position} options={{ disableDefaultUI: true }}>
                                                            <Marker position={position}></Marker>
                                                        </Map>
                                                    </div>
                                                </APIProvider>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="dealer-listings-vertical-ad-wrapper">
                        <Link>
                            <img src={FordVertical} alt="ad" />
                        </Link>
                    </div>
                </div>
                <div className="banner-ad-wrapper">
                    <Link className="banner-ad" to="/">
                        <img
                            className="banner-ad-image"
                            src={FordBanner}
                            alt="placeholder"
                        />
                    </Link>
                </div>
            </>
        );
    }
}