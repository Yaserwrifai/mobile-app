
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext"

function About() {
  const { user } = useContext(AuthContext)
  return (
    <div className="back back1">
 <p>Countries and Chat </p>
      {
       user ? <Link to="countries">
        
          <button>visit all countries</button>
        </Link> : <Link to="login">go to login</Link>
        }
    </div>
  );
}
export default About;