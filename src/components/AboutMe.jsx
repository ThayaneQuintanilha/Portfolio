import React from 'react';
import '../styles/aboutme.css';
import number1 from '../assets/number1.png';
import personal from '../info/personal';

function AboutMe() {
  const { me: { description, description2 } } = personal;
  return (
    <section>
      <div>
        <img src={number1} alt="numero 1" />
        <h2>sobre mim</h2>
      </div>
      <div>
        <p>{description}</p>
        <p></p>
        <p>{description2}</p>
      </div>
    </section>
  );
}

export default AboutMe;
