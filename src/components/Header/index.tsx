import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserTie } from "@fortawesome/free-solid-svg-icons";

// import logo from '../logo.png';

const Header = () => {
  return (
    <>
      <header>
        <div >
          <FontAwesomeIcon className="logo" icon={faUserTie} />
        </div>
        <div>WorkWi$e</div>
      </header>
    </>
  );
};
export default Header;
