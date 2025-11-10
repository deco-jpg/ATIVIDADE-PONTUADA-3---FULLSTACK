// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Servicos from './pages/Servicos/Servicos';
import SobreNos from './pages/SobreNos/SobreNos';
import FaleConosco from './pages/FaleConosco/FaleConosco';

function App() {
  return (
    <div>
      <Navbar />


      <div className="page-container"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;