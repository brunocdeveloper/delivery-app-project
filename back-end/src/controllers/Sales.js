const Service = require('../services/Sales');

const createSale = async (req, res) => {
  try {
    const sale = req.body;
    const { data: { id } } = req.userInfo;
    const createdSaleID = await Service.createSale(sale, id);
    return res.status(201).json(createdSaleID);
    // return res.status(201).json('Created');
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
}

module.exports = {
  createSale,
};