import React, {useEffect, useState} from "react";
import "./App.css";
import CreateCard from "./CreateCard";
import Search from "./components/Search";
import Row from 'react-bootstrap/Row';
import SelectSearch from "./components/SelectSearch";




function Countries() {
    const [countries, setCountries] = useState([]);
    // eslint-disable-next-line
    const [error, setError] = useState(null);
    const [filterResult, setFilterResult] = useState("");
    

    const fecthCountries = async () => {
        try {
            const response = await fetch("https://restcountries.com/v2/all");
            const results = await response.json();
          //  console.log(results);
            setCountries(results);

            // console.log("countriess :>> ", countries);
        } catch (error) {
            console.log("error :>> ", error.message);
            setError(error.message);

        }
    };
    const inputWord = (event) => {
        // here you can get the value you are typing
        // console.log(event.target.value);
        setFilterResult(event.target.value);
    }
    const filterCountry = !filterResult ? countries : countries.filter((item) => {
        return item.name.toLowerCase().includes(filterResult.toLowerCase())
    })
    //console.log('filterCountry:>>', filterCountry)
    
    useEffect(() => {
        fecthCountries();
    }, []);


    return (
        <div>
            <Search inputWord={inputWord}/>
            <SelectSearch country={countries} />
            
            <Row xs={1} sm={2} md={4} lg={4} xl={6} className="g-4">
              {
            filterCountry&& filterCountry.map((country, i) => {
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
