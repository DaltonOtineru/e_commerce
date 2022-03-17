import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
