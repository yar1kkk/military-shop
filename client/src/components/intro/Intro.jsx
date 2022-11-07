import React from "react";
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
      <div class="title-nav">
        <Title />
        <ul>
          {items.map((item) => (
            <li>{item.toUpperCase()}</li>
          ))}
        </ul>
      </div>
      <div class="intro">
        <div class="intro__text">
          <span>{word1.toUpperCase()}</span>
          <span>{word2.toLowerCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
