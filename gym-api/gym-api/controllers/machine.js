'use strict'
const Machine = require('../models/machine');

const controller = {
    
    
    save: async (req, res) => {
        const params = req.body;
        const machine = new Machine();
        machine.nombre = params.nombre;
        machine.uso = params.uso;
        machine.musculo = params.musculo;
        machine.imagen = params.imagen; 
        machine.calificacion = 0;
        machine.votos = 0;

        try {
            const machineStored = await machine.save();
            return res.status(200).send({ status: 'success', machine: machineStored });
        } catch (error) {
            return res.status(500).send({ status: 'error', message: 'Error al guardar' });
        }
    }, 

    
    getMachines: async (req, res) => {
        try {
            const machines = await Machine.find({}).sort('-_id');
            return res.status(200).send({ status: 'success', machines });
        } catch (error) {
            return res.status(500).send({ status: 'error', message: 'Error al extraer datos' });
        }
    }, 

    
    addComment: async (req, res) => {
        const machineId = req.params.id;
        const comment = { autor: req.body.autor, texto: req.body.texto };
        try {
            const updated = await Machine.findByIdAndUpdate(
                machineId,
                { $push: { comentarios: comment } },
                { new: true }
            );
            return res.status(200).send({ status: 'success', machine: updated });
        } catch (e) { 
            return res.status(500).send({ status: 'error', message: 'Error al comentar' }); 
        }
    }, 

    
    rate: async (req, res) => {
        const machineId = req.params.id;
        const nuevaCalificacion = parseInt(req.body.rating);
        
        try {
            const machine = await Machine.findById(machineId);
            const totalVotos = (machine.votos || 0) + 1;
            const actualRating = machine.rating || 0;
            
            // Calculamos el promedio
            const promedio = ((actualRating * (totalVotos - 1)) + nuevaCalificacion) / totalVotos;
            
            const updated = await Machine.findByIdAndUpdate(machineId, {
                rating: promedio.toFixed(1),
                votos: totalVotos
            }, { new: true });
            
            return res.status(200).send({ status: 'success', machine: updated });
        } catch (e) { 
            return res.status(500).send({ status: 'error', message: 'Error al calificar' }); 
        }
    },
    delete: async (req, res) => {
        const machineId = req.params.id;
        try {
            const machineRemoved = await Machine.findOneAndDelete({ _id: machineId });
            if (!machineRemoved) {
                return res.status(404).send({ status: 'error', message: 'No se encontró la máquina' });
            }
            return res.status(200).send({ status: 'success', machine: machineRemoved });
        } catch (error) {
            return res.status(500).send({ status: 'error', message: 'Error al eliminar' });
        }
    }
}; 

module.exports = controller;