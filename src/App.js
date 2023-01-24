import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./bootstrap.css";

import Home from "./pages/Home";
import Search from './pages/Search';

const App = () => {
  return (
   <Router>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/search/:q' element={<Search/>} />
    </Routes>
   </Router>
  )
}

export default App;