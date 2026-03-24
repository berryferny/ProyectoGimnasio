'use strict'
const express = require('express');
const MachineController = require('../controllers/machine');
const router = express.Router();

router.post('/save', MachineController.save);
router.get('/machines', MachineController.getMachines);
router.delete('/delete/:id', MachineController.delete);

module.exports = router;