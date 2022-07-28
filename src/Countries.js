import React, {useEffect, useState, useContext} from "react";
import "./App.css";
import CreateCard from "./CreateCard";
import Search from "./components/Search";
import Row from 'react-bootstrap/Row';
import SelectSearch from "./components/SelectSearch";
import {AppContext}from './context/appContext'
import Button from "react-bootstrap/Button";



function Countries() {
   // const context=useContext(AppContext);
   // console.log("context :>>>",context);
    const {filterResult,setFilterResult,countries,setCountries,fetchData,deleteData,loader}= useContext(AppContext)
console.log('countries....in countries', countries)
    const inputWord = (event) => {
        // here you can get the value you are typing
        // console.log(event.target.value);
        setFilterResult(event.target.value);
    }
    // const filterCountry = !filterResult ? countries : countries.filter((item) => {
    //     return item.name.toLowerCase().includes(filterResult.toLowerCase())
    // })
    // console.log('filterCountry:>>', filterCountry)
    
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div> 
         <Button variant="danger" onClick={(deleteData)} >Delete all</Button> 
            <Search inputWord={inputWord}/>
            <SelectSearch countries={countries}  />
            
            <Row xs={1} sm={2} md={4} lg={4} xl={6} className="g-4">
              {
            !loader && countries.map((country, i) => {
                return (
                          <CreateCard country={country} key={i}/>                        
                        );
                      })
                    } 
                    </Row>
                    
        </div>
    );
}
export default Countries;
