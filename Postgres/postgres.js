const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    user: 'postgres',
    host: 'localhost',
    database: 'nodejs-db',
    password: 'postgres',
    port: 5432, // default PostgreSQL port
});

module.exports = postgres;