import React from 'react';
import '../styles/aboutme.css';
import number1 from '../assets/number1.png';
import personal from '../info/personal';

function AboutMe() {
  const { me: { description, description2 } } = personal;
  return (
    <section className="about-section">
      <div className="about-img">
        <img src={number1} alt="numero 1" />
        <h2>sobre mim</h2>
      </div>
      <div className="about-description">
        <p>{description}</p>
        <div className="about-rectangle"></div>
        <p>{description2}</p>
      </div>
      <div className="about-rectangle-radius">
        <p>~</p>
        <p>~</p>
        <p>~</p>
      </div>
    </section>
  );
}

export default AboutMe;
