import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";



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






  
  

  // useEffect( ()=>{
  //  const getcountry= async ()=>{
  //   //  const request= await fetch(`https://restcountries.com/v2/all?region/${region}`);
  //    const request= await fetch(`https://restcountries.com/v3.1/region/${region}`);
  //    const result= await request.json();
  //   // console.log(result);
  //   setContinents(result);
  //   extractRegions()

  //  }
  //  getcountry();


  // },[]);
const handleSelect = (event) => {
  console.log(event.target.value)
  
  getRegionUrl(`https://restcountries.com/v3.1/region/${event.target.value}`)
}

 
  return (
    <div >
      <div className="select-container">
<select onChange={handleSelect}>
 
        
          {countries && regionsList().map((region,i) => (
            <option key={i} value={region} >{region}</option>
          ))}
          </select>
      </div>
    </div>
  );

}
export default SelectSearch;