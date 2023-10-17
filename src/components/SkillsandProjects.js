import React from 'react';

function SkillsAndProjects() {
  return (
    <section className='skillsAndProjects'>
      <div className='skills' id='skills'>
        <h1 className='cardHeading'>Skills</h1>
        <img title='HTML' src='./svg logo/html-5-svgrepo-com.svg' alt='HTML' />
        {/* Add more skill images */}
      </div>
      <div className='projects' id='projects'>
        <h1 className='cardHeading'>Projects</h1>
        <div className='projectContainer'>
          <img src='./svg logo/file-svgrepo-com.svg' alt='Project' />
          <div className='projectDescription'>
            <h4>Project Name</h4>
            <p>
              <i>Coming Soon...</i>
            </p>
          </div>
        </div>
        {/* Add more project containers */}
      </div>
    </section>
  );
}

export default SkillsAndProjects;
