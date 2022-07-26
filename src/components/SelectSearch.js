import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function SelectSearch({country}) {
  const {name}=country
  //const [name, setName] = useState("");
  const option = { country };
  const handelChange = (event) => {
    console.log("event: ", event.target.value);
   // setName(event.target.value);
  };

  return (
    <div>
      {/* <Select options={country} /> */}
      <Form.Select onChange={handelChange} aria-label="Default select example">
        <option>Open this select menu</option>
        <option value={name}>.......</option>
      </Form.Select>
    </div>
  );
}
export default SelectSearch;