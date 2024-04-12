import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import classes from "./index.module.css";
import Cookies from "universal-cookie";
import { useUser } from "../../providers/UserProvider/UserProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { logOut } = useUser();
  const cookies = new Cookies(null, {
    path: "/",
    sameSite: "None",
    secure: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchInput}`);
  };

  return (
    <div>
      <div className={classes.form_container}>
        <form onSubmit={handleSubmit}>
          <input
            className={classes.input}
            type="text"
            id="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="I'm shopping for..."
          />
          <button className={classes.search_button} onClick={handleSubmit}>
            Search
          </button>
        </form>
        {cookies.get("token") ? (
          <button
            onClick={() => {
              logOut();
              navigate("/");
              cookies.remove("token", {
                path: "/",
                sameSite: "None",
                secure: true,
              });
              toast.success("Logged out successfully");
            }}
          >
            Log out
          </button>
        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </div>

      <Outlet />
    </div>
  );
};

export default Search;
