// url:"https://restcountries.com/v2/name/Palestine,%20State%20of",
// url: "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=fde753c9&app_key=67d9017c15c8f6dd5a885de3b737a062%09",

import React, {useEffect, useState} from "react";
import "./App.css";
import CreateCard from "./CreateCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Countrys() {
    const [countrys, setCountrys] = useState(null);

    const [error, setError] = useState(null);

    const fecthCountrys = async () => {
        try {
            const response = await fetch("https://restcountries.com/v2/all");
            const results = await response.json();
            console.log(results);
            setCountrys(results);

            console.log("countrys :>> ", countrys);
        } catch (error) {
            console.log("error :>> ", error);
            setError(error.message);
        }
    };


    useEffect(() => {
        fecthCountrys();
    }, []);

    return (
    <div>
      <h1>Countrys</h1>
        <div> { countrys && countrys.map((country, i) => {
               // return <CreateCard country={country}  key={i} />
               return (
<div className="text-center">
<Card className="bg-dark text-white  m-3 p-2"  style={{ width: '18rem' }} key={i}>
      <Card.Img variant="top" src={country.flag} style={{ width: '28rem' }}/>
      <Card.Body>
        <Card.Title><h2>{country.name}</h2></Card.Title>
        <Card.Text> <h3 style={{ color: 'red' }}>{country.capital}</h3> </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>

</div>

       ) })}
        </div>
    </div>

         );

}
export default Countrys;
