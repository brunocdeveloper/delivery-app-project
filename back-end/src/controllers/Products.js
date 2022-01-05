const Service = require('../services/Products');

const getProducts = async (_req, res) => {
  try {
    const result = await Service.getProducts();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getProducts,
};
