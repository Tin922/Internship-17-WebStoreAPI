import { Link } from "react-router-dom";
import classes from "./index.module.css";
const NotFoundPage = () => {
  return (
    <div className={classes.notFoundContainer}>
      <h1>404</h1>
      <Link to="/" className={classes.backButton}>
        Povratak na početnu stranicu
      </Link>
    </div>
  );
};

export default NotFoundPage;
