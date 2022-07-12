// import { useReducer } from 'react'
// import logo from './logo.svg'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
// import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import SearchBox from "../compontents/search";
// import State from './state';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        {/* <SearchBox  /> */}
        {/* <State /> */}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
