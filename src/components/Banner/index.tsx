import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
  return (
    <>
      <div className="banner-container d-flex justify-content-center">
        <div className="banner-text">
          <p>Over 5,00,000+ jobs to explore</p>
        </div>
        <div className="search-bar  d-flex justify-content-center">
          <input type="text" placeholder="Search..."/>
          <button type="button" disabled={true}>
            {" "}
            <FontAwesomeIcon className="logo" icon={faSearch} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
