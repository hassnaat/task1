import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="login__box">
      <h1 className="form__heading">Sign In</h1>
      <hr />
      <form>
        <label>Email Address</label>
        <input
          type="email"
          className="input"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          name="email"
        />
        <label>Password</label>
        <a href="#" className="f__pass">
          Forgot Password?
        </a>
        <input
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          value={pass}
          className="input"
          name="password"
        />
        <button className="login__btn" type="submit">
          Login
        </button>
      </form>
      <br />
      <div>
        Create a new Account <Link to="/">Sign Up</Link>
      </div>
    </div>
  );
}
