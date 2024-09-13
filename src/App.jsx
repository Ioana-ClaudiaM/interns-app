import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage'
import About from './routes/About'
import Contact from './routes/Contact'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <Header />
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
