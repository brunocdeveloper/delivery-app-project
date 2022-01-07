const { sales, sales_products: salesProducts } = require('../database/models');
const { organizeProdArray } = require('../helpers');

const createSale = async (saleObj, id) => {
  const { prodArray, ...newObj } = saleObj;
  const createdSale = await sales.create({ ...newObj, userId: id });
  const prodsToInsert = await organizeProdArray(saleObj, createdSale.id);
  await salesProducts.bulkCreate(prodsToInsert);
  if (!createdSale) throw new Error('Server unavailable. Please try again later.');
  return createdSale.id;
};

module.exports = {
  createSale,
};