import React from 'react';
import number3 from '../assets/number3.png';
import livro from '../assets/livro.png';
// import Vector from '../assets/Vector.png';
import '../styles/skills.css'

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-img">
        <img src={number3} alt="3" />
        <h2>habilidades</h2>
      </div>
      <div className="skills-book">
        <img src={livro} alt="livro" />
          <svg className="skills-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FF9C98" fill-opacity="1" d="M0,256L120,245.3C240,235,480,213,720,208C960,203,1200,213,1320,218.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>
        {/* <img className="skills-wave" src={Vector} alt="wave" /> */}
        <div className="skills-rectangle-radius">
          <p>~</p>
          <p>~</p>
          <p>~</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
