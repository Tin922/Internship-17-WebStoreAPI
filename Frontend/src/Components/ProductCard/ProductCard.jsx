import React from "react";
import classes from "./index.module.css";
function ProductCard({ product, onClick }) {
  return (
    <div className={classes.product_card} onClick={onClick}>
      <div className={classes.product_card_image}>
        <img src={product.image} alt={product.title} />
      </div>
      <h3 className={classes.product_card_title}>{product.title}</h3>
    </div>
  );
}

export default ProductCard;
