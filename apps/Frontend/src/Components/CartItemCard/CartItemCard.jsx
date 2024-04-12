import classes from "./index.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartItemCard = ({ product, onClick }) => {
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
          <p>Price: {product.price} €</p>
          <div>
            <div className={classes.quantity}>
              Quantity:
              <RemoveIcon /> 1 <AddIcon />{" "}
            </div>
          </div>
          <div className={classes.buttons}>
            <button>Remove from cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemCard;
