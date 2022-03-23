import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import MensProducts from '../../pages/MensProducts';

import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';
import WomensProducts from '../../pages/WomensProducts';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/mens" element={<MensProducts />} />
        <Route exact path="/womens" element={<WomensProducts />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
