import {useContext} from "react";
import {Button,Navbar,Container} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/authContext";
import {signOut} from "firebase/auth";
import {auth} from "../config/config";


function Nav() {
    const {user, setUser} = useContext(AuthContext);
    const redirectTo = useNavigate();
    const login = () => {
        console.log(user);
        setUser({userName: "YASER"});
        redirectTo("/");
    };
    const logOut = () => {
        console.log(user);
        signOut(auth).then(() => { // Sign-out successful.
            setUser(null);
        }).catch((error) => { // An error happened.
            console.log("signout error :>> ", error);
        });
    };

    return (
        <div >
            <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand >Country 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2Zm-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/></svg>
      Chat

      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <nav  className="me-auto" >
                <Link to="/">Home</Link>
                |
                <Link to="/about">About</Link>
                |{" "}
                {
                !user && <Link to="/Register">Register</Link>
            }|{" "}
                {
                user && <Link to="/countries">Countries</Link>
            }|{" "}
                {
                user && <Link to="/chat">Chat</Link>
            }|{" "}
                {
                user && (
                    <button  class="btn btn-light " 
                        onClick={logOut}>
                        {" "}
                        logout
                    </button>
                )
            } </nav>
            </Navbar.Collapse>
</Container>
    </Navbar>

        </div>
    );
}

export default Nav;