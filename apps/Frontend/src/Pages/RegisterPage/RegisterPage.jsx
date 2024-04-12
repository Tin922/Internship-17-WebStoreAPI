import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: username, email, password }),
      });

      if (response.ok) {
        toast.success("Account created successfully!");
        navigate("/login");
      } else {
        throw new Error("Error when trying to register");
      }
    } catch (error) {
      toast.error("Error when trying to register");
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

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

      <button type="submit">Register</button>
      <div className={classes.login}>
        Already have an account? <a onClick={() => navigate("/login")}>Login</a>
      </div>
    </form>
  );
};

export default RegisterPage;
