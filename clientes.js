const { DataTypes } = require('sequelize');
const sequelize = require('./conexion');

    const cliente = sequelize.define('Cliente', {
      id: {type: DataTypes.INTEGER, primaryKey: true,},
      nombre: { type: DataTypes.STRING},
      correo: { type: DataTypes.STRING},
      telefono: { type: DataTypes.STRING},
      direccion:{ type: DataTypes.STRING},
    }, {
        timestamps: false
    })

module.exports = cliente;