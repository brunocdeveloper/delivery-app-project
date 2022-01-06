const { sales, sales_products: salesProducts } = require('../database/models');
const { organizeProdArray } = require('../helpers');

// sale = {
//   seller_id,
//   delivery_number,
//   delivery_address,
//   total_price,
//   prodArray,
// }

const createSale = async (saleObj, id) => {
  const { prodArray, ...newObj } = saleObj;
  const createdSale = await sales.create({ ...newObj, user_id: id });
  const prodsToInsert = await organizeProdArray(saleObj, createdSale.id);
  await salesProducts.bulkCreate(prodsToInsert);
  if (!createdSale) throw new Error('Server unavailable. Please try again later.');
  return createdSale.id;
};

module.exports = {
  createSale,
};