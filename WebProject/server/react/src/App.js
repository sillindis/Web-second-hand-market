import * as React from 'react';
import ReactDOM from 'react-dom';

import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./App.css"

import Homepage from './page/Homepage';
import Login from './page/Login';
import Mypage from './page/Mypage';
import Registration from './page/Registration';

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Mypage/Registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
