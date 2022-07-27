import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";



function Country()  {
  let { region } = useParams();
  console.log("region>>>>: ", region);
  console.log("useParams()>>>", useParams());


  const [country, setCountry]= useState([]);
  

  useEffect( ()=>{
   const getcountry= async ()=>{
     const request= await fetch(`https://restcountries.com/v2/all?region=${region}`);
     const result= await request.json();
    // console.log(result);
     setCountry(result);

   }
   getcountry();


  },[region]);

  


  
 
  const options=country;
  console.log(options)

  return (
    <div >
      <div className="select-container">
        <select>
          {options.map((option) => (
            <option key={option.numericCode} value={option.numericCode}>{option.region}</option>
          ))}
        </select>
      </div>
    </div>
  );

}
export default Country;