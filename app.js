import express from 'express';
import fs from "fs";
import bodyParser from "body-parser";
// Importar dependencias

const app = express();
app.use(bodyParser.json());

//Ruta para obtener los alumnos
app.get("/alumno", (req, res) => {
    const data = readData();
    res.json(data.lumno); 
});

//Funcion para leer
const readData = () => {
    try{
        const data = fs.readFileSync("./db.json");
        return JSON.parse(data);
    }catch (error){
        console.log(error);
    }
};

//Funcion escribir
const writeData = (data) => {
    try{
        fs.writeFileSync("./db.json", JSON.stringify(data));
    } catch (error){
      console.log(error);
    } 
};


//Insertar nuevo alumno
app.post("/alumno", (req, res) => {
    const data = readData();
    const body = req.body;
    const newAlumno = {
    ...body,
    };
    data.alumno.push(newAlumno);
    writeData(data);
    res.json(newAlumno);
   });

   //Servidor
   app.listen(3000, () => {
    console.log('Server funcionando en el puerto 3000');
   });