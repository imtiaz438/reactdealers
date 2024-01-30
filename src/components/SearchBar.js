import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

export default function SearchBar(props) {
    const [input, setInput] = useState("");
    const {data: cars} = useSelector(state => state.cars);
    const fullName = cars.map(vehicle => vehicle.make + " " + vehicle.model);
    const filteredList = [...new Set(fullName)];

    function changeInput(e) {
        setInput(e.target.value.toLowerCase())
    }

    return (
      <>
        <div className="desktop-header-search">
          <button type="button" className="desktop-header-search__button">
            <FontAwesomeIcon icon={faCarSide} />
          </button>
          <input
            className="desktop-header-search__input"
            placeholder="Enter make and model"
            value={input}
            onChange={changeInput}
          />
          <button type="submit" className="desktop-header-search__submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="mobile-header-search">
          <button type="button" className="mobile-header-search__button">
            <FontAwesomeIcon icon={faCarSide} />
          </button>
          <input
            className="mobile-header-search__input"
            placeholder="Enter Make and Model"
            value={input}
            onChange={changeInput}
          />
          <button type="submit" className="mobile-header-search__submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        {props.showSearch && (
              <form className="mobile-search-menu">
                <button
                  className="mobile-search-menu-close"
                  onClick={props.searchMenu}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
                <button className="mobile-search-menu-submit" type="submit">
                  <FontAwesomeIcon icon={faCarSide} />
                  <span className="mobile-search-menu-span">&nbsp;Vehicle</span>
                </button>
                <input
                  className="mobile-search-menu-input"
                  placeholder="Enter Make and Model"
                  value={input}
                  onChange={changeInput}
                />
                <button className="mobile-search-menu-button" type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button
                  className="mobile-search-menu-button"
                  type="button"
                  onClick={props.searchMenu}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
              </form>
            )}
        <div
          className={
            window.innerWidth > 749 && input.length > 0 ? "search-result" : (window.innerWidth < 750 && input.length > 0 && props.showSearch) ? "search-result" : "search-result hidden" 
          }
        >
          <ul className="search-result-list">
            {filteredList
              .filter((vehicle) => {
                return input.toLowerCase() === ""
                  ? vehicle
                  : vehicle.toLowerCase().includes(input);
              })
              .map((vehicle, i) => {
                return (
                  <li className="search-result-list-item" key={i}>
                    <Link
                      className="search-result-list-item-link"
                      onClick={() => setInput(vehicle)}
                    >
                      {vehicle}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
}