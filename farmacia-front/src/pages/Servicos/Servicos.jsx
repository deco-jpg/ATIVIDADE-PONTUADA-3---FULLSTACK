// src/pages/Servicos/Servicos.jsx
import React from 'react';
import './style.css'; 

function Servicos() {
  return (
    <div>
      <h2>Nossos Serviços</h2>
      
      <ul className="lista-servicos">
        <li>Aferição de pressão arterial</li>
        <li>Aplicação de injetáveis</li>
        <li>Testes rápidos (Glicemia, Covid-19, etc.)</li>
        <li>Entrega de medicamentos</li>
      </ul>
    </div>
  );
}

export default Servicos;