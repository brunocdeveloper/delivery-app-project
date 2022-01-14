const express = require('express');
const path = require('path');
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

app.use('/images', express.static(path.join(__dirname, '../../../assets/images/public')));

app.use('/login', routes.login);

app.use('/register', routes.register);

app.use('/customer', routes.customer);

app.use('/seller', routes.seller);

app.use('/admin', routes.admin);

app.use('/orders', routes.order);

module.exports = app;
