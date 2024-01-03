// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import LandingPage from './components/Landing.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
