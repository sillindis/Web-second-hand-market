import * as React from 'react';
import ReactDOM from 'react-dom';

import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./App.css"

import Homepage from './page/Homepage';
import Login from './page/Login';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
