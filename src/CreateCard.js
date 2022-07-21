import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import Countrys from "./Countrys";


function CreateCard({ country }) {
  // Above here, line 5, is the third way of destructiring, putting the name of the props that you pass from the parent component (you called this props "country" in Countries.js)
  // and then below you can directly access by wrintting country.flag
  // console.log("props", props);
  // const flag = country.flag;
  // const name = country.name;
  // const capital = country.capital;
  const { flag, name, capital } = country;

  // first way of using props : create a variable and access the property as in an object.
  // const flag = props. country.flag;
  // const name = props.country.name;
  // const capital = props.country.capital;

  // Second way : destructing inside the function : create an objet with the names of the properties, and make them equal to the parent property
  // const { flag, name, capital } = props.country;

  return (
    <Card className="bg-dark text-white  m-3 p-2" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={flag} style={{ width: "18rem" }} />
      <Card.Body>
        <Card.Title>
          <h2>{name}</h2>
        </Card.Title>
        <Card.Text> {capital} </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
  );
}

export default CreateCard;