import React from "react";
import "./HomePage.scss";
import Intro from "../../components/intro/Intro";
import TopSales from "../../components/top-sales/TopSales";
import Subscribe from "../../components/subscribe/Subscribe";

const HomePage = () => {
  return (
    <div className="home">
      <Intro />
      <TopSales />
      <Subscribe />
    </div>
  );
};

export default HomePage;
