import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SecondaryPage from './pages/SecondaryPage';
import ThirdPage from './pages/ThirdPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="secondary-page" element={<SecondaryPage/>} />
      <Route path="third-page" element={<ThirdPage/>} />
      <Route path="*" element={<Navigate to='secondary-page'/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
