import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Features from './Features';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Footer from './Footer';
import './styles.css';

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname === '/contact' && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
