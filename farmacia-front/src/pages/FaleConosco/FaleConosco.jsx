// src/pages/FaleConosco.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function FaleConosco() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });


  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); 


    setLoading(true);
    setErro(null);
    setSucesso(null);


    if (!formData.nome || !formData.email || !formData.telefone || !formData.mensagem) {
      setErro('Todos os campos são obrigatórios.');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErro('Por favor, insira um e-mail válido.');
      setLoading(false);
      return;
    }
 
    if (formData.telefone.length < 10) {
      setErro('Telefone deve ter no mínimo 10 dígitos (com DDD).');
      setLoading(false);
      return;
    }
 

    try {
    
      const response = await axios.post(
        'http://localhost:3000/api/contatos', 
        formData
      );

      
      setSucesso('Mensagem enviada com sucesso! Obrigado.');
      setLoading(false);
      
    
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });

    } catch (apiError) {
      
      console.error('Erro da API:', apiError);
      setErro('Falha ao enviar a mensagem. Tente novamente mais tarde.');
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Fale Conosco</h2>
      <p>Envie-nos sua dúvida, sugestão ou reclamação.</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', gap: '10px' }}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone (com DDD):</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows="5"
            style={{ width: '100%' }}
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}
        
      </form>
    </div>
  );
}

export default FaleConosco;