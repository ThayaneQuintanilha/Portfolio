import React from 'react';
import number4 from '../assets/number4.png';
import star from '../assets/star.png';
import Gmail from '../assets/Gmail logo.png';
import Github from '../assets/Github logo.png';
import Linkedin from '../assets/Linkedin logo.png';
import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-rectangle"></div>
      <div className="contact-img">
        <img src={number4} alt="numero 4" />
          <h2>contato</h2>
          <h3>Estamos a um click de</h3>
        <div>
          <img src={star} alt="estrela" />
          <h3>distância</h3>
          <img src={star} alt="estrela" />
        </div>
        <div>
          <a target="_blank" href="mailto:thayaniquintanilha2@gmail.com"><img src={Gmail} alt="estrela" /></a>
          <a target="_blank" href="https://github.com/ThayaneQuintanilha"><img src={Github} alt="estrela" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/thayanequintanilha"><img src={Linkedin} alt="estrela" /></a>
        </div>
      </div>
      <div className="contact-rectangle"></div>
    </section>
  );
}

export default Contact;
