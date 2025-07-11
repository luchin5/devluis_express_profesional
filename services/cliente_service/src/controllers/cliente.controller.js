const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async (req, res) => {
  const clientes = await prisma.cliente.findMany();
  res.json(clientes);
};

exports.create = async (req, res) => {
  const { nombre, email, telefono } = req.body;
  try {
    const nuevo = await prisma.cliente.create({
      data: { nombre, email, telefono }
    });
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const cliente = await prisma.cliente.findUnique({
    where: { id: parseInt(id) }
  });
  if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
  res.json(cliente);
};
