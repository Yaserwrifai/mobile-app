import React, {useEffect, useState, useContext} from "react";
import "./App.css";
import CreateCard from "./CreateCard";
import Search from "./components/Search";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectSearch from "./components/SelectSearch";
import {AppContext} from './context/appContext'
import Button from "react-bootstrap/Button";


function Countries() {
    // const context=useContext(AppContext);
    // console.log("context :>>>",context);

    const {
        filterResult,
        setFilterResult,
        countries,
        setCountries,
        fetchData,
        deleteData,
        loader,
        url,
        setUrl,
        
    } = useContext(AppContext)
   // console.log('countries....in countries', countries)
    
    // here i create a serach filtering
const inputWord = (event) => {
   setFilterResult(event.target.value);
    // console.log("event.target.value: ", event.target.value);
  };
//  console.log(filterResult)
//   const filterCountry = !filterResult ? countries : countries.filter((item) => {
//          return item.name.toLowerCase().includes(filterResult.toLowerCase())
//     })
//     console.log('filterCountry:>>', filterCountry)
  

    const getRegionUrl = (regionUrl) => {
        console.log('url', regionUrl) 
        setUrl(regionUrl)
    }

    useEffect(() => {
       // console.log('url>>>>>', url)
        fetchData(url);
    }, [url]);
    return (
        
        <div>
            <Row className="navbar navbar-expand-sm bg-light">
            <Col><Button className="btn btn-danger" onClick={(deleteData)}>Delete all</Button></Col>
           <Col> <SelectSearch countries={countries} getRegionUrl={getRegionUrl}/></Col>
                <Col><Search inputWord={inputWord}   /></Col>
                
</Row>
            <Row xs={1} sm={2}  md={4} lg={4}  xl={6}y className="g-4">
                {
                countries && countries.map((country, i) => {
                    return (
                        <CreateCard country={country}
                            key={i}/>
                    );
                })
            } </Row>

        </div>
    );
}
export default Countries
