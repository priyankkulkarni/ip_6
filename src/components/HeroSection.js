import React from "react";  

function HeroSection() {
    return (
      <section className='heroSection'>
        <img
          className='profileImage'
          src='./svg logo/myself.jpeg'
          alt='Profile'
        />
        <div className='herosectionDetails'>
          <h1>Priyank Kulkarni</h1>
          <h3>Second Year IT Student</h3>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  