import React from 'react';
import '../styles/firstpage.css'

function Navegation() {
  return (
    <nav className="navegation">
      <ul>
        <a href="#beginning"><li>INÍCIO</li></a>
        <a href="#about-id"><li>SOBRE</li></a>
        <a href="#project"><li>PROJETOS</li></a>
        <a href="#contact"><li>CONTATO</li></a>
      </ul>
    </nav>
  );
}

export default Navegation;
