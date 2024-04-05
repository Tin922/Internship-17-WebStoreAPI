import "./App.css";
import React from "react";
import Search from "./Layouts/Search/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import HomePage from "./Pages/HomePage/HomePage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import AuthenticationLayout from "./Layouts/Authentication/AuthenticationLayout";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Search />}>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/product/:productId" element={<ProductPage />} />
          <Route exact path="/wishlist" element={<WishlistPage />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Route>

        <Route element={<AuthenticationLayout />}>
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Route>

        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
