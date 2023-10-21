import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../navbar.css'
function Navbar() {
  return (
    <nav className='navBar'>
      <h1>Priyank Kulkarni Portfolio</h1>
      <div className='navigationMenu'>
        {/* Use Link components for navigation links */}
        <Link to='/about' className='something'>About Me</Link>
        <Link to='/skills' className='something'>Skills</Link>
        <Link to='/projects' className='something'>Projects</Link>
        <Link to='/contact' className='something'>Let's Connect!</Link>
      </div>
    </nav>
  );
}

export default Navbar;
  