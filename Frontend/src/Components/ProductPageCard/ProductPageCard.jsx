import classes from "./index.module.css";
const ProductPageCard = ({ product }) => {
  return (
    <div className={classes.product_card_outer_container}>
      <div className={classes.product_card}>
        <div className={classes.product_card_photo}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={classes.product_card_content}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Cijena: {product.price} €</p>
          <p>
            Ocjena: {product.rating.rate} ({product.rating.count})
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;
