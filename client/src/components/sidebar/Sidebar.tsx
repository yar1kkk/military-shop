import React from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/button/Button";
import "./Sidebar.scss";

interface ISidebar {
  isShown: boolean;
  handleShow: () => void;
}

const Sidebar = ({ isShown, handleShow }: ISidebar) => {
  return (
    <>
      <nav className={isShown ? "sidebar active" : "sidebar"}>
        <h3>Oops, seems that you are not logged in!</h3>
        <span>
          <Link to={"/login"} onClick={handleShow}>
            <Button content="Log in" />
          </Link>
        </span>
        <Link to={"/register"}>
          <button className="sidebar__register" onClick={handleShow}>
            Register
          </button>
        </Link>
      </nav>
      <div
        className={isShown ? "sidebar-blur" : "sidebar-hide"}
        onClick={handleShow}
      />
    </>
  );
};

export default Sidebar;
