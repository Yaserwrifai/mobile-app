import React from 'react'
import { useContext } from "react";
import { AuthContext } from '../../context/authContext';


function useIsAuthenticated() {
    const {user} = useContext(AuthContext)

const isAuthenticated = user !== null ? true : false
// console.log('user', user)


  return isAuthenticated
}

export default useIsAuthenticated