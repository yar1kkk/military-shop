import React from "react";
import "./Title.scss";

const Title = () => {
  const title = "Shield shop";
  const country = "Ukraine";

  return (
    <div class="title">
      <h1>{title}</h1>
      <h2>{country}</h2>
    </div>
  );
};

export default Title;
