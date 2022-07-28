import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";



function SelectSearch({countries})  {
  console.log('country', countries)
  let { region } = useParams();
  const [continents, setContinents]= useState([]);
  const [regions, setRegions] = useState(null)





// console.log('regions', regions)

 // console.log("region>>>>: ", region);
 // console.log("useParams()>>>", useParams());


  
  

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

  // const continent = [];
  // continents &&continents.forEach((item, i) => {
  //     continent.push(item.region);
  //   });
    // const removedDoubles = [...new Set(continent)];
   // console.log("removedDoubles: ", removedDoubles);
   // console.log("continent: ", continent);
  // const options=removedDoubles;
 
  return (
    <div >
      <div className="select-container">
<select>
 
        
          {countries && countries.map((country,i) => (
            <option key={i} value={country.region}>{country.region}</option>
          ))}
          </select>
      </div>
    </div>
  );

}
export default SelectSearch;