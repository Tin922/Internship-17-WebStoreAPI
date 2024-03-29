import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import classes from "./index.module.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [initialFetchProducts, setInitialFetchProducts] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const searchTerm = searchParams.get("search");
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        const filteredProducts = data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm)
        );
        setInitialFetchProducts(filteredProducts);
        setProducts(filteredProducts);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchProducts();
  }, [searchParams]);

  useEffect(() => {
    const filteredProducts = initialFetchProducts.filter(
      (item) =>
        item.category.toLowerCase() === category.toLowerCase() ||
        category === ""
    );
    setProducts(filteredProducts);
  }, [category]);

  const handleProductClick = (productId) => {
    const relatedProducts = products;
    navigate(`/product/${productId}`, { state: { relatedProducts } });
  };

  return (
    <div>
      <div className={classes.select}>
        <select
          name=""
          id=""
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="">Sve</option>
          <option value="Men's clothing">Men's clothing</option>
          <option value="Women's clothing">Women's clothing</option>
          <option value="Jewelery">Jewelery</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
      <div className={classes.products_list}>
        {products.length === 0 ? (
          <p>Nema rezultata za traženu pretragu</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
