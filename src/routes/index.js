const express = require('express');
const clientRouter = require('./client.routes');

/* Router() permite acceder a: POST, PUT, DELETE, GET, GET{:id} */
function routerApi(app) {
  const router = express.Router();
  /* Endpoint: http://localhost:3000/api/v1 */
  app.use('/api/v1', router);
  router.use('/clients', clientRouter);
}

module.exports = routerApi;