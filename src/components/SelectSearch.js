import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import {AppContext} from "../context/appContext";
import {AuthContext} from "../context/authContext";
import Button from 'react-bootstrap/Button';


function SelectSearch({countries, getRegionUrl}) { // console.log('country', countries)
    let {region} = useParams();
    const [continents, setContinents] = useState([]);
    const [regions, setRegions] = useState(null)
    const {url, setUrl} = useContext(AppContext)

    const regionsList = () => {
        const uniqueRegions = countries.map((country) => {

            return country.region
        })
        return([...new Set(uniqueRegions)])
    }


    const handleSelect = (event) => {

        const nameregion = event.target.value;
        console.log(event)
        if (nameregion === "all") {
            getRegionUrl("https://restcountries.com/v3.1/all")
        } else {
            getRegionUrl(`https://restcountries.com/v3.1/region/${nameregion}`)
        }

    }
    // const handleReset = (event) => {
    //     getRegionUrl("https://restcountries.com/v3.1/all")
    // }


    return (
        <div>
            <div className="select-container">
                <label for="region">Select a Region</label>
                <select onChange={handleSelect}
                    name="region">
                        <option value="all">
                      ALL  
                    </option>
                    {
                    regionsList() && regionsList().map((region, i) => (
                        <option key={i}
                            value={region}>
                            {region}</option>
                    ))
                }
                    
                </select>
                {/* <Button class="btn btn-link"
                    onClick={handleReset}>Clear</Button> */}
            </div>

        </div>

    );

}
export default SelectSearch;
