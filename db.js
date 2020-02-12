const { Sequelize } = require('sequelize');

const databaseConfig = {
  name: 'apipouet',
  user: 'sandro',
  password: 'sandro'
};

const db = new Sequelize(
  databaseConfig.name,
  databaseConfig.user,
  databaseConfig.password,
  { dialect: 'postgres' }
);

module.exports = db;
