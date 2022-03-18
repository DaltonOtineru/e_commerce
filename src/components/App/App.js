import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Essentials from '../Essentials/Essentials';

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <Essentials />
    </Router>
  );
};

export default App;
