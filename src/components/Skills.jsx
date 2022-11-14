import React from 'react';
import number3 from '../assets/number3.png';
import livro from '../assets/livro.png';
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
