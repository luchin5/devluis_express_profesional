const express = require('express')
const router = express.Router()
const pedidoController = require('../controllers/pedido.controller')

router.get('/',pedidoController.getAll)
router.post('/',pedidoController.create)
router.get('/:id',pedidoController.getById)

module.exports = router