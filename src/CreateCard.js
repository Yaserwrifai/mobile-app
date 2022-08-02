import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import "react-bootstrap"
import Col from 'react-bootstrap/Col';


function CreateCard({country}) {
// console.log('country...in create Card', country)
    const {flag, name, capital, flags} = country;
// console.log('country>>>>', country)

    return (

        <Col>
            <Card>
                <Card.Img variant="top"
                    src={flags.svg}/>
                <Card.Body>
                    <Card.Title>
                        <h2>{name.common}</h2>
                    </Card.Title>
                    <Card.Text> {capital} </Card.Text>
                    {/*    <Link to={{name}} />  or    <Link to={`${name}`} /> */}
                    {/* Line 44 Button that takes to details using and onclik function and useNavigate hook */}
                    {/* <Button onClick={showMore} variant="primary" >More Info</Button> */}
                    <Link to={`${name}`}>
                        <Button variant="primary">More Info</Button>

                    </Link>
                </Card.Body>
            </Card>


        </Col>


    );
}

export default CreateCard;
