import React, { useEffect, useState } from "react";
import "./App.css";
import CreateCard from "./CreateCard";
import Search from "./components/Search";
import Select from "./components/SelectSearch"

function Countries() {
  const [countries, setCountries] = useState([]);
// eslint-disable-next-line 
  const [error,setError] = useState(null);
  const [filterResult, setFilterResult] = useState("");

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
  const inputWord = (event) => { 
    // here you can get the value you are typing
    // console.log(event.target.value);
      setFilterResult(event.target.value);
  }
  const filterCountry = !filterResult ? countries : countries.filter((item) => {
    return item.name.toLowerCase().includes(filterResult.toLocaleLowerCase())
})
 console.log('filterCountry:>>', filterCountry)





  useEffect(() => {
    fecthCountries();
  }, []);

  
  return (
    <div grid-container> 
     <Search inputWord={inputWord}/>
     <Select countries={countries} /> 
      {/* {console.log("countries :>> ", countries)} */}
        {filterCountry && filterCountry.map((country, i) => {
            return (
              <div className="text-center grid-item  " key={i}>
            <CreateCard country={country}   /> 
           
              </div>
            );
          })}    
    </div>
  );
}
export default Countries;