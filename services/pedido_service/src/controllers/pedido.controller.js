const { PrismaClient } = require("@prisma/client");
const { default: axios } = require("axios");
const prisma = new PrismaClient();

exports.getAll = async (req, res) => {
  const pedidos = await prisma.pedido.findMany();
  res.json(pedidos);
};

exports.create = async (req, res) => {
  try {
    const { clienteId, total } = req.body;

    const clienteResponse = await axios.get(
      `http://localhost:3003/clientes/${clienteId}`
    );
    if (!clienteResponse.data) {
      return res.status(400).json({ error: "Cliente no existe" });
    }

    const nuevo = await prisma.pedido.create({
      data: { clienteId, total },
    });
    res.status(201).json(nuevo);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res
        .status(404)
        .json({ error: "Cliente no encontrado (desde servicio)" });
    }

    res.status(400).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await prisma.pedido.findUnique({
      where: { id: parseInt(id) },
    });
    if (!pedido) return res.status(404).json({ error: "Pedido no encontrado" });
    res.json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
