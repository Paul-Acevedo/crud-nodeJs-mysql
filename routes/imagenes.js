const express = require('express');
const app = express.Router();
const controllers = require('../controllers/imgenesController');

app.get('/imagenes', controllers.obtenerImagenes);
app.get('/imagenes/:id', controllers.obtenerImagene);
app.put('/imagenes/:id', controllers.editarImagene);
app.post('/imagenes', controllers.crearImagen);
module.exports = app;