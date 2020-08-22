const connection = require('../config/config');
const validator = require('mysql-validator');
exports.crearImagen = async(req, res) => {
    let body = req.body;


    if (body.nombre == undefined || body.nombre == '' || body.imagen == undefined || body.imagen == '') {
        return res.json({
            'ok': false,
            'mensaje': 'Todos los datos son necesarios'
        })
    }

    let query = `INSERT INTO imagenes set ?`;

    let post = {
        imagen: `${body.imagen}`,
        nombre: `${body.nombre}`
    }

    await connection.query(query, post, (error, results, fields) => {
        if (error) throw error;
        res.json({
            'ok': 'true',
            results
        });
    });
    connection.end();



}



exports.obtenerImagenes = async(req, res) => {

    await connection.query('select * from imagenes', function(error, results, fields) {
        if (error) throw error;
        res.json({ 'ok': results });
    });

    connection.end();
}


exports.obtenerImagene = async(req, res) => {

    let id = req.params.id;
    let query = `SELECT * FROM imagenes where cod_imagen=${id}`;
    await connection.query(query, function(error, results, fields) {
        if (error) throw error;
        res.json({
            'ok': true,
            results
        });
    });

    connection.end();
}

exports.eliminarImagene = async(req, res) => {

    let id = req.params.id;
    let query = `delete from imagenes  where cod_imagen=${id}`;
    await connection.query(query, function(error, results, fields) {
        if (error) throw error;
        res.json({
            'ok': true,
            results
        });
    });

    connection.end();
}

exports.editarImagene = async(req, res) => {


    let id = req.params.id;
    let body = req.body;
    let query = `UPDATE imagenes SET imagen = ${body.imagen}, nombre = ${body.nombre}  where cod_imagen=${id}`;
    await connection.query(query, function(error, results, fields) {
        if (error) throw error;
        res.json({
            'ok': true,
            results
        });
    });

    connection.end();

}