import React from "react";
import "./Header.scss";
import ProfileIcon from "../../assets/icons/profile-normal.svg";

const Header = () => {
  return (
    <header class="header">
      <div class="container header__center">
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
        <div class="header__search">
          <span>Search</span>
          <input />
        </div>
        <div>
          <img src={ProfileIcon} alt="profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
