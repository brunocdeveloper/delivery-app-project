const { sales } = require('../database/models');

const createSale = async (sale, id) => {
  const createdSale = await sales.create({ ...sale, user_id: id });
  if (!createdSale) throw new Error('Server unavailable. Please try again later.');
  return createdSale.id;
};

module.exports = {
  createSale,
};