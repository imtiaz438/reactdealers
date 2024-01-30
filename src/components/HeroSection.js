import React from "react";
import SearchFilter from "./SearchFilter";
import "./HeroSection.css";

export default function HeroSection() {
    return (
      <>
        <div className="hero-section">
          <h1 className="home-title">Find Cars for Sale</h1>
          <p className="home-subtitle">Thousands of Cars to Choose From</p>
          <SearchFilter />
        </div>
      </>
    );
}