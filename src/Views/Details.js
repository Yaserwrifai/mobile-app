import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  let { name } = useParams();
  console.log("useParams()>>>", useParams());
//Second Fetch function with Name of the country
  return (
    <div>
      <h2>Details from {name}</h2>
    </div>
  );
}

export default Details;