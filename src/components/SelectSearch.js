import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";



function Country()  {
  let { region } = useParams();
 // console.log("region>>>>: ", region);
 // console.log("useParams()>>>", useParams());


  const [continents, setContinents]= useState([]);
  

  useEffect( ()=>{
   const getcountry= async ()=>{
     const request= await fetch(`https://restcountries.com/v2/all?region=${region}`);
     const result= await request.json();
    // console.log(result);
    setContinents(result);

   }
   getcountry();


  },[region]);

  const continent = [];
  continents &&continents.forEach((item, i) => {
      continent.push(item.region);
    });
    const removedDoubles = [...new Set(continent)];
   // console.log("removedDoubles: ", removedDoubles);
   // console.log("continent: ", continent);
  const options=removedDoubles;
 
  return (
    <div >
      <div className="select-container">
        <select>
          {options.map((option,i) => (
            <option key={i} value={option.numericCode}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );

}
export default Country;