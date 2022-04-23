import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Products from './pages/Products.js';
import Navbar from './components/Navbar';
import Footer from './components/Home/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
