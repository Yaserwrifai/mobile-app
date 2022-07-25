import { useParams, useNavigate, Link } from "react-router-dom";
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
  const [error, setError] = useState(null);
  const fecthDetails = async () => {
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const results = await response.json();
      setDetails(results);
    } catch (error) {
      console.log("error  :>>", error);
      setError(error.message);
    }
  };
  useEffect(() => {
    fecthDetails();
  }, []);

  console.log(details);
  const filteredData = details.filter((countrie) => {
    return countrie.name === name;
  });

  console.log(filteredData);

  return (
    <>
      <Link to="/countrys">
        {" "}
        <Button variant="primary">Go BACK</Button>
      </Link>
      {filteredData.map((country, i) => {
        return (
          <Card style={{ height: "28rem", width: "40rem" }}>
            <Card.Img variant="top" src={country.flag} />
            <Card.Body>
              <Card.Title>
                <h2>About Country</h2>
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" key={i}>
              <ListGroup.Item>
                <h3>Papulation : {country.population}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Capital : {country.capital}</h3>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                <h3> Native Name : {country.nativeName}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>Capital : {country.capital} </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>SubRegion : {country.subregion} </h3>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
    </>
  );
}

export default Details;

