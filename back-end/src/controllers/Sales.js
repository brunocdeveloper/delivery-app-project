const Service = require('../services/Sales');

const createSale = async (req, res) => {
  try {
    const sale = req.body;
    const { data: { id } } = req.userInfo;
    const { saleId } = await Service.createSale(sale, id);
    return res.status(201).json({ message: 'Created', saleId });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
};

const getOrderDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderDetails = await Service.getOrderDetailsById(id);
    return res.status(200).json(orderDetails);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
};

const changeOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await Service.changeOrderStatus(id, status);
    return res.status(200).json(order);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  createSale,
  getOrderDetailsById,
  changeOrderStatus,
};
