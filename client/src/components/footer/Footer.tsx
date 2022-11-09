import React from "react";
import { useLocation } from "react-router-dom";
import Title from "../../shared/title/Title";
import "./Footer.scss";

const Footer = () => {
  const location = useLocation();

  const helps = [
    "(067) 74 28 205",
    "slavkovaskiv@gmail.com",
    "(066) 75 30 820",
    "s.t.a.s.2003zsa@gmail.com",
  ];

  const categories = ["category", "category", "category", "category"];

  const companyFeatures = [
    "About Us",
    "Our Story",
    "Partnership",
    "Video",
    "Reviews",
  ];

  if (location.pathname === "/login" || location.pathname === "/register")
    return <div></div>;
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__title">
          <Title />
        </div>
        <div className="footer__lists">
          <div className="footer__list">
            <h3>Shop</h3>
            <ul>
              {categories.map((category, idx) => (
                <li key={idx}>{category}</li>
              ))}
            </ul>
          </div>
          <div className="footer__list">
            <h3>Company</h3>
            <ul>
              {companyFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="footer__list">
            <h3>Help</h3>
            <ul>
              {helps.map((help, idx) => (
                <li key={idx}>{help}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <span>
        2022 Stas & Yarik, Inc. All Rights Reserved. <a href="*">Terms</a>,
        <a href="*">Privacy and Cookies</a> & <a href="*">Accessibility</a>
      </span>
    </footer>
  );
};

export default Footer;
