
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Nav from "./components/Nav";

import Home from "./Views/Home";
import Countries from './Countries';
import Details from "./Views/Details";
import About from "./Views/About";
import NoMatch from "./Views/NoMatch";
import { AppContextProvider } from "./context/appContext";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
  <h2>Country Contxt</h2>
  <AuthContextProvider>
      <Nav />
      <AppContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="countries" element={
            <ProtectedRoute><Countries /></ProtectedRoute>
            } />
        
        <Route path="about" element={<About />} />
        <Route path="countries/:name" element={<Details />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
     </AppContextProvider>
 </AuthContextProvider>
    </div>
  );
}

export default App;