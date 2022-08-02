import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";
import Button from 'react-bootstrap/Button';


function SelectSearch({countries, getRegionUrl})  {
  // console.log('country', countries)
  let { region } = useParams();
  const [continents, setContinents]= useState([]);
  const [regions, setRegions] = useState(null)
  const {url, setUrl} = useContext(AppContext)

const regionsList = () => {
  const uniqueRegions = countries.map((country)=> {
  
    return country.region
  })
  return ([...new Set(uniqueRegions)])
}



const handleSelect = (event) => {
  const nameregion=event.target.value;
  console.log(event)
  getRegionUrl(`https://restcountries.com/v3.1/region/${nameregion}`)
}
const handleReset = (event) => {

  
}


  return (
    <div >
      <div className="select-container">
<select onChange={handleSelect}  selected>
 
        
          {regionsList()&& regionsList().map((region,i) => (
            <option key={i} value={region} >{region}</option>
          ))}

          </select>
          <Button variant="dark" onClick={handleReset}>Clear</Button>
      </div>
      
    </div>
   
  );

}
export default SelectSearch;