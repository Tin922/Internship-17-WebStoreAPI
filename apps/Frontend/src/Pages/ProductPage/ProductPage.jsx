import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ProductPageCard from "../../Components/ProductPageCard/ProductPageCard";
import ProductCard from "../../Components/ProductCard/ProductCard";
import classes from "./index.module.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [relatedProducts, setRelatedProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${productId}`
      );
      const json = await response.json();
      setProduct(json);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  const fetchRelatedProducts = () => {
    if (location.state && location.state.relatedProducts) {
      setRelatedProducts(location.state.relatedProducts);
    }
  };
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`, { state: { relatedProducts } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    fetchProduct();
    fetchRelatedProducts();
  }, [location.state]);

  return (
    <>
      {product && <ProductPageCard product={product} />}
      <p className={classes.recommended}>You might also like</p>
      <div className={classes.products_list}>
        {relatedProducts.map((product) => (
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

export default ProductPage;
