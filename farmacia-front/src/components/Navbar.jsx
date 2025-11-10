// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  background: '#f4f4f4',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-around',
  fontWeight: 'bold',
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/servicos">Serviços</Link>
      <Link to="/sobre-nos">Sobre Nós</Link>
      <Link to="/fale-conosco">Fale Conosco</Link>
    </nav>
  );
}

export default Navbar;