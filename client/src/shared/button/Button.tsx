import React from "react";
import "./Button.scss";

const Button = ({ handler, content, filled }: any) => {
  return (
    <button
      onClick={handler}
      className={filled ? "button button-filled" : "button"}
    >
      {content}
    </button>
  );
};

export default Button;
