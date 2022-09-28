import React from "react";
import { useState } from "react";
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (event) => {
    event.preventDefault();
  };

  const signUp = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="login">
        <div>
          <img
            className="login__logo"
            src="https://static.vecteezy.com/system/resources/previews/006/547/178/original/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg"
            alt="ecommerce"
            style={{ display: "flex", justifyContent: "center" }}
          />
          <div className="login__container">
            <h1>Sign-in</h1>

            <form>
              <h5>E-mail</h5>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autocomplete="on"
              />

              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button
                type="submit"
                className="login__signInButton"
                onClick={signIn}
              >
                Sign In
              </button>
            </form>

            <p>
              By signing-in you agree to the ecommerce Conditions of Use & Sale.
            </p>

            <button className="login__registerButton" onClick={signUp}>
              Create your E-commerce Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
