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

const changeOrderStatus = async (id, status) => {
  const order = await sales.findByPk(id);
  if (!order) throw new Error('Order not found');
  if (order.status === 'Entregue') throw new Error('Order already delivered');
  await order.update({ status });
  return { status };
};

module.exports = {
  createSale,
  getOrderDetailsById,
  changeOrderStatus,
};
