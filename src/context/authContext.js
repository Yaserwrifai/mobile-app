import React ,{ createContext, useState } from "react";

// 1. Create Context
export const AuthContext = createContext();

// 2. Create the provider

export const AuthContextProvider = (props) => {
  // 3.  state and function

  const [user, setUser] = useState(null);

  // 4. return the provider with its value and inject children component

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};