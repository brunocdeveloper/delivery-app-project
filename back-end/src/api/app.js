const express = require('express');
const routes = require('../routes/index');

const app = express();
app.use(express.json());

app.use('/register', routes.register);

module.exports = app;
