import React, { createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wishList, setWishList] = useState([]);
  const cookie = new Cookies();
  const authToken = cookie.get("token");

  const addToWishList = async (product) => {
    if (!authToken) {
      toast.error("Login to add products to wishlist");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:3000/api/wish-list-items`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            productId: product.id,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("There was an error");
      }
      setWishList([...wishList, { id: data.id, product: { ...product } }]);
      toast.success(`${product.title} is added to wishlist`);
    } catch (error) {
      toast.error("There was an error");
    }
  };
  const removeFromWishList = async (wishListItemIdToRemove, product) => {
    if (!authToken) {
      toast.error("Login to remove products from wishlist");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/wish-list-items/${wishListItemIdToRemove}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        throw new Error("There was an error");
      }

      const wishListAfterRemovingProduct = wishList.filter(
        (item) => item.id !== wishListItemIdToRemove
      );
      toast.success(`${product.title} is removed from wishlist`);
      setWishList(wishListAfterRemovingProduct);
    } catch (error) {
      toast.error("There was an error");
    }
  };

  const login = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const contextValue = {
    user,
    isLoggedIn,
    login,
    logOut,
    wishList,
    setWishList,
    addToWishList,
    removeFromWishList,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
