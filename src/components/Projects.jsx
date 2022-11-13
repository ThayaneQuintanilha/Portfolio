import React from 'react';
import number2 from '../assets/number2.png';
import projects from '../info/projects';

function Projects() {
  return (
    <section>
      <div className="projects-img">
        <img src={number2} alt="" />
        <h2>meus projetos</h2>
      </div>
      <div className="projects-description">
        {projects.map((project, index) => {
            const { image, title, description } = project;
          return (
            <div key={ index } className="project-group">
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          );
        })}
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
