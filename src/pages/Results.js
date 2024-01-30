import React, { useState } from "react";
import lodash from "lodash";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StatusCode } from "../utils/StatusCode.js";
import SideMenu from "../components/SideMenu.js";
import GridIcon from "../images/grid-64.png";
import TableIcon from "../images/table-64.png";
import ListIcon from "../images/menu-64.png";
import BlueGridIcon from "../images/blue-grid-64.png";
import BlueTableIcon from "../images/blue-table-50.png";
import BlueListIcon from "../images/blue-menu-64.png";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import { loadCars } from "../store/carsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SkeletonGrid from "src/components/SkeletonGrid.js";
import SkeletonTable from "src/components/SkeletonTable.js";
import GridItem from "../components/GridItem.js";
import TableItem from "../components/TableItem.js";
import ListItem from "../components/ListItem.js";
import "./Results.css";
import SkeletonList from "src/components/SkeletonList.js";

export default function Results() {
    const [gridView, setGridView] = useState(true);
    const [tableView, setTableView] = useState(false);
    const [listView, setListView] = useState(false);
    const [mobile, setMobile] = useState(false);
    const dispatch = useDispatch();
    const {data: cars, status } = useSelector(state => state.cars);
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage, setCarsPerPage] = useState(10);
    const totalPages = Math.ceil(cars.length / carsPerPage);
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
    const numbers = [...Array(totalPages + 1).keys()].slice(1);
    const pageNumberLimit = 5;
    const [minPageLimit, setMinPageLimit] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);

    if (status === StatusCode.ERROR) {
      return <p>Something went wrong! Try again later.</p>
    }

    function gridMenu() {
      setGridView(true);
      setTableView(false);
      setListView(false);
    }

    function tableMenu() {
      setGridView(false);
      setTableView(true);
      setListView(false);
    }

    function listMenu() {
      setGridView(false);
      setTableView(false);
      setListView(true);
    }

    function mobileMenu() {
      setMobile(!mobile);
    }

    function onSelectSort(e) {
      const value = e.target.value + "" 
      const [attribute, order] = value.split("-");
      const sortedCars = lodash.orderBy(cars, [attribute], [order])
      dispatch(loadCars(sortedCars))
    }

    function prevPage() {
      if (currentPage > 1) {setCurrentPage(currentPage - 1)}
      if ((currentPage - 1) % pageNumberLimit === 0 && minPageLimit >= 2) {
        setMinPageLimit(minPageLimit - pageNumberLimit)
        setMaxPageLimit(maxPageLimit - pageNumberLimit)
      }
    }

    function changeCurrentPage(id) {
      setCurrentPage(id)
    }

    function nextPage() {
      if (currentPage !== totalPages) {setCurrentPage(currentPage + 1)}
      if ((currentPage + 1) > maxPageLimit) {
        setMinPageLimit(minPageLimit + pageNumberLimit)
        setMaxPageLimit(maxPageLimit + pageNumberLimit)
      } 
    };

    const displayGrid = (cars) => {
      if (status === StatusCode.LOADING) {
        return (
          <ul className="grid-layout-list">
            <SkeletonGrid cards={10} />
          </ul>
        )
      }
      if (status === StatusCode.IDLE) {
        return(
          <ul className="grid-layout-list">
            {cars.map((item, i) => {
              return(
                <li className="grid-layout-list-item" key={i}>
                  <GridItem item={item}  />
                </li>
                )
            })}
          </ul>
        )
      }
    };

    const displayTable = (cars) => {
      if (status === StatusCode.LOADING) {
        return (
          <div className="table-layout">
          <div className="table-title-wrapper">
            <div className="table-title-wrapper-section">
              <h3 className="table-title" id="image-title">
                Image
              </h3>
              <h3 className="table-title">Vehicle</h3>
            </div>
            <div className="table-title-wrapper-section">
              <h3 className="table-title">Price</h3>
              <h3 className="table-title" id="cart-title">
                Cart
              </h3>
            </div>
          </div>
          <ul className="layout-list">
            <SkeletonTable cards={10} />
          </ul>
          </div>
        )
      }
      if (status === StatusCode.IDLE) {
        return(
          <div className="table-layout">
          <div className="table-title-wrapper">
            <div className="table-title-wrapper-section">
              <h3 className="table-title" id="image-title">
                Image
              </h3>
              <h3 className="table-title">Vehicle</h3>
            </div>
            <div className="table-title-wrapper-section">
              <h3 className="table-title">Price</h3>
              <h3 className="table-title" id="cart-title">
                Cart
              </h3>
            </div>
          </div>
          <ul className="layout-list">
          {cars.map((item, i) => {
            return <li className="layout-list-item" key={i}><TableItem item={item} /></li>;
          })}
          </ul>
        </div>
        )
      }
    };

    const displayList = (cars) => {
      if (status === StatusCode.LOADING) {
        return(
          <ul className="layout-list">
            <SkeletonList cards={10} />
          </ul>
        )
      }
      if (status === StatusCode.IDLE) {
        return(
          <ul className="layout-list">
          {cars.map((item, i) => {
          return <li className="layout-list-item" key={i}><ListItem item={item} /></li>;
        })}
        </ul>
        )
      }
    };

    return (
      <>
        <div className="results-banner-ad-wrapper">
          <Link className="results-banner-ad" to="/">
            <img
              className="results-banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <h1 className="results-title">Car Search Results</h1>
        <div className="results-page">
          <div className="results-page-left-wrapper">
          <SideMenu />
          <div className="results-vertical-ad-wrapper">
            <Link>
              <img src={FordVertical} alt="ad" />
            </Link>
          </div>
          <div className="results-vertical-ad-wrapper">
            <Link>
              <img src={ToyotaVertical} alt="ad" />
            </Link>
          </div>
          </div>
          <div className="results-body">
            <div className="results-body-top">
              <div className="results-body-top-left">
                <ul className="results-body-list">
                  <li className="results-body-list-item" id="filter-item">
                    <button className="filter-button" onClick={mobileMenu}>
                      <FontAwesomeIcon icon={faFilter} />
                      <span> Filter</span>
                    </button>
                    {mobile && <SideMenu mobileMenu={mobileMenu} />}
                  </li>
                  <li className="results-body-list-item">
                    <button onClick={gridMenu} className="results-body-button">
                      <img
                        className="results-body-button-icon"
                        src={gridView ? BlueGridIcon : GridIcon}
                        alt="grid"
                      />
                    </button>
                  </li>
                  <li className="results-body-list-item">
                    <button onClick={tableMenu} className="results-body-button">
                      <img
                        className="results-body-button-icon"
                        id="table-icon"
                        src={tableView ? BlueTableIcon : TableIcon}
                        alt="table"
                      />
                    </button>
                  </li>
                  <li className="results-body-list-item">
                    <button onClick={listMenu} className="results-body-button">
                      <img
                        className="results-body-button-icon"
                        src={listView ? BlueListIcon : ListIcon}
                        alt="list"
                      />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="results-body-top-right">
                <div className="results-body-filter-wrapper">
                  <p className="results-body-filter-category">Sort:</p>
                  <select className="results-body-filter-select" onChange={onSelectSort}>
                    <option value="0">Select</option>
                    <option value="mileage-asc">Mileage ↑</option>
                    <option value="mileage-desc">Mileage ↓</option>
                    <option value="internetPrice-asc">Price ↑</option>
                    <option value="internetPrice-desc">Price ↓</option>
                    <option value="year-asc">Year ↑</option>
                    <option value="year-desc">Year ↓</option>
                  </select>
                </div>
                <div className="results-body-filter-wrapper">
                  <p className="results-body-filter-category">Show:</p>
                  <select className="results-body-filter-select number" onChange={(e) => setCarsPerPage(e.target.value)}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="results-section-middle">
              {gridView ? displayGrid(currentCars)
               : tableView ? displayTable(currentCars)
               : displayList(currentCars)
              }
            </div>
            <div className="results-section-bottom">
              <div className="results-page-buttons-wrapper">
                <ul className="results-pagination-list">
                  <li className="results-pagination-list-item">
                    <button className="results-pagination-button" onClick={prevPage}>
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                  </li>
                  {numbers.map((n, i) => {
                    if (n <= maxPageLimit && n >= minPageLimit) {
                      return(
                        <li className={`results-pagination-list-item ${currentPage === n ? `active`: ``}`} key={i}>
                          <button className="results-pagination-button" onClick={() => changeCurrentPage(n)}>{n}</button>
                        </li>
                      )
                    } else {
                      return null;
                    }
                  })}
                  <li className="results-pagination-list-item">
                    <button className="results-pagination-button" onClick={nextPage}>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}