
import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import Nav from "./components/Nav";




import Home from "./Views/Home";
import Countries from './Countries';
import Details from "./Views/Details";
import About from "./Views/About";
import NoMatch from "./Views/NoMatch";



function App() {
  return (
    <div>
   
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="countries" element={<Countries />} />
        <Route path="about" element={<About />} />
        <Route path="countries/:name" element={<Details />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

      {/* <Countrys /> */}
      
    </div>
  );
}

export default App;