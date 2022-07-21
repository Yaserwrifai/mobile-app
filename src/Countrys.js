// url:"https://restcountries.com/v2/name/Palestine,%20State%20of",
// url: "https://api.adzuna.com/v1/api/jobs/gb/search/app_id=fde753c9&app_key=67d9017c15c8f6dd5a885de3b737a062%09",

import React, { useEffect, useState } from "react";
import "./App.css";

import CreateCard from "./CreateCard";
//import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";

function Countrys() {
  const [countrys, setCountrys] = useState([]);

  const [error, setError] = useState(null);

  const fecthCountrys = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const results = await response.json();
     // console.log(results);
      setCountrys(results);
console.log(results)
      //console.log("countrys :>> ", countrys);
    } catch (error) { 
      console.log("error :>> ", error.message);
      setError(error.message);
   
    }
  };

  useEffect(() => {
    fecthCountrys();
  }, []);

  return (
    <div> 
      {/* {console.log("countrys :>> ", countrys)} */}
      <div>
      
        {countrys && countrys.map((country, i) => {
            
            return (
              
              <div className="text-center" key={i}>
                <CreateCard country={country}  />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Countrys;