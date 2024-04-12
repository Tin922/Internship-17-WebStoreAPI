import classes from "./index.module.css";
import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <div className={classes.form_outer_container}>
      <div className={classes.form_inner_container}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthenticationLayout;
