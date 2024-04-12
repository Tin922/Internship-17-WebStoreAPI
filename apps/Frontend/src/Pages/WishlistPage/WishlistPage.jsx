import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WishlistItemCard from "../../Components/WishlistItemCard/WishlistItemCard";
import classes from "./index.module.css";

const WishlistPage = () => {
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
          <WishlistItemCard
            product={product}
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
