import React from 'react'
import { useContext } from "react";

import { AuthContext } from "../context/authContext.js";
import {  Navigate} from "react-router-dom";
import useIsAuthenticated from './utils/useIsAuthenticated.js';

function ProtectedRoute({children}) {
    // console.log('children >>>', children)
    const {user} = useContext(AuthContext)

    const isAuth = useIsAuthenticated()
    

  return (
    <div>{isAuth ? children : <Navigate to="/" />}</div>
  )
}

export default ProtectedRoute