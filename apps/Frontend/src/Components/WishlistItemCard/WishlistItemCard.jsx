import classes from "./index.module.css";

const WishlistItemCard = ({ product, onClick }) => {
  return (
    <>
      {" "}
      <div className={classes.product_card}>
        <div className={classes.product_card_image} onClick={onClick}>
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          <h3 className={classes.product_card_title} onClick={onClick}>
            {product.title}
          </h3>
          <div className={classes.buttons}>
            <button>Remove from Wishlist</button>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistItemCard;
