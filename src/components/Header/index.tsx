import React from "react";
import "./index.scss";
import dp from "../../Assets/Profile_DP_White_Dheeraj.jpg";
const Header = () => {
  return (
    <>
      <header>
        <div>WorkWi$e - US</div>
        <div>
          <img src={dp} className="dp" alt="DK" />
        </div>
      </header>
    </>
  );
};
export default Header;
