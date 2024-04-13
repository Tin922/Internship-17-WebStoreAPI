import { useUser } from "../../providers/UserProvider/UserProvider";
import classes from "./index.module.css";

const WishlistItemCard = ({ product, wishListItemId, onClick }) => {
  const { removeFromWishList } = useUser();

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
            <button onClick={() => removeFromWishList(wishListItemId, product)}>
              Remove from Wishlist
            </button>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistItemCard;
