import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import Button from "../../shared/button/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
interface ISidebar {
  isShown: boolean;
  handleShow: () => void;
}

const Sidebar = ({ isShown, handleShow }: ISidebar) => {
  return (
    <>
      <nav className={isShown ? "sidebar active" : "sidebar"}>
        <div className="sidebar__close" onClick={handleShow}>
          <p>Back</p>
          <AiOutlineArrowRight />
        </div>
        <h3>Oops, you are not logged in!</h3>
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
