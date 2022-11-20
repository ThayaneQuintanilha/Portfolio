import React from 'react';
import personal from '../info/personal';
import perfil from '../assets/perfil.jpg'
import setaVerde from '../assets/setaVerde.png'
import '../styles/firstpage.css'

function FirstPage() {
  const { me: { fullName }, profession } = personal;
  return (
    <section className="fistpage-section">
      <div>
        <h1 className="fist-title-green">Seja Bem-Vindo(a)</h1>
        <h1 className="first-title-pink">AO<span>MEU</span>PORTFÓLIO</h1>
      </div>
      <div className="second-div">
        <img src={perfil} alt={fullName} />
        <h1 className="second-title-name">{fullName}</h1>
        <h1 className="second-title-profession">{profession}</h1>
      </div>
      <a href="#about-id"><img src={setaVerde} alt="setaVerde" /></a>
    </section>
  );
}

export default FirstPage;
