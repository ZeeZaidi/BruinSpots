
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth , database } from "./firebase";
import {collection , addDoc } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword , signOut } from "firebase/auth";
import "./Signup.css";

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(database, "users", user.uid), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const register = () => {
    //if (!email) alert("Please enter email");
    registerWithEmailAndPassword(name, email, password); 
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
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
          <button className="register__btn" onClick={register}>Register</button>
        <div>
          Already have an account? <Link to="/sign-in">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Signup;

// No way to logout yet
const logout = () => {
  signOut(auth);
};

