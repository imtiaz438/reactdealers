import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCars, controller } from "src/store/carsSlice";
import { useDispatch } from "react-redux";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import ToyotaSquare from "../images/Square-Ad-Toyota.jpg";
import FordSquare from "../images/Square-Ad-Ford.jpg";
import HeroSection from "../components/HeroSection";
import SearchGrid from "../components/SearchGrid";
import Features from "../components/Features";
import CarouselDisplay from "../components/CarouselDisplay";
import Reviews from "../components/Reviews";
import SearchTables from "../components/SearchTables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

export default function Home() {
    const [filterState, setfilterState] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCars());
    return () => controller.abort()
  }, [dispatch])

    function handleFilterChange(){
        setfilterState(!filterState);
    }
    
    return (
      <>
        <HeroSection />
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/"> 
            <img
              className="banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <div className="home-ads-wrapper">
          <div className="home-ads-content">
            <div className="home-square-ad-wrapper">
              <Link className="home-square-ad" id="left-ad" to="/">
                <img
                  src={FordSquare}
                  alt="square"
                />
              </Link>
            </div>
            <SearchGrid />
            <div className="home-square-ad-wrapper">
              <Link className="home-square-ad" id="right-ad" to="/">
                <img
                  src={ToyotaSquare}
                  alt="square"
                />
              </Link>
            </div>
          </div>
        </div>
        <Features />
        <div className="carousel-section">
          <div className="carousel-header">
            <h3 className="carousel-title">Featured Vehicles</h3>
            <div className="carousel-tabs-wrapper">
              <ul className="carousel-tabs">
                <li>
                  <button className="home-tab-button">All</button>
                </li>
                <li>
                  <button className="home-tab-button">Cars</button>
                </li>
                <li>
                  <button className="home-tab-button">Trucks</button>
                </li>
                <li>
                  <button className="home-tab-button">SUVs</button>
                </li>
              </ul>
            </div>
          </div>
          <CarouselDisplay />
        </div>
        <Reviews />
        <div className="search-section">
          <h3 className="search-title">Find the Right Car for You Today!</h3>
          <div className="search-buttons-wrapper">
            <div className="search-buttons-left-wrapper">
              <button className="home-tab-button">Featured</button>
              <button className="home-tab-button">Bestsellers</button>
              <button className="home-tab-button">Popular</button>
            </div>
            <button className="search-button" onClick={handleFilterChange}>
              <FontAwesomeIcon icon={faFilter} />
              <span> Filter</span>
            </button>
          </div>
          {filterState && (
            <form className="filter-menu">
              <div className="filter-menu-section">
                <h5 className="filter-menu-title">Manufacturer</h5>
                <select className="filter-menu-dropdown">
                  <option>Chevrolet</option>
                  <option>Toyota</option>
                  <option>Ford</option>
                  <option>Chrysler</option>
                  <option>Mercedes</option>
                  <option>Hyundai</option>
                  <option>Kia</option>
                </select>
              </div>
              <div className="filter-menu-section">
                <h5 className="filter-menu-title">Body Style</h5>
                <select className="filter-menu-dropdown">
                  <option>Cars</option>
                  <option>Trucks</option>
                  <option>SUVs</option>
                  <option>EVs</option>
                  <option>Coupe</option>
                  <option>Sedan</option>
                  <option>RV</option>
                </select>
              </div>
              <div className="filter-menu-section">
                <h5 className="filter-menu-title">Price</h5>
                <input className="filter-menu-input" placeholder="Min Price" />
                <input className="filter-menu-input" placeholer="Max Price" />
              </div>
              <div className="filter-menu-section">
                <button className="filter-menu-submit" type="submit">
                  Search
                </button>
              </div>
            </form>
          )}
          <CarouselDisplay />
        </div>
        <SearchTables />
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