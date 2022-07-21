import React from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NoMatch() {
  let goHome = useNavigate();

  const goHomeHandler = () => {
    goHome("/");
  };
  return (
    <div>
      <h1>No Data here!</h1>
      <p>{/* <Link to="/">Go to home</Link> */}</p>
      <button onClick={goHomeHandler}>Redirect Home</button>
    </div>
  );
}

export default NoMatch;