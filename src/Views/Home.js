import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import { AuthContext} from "../context/authContext"

function Home() {
  const { countries } = useContext(AppContext);
  const {user} = useContext(AuthContext)
  console.log('countries', countries)
  return (
    <div>
      <h1>Home</h1>
      {user && <h2>Hello {user.userName}</h2>}
      
     
      <h4> we have a list of {countries.length} countries</h4>
    </div>
  );
}

export default Home;
