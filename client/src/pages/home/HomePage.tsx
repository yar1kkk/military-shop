import React from "react";
import "./HomePage.scss";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Footer />
    </div>
  );
};

export default HomePage;
