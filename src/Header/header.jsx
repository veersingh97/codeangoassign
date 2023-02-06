import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { CgCloseO } from "react-icons/cg";
import "./header.css";

const Header = () => {
  const [isToggle, setIsToggle] = useState("false");

  return (
    <section className="header-section">
      <div>
        {/* <img className="logo" src={Logo} alt="Logo"></img> */}
        <h1>Edumark</h1>
      </div>
      <div className="navbar-content">
        <ul className={isToggle ? "navbar-text" : "navbar-text active"}>
          <li className="navbar-label" onClick={() => setIsToggle(true)}>
            Home
          </li>
          <li className="navbar-label"
            onClick={() => setIsToggle(true)}
          >
            Course
          </li>
        </ul>
      </div>
      <div className="bars" onClick={() => setIsToggle(!isToggle)}>
        {isToggle ? (
          <RiMenu3Line className="bars-mobile" />
        ) : (
          <CgCloseO className="bars-mobile" />
        )}
      </div>
    </section>
  );
};

export default Header;
