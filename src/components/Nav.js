import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../config/config";

function Nav() {
  const { user, setUser } = useContext(AuthContext);
  const redirectTo = useNavigate();
  const login = () => {
    console.log(user);
    setUser({
      userName: "YASER",
    });
    redirectTo("/");
  };
  const logOut = () => {
    console.log(user);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log("signout error :>> ", error);
      });
  };




  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        {!user && <Link to="/Register">Register</Link>}|{" "}
        {user && <Link to="/contries">Countries</Link>}|{" "}
        {user && <Link to="/chat">Chat</Link>}
        {user && (
          <Button variant="danger" onClick={logOut}>
            {" "}
            logout
          </Button>
        )}
      </nav>
    </div>
  );
}

export default Nav;