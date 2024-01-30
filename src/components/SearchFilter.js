import React from 'react';
import { Link } from 'react-router-dom';
import "../routes/PathConstants";
import './SearchFilter.css';
import PathConstants from '../routes/PathConstants';

export default function SearchFilter() {
    return (
      <>
        <form className="search-form">
          <div className="search-filter">
            <select className="search-filter-dropdown">
              <option value="none">Select Year</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
            </select>
            <select className="search-filter-dropdown">
              <option value="none">Select Make</option>
            </select>
            <select className="search-filter-dropdown">
              <option value="none">Select Model</option>
            </select>
            <select className="search-filter-dropdown">
              <option value="none">Select Engine</option>
            </select>
          </div>
          <Link className="search-filter-button-link" to={PathConstants.RESULTS}>
          <button className="search-filter-button">
            Search
          </button>
          </Link>
        </form>
      </>
    );
}