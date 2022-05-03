const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middelwares
        this.middelwares();

        // Rutas de la aplicación
        this.routes();
    }

    middelwares() {
        // CORS
        this.app.use( cors());

        // Lectura y parseo de datos
        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public'));
    }

    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'))

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('El servidor esta corriendo en el puerto', this.port)
        });
    }

}

module.exports = Server;