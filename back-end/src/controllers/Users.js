const Service = require('../services/Users');

const getUsersByRole = async (req, res) => {
  try {
    const { role } = req.body;
    const foundUsers = await Service.getUsersByRole(role);
    return res.status(200).json(foundUsers);
  } catch (e) {
    console.error(e);
    return res.status(400).json({ message: e.message });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const { data: { id, role } } = req.userInfo;
    const foundOrders = await Service.getUserOrders(id, role);
    return res.status(200).json(foundOrders);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getUsersByRole,
  getUserOrders,
};