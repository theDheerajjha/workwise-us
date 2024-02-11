import React from "react";
import "./index.scss";
// import logo from '../logo.png';

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">WW </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>
      </header>{" "}
    </>
  );
};
export default Header;
