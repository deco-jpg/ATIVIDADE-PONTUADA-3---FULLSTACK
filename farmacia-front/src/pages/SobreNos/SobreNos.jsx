// src/pages/SobreNos/SobreNos.jsx
import React from 'react';
import './style.css'; 

function SobreNos() {
  return (
    <div>
      <h2>Sobre Nós</h2>
      
      <p className="info-p">
        <strong>Missão:</strong> Cuidar da sua saúde com excelência.
      </p>
      <p className="info-p">
        <strong>História:</strong> Estamos há 20 anos no bairro.
      </p>
      <p className="info-p">
        <strong>Horário de Funcionamento:</strong> Seg-Sex 08h às 22h | Sab 08h às 20h
      </p>
    </div>
  );
}

export default SobreNos;