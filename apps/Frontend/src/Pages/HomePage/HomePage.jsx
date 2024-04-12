import { useNavigate } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import classes from "./index.module.css";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/api/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`, { state: { relatedProducts: products } });
  };

  return (
    <>
      <h1>Home Page</h1>
      <h2>All products</h2>
      <div className={classes.products_list}>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
