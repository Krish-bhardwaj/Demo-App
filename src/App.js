import React from 'react';
import { Route, Routes } from 'react-router';
import Checkout from './Components/FooterItems';
import Products from './Components/ProductGrid';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
