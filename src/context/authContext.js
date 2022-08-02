import React from "react";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/config";
import { useNavigate } from "react-router-dom";

//import { useNavigate } from "react-router-dom";

// 1. Create Context
export const AuthContext = createContext();

// 2. Create the provider

export const AuthContextProvider = (props) => {
  // 3.  state and function

  const [user, setUser] = useState(null);
  const redirectTo = useNavigate()

  const register = async (email, password) => {
    console.log(email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      // const user = userCredential.user;
      // ...
      console.log("userCredential :>> ", userCredential);
      setUser(userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      //console.log("errorMessage :>> ", errorMessage);
    }
  };

  const login = (email, password) => {
    // console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        setUser(userCredential.user);
       redirectTo("/");
      })
      .catch((error) => {
        setUser(null);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const checkIfUserisLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkIfUserisLoggedIn();
  }, []);

  // 4. return the provider with its value and inject children component

  return (
    <AuthContext.Provider value={{ user, setUser,register,login}}>
      {props.children}
    </AuthContext.Provider>
  );
};