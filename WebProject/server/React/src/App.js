import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Check from './Check';
import { appBarClasses } from '@mui/material';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/check" element={<Check />} />
    </Routes>
  )
}
