import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/config";
import { AuthContext } from "../context/authContext";

function Register() {
  
  console.log("auth :>> ", auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  const handleEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterHandler = () => {
    //Check if email is valid, pasword lenght....
    register(email, password);
  };
  return (
    <div>
      <h2>Register</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailHandler}
      />
      <label htmlFor="Password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePasswordHandler}
      />
      <button onClick={handleRegisterHandler}>Register</button>
      <Link to="/login">If you have an account, go to Login</Link>
    </div>
  );
}

export default Register;