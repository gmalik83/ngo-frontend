import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Work } from './components/Work';
import { Member } from './components/Member';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Footer from './components/Footer';

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/work" exact element={<Work />} />
          <Route path="/member" exact element={<Member />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/signin" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
