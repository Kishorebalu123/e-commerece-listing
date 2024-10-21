import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import AllProductsSection from './components/AllProductsSection';
import ThankYouPage from './components/ThankYouPage';

function App() {
  return (
    
      <Routes>
        <Route exact path="/"  element={<AllProductsSection/>} />
        <Route path="/thank-you/:id" element={<ThankYouPage/>} />
      </Routes>
  
  )
}

export default App;
