
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Contato = sequelize.define('Contato', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, 
    },
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mensagem: {
    type: DataTypes.TEXT, 
    allowNull: false,
  },
}, {

  timestamps: true, 
});

export default Contato;