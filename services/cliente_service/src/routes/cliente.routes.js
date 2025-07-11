const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

router.get('/', clienteController.getAll);
router.post('/', clienteController.create);
router.get('/:id', clienteController.getById);

module.exports = router;
