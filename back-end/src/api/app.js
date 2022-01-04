const express = require('express');
const cors = require('cors');
const routes = require('../routes/index');

const app = express();

const corsOptions = {
  origin: '*', 
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/register', routes.register);

app.use('/login', routes.login);

module.exports = app;
