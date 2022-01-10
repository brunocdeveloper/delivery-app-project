const { sales, salesProducts, products, users } = require('../database/models');
const { organizeProdArray } = require('../helpers');
// const moment = require('moment');

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
      { model: products, as: 'product', attributes: {} },
      { model: users, as: 'seller', attributes: {} },
    ],
  });

  return orderDetails;
  // const newSaleDate = moment(orderDetails.saleDate).format('DD/MM/YYYY');

  // return {
  //   ...orderDetails,
  //   saleDate: newSaleDate,
  // };
};

module.exports = {
  createSale,
  getOrderDetailsById,
};
