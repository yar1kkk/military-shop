import React from "react";
import Button from "../../shared/button/Button";
import Title from "../../shared/title/Title";
import "./Intro.scss";

const Intro = () => {
  const items = [
    "About Us",
    "Videos",
    "Shop",
    "News & Articles",
    "Get in Touch",
  ];

  const word1 = "for";
  const word2 = "you";

  return (
    <div>
      <div className="title-nav">
        <Title />
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item.toUpperCase()}</li>
          ))}
        </ul>
      </div>
      <div className="intro">
        <div className="intro__text">
          <span>{word1.toUpperCase()}</span>
          <span>{word2.toUpperCase()}</span>
        </div>
        <div className="intro__button">
          <Button content="shop now" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
