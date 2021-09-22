import React, { useState } from "react";
import "./SignIn.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "./firebase.js";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();
    //firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .auth((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    //firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.mssage));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://cdn.iconscout.com/icon/free/png-256/amazon-1869030-1583154.png"
          alt="login"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            hint="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default SignIn;
