import React from 'react';
import FirstPage from '../components/FirstPage';
import Navegation from '../components/Navegation';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import '../styles/ribbon.css';

function Portfolio() {
  return (
    <section>
      <div className="ribbon"></div>
      <Navegation />
      <FirstPage />
      <AboutMe />
      <Projects />
    </section>
  );
}

export default Portfolio;
