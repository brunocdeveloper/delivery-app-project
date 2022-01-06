const { sales } = require('../database/models');

// const moment = require('moment');
// const localDate = new Date();
// console.log(moment.utc(localDate).format());

// const {
//   total_price,
//   delivery_address,
//   delivery_number,
//   user_id,
//   seller_id,
//   sale_date: moment.utc(localDate).format(),
//   status,
// } = sale;

const createSale = async (sale, id) => {
  const createdSale = await sales.create({ ...sale, user_id: id, seller_id: id });
  if (!createdSale) throw new Error('Server unavailable. Please try again later.');
  return createdSale.id;
};

module.exports = {
  createSale,
};