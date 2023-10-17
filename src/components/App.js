import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import Navbar from './navbar';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import SkillsAndProjects from './SkillsandProjects'; // Corrected import statement

import ContactForm from './ContactForm';

function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar />
        <Routes> {/* Wrap your routes with <Routes> */}
          <Route path='/' element={<HeroSection />} /> {/* Use "element" prop */}
          <Route path='/about' element={<AboutMe />} />
          <Route path='/skills' element={<SkillsAndProjects />} />
          <Route path='/contact' element={<ContactForm />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
