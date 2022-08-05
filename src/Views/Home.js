import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../context/appContext";
import {AuthContext} from "../context/authContext"

function Home() {
    const {countries} = useContext(AppContext);
    const {user} = useContext(AuthContext)
    // console.log('countries', countries)
    return (
        <div>
            <h1>Home</h1>
            {
            user && <h2>Hello {
                user.userName
            }</h2>
        }


            <h4>
                We have a list of {
                countries.length
            }
                countries</h4>
            <p>Nice picture of the world
            </p>
            {
            user ? <Link to="countries">
                <button>visit all countries</button>
            </Link> : <Link to="login">go to login</Link>
        } </div>
    );
}

export default Home;
