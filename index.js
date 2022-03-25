const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const routerApi = require('./src/routes');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('using the port ', port));

mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log('Success connect with mongoDB'))
  .catch((error) => console.log(error));
/* Respuestas en formato JSON */
app.use(express.json());
routerApi(app);
