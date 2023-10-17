import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Navbar() {
  return (
    <nav className='navBar'>
      <h1>Priyank Kulkarni Portfolio</h1>
      <div className='navigationMenu'>
        {/* Use Link components for navigation links */}
        <Link to='/about'>About Me</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Let's Connect!</Link>
      </div>
    </nav>
  );
}

export default Navbar;
  