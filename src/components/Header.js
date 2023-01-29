import React from "react";
import logo from "../assets/logo/long-logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./Header.css";

function Header() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} alt="logo" />
      <div className="search-bar">
        <div className="search-bar-text">Any where</div>
        <div className="search-bar-text">Any Week</div>
        <div className="search-bar-text2">Add Guests</div>
        <div className="search-bar-icon">
          <SearchRoundedIcon />
        </div>
      </div>
      <div className="profile-container">Profile</div>
    </div>
  );
}

export default Header;
