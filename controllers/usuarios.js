const { request } = require('express');
const { response } = require('express');
const res = require('express/lib/response');


const getUsuarios = ( req = request, res = response ) => {

    const { q, nombre = no_nombre, id = 1, apikey } = req.query;

    res.json({
        msn: 'Get API - Controlador',
        q,
        nombre,
        id,
        apikey
    });
}

const updateUsuario = (req, res = response ) => {

    const {id} = req.params;

    res.json({
       msn: 'Put API - Controlador',
       id
    });
}

const createUsuario = ( req, res = response ) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msn: 'Post API - Controlador',
        nombre,
        edad
    });
}

const deleteUsuario = ( req, res = response ) => {
    res.json({
        msn: 'Delete API - Controlador'
    });
}


module.exports = {
    getUsuarios,
    updateUsuario,
    createUsuario,
    deleteUsuario
}