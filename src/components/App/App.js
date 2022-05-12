import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MensProducts from '../../pages/MensProducts';
import WomensProducts from '../../pages/WomensProducts';
import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';
import ShoesProdcuts from '../../pages/ShoesProdcuts';
import ClothesProducts from '../../pages/ClothesProducts';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/mens" element={<MensProducts />} />
        <Route exact path="/womens" element={<WomensProducts />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/clothes" element={<ClothesProducts />} />
        <Route exact path="/shoes" element={<ShoesProdcuts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
