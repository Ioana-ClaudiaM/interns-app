import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './partials/Sidebar';

function App() {
  return (
    <Router>
    <Header />
    <Sidebar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer></Footer>
  </Router>
  )
}


export default App;
