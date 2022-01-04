const express = require('express');
const routes = require('../routes/index');
const cors = require('cors');
const app = express();

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use('/register', routes.register);

module.exports = app;
