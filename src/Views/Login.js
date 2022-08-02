import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import {signInWithEmailAndPassword} from "firebase/auth"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const handleEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginHandler = () => {
    login(email, password);
  };
  return (
    <div>
      <div>
        <h2>Login</h2>
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
        <button onClick={handleLoginHandler}>Login</button>
        <Link to="/register">No account? Register first</Link>
      </div>
    </div>
  );
}

export default Login;