import React, { useEffect } from 'react';
import number2 from '../assets/number2.png';
import projects from '../info/projects';
import github from '../assets/github.png';
import Carousel from 'react-elastic-carousel';
import '../styles/projects.css'

function Projects() {
  useEffect(() => {
    console.log(window.innerWidth)
  }, [])
  return (
    <section className="projects-section">
      <div className="projects-img">
        <img src={number2} alt="imagem do projeto" />
        <h2>meus projetos</h2>
      </div>

      <div className="projects-description">
        <Carousel itemsToShow={Number(window.innerWidth) < 394 ? 2 : 3}>
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
          
        </Carousel>
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
