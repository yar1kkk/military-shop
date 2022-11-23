import React from "react";
import Button from "../../shared/button/Button";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h2>Subscribe to us</h2>
      <p>Velit officia consequat duis enim velit mollit.</p>
      <div className="subscribe__input-button">
        <input placeholder="E-mail" />
        <Button filled content="send" />
      </div>
    </div>
  );
};

export default Subscribe;
