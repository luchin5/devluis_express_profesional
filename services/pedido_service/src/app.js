const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
dotenv.config();

const pedidoRoutes = require('./routes/pedido.routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use('/pedidos',pedidoRoutes)

module.exports = app