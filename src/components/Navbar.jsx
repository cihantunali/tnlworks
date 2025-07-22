import React from "react";
import "../scss/Navbar.scss";
import icon from "../assets/img/icon.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero">
        <img src={icon} alt="logo" />
        </a>
      </div>
      <div className="navbar-links">
        <a href="#why-tnlworks">TNLWorks</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;