import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";
import {AuthContext} from  "../context/authContext"

function Nav() {
  const { user, setUser } = useContext(AuthContext);
  const redirectTo = useNavigate()
  const login = () => {
    console.log(user)
    setUser({
      userName: "Yaser",
    });
    redirectTo("/")
  };
  const logOut = () => {
    console.log(user)
    setUser(
    
    null);
  };




  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link>|{"  "}
        <Link to="countries">Countries</Link> |{"  "}
        <Link to="about">About</Link>|{"  "}
        {/* <Link to="countrys/afghanistan">Details from Afghanistan</Link>|{"  "} */}
        {user ? <Button variant="danger" onClick={logOut}>logout</Button> : <Button variant="info" onClick={login}>login</Button>}
        
        
      </nav>
    </div>
  );
}

export default Nav;