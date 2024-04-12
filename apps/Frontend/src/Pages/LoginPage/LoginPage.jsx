import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import { useUser } from "../../providers/UserProvider/UserProvider";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();

        const cookies = new Cookies();
        cookies.set("token", user.token, {
          path: "/",
          sameSite: "None",
          secure: true,
        });

        login(user);
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
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
  );
};

export default LoginPage;
