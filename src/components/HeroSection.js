  import React from "react";  
  import myself from "../components/svg logo/myself.jpeg"
  // import "../components/index.css"
  import '../navbar.css'
  function HeroSection() {
      return (
        <section className='heroSection'>
          <img
            className='profileImage'
            src={myself}
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
    