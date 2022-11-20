import React from 'react';
import FirstPage from '../components/FirstPage';
import Navegation from '../components/Navegation';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import '../styles/ribbon.css';
import Contact from '../components/Contact';

function Portfolio() {
  return (
    <section className="principal">
      <div className="ribbon"></div>
      <Navegation />
      <FirstPage />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
}

export default Portfolio;
