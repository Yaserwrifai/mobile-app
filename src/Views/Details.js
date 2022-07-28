// import React, { useContext, useEffect, useState } from "react";
// import { Button} from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { AppContext } from "../context/appContext";

// function Details() {
//   //   console.log(useParams);

//   const { name } = useParams();
//   const location = useLocation();
//   // console.log(location);
//   const [singleCountry, setSingleCountry] = useState(null);
//   let goHome = useNavigate();

//   const goHomeHandler = () => {
//     goHome("/");
//   };

//   const fechtSingleCountry = async () => {
//     try {
//       const response = await fetch(`https://restcountries.com/v2/all`);
//       const results = await response.json();
//       setSingleCountry(results);
//       // console.log("results :>> ", results);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fechtSingleCountry();
//   }, []);
//   console.log("singleCountry :>> ", singleCountry);

//   return (
//     <div>
      
      
//       {singleCountry ? (
//         <h2>Details from {singleCountry.name} </h2>
//       ) : (
//         <p>Nothing to show</p>
//       )}
//       {/*  */}
//       <button onClick={goHomeHandler}>go Home</button>

//     </div>
//   );
// }

// export default Details;






import { useParams,Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Button} from "react-bootstrap";


function Details() {
  let { name } = useParams();
  console.log("name: ", name);
  console.log("useParams()>>>", useParams());
  // Second Fetch function with Name of the country
  const [details, setDetails] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const fecthDetails = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const results = await response.json();
      setDetails(results);
      console.log("details..........>>",results);
    } catch (error) {
      console.log("error  :>>", error);
        
      setError(error.message);
    }
  };

// console.log(details);
 //const filteredData = details.filter((countrie) => {
 // return countrie.name === name ;
 //});

 console.log("details..........>>",details);
  useEffect(() => {
    fecthDetails();
  }, []);

  

  return (
    <>
      <Link to="/countrys">
        {" "}
        <Button variant="primary">Go BACK</Button>
      </Link>
      {details.map((country, i) => {
        return (
          <Card  key={i}  style={{ height: "15rem", width: "20rem" }}>
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

