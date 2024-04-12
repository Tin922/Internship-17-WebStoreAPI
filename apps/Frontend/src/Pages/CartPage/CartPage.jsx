import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItemCard from "../../Components/CartItemCard/CartItemCard";
import classes from "./index.module.css";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <div className={classes.product_list}>
        {products.map((product) => (
          <CartItemCard
            product={product}
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
      <div className={classes.total_and_proceed}>
        <p>Total: 0</p>
        <button>Proceed</button>
      </div>
    </div>
  );
};

export default CartPage;
