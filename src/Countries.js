import React, { useEffect, useState } from "react";
import "./App.css";
import CreateCard from "./CreateCard";

function Countries() {
  const [countries, setCountries] = useState([]);

  const [error,setError] = useState(null);

  const fecthCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const results = await response.json();
     console.log(results);
      setCountries(results);

      //console.log("countriess :>> ", countries);
    } catch (error) { 
      console.log("error :>> ", error.message);
      setError(error.message);
   
    }
  };

  useEffect(() => {
    fecthCountries();
  }, []);

  return (
    <div> 
      {/* {console.log("countries :>> ", countries)} */}
      <div>
      
        {countries && countries.map((country, i) => {
            
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
export default Countries;