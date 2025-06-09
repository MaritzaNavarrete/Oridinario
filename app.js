// Importa las dependencias necesarias
const express = require('express')
const bodyParser = require('body-parser')
const monedas = require('./monedas') // Modelo de monedas de la base de datos
const { Op } = require('sequelize') // Operadores de Sequelize para consultas avanzadas

const app = express()
const puerto = 3000
const sequelize = require('./conexion') // Conexión a la base de datos
app.use(bodyParser.json())

// Sincroniza modelos con la base de datos
sequelize.sync()
    .then(() => {
        app.listen(puerto, () => {
            console.log('servicio iniciado');
        });
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
    });


/**
 * Ruta para crear un nuevo registro de moneda.
 * Espera un objeto JSON con los campos: origen, destino y valor.
 * Devuelve el objeto creado o un error si faltan datos.
 */
app.post('/monedas/', async (req, res) => {
    const { origen, destino, valor } = req.body;

    // Validar que se hayan proporcionado todos los campos necesarios
    // Si falta alguno, devuelve un error 400
    if (!origen || !destino || !valor) {
        return res.status(400).send({ error: 'Error, falta de datos' });
    }

    // Crea el nuevo registro en la base de datos
    const nuevaMoneda = await monedas.create({ origen, destino, valor });
    res.status(201).send(nuevaMoneda);
});

/**
 * Ruta para actualizar un registro de moneda existente por ID.
 * Permite modificar origen, destino y valor.
 * Devuelve el objeto actualizado o un error si no se encuentra.
 */
app.put('/monedas/:id', async (req, res) => {
    const { id } = req.params;
    const { origen, destino, valor } = req.body;

    // Busca la moneda por su ID
    const moneda = await monedas.findByPk(id);
    if (!moneda) {
        return res.status(404).send({ error: 'Moneda no encontrada' });
    }

    // Actualiza solo los campos enviados en la solicitud
    if (origen) moneda.origen = origen;
    if (destino) moneda.destino = destino;
    if (valor) moneda.valor = valor;

    // Guarda los cambios en la base de datos
    await moneda.save();
    res.send(moneda);
});