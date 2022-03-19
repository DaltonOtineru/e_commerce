import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import CartContext from '../../context/cart/CartContext';

import HomePage from '../../pages/HomePage';
import MensProducts from '../../pages/MensProducts';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/mens" element={<MensProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
