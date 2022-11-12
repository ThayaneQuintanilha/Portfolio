import React from 'react';
import personal from '../info/personal';
import perfil from '../assets/perfil.jpg'
import setaVerde from '../assets/setaVerde.png'

function FirstPage() {
  const { me: { fullName }, profession } = personal;
  return (
    <section>
      <div>
        <h1>Seja Bem-Vindo(a)</h1>
        <h1>AO<span>MEU</span>PORTFÓLIO</h1>
      </div>
      <div>
        <img src={perfil} alt={fullName} />
        <h1>{fullName}</h1>
        <h1>{profession}</h1>
      </div>
      <a><img src={setaVerde} alt="setaVerde" /></a>
    </section>
  );
}

export default FirstPage;
