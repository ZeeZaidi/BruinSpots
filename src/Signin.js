
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth , database } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";

const log_in_with_email = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const log_in = () => {
    log_in_with_email(email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) {
      navigate('/');
    }
   }, [user, loading]);

  return (
    <div className="register">
      <div className="register__container">
        <h1>Sign in</h1>
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
          <button className="register__btn" onClick={log_in}>Log in</button>
        <div>
          Don't have an account? <Link to="/sign-up">Sign up</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Signin;
