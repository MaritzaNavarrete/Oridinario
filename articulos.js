const { DataTypes } = require('sequelize');
const sequelize = require('./conexion');

const articulos = sequelize.define('Articulos', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    descripcion: { type: DataTypes.STRING },
    precio: { type: DataTypes.FLOAT },
    existencia: { type: DataTypes.INTEGER}
}, {
    timestamps: false
})

module.exports = articulos;