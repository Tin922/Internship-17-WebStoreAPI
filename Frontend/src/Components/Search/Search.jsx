import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchInput}`);
  };
  return (
    <div className={classes.form_container}>
      <form onSubmit={handleSubmit}>
        <input
          className={classes.input}
          type="text"
          id="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Upišite ime proizvoda"
        />
        <button className={classes.search_button} onClick={handleSubmit}>
          Pretraži
        </button>
      </form>
    </div>
  );
};

export default Search;
