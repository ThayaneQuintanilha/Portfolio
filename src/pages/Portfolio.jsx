import React from 'react';
import FirstPage from '../components/FirstPage';
import Navegation from '../components/Navegation';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

function Portfolio() {
  return (
    <section>
      <Navegation />
      <FirstPage />
      <AboutMe />
      <Projects />
    </section>
  );
}

export default Portfolio;
