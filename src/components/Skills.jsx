import React from 'react';
import personal from '../info/personal';
import number3 from '../assets/number3.png';
import caderno from '../assets/caderno.png';

function Skills() {
  const { me: { skills } } = personal;
  return (
    <section className="skills-section">
      <div className="skills-img">
        <img src={number3} alt="3" />
        <h2>habilidades</h2>
      </div>
      <div className="skills-book">
        <img src={caderno} alt="livro" />
        <div className="skills-list">
          <ul>
            {skills.map((skill, index) => {
              return (
                <li key={ index }>{skill}</li>
                )
              })}
          </ul>
        </div>
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
