import React from 'react';
import number2 from '../assets/number2.png';
import projects from '../info/projects';
import github from '../assets/github.png';
import arrowe from '../assets/arrowe.png';
import arrowd from '../assets/arrowd.png';
import '../styles/projects.css'

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-img">
        <img src={number2} alt="imagem do projeto" />
        <h2>meus projetos</h2>
      </div>

      <div className="projects-description">
        <button><img className="projects-arrow" src={arrowe} alt="Seta" /></button>
        {projects.map((project, index) => {
            const { image, title, description, link } = project;
          return (
            <div key={ index } className="project-group">
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="project-github-image">
                <a target="_blank" href={link}><img src={github} alt="github" /></a>
              </div>
            </div>
          );
        })}
        <button><img className="projects-arrow" src={arrowd} alt="Seta" /></button>
      </div>

      <div className="projects-rectangle-radius">
        <p>~</p>
        <p>~</p>
        <p>~</p>
      </div>
    </section>
  );
}

export default Projects;