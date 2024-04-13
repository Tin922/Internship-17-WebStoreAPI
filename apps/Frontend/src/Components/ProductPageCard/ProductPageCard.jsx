import { useUser } from "../../providers/UserProvider/UserProvider";
import classes from "./index.module.css";

const ProductPageCard = ({ product }) => {
  const sumOfRatings = product.ratings.reduce(
    (total, currentRating) => total + currentRating.rating,
    0
  );

  const { addToWishList } = useUser();

  const productRating =
    product.ratings.length > 0 ? sumOfRatings / product.ratings.length : 0;

  return (
    <div className={classes.product_card_outer_container}>
      <div className={classes.product_card}>
        <div className={classes.product_card_photo}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={classes.product_card_content}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price} €</p>
          <p>
            Rating: {productRating} ({product.ratings.length})
          </p>
          <div className={classes.button_container}>
            <button>Add to cart</button>
            <button onClick={() => addToWishList(product)}>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;
