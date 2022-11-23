import React from "react";
import "./ProductCard.scss";

interface IProductCard {
  image: string;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
}

const ProductCard = ({
  image,
  name,
  description,
  oldPrice,
  newPrice,
}: IProductCard) => {
  return (
    <div className="product-card">
      <img loading="lazy" src={image} alt="product" />
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <div className="product-card__price">{`${oldPrice}$`}</div>
        <div className="product-card__price">{`${newPrice}$`}</div>
      </div>
    </div>
  );
};

export default ProductCard;
