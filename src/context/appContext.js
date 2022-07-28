// 1. Import hook
import React ,{ createContext, useState } from "react";

// 2. Create Context / Store

export const AppContext = createContext();

// 3. Create provider

export const AppContextProvider = (props) => {
  console.log("props :>> ", props);
  // 4. Move state and function
  const[filterResult,setFilterResult]=useState([])
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all/");
      const results = await response.json();
      console.log('results', results)
      setCountries(results);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  //Modify context data from component

 const deleteData = () => {
  setCountries(null);
  };

  // 5. Return the provide with its value and inject children component

  return (
    <AppContext.Provider
      value={{
        countries,
        setCountries,
        loader,
        setLoader,
        error,
        fetchData,
        deleteData,
        filterResult,
        setFilterResult
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};