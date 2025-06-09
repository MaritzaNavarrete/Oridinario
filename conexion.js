const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './crud.sqlite' 
});

module.exports = sequelize;