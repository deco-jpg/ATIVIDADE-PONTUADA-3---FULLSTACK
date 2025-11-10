const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('db_fullstack2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Contato = sequelize.define('Contato', {
    nome: {
        type: DataTypes.STRING, 
        allowNull: false, 
    },
    email: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: false 
    },
    telefone: {
        type: DataTypes.STRING, 
        allowNull: true, 
    },
    mensagem: {
        type: DataTypes.TEXT, 
        allowNull: false, 
    }
});

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('API Fale Conosco/Clientes está funcionando!');
});

app.get('/api/contatos', async (req, res) => {
    try {
        const contatos = await Contato.findAll();
        res.json(contatos);
    } catch (error) {
        console.error('Erro ao buscar contatos:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
});

app.post('/api/contatos', async (req, res) => {
    try {
        const { nome, email, telefone, mensagem } = req.body;

        if (!nome || !email || !mensagem) {
            return res.status(400).json({ mensagem: 'Nome, E-mail e Mensagem são campos obrigatórios.' });
        }

        const novoContato = await Contato.create({ nome, email, telefone, mensagem });
        
        res.status(201).json(novoContato); 
    } catch (error) {
        console.error('Erro ao salvar novo contato:', error);
        
        res.status(400).json({ mensagem: 'Falha ao processar o contato.', detalhes: error.message });
    }
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
        console.log('Conectado ao banco de dados MySQL e tabela Contatos sincronizada.');
    });
});