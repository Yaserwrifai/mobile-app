import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";


function Details() {
    let { name } = useParams();
    console.log("name: ", name);
    console.log("useParams()>>>", useParams());
    // Second Fetch function with Name of the country
    const [details, setDetails] = useState([]);
    // eslint-disable-next-line
    const [error, setError] = useState(null);

    // const fetchHook=useFetch(url)
    const fecthDetails = async () => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            const results = await response.json();
            setDetails(results);
            // console.log("details..........>>",results);
        } catch (error) {
            console.log("error  :>>", error);

            setError(error.message);
        }
    };

    // // console.log(details);
    // const filteredData = details.filter((countrie) => {
    // return countrie.name === name ;
    // });

    console.log("details..........>>", details);
    useEffect(() => {
        fecthDetails();
    }, []);

    return (
        <div className="back2">
            <Link to="/countries">
                {" "}
                <Button variant="primary">Go to Countries</Button>
            </Link>
            {
                details && details.map((country, i) => {
                    return (
                        <Card key={i}
                            style={
                                {
                                    height: "15rem",
                                    width: "20rem"
                                }
                            }>
                            <Card.Img variant="top"
                                src={
                                    country.flags.svg
                                } />
                            <Card.Body>
                                <Card.Title>
                                    <h4>About this country</h4>
                                </Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body >
                            <ListGroup className="list-group-flush"
                                key={i}>
                                <ListGroup.Item>
                                    <h5>Population : {
                                        country.population
                                    }</h5>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h5>Capital : {
                                        country.capital
                                    }</h5>
                                    {" "} </ListGroup.Item>
                                <ListGroup.Item>
                                    <h5>
                                        Official Name : {
                                            country.name.official
                                        }</h5>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h5>Capital : {
                                        country.capital
                                    } </h5>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h5>SubRegion : {
                                        country.subregion
                                    } </h5>
                                    <Card.Img variant="top"
                                        src={
                                            country.coatOfArms.svg
                                        } />
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    );
                })
            } </div>
    );
}

export default Details;
