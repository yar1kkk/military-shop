import React from "react";
import Button from "../../shared/button/Button";
import ProductCard from "../../shared/cards/product-card/ProductCard";
import "./TopSales.scss";
import { products } from "../../data/products";
import { categories } from "../../data/categories";

const TopSales = () => {
  const TOP_SALES = "Top sales";

  return (
    <div className="top-sales">
      <div className="container top-sales__content">
        <div className="top-sales__heading">
          <h3>{TOP_SALES.toUpperCase()}</h3>
          <p>Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className="top-sales-centered">
          <ul>
            {categories.map((category, idx) => (
              <li key={idx}>{category}</li>
            ))}
          </ul>
          <div className="top-sales__products">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                image={product.image}
                name={product.name}
                description={product.description}
                newPrice={product.newPrice}
                oldPrice={product.oldPrice}
              />
            ))}
          </div>
          <div className="top-sales__button">
            <Button content="catalog --->" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSales;
