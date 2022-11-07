import React from "react";
import Title from "../../shared/title/Title";
import "./Footer.scss";

const Footer = () => {
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

  return (
    <footer class="footer">
      <div class="container footer__content">
        <Title />
        <div class="footer__list">
          <h3>Help</h3>
          <ul>
            {helps.map((help) => (
              <li>{help}</li>
            ))}
          </ul>
        </div>
        <div class="footer__list">
          <h3>Shop</h3>
          <ul>
            {categories.map((category) => (
              <li>{category}</li>
            ))}
          </ul>
        </div>
        <div class="footer__list">
          <h3>Company</h3>
          <ul>
            {companyFeatures.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <span>
        2022 Stas & Yarik, Inc. All Rights Reserved. <a>Terms</a>,
        <a>Privacy and Cookies</a> & <a>Accessibility</a>
      </span>
    </footer>
  );
};

export default Footer;
