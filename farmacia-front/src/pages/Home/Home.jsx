import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Home() {
  return (
    <div>
      <h1>Bem-vindo à Farmácia Central</h1>
      <p>Sua saúde em primeiro lugar.</p>
      <Link to="/servicos"><button>Nossos Serviços</button></Link>
      <Link to="/fale-conosco"><button>Fale Conosco</button></Link>
    </div>
  );
}

export default Home;