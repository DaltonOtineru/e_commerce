import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MensProducts from '../../pages/MensProducts';
import WomensProducts from '../../pages/WomensProducts';
import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';
import ShoesProdcuts from '../../pages/ShoesProdcuts';
import ClothesProducts from '../../pages/ClothesProducts';
import { getTotals } from '../../redux/cartSlice';

const App = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Router>
      <ToastContainer />
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
