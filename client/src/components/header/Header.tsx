import React from "react";
import "./Header.scss";
import ProfileIcon from "../../assets/icons/profile-normal.svg";
import { useLocation } from "react-router-dom";

interface IHeader {
  handleShow: any;
}

const Header = ({ handleShow }: IHeader) => {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register")
    return <div></div>;
  return (
    <header className="header">
      <div className="container header__center">
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
        <div className="header__search">
          <span>Search</span>
          <input />
        </div>
        <div onClick={handleShow}>
          <img src={ProfileIcon} alt="profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
