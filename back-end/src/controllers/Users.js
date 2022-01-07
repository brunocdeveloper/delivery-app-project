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

module.exports = {
  getUsersByRole,
};