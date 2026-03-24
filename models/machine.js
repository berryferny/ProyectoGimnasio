const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MachineSchema = Schema({
    nombre: String,
    uso: String,
    musculo: String,
    imagen: String,
    rating: { type: Number, default: 0 },
    votos: { type: Number, default: 0 }, // Para sacar el promedio
    comentarios: [{
        autor: String,
        texto: String,
        fecha: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Machine', MachineSchema);