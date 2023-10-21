import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import SkillsAndProjects from './components/SkillsandProjects'; // Corrected import statement

import ContactForm from './components/ContactForm';

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
          {/*    <Route>path ='/about' element={About} </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
