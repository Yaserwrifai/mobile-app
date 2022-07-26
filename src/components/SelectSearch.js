import React from 'react'
import {useEffect, useState} from "react";
import Select from 'react-select'



function SelectSearch(country) {
  const [region, setRegion] = useState([]);
  const filterRegions = async (region) => {
    const url = `https://restcountries.eu/rest/v2/region/${region}`
    const res = await fetch(url)
    const data = await res.json()
    setRegion(data)
  }

  useEffect(() => {
    filterRegions()
    // eslint-disable-next-line
  }, [])
  console.log(region.name);
  return (
    <div className="select">
    <select
      name="select"
      id="select"
      onChange={(e) => filterRegions(e.target.value)}
      value={region.name}
      
    >
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Americas">Americas</option>
      <option value="Oceania">Oceania</option>
    </select>
    </div>
    
  )
  
}

export default SelectSearch;