import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WishlistItemCard from "../../Components/WishlistItemCard/WishlistItemCard";
import classes from "./index.module.css";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import { useUser } from "../../providers/UserProvider/UserProvider";

const WishlistPage = () => {
  const navigate = useNavigate();
  const { wishList, setWishList } = useUser();
  const cookie = new Cookies();
  const authToken = cookie.get("token");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/wish-list-items`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("There was an error");
        }
        const wishlistResponse = await response.json();
        console.log(wishlistResponse);
        setWishList(wishlistResponse);
      } catch (error) {
        toast.error("There was an error");
      }
    };
    fetchWishlist();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      {wishList.length < 1 ? (
        <h1>No items in wishlist</h1>
      ) : (
        <div className={classes.product_list}>
          {wishList.map((wishtListItem) => (
            <WishlistItemCard
              product={wishtListItem.Product}
              wishListItemId={wishtListItem.id}
              key={wishtListItem.Product.id}
              onClick={() => handleProductClick(wishtListItem.Product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
