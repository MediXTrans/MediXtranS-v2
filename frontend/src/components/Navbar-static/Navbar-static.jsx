import React from 'react'
import "./Navbar-static.css"
import Logo from "../../images/mediXlogo 2 (1).png";
import userLogo from "../../images/User_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="company-name">MediXtrans</div>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li className="nav-item ">
            <a href="Home">Home</a>
          </li>
          <li className="nav-item ">
            <a href="Record">Record</a>
          </li>
          <li className="nav-item ">
            <a href="Upload">Upload</a>
          </li>
          <div className="user">
            <img src={userLogo} alt="User" />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
