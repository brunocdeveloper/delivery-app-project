const { products } = require('../database/models');

const getProducts = async () => {
  const result = await products.findAll();
  return result;
};

module.exports = {
  getProducts,
};
