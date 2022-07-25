import React from "react";
// import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import "react-bootstrap"
// import { Container} from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function CreateCard({country}) {
    // Above here, line 5, is the third way of destructiring, putting the name of the props that you pass from the parent component (you called this props "country" in Countries.js)
    // and then below you can directly access by wrintting country.flag
    // console.log("props", props);
    // const flag = country.flag;
    // const name = country.name;
    // const capital = country.capital;
    const {flag, name, capital} = country;

    // first way of using props : create a variable and access the property as in an object.
    // const flag = props. country.flag;
    // const name = props.country.name;
    // const capital = props.country.capital;

    // Second way : destructing inside the function : create an objet with the names of the properties, and make them equal to the parent property
    // const { flag, name, capital } = props.country;

    // Go to details using useNavigate Hook
    // let navigate = useNavigate()

    // const showMore = () => {
    //     navigate(`../countries/${name}`)
    // }
    return (

        <Col>
            <Card>
                <Card.Img variant="top"
                    src={flag}/>
                <Card.Body>
                    <Card.Title>
                        <h2>{name}</h2>
                    </Card.Title>
                    <Card.Text> {capital} </Card.Text>
                    {/*    <Link to={{name}} />  or    <Link to={`${name}`} /> */}
                    {/* Line 44 Button that takes to details using and onclik function and useNavigate hook */}
                    {/* <Button onClick={showMore} variant="primary" >More Info</Button> */}
                    <Link to={
                        `${name}`
                    }>
                        <Button variant="primary">More Info</Button>
                    </Link>
                </Card.Body>
            </Card>


        </Col>


    );
}

export default CreateCard;
