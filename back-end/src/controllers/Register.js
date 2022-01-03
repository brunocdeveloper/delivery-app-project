const Service = require('../services/Register');

const registerUser = async (req, res) => {
  try {
    const user = req.body;
    await Service.registerUser(user);
    res.status(201).json('Created');
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  registerUser,
};
