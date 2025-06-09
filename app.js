const express = require('express');
const bodyParser = require('body-parser');
const clientes = require('./modelos/clientes');
const proveedores = require('./modelos/proveedores');
const articulos = require('./modelos/articulos');
const empleados = require('./modelos/empleados');
const sequelize = require('./conexion'); // Conexión a la base de datos
const puerto = 3000;

const app = express();
app.use(bodyParser.json());

sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
});

app.listen(puerto, () => {
    console.log(`Servicio iniciado`);
});

/**
 * CRUD para CLIENTES
 */

// Crear un nuevo cliente
app.post('/clientes', async (req, res) => {
    const { nombre, correo, telefono, direccion } = req.body;
    const data = await clientes.create({
        nombre, correo, telefono, direccion 
    });
    res.send(data);
});

// Obtener todos los clientes
app.get('/clientes', async (req, res) => {
    const data = await clientes.findAll();
    res.send(data);
});

// Actualizar un cliente por ID
app.put('/clientes/:id', async (req, res) => {
    const { nombre, correo, telefono, direccion } = req.body;
    const { id } = req.params;
    const data = contactos.update({
        nombre, correo, telefono, direccion
    }, {
        where: {
            id
        }
    })
    res.send(data);
});

// Eliminar un cliente por ID
app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
    const data = await clientes.destroy({ 
        where: {
             id 
            } 
    });
    res.send(data);
});

/**
 * CRUD para PROVEEDORES
 */

// Crear un nuevo proveedor
app.post('/proveedores', async (req, res) => {
    const { nombre, direccion } = req.body;
    const data = await contactos.create({
        nombre, direccion  
    });
    res.send(data);
});

// Obtener todos los proveedores
app.get('/proveedores', async (req, res) => {
    const data = await proveedores.findAll();
    res.send(data);
});

// Actualizar un proveedor por ID
app.put('/proveedores/:id', async (req, res) => {
    const { nombre, direccion } = req.body;
    const { id } = req.params;
    const data = contactos.update({
        nombre, direccion
    }, {
        where: {
            id
        }
    })
    res.send(data);
});

// Eliminar un proveedor por ID
app.delete('/proveedores/:id', async (req, res) => {
    const { id } = req.params;
    const data = await proveedores.destroy({ 
        where: {
             id 
            } 
        });
    res.send(data);
});

/**
 * CRUD para ARTICULOS
 */

// Crear un nuevo artículo
app.post('/articulos', async (req, res) => {
    const { descripcion, precio, existencia } = req.body;
    const data = await contactos.create({
        descripcion, precio, existencia  
    });
    res.send(data);
});

// Obtener todos los artículos
app.get('/articulos', async (req, res) => {
    const data = await articulos.findAll();
    res.send(data);
});

// Actualizar un artículo por ID
app.put('/articulos/:id', async (req, res) => {
    const { descripcion, precio, existencia } = req.body;
    const { id } = req.params;
    const data = contactos.update({
        descripcion, precio, existencia
    }, {
        where: {
            id
        }
    })
    res.send(data);
});

// Eliminar un artículo por ID
app.delete('/articulos/:id', async (req, res) => {
    const { id } = req.params;
    const data = await articulos.destroy({ 
        where: {
             id
        }
     });
    res.send(data);
});

/**
 * CRUD para EMPLEADOS
 */

// Crear un nuevo empleado
app.post('/empleados', async (req, res) => {
    const { nombre, telefono, fecha_nacimiento, sueldo } = req.body;
    const data = await contactos.create({
        nombre, telefono, fecha_nacimiento, sueldo   
    });
    res.send(data);
});

// Obtener todos los empleados
app.get('/empleados', async (req, res) => {
    const data = await empleados.findAll();
    res.send(data);
});

// Actualizar un empleado por ID
app.put('/empleados/:id', async (req, res) => {
    const { nombre, telefono, fecha_nacimiento, sueldo } = req.body;
    const { id } = req.params;
    const data = contactos.update({
        nombre, telefono, fecha_nacimiento, sueldo
    }, {
        where: {
            id
        }
    })
    res.send(data);
});

// Eliminar un empleado por su ID
app.delete('/empleados/:id', async (req, res) => {
    const { id } = req.params;
    const data = await empleados.destroy({ 
        where: {
             id 
        }
     });
    res.send(data);
});