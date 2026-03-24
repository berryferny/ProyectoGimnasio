'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3900;


const machine_routes = require('./routes/machine');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors()); 


app.use('/api', machine_routes);


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/gym_db')
    .then(() => {
        console.log('Conexión a gym_db exitosa 🏋️‍♀️');
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:' + port);
        });
    });