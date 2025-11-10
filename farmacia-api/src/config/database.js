import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('farmacia_db', 'root', 'sua_senha_aqui', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log
});

export default sequelize;