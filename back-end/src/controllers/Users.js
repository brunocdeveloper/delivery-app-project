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

const getUsers = async (req, res) => {
  try {
    const users = await Service.getUsers();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    await Service.deleteUser(id);
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getUsersByRole,
  getUserOrders,
  getUsers,
  deleteUser,
};