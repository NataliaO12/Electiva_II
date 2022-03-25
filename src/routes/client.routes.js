const express = require('express');
const client_route = express.Router();
const clientSchema = require('../models/clientModel');

/* Ruta para crear un cliente
Endpoint: http://localhost:3000/api/v1/clients/client */
client_route.post('/client', (req, res) => {
  const client = clientSchema(req.body);
  client
    .save()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para listar un cliente
Endpoint: http://localhost:3000/api/v1/clients */
client_route.get('/', (req, res) => {
  clientSchema
    .find()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para consultar un cliente
Endpoint: http://localhost:3000/api/v1/clients/:clientId */
client_route.get('/:clientId', (req, res) => {
  const { clientId } = req.params;
  clientSchema
    .findById(clientId)
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para editar un cliente especifico
Endpoint: http://localhost:3000/api/v1/clients/:clientId */
client_route.put('/:clientId', (req, res) => {
  const { clientId } = req.params;
  const clientObject = req.body;
  clientSchema
    .updateOne({ _id: clientId }, { $set: clientObject })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

/* Ruta para eliminar un cliente especifico
Endpoint: http://localhost:3000/api/v1/clients/:clientId */
client_route.delete('/:clientId', (req, res) => {
  const { clientId } = req.params;
  clientSchema
    .remove({ _id: clientId })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

module.exports = client_route;