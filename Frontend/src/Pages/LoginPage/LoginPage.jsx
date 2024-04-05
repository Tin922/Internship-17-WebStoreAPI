import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <div className={classes.register}>
          Don't have an account?{" "}
          <a onClick={() => navigate("/register")}>Register</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
