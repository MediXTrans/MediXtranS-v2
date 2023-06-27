import React from 'react'
import "./Navbar-scroll.css"
// import Logo from "../../images/mediXlogo 2 (1).png";
// import Home from "../../images/tabler_home.png";
// import Record from "../../images/ic_twotone-mic.png";
// import Upload from "../../images/basil_upload-outline.png";
// import userLogo from "../../images/User_logo.png";
import {mediXlogo_2,tabler_home,ic_twotone_mic,basil_upload_outline,User_logo} from "../../assets";

const NavbarScroll = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={mediXlogo_2} alt="logo" />
        </div>
        <div className="company-name">MediXtrans</div>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li className="nav-item ">
            <a href="Home">
              <img src={tabler_home} alt="User" />
            </a>
          </li>
          <li className="nav-item ">
            <a href="Record">
              <img src={ic_twotone_mic} alt="User" />
            </a>
          </li>
          <li className="nav-item ">
            <a href="Upload">
              <img src={basil_upload_outline} alt="User" />
            </a>
          </li>
          <div className="user">
            <img src={User_logo} alt="User" />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarScroll;
