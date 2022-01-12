const { sales, salesProducts, products, users } = require('../database/models');
const { organizeProdArray } = require('../helpers');

const createSale = async (saleObj, id) => {
  const { prodArray, ...newObj } = saleObj;
  const createdSale = await sales.create({ ...newObj, userId: id });
  if (!createdSale) throw new Error('Server unavailable. Please try again later.');
  const prodsToInsert = await organizeProdArray(saleObj, createdSale.id);
  await salesProducts.bulkCreate(prodsToInsert);
  return { saleId: createdSale.id };
};

const getOrderDetailsById = async (id) => {
  const orderDetails = await sales.findByPk(id, {
    include: [
      { model: products, as: 'products', attributes: {} },
      { model: users, as: 'seller', attributes: {} },
    ],
  });

  return orderDetails;
};

module.exports = {
  createSale,
  getOrderDetailsById,
};
